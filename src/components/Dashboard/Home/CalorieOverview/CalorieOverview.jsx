import { Typography, Grid, Divider, Sheet } from "@mui/joy";

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
      <Typography>{formattedCurrentDate}</Typography>
      <Typography>Kalória</Typography>
      {!isSelectedDateBiggerThanCurrentDate && <NewCalorieForm />}
      <Divider />
      <Grid container spacing={4} my={1} justifyItems="stretch" direction="row">
        <Grid lg={6}>
          <DailyCalorieOverview />
        </Grid>
        <Grid lg={6}>
          <WeeklyCalorieOverview />
        </Grid>
      </Grid>
    </>
  );
};

export default CalorieOverview;
