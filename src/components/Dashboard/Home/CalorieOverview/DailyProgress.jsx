import { CircularProgress, Stack, Typography } from "@mui/joy";

const DailyProgress = ({
  calorieIntake,
  tdee,
  calculatedCalorieIntake,
  date,
  progressSize,
  thickness,
  displayCaloriesLeft,
}) => {
  const calorieProgressRatio = +((calorieIntake / tdee) * 100).toFixed(0);
  const progressColor =
    calorieIntake > tdee
      ? "danger"
      : calorieIntake > calculatedCalorieIntake
      ? "warning"
      : "primary";

  const caloriesLeft = calculatedCalorieIntake - calorieIntake;
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CircularProgress
        determinate
        value={calorieProgressRatio > 100 ? 100 : calorieProgressRatio}
        sx={{ "--CircularProgress-size": progressSize, my: 2 }}
        variant="soft"
        color={progressColor}
        thickness={thickness}
      >
        {displayCaloriesLeft && (
          <Stack textAlign="center">
            <Typography>Maradt:</Typography>
            <Typography fontWeight={800} fontSize={30} color="neutral">
              {caloriesLeft}
            </Typography>
          </Stack>
        )}
      </CircularProgress>
    </div>
  );
};

export default DailyProgress;
