import { Grid, Card, Typography, Stack, Sheet, CardContent } from "@mui/joy";

import { useSelector } from "react-redux";

import DailyProgress from "./DailyProgress";
import DailyStats from "./DailyStats";
import NewCalorieForm from "./NewCalorieForm";

import { IoCalendarOutline } from "react-icons/io5";

const DailyCalorieOverview = () => {
  const { selectedDate } = useSelector((state) => state.profileData);

  return (
    <>
      <header>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            display="flex"
            alignItems="center"
            gap={1}
            level="title-sm"
          >
            <IoCalendarOutline />
            Választott dátum:
          </Typography>
          <Typography level="title-sm">
            {selectedDate
              .split("-")
              .filter((_, i) => i !== 0)
              .join(".") + "."}
          </Typography>
        </Stack>
      </header>
      <CardContent>
        <NewCalorieForm />
        <Stack direction="row" sx={{ width: "100%" }}>
          <Stack
            textAlign="center"
            sx={{ flex: 1 }}
            alignItems="center"
            justifyContent="center"
          >
            <Typography level="body-sm">CÉL</Typography>
            <Typography level="body-lg" fontWeight={800}>
              2300
            </Typography>
          </Stack>
          <DailyProgress
            calorieIntake={2000}
            calculatedCalorieIntake={2300}
            tdee={2800}
            date={selectedDate}
            progressSize="100px"
            thickness={6}
            displayIntakeRatio={true}
          />
          <Stack
            textAlign="center"
            sx={{ flex: 1 }}
            alignItems="center"
            justifyContent="center"
          >
            <Typography level="body-sm">MARADT</Typography>
            <Typography level="body-lg" fontWeight={800}>
              200
            </Typography>
          </Stack>
        </Stack>

        {/**
          <Grid lg={8}>
            <DailyStats
              calorieIntake={0}
              calculatedCalorieIntake={2300}
              tdee={2800}
              cumulatedCalorieDeficit={0}
            />
          </Grid> */}
      </CardContent>
    </>
  );
};

export default DailyCalorieOverview;
