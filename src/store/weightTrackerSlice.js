import { createSlice } from "@reduxjs/toolkit";

const weightTrackerSlice = createSlice({
  name: "weightTracker",
  initialState: {
    weightData: [
      {
        date: "2024-01-08",
        weight: 99.2,
      },
      {
        date: "2024-01-09",
        weight: 99.4,
      },
      {
        date: "2024-01-10",
        weight: 99.1,
      },
      {
        date: "2024-01-11",
        weight: 99.3,
      },
      {
        date: "2024-01-12",
        weight: 99.4,
      },
      {
        date: "2024-01-13",
        weight: 99.1,
      },
      {
        date: "2024-01-14",
        weight: 99.1,
      },
      {
        date: "2024-01-15",
        weight: 99.2,
      },
      {
        date: "2024-01-16",
        weight: 99,
      },
      {
        date: "2024-01-17",
        weight: 99.1,
      },
      {
        date: "2024-01-18",
        weight: 98.9,
      },
    ],
    UI: {
      currentWeek: 1,
    },
  },
  reducers: {
    setCurrentWeek(state, action) {
      state.UI.currentWeek += action.payload;
    },
  },
});

export default weightTrackerSlice.reducer;

export const { setCurrentWeek } = weightTrackerSlice.actions;
