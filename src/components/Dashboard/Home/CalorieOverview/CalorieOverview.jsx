import {
  Alert,
  Card,
  CardContent,
  FormControl,
  FormLabel,
  Typography,
  Input,
  Grid,
  Stack,
  Button,
  Divider,
  CircularProgress,
} from "@mui/joy";

import LastSevenDaysData from "./LastSevenDaysData";

import { useSelector } from "react-redux";
import { Form, Link } from "react-router-dom";
import { progress } from "framer-motion";

const CalorieOverview = () => {
  const { selectedDate, currentDate } = useSelector(
    (state) => state.profileData.dietData
  );
  const { calculatedCalorieIntake, calculatedDailyDeficit, tdee } = useSelector(
    (state) => state.profileData.calculatedData
  );
  const { calorieData } = useSelector((state) => state.calorieTracker);

  const selectedDateData = calorieData[0].find(
    (data) => data.date === selectedDate
  );

  const calorieIntake = selectedDateData?.calorieIntake || 0;

  const caloriesLeft = calculatedCalorieIntake - calorieIntake;

  const calorieProgressRatio = +((calorieIntake / tdee) * 100).toFixed(0);

  const formattedCurrentDate = currentDate.replaceAll("-", ".") + ".";

  const progressColor =
    calorieIntake > tdee
      ? "danger"
      : calorieIntake > calculatedCalorieIntake
      ? "warning"
      : "success";
  return (
    <>
      <Typography>{formattedCurrentDate}</Typography>
      <Grid container spacing={2}>
        <Grid lg={6}>
          <Card>
            <Typography>Kalória</Typography>
            <Form>
              <FormControl orientation="horizontal" sx={{ gap: 2, my: 2 }}>
                <Input
                  type="number"
                  sx={{ width: "120px" }}
                  placeholder="Kalória"
                />
                <Button>Naplóz</Button>
                <Divider orientation="vertical" sx={{ mx: 1 }}></Divider>
                <Link to="/meal-planner">Étrend naplózása</Link>
              </FormControl>
            </Form>
            <Divider />
            <CardContent>
              <CircularProgress
                determinate
                value={calorieProgressRatio > 100 ? 100 : calorieProgressRatio}
                sx={{ "--CircularProgress-size": "180px" }}
                variant="soft"
                color={progressColor}
              >
                <Stack>
                  <Typography
                    textAlign="center"
                    fontWeight={800}
                    fontSize={40}
                    color="neutral"
                  >
                    {calorieIntake}
                  </Typography>
                </Stack>
              </CircularProgress>
            </CardContent>
          </Card>
        </Grid>
        <Grid lg={3}>
          <Card></Card>
        </Grid>
        <Grid lg={3}>
          <Card></Card>
        </Grid>
      </Grid>
    </>
  );
};

export default CalorieOverview;
