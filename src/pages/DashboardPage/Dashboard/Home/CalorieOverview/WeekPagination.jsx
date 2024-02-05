import { IconButton, Stack, Typography } from "@mui/joy";

import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import { useDispatch } from "react-redux";

const WeekPagination = ({ currentWeek, numOfWeeks, onSetCurrentWeek }) => {
  const dispatch = useDispatch();

  const increaseWeek = () => {
    dispatch(onSetCurrentWeek(1));
  };

  const decreaseWeek = () => {
    dispatch(onSetCurrentWeek(-1));
  };

  return (
    <>
      <Stack direction="row" justifyContent="flex-end" alignItems="center">
        <IconButton onClick={decreaseWeek} disabled={currentWeek === 0}>
          <RiArrowLeftSLine />
        </IconButton>
        <Typography level="body-sm" px={2}>
          {currentWeek + 1} / {numOfWeeks} blokk
        </Typography>
        <IconButton
          onClick={increaseWeek}
          disabled={currentWeek + 1 === numOfWeeks}
        >
          <RiArrowRightSLine />
        </IconButton>
      </Stack>
    </>
  );
};

export default WeekPagination;
