import {
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  ButtonGroup,
  LinearProgress,
} from "@mui/joy";

import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useState } from "react";
import { transform } from "framer-motion";

const WeekPagination = () => {
  const { calorieData } = useSelector((state) => state.calorieTracker);
  const [currentWeek, setCurrentWeek] = useState(0);
  const numOfWeeks = calorieData.length;

  const increaseWeek = (e) => {
    setCurrentWeek(currentWeek + 1);
  };

  const decreaseWeek = (e) => {
    setCurrentWeek(currentWeek - 1);
  };

  return (
    <>
      <ButtonGroup sx={{ alignItems: "center" }}>
        <IconButton onClick={decreaseWeek} disabled={currentWeek === 0}>
          <RiArrowLeftSLine />
        </IconButton>
        <Typography>{currentWeek + 1}. hét</Typography>
        <IconButton
          onClick={increaseWeek}
          disabled={currentWeek === numOfWeeks - 1}
        >
          <RiArrowRightSLine />
        </IconButton>
      </ButtonGroup>
      <Stack>
        {calorieData[currentWeek].map((data) => {
          return (
            <Stack direction="row" spacing={2}>
              <Typography>{data.date.replaceAll("-", ".")}.</Typography>
              <LinearProgress determinate value={100} variant="plain" />
              <Typography>{data.calorieIntake} kcal</Typography>
            </Stack>
          );
        })}
      </Stack>
    </>
  );
};

export default WeekPagination;
