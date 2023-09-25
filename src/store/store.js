import { configureStore } from "@reduxjs/toolkit";

import calorieCalculatorReducer from "../components/CalorieCalculator/calorieCalculatorSlice"; // === calorieCalculatorSlice.reducer

const store = configureStore({
  reducer: {
    calorieCalculator: calorieCalculatorReducer,
  },
});
export default store;
