import { Typography, Card, CardContent, Stack, Divider } from "@mui/joy";
import WeekPagination from "../../../../../components/WeekPagination";
import WeekStats from "./WeekStats";
import { useSelector } from "react-redux";

import { setCurrentWeek } from "../../../../../store/calorieTrackerSlice";

import { LiaBurnSolid } from "react-icons/lia";

const dateCollection = [
  "2024-02-11",
  "2024-02-12",
  "2024-02-13",
  "2024-02-14",
  "2024-02-15",
  "2024-02-16",
  "2024-02-17",
  "2024-02-18",
  "2024-02-19",
  "2024-02-20",
  "2024-02-21",
  "2024-02-22",
  "2024-02-23",
  "2024-02-24",
  "2024-02-25",
  "2024-02-26",
  "2024-02-27",
  "2024-02-28",
  "2024-02-29",
  "2024-02-30",
  "2024-02-31",
  "2024-03-01",
  "2024-03-02",
  "2024-03-03",
];

const WeeklyCalorieOverview = () => {
  const { currentWeek } = useSelector((state) => state.calorieTracker.UI);

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
