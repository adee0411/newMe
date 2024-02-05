import { Typography, Grid, Divider, Sheet, Stack } from "@mui/joy";

import { formatDate } from "../../../../../utils";

import { useSelector } from "react-redux";

import NewCalorieForm from "./NewCalorieForm";
import DailyCalorieOverview from "./DailyCalorieOverview";
import WeeklyCalorieOverview from "./WeeklyCalorieOverview";

const CalorieOverview = () => {
  return (
    <>
      <Stack flex={1} spacing={2}>
        <DailyCalorieOverview />

        <WeeklyCalorieOverview />
      </Stack>
    </>
  );
};

export default CalorieOverview;
