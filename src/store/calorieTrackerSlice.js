import { createSlice } from "@reduxjs/toolkit";

const calorieTrackerSlice = createSlice({
  name: "calorieTracker",
  initialState: {
    calorieData: [],
    calculatedData: {
      TDEE: 0,
      BMR: 0,
      dailyCalorieGoal: 0,
      caloriesLeft: 0,
    },
    UI: {
      currentWeek: 1,
      isFormSubmitting: false,
    },
  },
  reducers: {
    setCurrentWeek(state, action) {
      state.UI.currentWeek = action.payload;
    },

    increaseCurrentWeek(state) {
      state.UI.currentWeek += 1;
    },

    decreaseCurrentWeek(state) {
      state.UI.currentWeek -= 1;
    },

    setCalorieData(state, action) {
      state.calorieData = action.payload;
    },
    setCalculatedData(state, action) {
      state.calculatedData = action.payload;
    },
    setIsFormSubmitting(state, action) {
      state.UI.isFormSubmitting = action.payload;
    },
  },
});

export default calorieTrackerSlice.reducer;

export const {
  setCalorieData,
  setCurrentWeek,
  increaseCurrentWeek,
  decreaseCurrentWeek,
  setCalculatedData,
  setIsFormSubmitting,
} = calorieTrackerSlice.actions;
