import { createSlice } from "@reduxjs/toolkit";

import {
  calculateBMR,
  calculateTDEE,
  calculateDefaultDailyCalorie,
} from "../../utils";

export const PAL = {
  Sedentary: 1.2,
  "Light exercise": 1.375,
  "Moderate exercise": 1.55,
  "Heavy exercise": 1.725,
  "Physical job": 1.9,
  Athlete: 2.5,
};

const initialParameters = {
  weight: { value: 70, unit: "kg" },
  height: { value: 170, unit: "cm" },
  age: { value: 18, unit: "years old" },
  gender: { value: "male", unit: "" },
  pal: { value: "Sedentary", unit: "" },
};

const initialBMR = calculateBMR(initialParameters);
const initialTDEE = calculateTDEE(initialBMR, PAL[initialParameters.pal.value]);
const initialDefaultDailyCutCalorie = calculateDefaultDailyCalorie(
  initialTDEE,
  "cut"
);
const initialDefaultDailyBulkCalorie = calculateDefaultDailyCalorie(
  initialTDEE,
  "bulk"
);

/*******************************************************/

const initialState = {
  parameters: initialParameters,
  calculatedCalories: {
    bmr: {
      title: "Basal Metabolic Rate",
      abbr: "BMR",
      value: initialBMR,
      unit: "kcal",
    },
    tdee: {
      title: "Total Daily Energy Expenditure",
      abbr: "TDEE",
      value: initialTDEE,
      unit: "kcal",
    },
    cut: {
      title: "Weight loss energy intake",
      abbr: "Cut",
      value: initialDefaultDailyCutCalorie,
      unit: "kcal",
    },
    bulk: {
      title: "Weight gain energy intake",
      abbr: "Bulk",
      value: initialDefaultDailyBulkCalorie,
      unit: "kcal",
    },
  },
};

export const calorieCalculatorSlice = createSlice({
  name: "calorieCalculator",
  initialState,
  reducers: {
    setParameters(state, action) {
      state.parameters[action.payload.name].value = action.payload.value;
    },
    setCalculatedCalories(state, action) {
      for (let updatedValue in action.payload) {
        state.calculatedCalories[action.payload[updatedValue].name].value =
          action.payload[updatedValue].value;
      }
    },
  },
});

export const { setParameters, setCalculatedCalories } =
  calorieCalculatorSlice.actions;

export default calorieCalculatorSlice.reducer;
