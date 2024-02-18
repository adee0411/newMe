import { Sheet, Stack, Card, CardContent } from "@mui/joy";

import DailyCalorieOverview from "./DailyCalorieOverview";
import WeeklyCalorieOverview from "./WeeklyCalorieOverview";
import NoData from "./NoData";
import { useSelector } from "react-redux";

const CalorieOverview = () => {
  const { calorieData } = useSelector((state) => state.calorieTracker);
  return (
    <Card
      sx={{
        borderRadius: "lg",
        p: "none",
        overflow: "hidden",
        boxShadow: "lg",
        mb: 2,
      }}
      variant="plain"
    >
      <CardContent>
        <Stack direction="row" sx={{ width: "100%" }}>
          <Sheet
            color="primary"
            variant="solid"
            invertedColors
            sx={{ width: "350px", padding: "12px" }}
          >
            <DailyCalorieOverview />
          </Sheet>
          <Sheet sx={{ flex: 1, padding: "4px 12px" }}>
            {calorieData.length === 0 ? <NoData /> : <WeeklyCalorieOverview />}
          </Sheet>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CalorieOverview;
