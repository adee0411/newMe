import { configureStore } from "@reduxjs/toolkit";

import calorieCalculatorReducer from "../components/CalorieCalculator/calorieCalculatorSlice"; // === calorieCalculatorSlice.reducer
import calorieCustomizerReducer from "../components/CalorieCustomizer/calorieCustomizerSlice"; // === calorieCustomizerSlice.reducer

const store = configureStore({
  reducer: {
    calorieCalculator: calorieCalculatorReducer,
    calorieCustomizer: calorieCustomizerReducer,
  },
});
export default store;
