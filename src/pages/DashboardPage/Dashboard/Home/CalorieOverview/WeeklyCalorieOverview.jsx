import { Typography, Card, CardContent, Stack } from "@mui/joy";
import WeekPagination from "./WeekPagination";
import WeekStats from "./WeekStats";
import { useSelector } from "react-redux";

import { setCurrentWeek } from "../../../../../store/calorieTrackerSlice";

const WeeklyCalorieOverview = () => {
  const { currentWeek } = useSelector((state) => state.calorieTracker.UI);
  const { calorieData } = useSelector((state) => state.calorieTracker);

  const numOfWeeks = calorieData.length;

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography color="neutral" component="h2" level="title-lg">
          Heti kalória-összesítő
        </Typography>
        {calorieData.length === 0 ? (
          ""
        ) : (
          <WeekPagination
            currentWeek={currentWeek}
            numOfWeeks={numOfWeeks}
            onSetCurrentWeek={setCurrentWeek}
          />
        )}
      </Stack>
      <CardContent>
        {calorieData.length === 0 ? (
          "Nincs még rögzített adat"
        ) : (
          <WeekStats currentWeek={currentWeek} />
        )}
      </CardContent>
    </>
  );
};

export default WeeklyCalorieOverview;
