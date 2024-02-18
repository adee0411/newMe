import { Typography, Stack, CardContent } from "@mui/joy";

import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import DailyProgress from "./DailyProgress";
import NewCalorieForm from "./NewCalorieForm";

import { IoCalendarOutline } from "react-icons/io5";
import { calculateBMR, calculateTDEE } from "../../../../../utils";

import { setCalculatedData } from "../../../../../store/calorieTrackerSlice";

const DailyCalorieOverview = () => {
  const dispatch = useDispatch();
  const { selectedDate } = useSelector((state) => state.profileData);
  const { calorieData, calculatedData } = useSelector(
    (state) => state.calorieTracker
  );

  const { personal } = useSelector((state) => state.profileData.fetchedData);
  const { deficit } = useSelector(
    (state) => state.profileData.fetchedData.diet
  );

  const BMR = useMemo(() => calculateBMR(personal), [personal]);
  const TDEE = useMemo(
    () => calculateTDEE(BMR, personal.pal),
    [BMR, personal.pal]
  );
  const dailyCalorieGoal = useMemo(() => TDEE - deficit, [TDEE, deficit]);

  const dailyCalorieIntakeData = calorieData.find(
    (el) => el.data.date === selectedDate
  );

  const dailyCalorieIntake = dailyCalorieIntakeData
    ? dailyCalorieIntakeData.data.calorieIntake
    : 0;

  const caloriesLeft = dailyCalorieGoal - dailyCalorieIntake;

  const calculatedDataMap = {
    BMR: +BMR,
    TDEE: +TDEE,
    dailyCalorieGoal,
    caloriesLeft,
  };

  // Set calculated data and re-render component only ONCE
  useEffect(() => {
    dispatch(setCalculatedData(calculatedDataMap));
  }, [caloriesLeft]);

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
              {calculatedData.dailyCalorieGoal}{" "}
              <Typography level="body-sm">KCAL</Typography>
            </Typography>
          </Stack>
          <DailyProgress
            calorieIntake={dailyCalorieIntake}
            calorieGoal={calculatedData.dailyCalorieGoal}
            tdee={calculatedData.TDEE}
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
              {calculatedData.caloriesLeft}{" "}
              <Typography level="body-sm">KCAL</Typography>
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Typography textAlign="center" level="title-sm">
            MAI NAPON BEVITT:
          </Typography>
          <Typography textAlign="center" fontSize={32} fontWeight={800}>
            {dailyCalorieIntake} <Typography level="body-sm">KCAL</Typography>
          </Typography>
        </Stack>

        {/**
          <Grid lg={8}>
            <DailyStats
              calorieIntake={0}
              dailyCalorieGoal={2300}
              tdee={2800}
              cumulatedCalorieDeficit={0}
            />
          </Grid> */}
      </CardContent>
    </>
  );
};

export default DailyCalorieOverview;
