import { Stack, Typography, Grid } from "@mui/joy";

import { Link } from "react-router-dom";

import DailyProgress from "./DailyProgress";

import classes from "./WeekStats.module.scss";
import { useSelector } from "react-redux";

const WeekStats = ({ calorieData }) => {
  const { TDEE, dailyCalorieGoal } = useSelector(
    (state) => state.calorieTracker.calculatedData
  );

  const { selectedDate } = useSelector((state) => state.profileData);
  return (
    <Grid columns={7} container width="100%">
      {calorieData.map((data) => {
        return (
          <Grid
            lg={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            key={data.id}
          >
            <Link
              to={data.data.date}
              className={`${classes["weekstat-link"]} ${
                selectedDate === data.data.date
                  ? classes["weekstat-link--selected"]
                  : ""
              }`}
            >
              <Stack>
                <Typography fontSize={12} textAlign="center" color="neutral">
                  {data.data.date
                    .split("-")
                    .filter((_, i) => i !== 0)
                    .join(".") + "."}
                </Typography>
                <DailyProgress
                  calorieIntake={data.data.calorieIntake}
                  tdee={TDEE}
                  calorieGoal={dailyCalorieGoal}
                  date={data.date}
                  progressSize="42px"
                  thickness={2}
                  displayCaloriesLeft={false}
                  key={data.date}
                  displayIntakeRatio={true}
                />
                <Typography level="title-lg" textAlign="center" color="neutral">
                  {data.data.calorieIntake}
                </Typography>
              </Stack>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default WeekStats;
