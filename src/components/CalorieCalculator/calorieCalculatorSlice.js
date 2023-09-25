import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  parameters: {
    weight: { value: 70, unit: "kg" },
    height: { value: 170, unit: "cm" },
    age: { value: 18, unit: "years old" },
    gender: { value: "male", unit: "" },
  },
  pal: {
    value: "Sedentary",
    unit: "",
    multiplier: 1.2,
  },

  calculatedParams: {
    bmr: 0,
    tdee: 0,
    cut: 0,
    bulk: 0,
  },
};

export const calorieCalculatorSlice = createSlice({
  name: "calorieCalculator",
  initialState,
  reducers: {
    setStats(state, action) {
      state.parameters[action.payload.name].value = action.payload.value;
    },
    setGender(state, action) {
      state.parameters.gender.value = action.payload.value;
    },
    setPal(state, action) {
      state.pal.value = action.payload.value;
    },
  },
});

export const { setGender, setPal, setStats, setCalorieGoals } =
  calorieCalculatorSlice.actions;

export default calorieCalculatorSlice.reducer;
