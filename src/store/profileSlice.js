import { createSlice } from "@reduxjs/toolkit";

import { formatDate } from "../utils";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    personalData: {
      name: "Ádám",
      gender: "male",
      age: "33",
      weight: "101",
      height: "176",
      pal: 1.2,
    },
    dietData: {
      dietStart: formatDate(new Date()),
      dietEnd: "",
      dietLength: "",
      weightGoal: "",
      totalWeightloss: "",
      dailyCalorieIntake: "",
      presetDeficit: 500,
      finetunedDeficit: 500,
    },
    calculatedData: {
      bmr: "",
      tdee: "",
    },
    UI: {
      activeFormIndex: 0,
      isProfileEmpty: true,
      isFineTuneDeficitChecked: false,
      disableDeficitSettings: false,
    },
  },
  reducers: {
    setPersonalData(state, action) {
      state.personalData[action.payload.inputName] = action.payload.inputValue;
    },
    setDietStartDate(state, action) {
      state.dietData.dietStart = action.payload;
    },
    setDietEndDate(state, action) {
      state.dietData.dietEnd = action.payload;
    },
    setDietLengthDate(state, action) {
      state.dietData.dietLength = action.payload;
    },
    setWeightGoal(state, action) {
      state.dietData.weightGoal = action.payload;
    },
    setPresetDeficit(state, action) {
      state.dietData.presetDeficit = action.payload;
    },
    setFinetuneDeficit(state, action) {
      state.dietData.finetunedDeficit = action.payload;
    },
    setBMR(state, action) {
      state.calculatedData.bmr = action.payload;
    },
    setTDEE(state, action) {
      state.calculatedData.tdee = action.payload;
    },
    setActiveFormIndex(state, action) {
      state.UI.activeFormIndex = action.payload;
    },
    startProfile(state) {
      state.UI.isProfileEmpty = false;
    },
    toggleFineTuneDeficitCheck(state) {
      state.UI.isFineTuneDeficitChecked = !state.UI.isFineTuneDeficitChecked;
    },
    toggleDeficitSettings(state, action) {
      state.UI.disableDeficitSettings = action.payload;
    },
    setTotalWeightloss(state, action) {
      state.dietData.totalWeightloss = action.payload;
    },
  },
});

export default profileSlice.reducer;

export const {
  setPersonalData,
  setDietStartDate,
  setDietEndDate,
  setDietLengthDate,
  setWeightGoal,
  setPresetDeficit,
  setFinetuneDeficit,
  setBMR,
  setTDEE,
  setActiveFormIndex,
  startProfile,
  toggleFineTuneDeficitCheck,
  toggleDeficitSettings,
  setTotalWeightloss,
} = profileSlice.actions;
