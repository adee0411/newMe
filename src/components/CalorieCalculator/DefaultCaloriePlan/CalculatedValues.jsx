import { Stack, Chip } from "@mui/joy";

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  calculateBMR,
  calculateTDEE,
  calculateDefaultDailyCalorie,
} from "../../../utils";

import { PAL } from "../calorieCalculatorSlice";

import { setCalculatedCalories } from "../calorieCalculatorSlice";

const CalculatedValues = () => {
  const calculatedValues = useSelector(
    (state) => state.calorieCalculator.calculatedCalories
  );
  const parameters = useSelector((state) => state.calorieCalculator.parameters);

  const palValue = useSelector(
    (state) => state.calorieCalculator.parameters.pal.value
  );
  const palMultiplier = PAL[palValue];

  const dispatch = useDispatch();

  // Prevent from parallel component rendering
  useEffect(() => {
    const bmr = calculateBMR(parameters);
    const tdee = calculateTDEE(bmr, palMultiplier);
    const cut = calculateDefaultDailyCalorie(tdee, "cut");
    const bulk = calculateDefaultDailyCalorie(tdee, "bulk");

    const updatedCalculatedValues = {
      bmr: { name: "bmr", value: bmr },
      tdee: { name: "tdee", value: tdee },
      cut: { name: "cut", value: cut },
      bulk: { name: "bulk", value: bulk },
    };
    dispatch(setCalculatedCalories(updatedCalculatedValues));
  }, [dispatch, palValue, parameters]);

  return (
    <Stack direction="row" justifyContent="space-between" flexWrap="wrap">
      {Object.values(calculatedValues).map((calorieIndex) => {
        return (
          <Chip
            sx={{ p: 1 }}
            key={calorieIndex.abbr}
            startDecorator={`${calorieIndex.abbr}: `}
          >
            {`${calorieIndex.value} ${calorieIndex.unit}`}
          </Chip>
        );
      })}
    </Stack>
  );
};

export default CalculatedValues;
