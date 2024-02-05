import { Grid, Card, Typography, Stack, Sheet, CardContent } from "@mui/joy";

import { useSelector } from "react-redux";

import DailyProgress from "./DailyProgress";
import DailyStats from "./DailyStats";
import NewCalorieForm from "./NewCalorieForm";

import { IoCalendarOutline } from "react-icons/io5";

const DailyCalorieOverview = () => {
  const currentDate = new Date();
  const { selectedDate } = useSelector((state) => state.profileData.dietData);

  const isSelectedDateBiggerThanCurrentDate =
    new Date(selectedDate).getTime() > currentDate.getTime();

  const { calculatedCalorieIntake, tdee } = useSelector(
    (state) => state.profileData.calculatedData
  );
  const { calorieData, cumulatedCalorieDeficit } = useSelector(
    (state) => state.calorieTracker
  );

  const selectedDateData = calorieData.find(
    (data) => data.date === selectedDate
  );

  const calorieIntake = +selectedDateData?.calorieIntake || 0;
  return (
    <Card
      variant="plain"
      sx={{
        boxShadow: "md",
      }}
    >
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography color="neutral" component="h2" level="title-lg">
          Napi kalória-összesítő
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
        {!isSelectedDateBiggerThanCurrentDate && <NewCalorieForm />}
        <Grid container spacing={8}>
          <Grid lg={4} minWidth="180px">
            <DailyProgress
              calorieIntake={calorieIntake}
              calculatedCalorieIntake={calculatedCalorieIntake}
              tdee={tdee}
              date={selectedDate}
              progressSize="100px"
              thickness={6}
              displayIntakeRatio={true}
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
      </CardContent>
    </Card>
  );
};

export default DailyCalorieOverview;
