import { Stack, Typography, Grid, Button } from "@mui/joy";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import DailyProgress from "./DailyProgress";

import classes from "./WeekStats.module.scss";

import { formatDate } from "../../../../../utils";

import { setNewBlock } from "../../../../../store/calorieTrackerSlice";
import { useEffect } from "react";

const WeekStats = ({ currentWeek }) => {
  const dispatch = useDispatch();

  const todayDate = new Date();
  const formattedTodayDate = formatDate(new Date());
  const { dietStart } = useSelector((state) => state.profileData.fetchedData);
  const calorieData = [
    { date: "2024-02-10", calorieIntake: 2100 },
    { date: "2024-02-10", calorieIntake: 2400 },
    { date: "2024-02-10", calorieIntake: 3000 },
    { date: "2024-02-10", calorieIntake: 2100 },
    { date: "2024-02-10", calorieIntake: 2100 },
    { date: "2024-02-10", calorieIntake: 2100 },
    { date: "2024-02-10", calorieIntake: 2100 },
  ];

  const handleDateClick = (e) => {};

  return (
    <Grid columns={7} container width="100%">
      {calorieData.map((data) => {
        return (
          <Grid
            lg={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link to={data.date} className={classes["weekstat-link"]}>
              <Stack>
                <Typography fontSize={12} textAlign="center">
                  {data.date
                    .split("-")
                    .filter((_, i) => i !== 0)
                    .join(".") + "."}
                </Typography>
                <DailyProgress
                  calorieIntake={data.calorieIntake}
                  tdee={2800}
                  calculatedCalorieIntake={2300}
                  date={data.date}
                  progressSize="42px"
                  thickness={2}
                  displayCaloriesLeft={false}
                  key={data.date}
                  displayIntakeRatio={true}
                />
                <Typography level="body-sm" textAlign="center">
                  {data.calorieIntake}
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
