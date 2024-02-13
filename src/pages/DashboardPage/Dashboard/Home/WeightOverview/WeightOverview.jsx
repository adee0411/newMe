import { Card, Sheet, Stack, CardContent } from "@mui/joy";

import { useSelector } from "react-redux";

import DailyCalorieOverview from "../CalorieOverview/DailyCalorieOverview";
import DailyWeightOverview from "./DailyWeightOverview";
import WeeklyWeightOverview from "./WeeklyWeightOverview";

import { IoCalendarOutline } from "react-icons/io5";
import Icon from "../../../../../assets/images/female-fitness_512.png";
import WeightBg from "../../../../../assets/images/weighing-machine.png";
import { Form } from "react-router-dom";

const WeightOverview = () => {
  const { selectedDate } = useSelector((state) => state.profileData);
  /*const { weight } = useSelector((state) => state.profileData.personalData);
  const { calculatedWeightloss } = useSelector(
    (state) => state.profileData.calculatedData
  );
  const { weightData } = useSelector((state) => state.weightTracker);

  const selectedWeightData = weightData.find(
    (data) => data.date === selectedDate
  );

  const currentWeight =
    selectedWeightData?.weight || weightData[weightData.length - 1].weight;

  const currentWeightLoss = (weight - currentWeight).toFixed(1);

  const weightlossProgressRatio = +(
    (currentWeightLoss / calculatedWeightloss) *
    100
  ).toFixed(0);*/
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
          <Sheet color="primary" variant="soft" sx={{ width: "350px" }}>
            <DailyWeightOverview />
          </Sheet>
          <Sheet sx={{ flex: 1, padding: "4px 12px" }}>
            <WeeklyWeightOverview />
          </Sheet>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default WeightOverview;
