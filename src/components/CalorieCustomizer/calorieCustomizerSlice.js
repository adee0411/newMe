import { createSlice } from "@reduxjs/toolkit";

const initialCalorieCustomizerState = {};

export const calorieCustomizerReducer = createSlice({
  name: "calorieCustomizer",
  initialState: initialCalorieCustomizerState,
  reducers: {
    action() {},
  },
});

// export actions!!!

export const { action } = calorieCustomizerReducer.actions;

export default calorieCustomizerReducer.reducer;
