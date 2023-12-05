import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    name: "",
    gender: "male",
    age: "",
    weight: "",
    height: "",
  },
  reducers: {
    setProfileData(state, action) {
      state[action.payload.inputName] = action.payload.inputValue;
    },
  },
});

export default profileSlice.reducer;

export const { setProfileData } = profileSlice.actions;
