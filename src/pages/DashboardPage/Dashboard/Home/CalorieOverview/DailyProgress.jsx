import { CircularProgress, Stack, Typography } from "@mui/joy";
import { useEffect, useState } from "react";
import { useCountUp } from "use-count-up";

const DailyProgress = ({
  calorieIntake,
  tdee,
  calorieGoal,
  progressSize,
  thickness,
  displayIntakeRatio,
}) => {
  // Ratio of daily allowed calories and calories taken
  const calorieProgressRatio = +((calorieIntake / calorieGoal) * 100).toFixed(
    0
  );

  const { value, reset } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: calorieProgressRatio,
    easing: "easeOutCubic",
  });

  const progressColor =
    calorieIntake > tdee
      ? "danger"
      : calorieIntake > calorieGoal
      ? "warning"
      : "primary";

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CircularProgress
        determinate
        value={value > 100 ? 100 : value}
        sx={{
          "--CircularProgress-size": progressSize,
          my: 2,
        }}
        variant="soft"
        color={progressColor}
        thickness={thickness}
      >
        {displayIntakeRatio && (
          <Stack textAlign="center">
            <Typography fontWeight={800} fontSize="120%" color="neutral">
              {calorieProgressRatio}%
            </Typography>
          </Stack>
        )}
      </CircularProgress>
    </div>
  );
};

export default DailyProgress;
