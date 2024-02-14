import { Typography, CardContent, Stack } from "@mui/joy";
import WeekPagination from "../../../../../components/WeekPagination";
import WeekStats from "./WeekStats";
import { useSelector } from "react-redux";

import { setCurrentWeek } from "../../../../../store/calorieTrackerSlice";

import { LiaBurnSolid } from "react-icons/lia";

const WeeklyCalorieOverview = () => {
  const { currentWeek } = useSelector((state) => state.calorieTracker.UI);

  const { calorieData } = useSelector((state) => state.calorieTracker);

  const dateCollection = calorieData.map((data) => data.date);

  return (
    <>
      <Stack
        direction="row"
        sx={{ width: "100%" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography
            color="neutral"
            level="title-sm"
            display="flex"
            alignItems="center"
          >
            <LiaBurnSolid />
          </Typography>
          <Typography color="neutral" level="title-sm">
            Heti kalória-összesítő
          </Typography>
        </Stack>

        <WeekPagination
          onSetCurrentWeek={setCurrentWeek}
          dateCollection={dateCollection}
          currentWeek={currentWeek}
        />
      </Stack>
      <CardContent sx={{ my: 6 }}>
        <WeekStats currentWeek={3} />
      </CardContent>
    </>
  );
};

export default WeeklyCalorieOverview;
