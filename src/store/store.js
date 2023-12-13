import { configureStore } from "@reduxjs/toolkit";

import profileSliceReducer from "./profileSlice";

const store = configureStore({
  reducer: {
    profileData: profileSliceReducer,
  },
});
export default store;
