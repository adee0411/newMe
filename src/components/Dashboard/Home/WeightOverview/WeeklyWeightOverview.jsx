import { Typography, Card, CardContent, Stack } from "@mui/joy";
import WeekPagination from "./WeekPagination";
import WeekStats from "./WeekStats";
import { useSelector } from "react-redux";

const WeeklyWeightOverview = () => {
  const { currentWeek } = useSelector((state) => state.calorieTracker.UI);
  const { calorieData } = useSelector((state) => state.calorieTracker);

  const numOfWeeks = parseInt(calorieData.length / 7) + 1;
  return (
    <Card
      variant="plain"
      sx={{
        boxShadow: "md",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography color="neutral" component="h2" level="title-lg">
          Heti kalória-összesítő
        </Typography>
        <WeekPagination currentWeek={currentWeek} numOfWeeks={numOfWeeks} />
      </Stack>
      <CardContent>
        <WeekStats currentWeek={currentWeek} />
      </CardContent>
    </Card>
  );
};

export default WeeklyWeightOverview;
