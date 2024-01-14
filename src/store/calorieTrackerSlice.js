import { createSlice } from "@reduxjs/toolkit";

import { formatDate } from "../utils";

const calorieTrackerSlice = createSlice({
  name: "calorieTracker",
  initialState: {
    calorieData: [
      [
        {
          date: "2024-01-08",
          calorieIntake: 3000,
        },
        {
          date: "2024-01-09",
          calorieIntake: 2200,
        },
        {
          date: "2024-01-10",
          calorieIntake: 2800,
        },
        {
          date: "2024-01-11",
          calorieIntake: 2200,
        },
      ],
      [
        {
          date: "2024-01-08",
          calorieIntake: 3000,
        },
        {
          date: "2024-01-09",
          calorieIntake: 2200,
        },
        {
          date: "2024-01-10",
          calorieIntake: 2800,
        },
        {
          date: "2024-01-11",
          calorieIntake: 2200,
        },
      ],
    ],
    cumulatedCalorieDeficit: -10,
    currentBlock: 0,
  },
  reducers: {
    setDailyCalorieIntake(state, action) {
      const calorieIntakeIndex = state.calorieData[0].findIndex(
        (el) => el.date === action.payload.date
      );
      if (calorieIntakeIndex < 0) {
        state.calorieData[0].push(action.payload);
      } else {
        state.calorieData[0][calorieIntakeIndex].calorieIntake =
          action.payload.calorieIntake;
      }
    },
  },
});

export default calorieTrackerSlice.reducer;

export const { setDailyCalorieIntake } = calorieTrackerSlice.actions;
