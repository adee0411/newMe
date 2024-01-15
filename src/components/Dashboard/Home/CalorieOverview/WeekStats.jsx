import { Stack, Typography, CircularProgress } from "@mui/joy";

import { useSelector } from "react-redux";

import DailyProgress from "./DailyProgress";

const WeekStats = ({ currentWeek }) => {
  const { tdee, calculatedCalorieIntake } = useSelector(
    (state) => state.profileData.calculatedData
  );
  const { calorieData } = useSelector((state) => state.calorieTracker);
  /*const avgCalorieIntake = +(
    calorieData[currentWeek].reduce((acc, el) => {
      return (acc += el.calorieIntake);
    }, 0) / calorieData[currentWeek].length
  ).toFixed(0);*/

  const weeklyPortion = (currentWeek - 1) * 7;

  const dataToRender = calorieData.slice(weeklyPortion, weeklyPortion + 7);

  return (
    <Stack direction="row" justifyContent="space-between">
      {dataToRender.map((data) => {
        return (
          <Stack>
            <Typography fontWeight={400} fontSize="lg">
              {data.date
                .split("-")
                .filter((_, i) => i !== 0)
                .join(".") + "."}
            </Typography>
            <DailyProgress
              calorieIntake={data.calorieIntake}
              tdee={tdee}
              calculatedCalorieIntake={calculatedCalorieIntake}
              date={data.date}
              progressSize=""
              thickness={3}
              displayCaloriesLeft={false}
              key={data.date}
            />
            <Typography fontWeight={400} fontSize="lg">
              {data.calorieIntake}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default WeekStats;
