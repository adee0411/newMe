import { Grid, Card, Typography, Stack, Sheet, CardContent } from "@mui/joy";

import { useSelector } from "react-redux";

import { IoCalendarOutline } from "react-icons/io5";
import NewWeightForm from "./NewWeightForm";

const DailyWeightOverview = () => {
  const { selectedDate } = useSelector((state) => state.profileData);

  const { weightData } = useSelector((state) => state.weightTracker);

  const dailyWeightData = weightData.find(
    (data) => data.data.date === selectedDate
  );

  return (
    <>
      <header>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            display="flex"
            alignItems="center"
            gap={1}
            level="title-sm"
          >
            <IoCalendarOutline />
            Választott dátum:
          </Typography>
          <Typography level="title-sm">
            {selectedDate
              .split("-")
              .filter((_, i) => i !== 0)
              .join(".") + "."}
          </Typography>
        </Stack>
      </header>
      <NewWeightForm />
      <Stack>
        <Typography textAlign="center" level="title-sm">
          NAPI SÚLY:
        </Typography>
        <Typography
          textAlign="center"
          fontSize={32}
          fontWeight={800}
          color="neutral"
        >
          {dailyWeightData ? dailyWeightData.data.weight : "nincs adat"}
        </Typography>
      </Stack>
    </>
  );
};

export default DailyWeightOverview;
