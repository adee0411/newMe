import { createSlice } from "@reduxjs/toolkit";

const weightTrackerSlice = createSlice({
  name: "weightTracker",
  initialState: {
    weightData: [],
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

    setWeightData(state, action) {
      state.weightData = action.payload;
    },
    setIsFormSubmitting(state, action) {
      state.UI.isFormSubmitting = action.payload;
    },
  },
});

export default weightTrackerSlice.reducer;

export const {
  setWeightData,
  setCurrentWeek,
  increaseCurrentWeek,
  decreaseCurrentWeek,
  setIsFormSubmitting,
} = weightTrackerSlice.actions;
