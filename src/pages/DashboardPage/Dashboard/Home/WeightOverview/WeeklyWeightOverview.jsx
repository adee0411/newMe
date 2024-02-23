import { Typography, CardContent, Stack, Select, Option } from "@mui/joy";
import WeekPagination from "../../../../../components/WeekPagination";
import { useSelector, useDispatch } from "react-redux";
import { useMemo } from "react";

import WeekStats from "./WeekStats";

import {
  setCurrentWeek,
  increaseCurrentWeek,
  decreaseCurrentWeek,
} from "../../../../../store/weightTrackerSlice";

import { IoScaleOutline } from "react-icons/io5";

const WeeklyCalorieOverview = () => {
  const dispatch = useDispatch();
  const { currentWeek } = useSelector((state) => state.weightTracker.UI);

  const { weightData } = useSelector((state) => state.weightTracker);

  const numOfWeeks = Math.ceil(weightData.length / 7);
  const start = (currentWeek - 1) * 7;
  const end = currentWeek * 7;

  const weightDataWithChanges = useMemo(() => {
    return weightData.map((data, index) => {
      let weightChange;
      if (index === 0) {
        weightChange = 0;
      } else {
        const lastWeightDataIndex = weightData
          .slice(0, index)
          .findLastIndex((el) => el.data.weight > 0);
        weightChange =
          data.data.weight === 0
            ? "-"
            : data.data.weight - weightData[lastWeightDataIndex].data.weight;
      }

      return { ...data, weightChange };
    });
  }, [weightData]);

  console.log(weightDataWithChanges);

  const weightDataSlice = weightDataWithChanges.slice(start, end);

  const dateCollection = weightDataWithChanges.map((data) => data.data.date);

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
            <IoScaleOutline />
          </Typography>
          <Typography color="neutral" level="title-sm">
            Heti súly-összesítő
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
        <WeekStats
          currentWeek={currentWeek}
          weightDataSlice={weightDataSlice}
        />
      </CardContent>
    </>
  );
};

export default WeeklyCalorieOverview;
