import { Sheet, Stack, Card, CardContent } from "@mui/joy";

import DailyCalorieOverview from "./DailyCalorieOverview";
import WeeklyCalorieOverview from "./WeeklyCalorieOverview";

const CalorieOverview = () => {
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
            <WeeklyCalorieOverview />
          </Sheet>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CalorieOverview;
