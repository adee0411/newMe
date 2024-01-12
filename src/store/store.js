import { configureStore } from "@reduxjs/toolkit";

import profileSliceReducer from "./profileSlice";
import calorieTrackerReducer from "./calorieTrackerSlice";

const store = configureStore({
  reducer: {
    profileData: profileSliceReducer,
    calorieTracker: calorieTrackerReducer,
  },
});
export default store;
