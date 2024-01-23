import { Stack, Typography, Grid } from "@mui/joy";

import { useSelector } from "react-redux";

import DailyProgress from "./DailyProgress";

const WeekStats = ({ currentWeek }) => {
  const { tdee, calculatedCalorieIntake } = useSelector(
    (state) => state.profileData.calculatedData
  );
  const { calorieData } = useSelector((state) => state.calorieTracker);
  /*const avgCalorieIntake = +(
    calorieData[currentWeek].reduce((acc, el) => {
      return (acc += el.calorieIntake);
    }, 0) / calorieData[currentWeek].length
  ).toFixed(0);*/

  const weeklyPortion = (currentWeek - 1) * 7;

  const dataToRender = calorieData.slice(weeklyPortion, weeklyPortion + 7);

  return (
    <Grid columns={7} container>
      {dataToRender.map((data) => {
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
