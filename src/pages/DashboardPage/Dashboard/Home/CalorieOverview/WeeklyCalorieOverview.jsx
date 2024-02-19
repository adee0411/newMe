import { Typography, CardContent, Stack, Select, Option } from "@mui/joy";
import WeekPagination from "../../../../../components/WeekPagination";
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

  const numOfWeeks = Math.ceil(calorieData.length / 7);

  const start = (currentWeek - 1) * 7;
  const end = currentWeek * 7;

  const calorieDataSlice = calorieData.slice(start, end);

  const dateCollection = calorieData.map((data) => data.data.date);

  const handleCurrentWeekChange = (event, newValue) => {
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
            dateCollection={dateCollection}
            currentWeek={currentWeek}
          />
          <Select
            value={currentWeek}
            onChange={handleCurrentWeekChange}
            size="sm"
            variant="soft"
            sx={{ height: 24 }}
          >
            {new Array(numOfWeeks).fill(null, 0).map((el, i) => {
              return <Option value={i + 1}>{i + 1}</Option>;
            })}
          </Select>
        </Stack>
      </Stack>
      <CardContent>
        <WeekStats currentWeek={currentWeek} calorieData={calorieDataSlice} />
      </CardContent>
    </>
  );
};

export default WeeklyCalorieOverview;
