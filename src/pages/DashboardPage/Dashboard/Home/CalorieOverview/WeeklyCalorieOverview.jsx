import { Typography, CardContent, Stack } from "@mui/joy";
import WeekPagination from "../../../../../components/WeekPagination";
import WeekSelect from "../../../../../components/WeekSelect";
import WeekStats from "./WeekStats";
import { useSelector, useDispatch } from "react-redux";

import {
  setCurrentWeek,
  increaseCurrentWeek,
  decreaseCurrentWeek,
} from "../../../../../store/calorieTrackerSlice";

import { LiaBurnSolid } from "react-icons/lia";

const WeeklyCalorieOverview = () => {
  const dispatch = useDispatch();
  const { currentWeek } = useSelector((state) => state.calorieTracker.UI);

  const { calorieData } = useSelector((state) => state.calorieTracker);

  const calorieDataSlice = calorieData.slice(
    (currentWeek - 1) * 7,
    (currentWeek - 1) * 7 + 7
  );

  const selectCurrentWeek = (event, newValue) => {
    dispatch(setCurrentWeek(newValue));
  };

  return (
    <>
      <Stack
        direction="row"
        sx={{ width: "100%" }}
        justifyContent="space-between"
        alignItems="center"
        mb={4}
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

        <Stack direction="row" alignItems="center" spacing={4}>
          <WeekPagination
            onIncreaseCurrentWeek={increaseCurrentWeek}
            onDecreaseCurrentWeek={decreaseCurrentWeek}
            data={calorieData}
            currentWeek={currentWeek}
          />
          <WeekSelect
            currentWeek={currentWeek}
            onCurrentWeekSelect={selectCurrentWeek}
            data={calorieData}
          />
        </Stack>
      </Stack>
      <CardContent>
        <WeekStats currentWeek={currentWeek} calorieData={calorieDataSlice} />
      </CardContent>
    </>
  );
};

export default WeeklyCalorieOverview;
