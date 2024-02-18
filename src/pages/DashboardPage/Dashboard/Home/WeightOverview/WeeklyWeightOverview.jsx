import { Typography, Card, CardContent, Stack, Grid } from "@mui/joy";
import { Link } from "react-router-dom";
import WeekPagination from "../../../../../components/WeekPagination";
import WeekStats from "../CalorieOverview/WeekStats";
import { useSelector } from "react-redux";

import classes from "../CalorieOverview/WeekStats.module.scss";

import { setCurrentWeek } from "../../../../../store/weightTrackerSlice";

import { IoScaleOutline } from "react-icons/io5";

const weightData = [
  { date: "2024-02-10", weight: 99.6 },
  { date: "2024-02-11", weight: 99.5 },
  { date: "2024-02-12", weight: 99.4 },
  { date: "2024-02-13", weight: 99.3 },
  { date: "2024-02-14", weight: 99.2 },
  { date: "2024-02-15", weight: 99.1 },
  { date: "2024-02-16", weight: 99.0 },
];

const WeeklyWeightOverview = () => {
  const { currentWeek } = useSelector((state) => state.weightTracker.UI);

  const { calorieData } = useSelector((state) => state.calorieTracker);

  const dateCollection = calorieData.map((data) => data.date);

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography
            color="neutral"
            level="title-sm"
            display="flex"
            alignItems="center"
          >
            <IoScaleOutline />
          </Typography>
          <Typography color="neutral" level="title-sm">
            Heti súly-összesítő
          </Typography>
        </Stack>
        <WeekPagination
          currentWeek={currentWeek}
          dateCollection={dateCollection}
          onSetCurrentWeek={setCurrentWeek}
        />
      </Stack>
      <Grid columns={7} container width="100%" mt={6}>
        {weightData.map((data) => {
          return (
            <Grid
              lg={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Link to={data.date} className={classes["weekstat-link"]}>
                <Stack spacing={1}>
                  <Typography fontSize={12} textAlign="center">
                    {data.date
                      .split("-")
                      .filter((_, i) => i !== 0)
                      .join(".") + "."}
                  </Typography>

                  <Typography level="title-md" textAlign="center">
                    {data.weight} kg
                  </Typography>
                </Stack>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default WeeklyWeightOverview;
