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
import WeekSelect from "../../../../../components/WeekSelect";

const WeeklyCalorieOverview = () => {
  const dispatch = useDispatch();

  const { currentWeek } = useSelector((state) => state.weightTracker.UI);

  const { weightData } = useSelector((state) => state.weightTracker);

  const weightDataWithChanges = weightData.map((weightDataObj, index) => {
    let weightChange;
    if (index === 0) {
      weightChange = 0;
    } else {
      const prevElements = weightData.slice(0, index);
      const lastWeightData = prevElements.findLast((data) => {
        return data.data.weight > 0;
      });
      if (!lastWeightData || weightDataObj.data.weight === 0) {
        weightChange = 0;
      } else {
        weightChange = weightDataObj.data.weight - lastWeightData.data.weight;
      }
    }

    return { ...weightDataObj, weightChange: weightChange };
  });

  const weightDataSlice = weightDataWithChanges.slice(
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
            data={weightData}
            currentWeek={currentWeek}
          />
          <WeekSelect
            data={weightData}
            currentWeek={currentWeek}
            onCurrentWeekSelect={selectCurrentWeek}
          />
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
