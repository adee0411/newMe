import { Typography, Grid, Divider, Sheet, Stack } from "@mui/joy";

import { formatDate } from "../../../../utils";

import { useSelector } from "react-redux";

import NewCalorieForm from "./NewCalorieForm";
import DailyCalorieOverview from "./DailyCalorieOverview";
import WeeklyCalorieOverview from "./WeeklyCalorieOverview";

const CalorieOverview = () => {
  const currentDate = new Date();
  const { selectedDate } = useSelector((state) => state.profileData.dietData);

  const formattedCurrentDate =
    formatDate(currentDate).replaceAll("-", ".") + ".";

  const isSelectedDateBiggerThanCurrentDate =
    new Date(selectedDate).getTime() > currentDate.getTime();

  return (
    <>
      {/*!isSelectedDateBiggerThanCurrentDate && <NewCalorieForm />*/}
      <Stack flex={1} spacing={2}>
        <DailyCalorieOverview />

        <WeeklyCalorieOverview />
      </Stack>
    </>
  );
};    

export default CalorieOverview;
