import { Typography, Stack, CardContent } from "@mui/joy";

import { useMemo } from "react";
import { useSelector } from "react-redux";

import DailyProgress from "./DailyProgress";
import NewCalorieForm from "./NewCalorieForm";

import { IoCalendarOutline } from "react-icons/io5";
import { calculateBMR, calculateTDEE } from "../../../../../utils";
const DailyCalorieOverview = () => {
  const { selectedDate } = useSelector((state) => state.profileData);
  const { calorieData } = useSelector((state) => state.calorieTracker);

  const { personal } = useSelector((state) => state.profileData.fetchedData);
  const { deficit } = useSelector(
    (state) => state.profileData.fetchedData.diet
  );

  const BMR = useMemo(() => calculateBMR(personal), [personal]);
  const TDEE = useMemo(
    () => calculateTDEE(BMR, personal.pal),
    [BMR, personal.pal]
  );
  const calculatedCalorieIntake = useMemo(
    () => TDEE - deficit,
    [TDEE, deficit]
  );

  const dailyCalorieIntake =
    calorieData.find((el) => el.date === selectedDate)?.calorieIntake || 0;
  const caloriesLeft = calculatedCalorieIntake - dailyCalorieIntake;

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
              {calculatedCalorieIntake} KCAL
            </Typography>
          </Stack>
          <DailyProgress
            calorieIntake={dailyCalorieIntake}
            calculatedCalorieIntake={calculatedCalorieIntake}
            tdee={TDEE}
            date={selectedDate}
            progressSize="100px"
            thickness={6}
            displayIntakeRatio={true}
            key={selectedDate}
          />
          <Stack
            textAlign="center"
            sx={{ flex: 1 }}
            alignItems="center"
            justifyContent="center"
          >
            <Typography level="body-sm">MARADT</Typography>
            <Typography level="body-lg" fontWeight={800}>
              {caloriesLeft} KCAL
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Typography textAlign="center" level="title-sm">
            MAI NAPON BEVITT:
          </Typography>
          <Typography textAlign="center" fontSize={32} fontWeight={800}>
            {dailyCalorieIntake} KCAL
          </Typography>
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
