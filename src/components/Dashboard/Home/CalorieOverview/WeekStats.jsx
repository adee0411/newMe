import { Stack, Typography, Grid } from "@mui/joy";

import { useSelector, useDispatch } from "react-redux";

import DailyProgress from "./DailyProgress";

import { formatDate } from "../../../../utils";

import { setNewBlock } from "../../../../store/calorieTrackerSlice";
import { useEffect } from "react";

const WeekStats = ({ currentWeek }) => {
  const dispatch = useDispatch();

  const todayDate = new Date();
  const formattedTodayDate = formatDate(new Date());
  const { dietStartInput } = useSelector((state) => state.profileData.dietData);
  const { calorieData } = useSelector((state) => state.calorieTracker);
  const { tdee, calculatedCalorieIntake } = useSelector(
    (state) => state.profileData.calculatedData
  );

  return (
    <Grid columns={7} container>
      {calorieData[currentWeek].map((data) => {
        return (
          <Grid lg={1}>
            <Stack>
              <Typography level="body-sm" textAlign="center">
                {data.date
                  .split("-")
                  .filter((_, i) => i !== 0)
                  .join(".") + "."}
              </Typography>
              <DailyProgress
                calorieIntake={data.calorieIntake}
                tdee={tdee}
                calculatedCalorieIntake={calculatedCalorieIntake}
                date={data.date}
                progressSize=""
                thickness={2}
                displayCaloriesLeft={false}
                key={data.date}
              />
              <Typography level="body-sm" textAlign="center">
                {data.calorieIntake}
              </Typography>
            </Stack>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default WeekStats;
