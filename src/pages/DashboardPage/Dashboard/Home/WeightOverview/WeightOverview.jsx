import { Card, Sheet, Stack, CardContent } from "@mui/joy";

import { useSelector } from "react-redux";

import DailyWeightOverview from "./DailyWeightOverview";
import WeeklyWeightOverview from "./WeeklyWeightOverview";

import NoData from "./NoData";

const WeightOverview = () => {
  const { weightData } = useSelector((state) => state.weightTracker);

  return (
    <Card
      sx={{
        borderRadius: "lg",
        p: "none",
        overflow: "hidden",
        boxShadow: "lg",
        mb: 2,
      }}
      variant="outlined"
    >
      <CardContent>
        <Stack direction="row" sx={{ width: "100%" }}>
          <Sheet
            color="primary"
            variant="soft"
            sx={{ width: "350px", padding: "12px" }}
          >
            <DailyWeightOverview />
          </Sheet>
          <Sheet sx={{ flex: 1, padding: "4px 12px" }}>
            {weightData.length === 0 ? <NoData /> : <WeeklyWeightOverview />}
          </Sheet>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default WeightOverview;
