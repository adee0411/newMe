import { Grid, Card, Typography, Stack, Divider } from "@mui/joy";

import { useSelector } from "react-redux";

import DailyProgress from "./DailyProgress";
import DailyStats from "./DailyStats";

const DailyCalorieOverview = () => {
  const { selectedDate } = useSelector((state) => state.profileData.dietData);

  const { calculatedCalorieIntake, tdee } = useSelector(
    (state) => state.profileData.calculatedData
  );
  const { calorieData, cumulatedCalorieDeficit } = useSelector(
    (state) => state.calorieTracker
  );

  const selectedDateData = calorieData
    .flat()
    .find((data) => data.date === selectedDate);

  const calorieIntake = selectedDateData?.calorieIntake || 0;

  return (
    <Card
      variant="plain"
      sx={{
        boxShadow: "md",
        background: "linear-gradient(to left, #E0EAFC, #CFDEF3)",
      }}
    >
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography color="neutral" component="h2" level="title-lg">
          Napi kalória-összesítő
        </Typography>
        <Typography color="neutral" component="span" fontWeight={800}>
          {selectedDateData.date
            .split("-")
            .filter((_, i) => i !== 0)
            .join(".") + "."}
        </Typography>
      </Stack>

      <Grid container spacing={8}>
        <Grid lg={4} minWidth="180px">
          <DailyProgress
            calorieIntake={calorieIntake}
            calculatedCalorieIntake={calculatedCalorieIntake}
            tdee={tdee}
            date={selectedDate}
            progressSize="140px"
            thickness={4}
            displayCaloriesLeft={true}
          />
        </Grid>
        <Grid lg={8}>
          <DailyStats
            calorieIntake={calorieIntake}
            calculatedCalorieIntake={calculatedCalorieIntake}
            tdee={tdee}
            cumulatedCalorieDeficit={cumulatedCalorieDeficit}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default DailyCalorieOverview;
