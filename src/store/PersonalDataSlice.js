import { createSlice } from "@reduxjs/toolkit";

const personalDataReducer = createSlice({
  name: "personalData",
  initialState: {
    name: "",
    age: 20,
    weight: 70,
    height: 170,
    gender: "male",
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
  },
});

export default personalDataReducer.reducer;

export const { setName } = personalDataReducer.actions;
