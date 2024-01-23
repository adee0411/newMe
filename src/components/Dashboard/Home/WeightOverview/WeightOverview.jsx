import { Card, Typography, Stack, CardContent, LinearProgress } from "@mui/joy";

import { useSelector } from "react-redux";

import WeeklyWeightOverview from "./WeeklyWeightOverview";

import { IoCalendarOutline } from "react-icons/io5";
import Icon from "../../../../assets/images/female-fitness_512.png";

const WeightOverview = () => {
  const { selectedDate } = useSelector((state) => state.profileData.dietData);
  const { weight } = useSelector((state) => state.profileData.personalData);
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
  ).toFixed(0);
  return (
    <Card
      variant="plain"
      sx={{
        boxShadow: "md",
      }}
    >
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography color="neutral" component="h2" level="title-lg">
          Testsúly követő
        </Typography>
        <Typography
          color="neutral"
          component="span"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={1}
        >
          <IoCalendarOutline />
          {selectedDate
            .split("-")
            .filter((_, i) => i !== 0)
            .join(".") + "."}
        </Typography>
      </Stack>
      <CardContent>
        <LinearProgress determinate value={weightlossProgressRatio}>
          <Typography sx={{ position: "absolute", top: "-28px" }}>
            <img src={Icon} width={20} />
            {weightlossProgressRatio}%
          </Typography>
        </LinearProgress>
        <Typography>Kezdő súly: {weight} kg</Typography>
        <Typography>
          Testsúly: {currentWeight ? `${currentWeight} kg` : "nincs adat"}
        </Typography>
        <Typography>
          Összes súlyvesztés eddig: {currentWeightLoss} kg
        </Typography>
        <WeeklyWeightOverview />
      </CardContent>
    </Card>
  );
};

export default WeightOverview;
