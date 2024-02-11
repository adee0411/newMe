import {
  Typography,
  Grid,
  Divider,
  Sheet,
  Stack,
  Card,
  CardContent,
} from "@mui/joy";

import { formatDate } from "../../../../../utils";

import { useSelector } from "react-redux";

import NewCalorieForm from "./NewCalorieForm";
import DailyCalorieOverview from "./DailyCalorieOverview";
import WeeklyCalorieOverview from "./WeeklyCalorieOverview";

const CalorieOverview = () => {
  return (
    <Card sx={{ borderRadius: "lg", p: "none", overflow: "hidden" }}>
      <CardContent>
        <Stack direction="row" sx={{ width: "100%" }}>
          <Sheet
            color="primary"
            variant="solid"
            invertedColors
            sx={{ width: "250px" }}
          >
            <DailyCalorieOverview />
          </Sheet>
          <Sheet>
            <WeeklyCalorieOverview />
          </Sheet>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CalorieOverview;
