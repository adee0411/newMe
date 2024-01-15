import { Typography, Card } from "@mui/joy";
import WeekPagination from "./WeekPagination";
import WeekStats from "./WeekStats";
import { useSelector } from "react-redux";

const WeeklyCalorieOverview = () => {
  const { currentWeek } = useSelector((state) => state.calorieTracker.UI);
  const { calorieData } = useSelector((state) => state.calorieTracker);

  const numOfWeeks = parseInt(calorieData.length / 7) + 1;
  return (
    <Card
      variant="plain"
      sx={{
        boxShadow: "md",
        background: "linear-gradient(to left, #eacda3, #d6ae7b)",
      }}
    >
      <Typography
        color="neutral"
        component="h2"
        level="title-lg"
        textColor="#fff"
      >
        Heti kalória-összesítő
      </Typography>
      <WeekPagination currentWeek={currentWeek} numOfWeeks={numOfWeeks} />
      <WeekStats currentWeek={currentWeek} />
    </Card>
  );
};

export default WeeklyCalorieOverview;
