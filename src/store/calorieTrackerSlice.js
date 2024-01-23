import { createSlice } from "@reduxjs/toolkit";

const calorieTrackerSlice = createSlice({
  name: "calorieTracker",
  initialState: {
    calorieData: [
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
        calorieIntake: 1800,
      },
      {
        date: "2024-01-12",
        calorieIntake: 1800,
      },
      {
        date: "2024-01-13",
        calorieIntake: 1800,
      },
      {
        date: "2024-01-14",
        calorieIntake: 1800,
      },
      {
        date: "2024-01-15",
        calorieIntake: 2200,
      },
      {
        date: "2024-01-16",
        calorieIntake: 2200,
      },
      {
        date: "2024-01-17",
        calorieIntake: 2800,
      },
      {
        date: "2024-01-18",
        calorieIntake: 2800,
      },
    ],
    UI: {
      currentWeek: 1,
    },
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
    setCurrentWeek(state, action) {
      state.UI.currentWeek += action.payload;
    },
  },
});

export default calorieTrackerSlice.reducer;

export const { setDailyCalorieIntake, setCurrentWeek } =
  calorieTrackerSlice.actions;
