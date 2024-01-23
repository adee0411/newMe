import { configureStore } from "@reduxjs/toolkit";

import profileSliceReducer from "./profileSlice";
import calorieTrackerReducer from "./calorieTrackerSlice";
import weightTrackerReducer from "./weightTrackerSlice";

const store = configureStore({
  reducer: {
    profileData: profileSliceReducer,
    calorieTracker: calorieTrackerReducer,
    weightTracker: weightTrackerReducer,
  },
});
export default store;
