import {
  Grid,
  CircularProgress,
  Stack,
  Typography,
  List,
  ListItem,
  Alert,
} from "@mui/joy";

import { useSelector } from "react-redux";

import { formatDate } from "../../../../utils";
const DailyCalorieOverview = () => {
  const currentDate = new Date();
  const { selectedDate } = useSelector((state) => state.profileData.dietData);

  const { calculatedCalorieIntake, calculatedDailyDeficit, tdee } = useSelector(
    (state) => state.profileData.calculatedData
  );
  const { calorieData, cumulatedCalorieDeficit } = useSelector(
    (state) => state.calorieTracker
  );

  const selectedDateData = calorieData[0].find(
    (data) => data.date === selectedDate
  );

  const calorieIntake = selectedDateData?.calorieIntake || 0;

  const caloriesLeft = calculatedCalorieIntake - calorieIntake;

  const avgCalorieIntake = (
    calorieData[0].reduce((acc, el) => {
      return (acc += el.calorieIntake);
    }, 0) / calorieData[0].length
  ).toFixed(0);

  const calorieProgressRatio = +((calorieIntake / tdee) * 100).toFixed(0);

  const progressColor =
    calorieIntake > tdee
      ? "danger"
      : calorieIntake > calculatedCalorieIntake
      ? "warning"
      : "success";

  return (
    <Grid container>
      <Grid lg={4} minWidth="180px">
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
      </Grid>
      <Grid lg={8}>
        <List>
          <ListItem>
            <Typography>Szintentartó kalória: {tdee}</Typography>
          </ListItem>
          <ListItem>
            <Typography>Napi bevihető: {calculatedCalorieIntake}</Typography>
          </ListItem>
          <ListItem>
            <Typography>Felhasznált: {calorieIntake}</Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Maradt: {calculatedCalorieIntake - calorieIntake}
            </Typography>
          </ListItem>
          <ListItem>
            <Stack>
              <Typography>
                Kalória-deficit tartalék: {cumulatedCalorieDeficit}
              </Typography>
              <Alert
                color={cumulatedCalorieDeficit < 0 ? "warning" : "success"}
              >
                A mai napon {Math.abs(cumulatedCalorieDeficit)} kcal{" "}
                {cumulatedCalorieDeficit < 0 ? "többletben" : "tartalékban"}{" "}
                vagy
              </Alert>
            </Stack>
          </ListItem>
          <ListItem>
            <Typography>
              Átlagos napi kalóriafogyasztás: {avgCalorieIntake}
            </Typography>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default DailyCalorieOverview;
