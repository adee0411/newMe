import { createSlice } from "@reduxjs/toolkit";

import { formatDate } from "../utils";

const calorieTrackerSlice = createSlice({
  name: "calorieTracker",
  initialState: {
    calorieData: [],
    UI: {
      currentWeek: 0,
    },
  },
  reducers: {
    setDailyCalorieIntake(state, action) {
      // Create new 7 day block filled with default data
      const createNewBlock = (calorieData) => {
        let blockArr = [];
        let date = new Date(calorieData.date);
        let newDate = date;
        blockArr.push(action.payload);

        for (let i = 1; i <= 6; i++) {
          newDate.setDate(newDate.getDate() + 1);
          blockArr.push({ date: formatDate(newDate), calorieIntake: 0 });
        }

        return blockArr;
      };

      // 1) Data is empty - first caloriedata OR date is new
      if (state.calorieData.length === 0) {
        const newBlock = createNewBlock(action.payload);
        state.calorieData.push(newBlock);
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
