import { IconButton, Stack, Typography } from "@mui/joy";

import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import { useDispatch } from "react-redux";

import { setCurrentWeek } from "../../../../store/calorieTrackerSlice";

const WeekPagination = ({ currentWeek, numOfWeeks }) => {
  const dispatch = useDispatch();

  const increaseWeek = () => {
    dispatch(setCurrentWeek(1));
  };

  const decreaseWeek = () => {
    dispatch(setCurrentWeek(-1));
  };

  return (
    <>
      <Stack direction="row" justifyContent="flex-end" alignItems="center">
        <IconButton onClick={decreaseWeek} disabled={currentWeek === 1}>
          <RiArrowLeftSLine />
        </IconButton>
        <Typography level="body-sm" px={2}>
          {currentWeek} / {numOfWeeks} blokk
        </Typography>
        <IconButton
          onClick={increaseWeek}
          disabled={currentWeek === numOfWeeks}
        >
          <RiArrowRightSLine />
        </IconButton>
      </Stack>
    </>
  );
};

export default WeekPagination;
