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
          cumulatedCalorieDeficit: -100,
        },
        {
          date: "2024-01-09",
          calorieIntake: 2200,
          cumulatedCalorieDeficit: 600,
        },
        {
          date: "2024-01-10",
          calorieIntake: 2800,
          cumulatedCalorieDeficit: 600,
        },
        {
          date: "2024-01-11",
          calorieIntake: 2200,
          cumulatedCalorieDeficit: 600,
        },
      ],
    ],
  },
  reducers: {},
});

export default calorieTrackerSlice.reducer;

/*export {} = calorieTrackerSlice.actions;*/
