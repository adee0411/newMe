import { IconButton, Stack, Typography } from "@mui/joy";

import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import { useDispatch } from "react-redux";

const WeekPagination = ({
  currentWeek,
  data,
  onIncreaseCurrentWeek,
  onDecreaseCurrentWeek,
}) => {
  const dispatch = useDispatch();

  const numOfBlocks = data.length / 7;

  const blockDates = data.map((data) => {
    return data.data.date.replaceAll("-", ".") + ".";
  });

  const blockStartDate = blockDates[(currentWeek - 1) * 7];
  const blockEndDate = blockDates[(currentWeek - 1) * 7 + 6];

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
          {currentWeek} / {numOfBlocks} blokk
        </Typography>
        <IconButton
          onClick={increaseWeek}
          disabled={currentWeek === numOfBlocks}
          color="neutral"
        >
          <RiArrowRightSLine />
        </IconButton>
      </Stack>
      <Typography fontSize={12} textAlign="center" color="neutral">
        {blockStartDate} - {blockEndDate}
      </Typography>
    </Stack>
  );
};

export default WeekPagination;
