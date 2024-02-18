import { IconButton, Stack, Typography } from "@mui/joy";
import { endAt } from "firebase/firestore";

import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import { useDispatch } from "react-redux";

const WeekPagination = ({
  currentWeek,
  dateCollection,
  onIncreaseCurrentWeek,
  onDecreaseCurrentWeek,
}) => {
  const dispatch = useDispatch();

  const numOfWeeks = Math.ceil(dateCollection.length / 7);

  const startDate = dateCollection[(currentWeek - 1) * 7];

  const endDate =
    dateCollection.length % 7 === 0
      ? dateCollection[currentWeek * 7 - 1]
      : dateCollection[(currentWeek - 1) * 7 + (dateCollection.length % 7) - 1];
  const formattedStartDate = startDate.replaceAll("-", ".") + ".";
  const formattedEndDate = endDate.replaceAll("-", ".") + ".";

  const increaseWeek = () => {
    dispatch(onIncreaseCurrentWeek());
  };

  const decreaseWeek = () => {
    dispatch(onDecreaseCurrentWeek());
  };

  return (
    <Stack>
      <Stack direction="row" justifyContent="flex-end" alignItems="center">
        <IconButton
          onClick={decreaseWeek}
          disabled={currentWeek === 1}
          color="neutral"
        >
          <RiArrowLeftSLine />
        </IconButton>
        <Typography level="body-sm" px={2}>
          {currentWeek} / {numOfWeeks} blokk
        </Typography>
        <IconButton
          onClick={increaseWeek}
          disabled={currentWeek === numOfWeeks}
          color="neutral"
        >
          <RiArrowRightSLine />
        </IconButton>
      </Stack>
      <Typography fontSize={12} textAlign="center" color="neutral">
        {formattedStartDate} - {formattedEndDate}
      </Typography>
    </Stack>
  );
};

export default WeekPagination;
