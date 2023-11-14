import { configureStore } from "@reduxjs/toolkit";

import calorieCalculatorReducer from "../components/CalorieCalculator/calorieCalculatorSlice"; // === calorieCalculatorSlice.reducer
import calorieCustomizerReducer from "../components/CalorieCustomizer/calorieCustomizerSlice"; // === calorieCustomizerSlice.reducer
import personalDataReducer from "./PersonalDataSlice";

const store = configureStore({
  reducer: {
    calorieCalculator: calorieCalculatorReducer,
    calorieCustomizer: calorieCustomizerReducer,
    personalData: personalDataReducer,
  },
});
export default store;
