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
      dietStartInput: "2024-01-08",
      dietLengthInput: "",
      weightGoalInput: "",
      presetDeficitInput: 1000,
      finetunedDeficitInput: 1000,
      currentDate: formatDate(new Date()),
      selectedDate: formatDate(new Date()),
    },
    calculatedData: {
      bmr: "",
      tdee: 2900,
      calculatedDietEndDate: "",
      calculatedDietLength: "",
      calculatedWeightloss: "",
      calculatedDailyDeficit: 500,
      calculatedWeightGoal: "",
      calculatedCalorieIntake: 2400,
    },
    UI: {
      activeFormIndex: 0,
      isProfileEmpty: true,
      isFineTuneDeficitChecked: false,
      isDeficitSettingsDisabled: false,
      isPersonalInfoFormValid: false,
      isDietInfoFormValid: false,
    },
  },
  reducers: {
    setPersonalData(state, action) {
      state.personalData[action.payload.inputName] = action.payload.inputValue;
    },
    setDietStartDate(state, action) {
      state.dietData.dietStartInput = action.payload;
    },
    setCalculatedDietEndDate(state, action) {
      state.calculatedData.calculatedDietEndDate = action.payload;
    },
    setDietLength(state, action) {
      state.dietData.dietLengthInput = action.payload;
    },
    setWeightGoal(state, action) {
      state.dietData.weightGoalInput = action.payload;
    },
    setPresetDeficit(state, action) {
      state.dietData.presetDeficitInput = action.payload;
    },
    setFinetunedDeficit(state, action) {
      state.dietData.finetunedDeficitInput = action.payload;
    },
    setActiveFormIndex(state, action) {
      state.UI.activeFormIndex = action.payload;
    },
    incrementActiveFormIndex(state) {
      state.UI.activeFormIndex++;
    },
    startProfile(state) {
      state.UI.isProfileEmpty = false;
    },
    toggleFineTuneDeficitCheck(state) {
      state.UI.isFineTuneDeficitChecked = !state.UI.isFineTuneDeficitChecked;
    },
    toggleDeficitSettings(state, action) {
      state.UI.isDeficitSettingsDisabled = action.payload;
    },
    setCalculatedData(state, action) {
      state.calculatedData[action.payload.dataName] = action.payload.dataValue;
    },
    toggleIsPersonalInfoFormValid(state) {
      state.UI.isPersonalInfoFormValid = !state.UI.isPersonalInfoFormValid;
    },
    toggleIsDietInfoFormValid(state) {
      state.UI.isDietInfoFormValid = !state.UI.isDietInfoFormValid;
    },
    setSelectedDate(state, action) {
      state.dietData.selectedDate = action.payload;
    },
  },
});

export default profileSlice.reducer;

export const {
  setPersonalData,
  setDietStartDate,
  setDietEndDate,
  setDietLength,
  setWeightGoal,
  setPresetDeficit,
  setFinetunedDeficit,
  setActiveFormIndex,
  incrementActiveFormIndex,
  startProfile,
  toggleFineTuneDeficitCheck,
  toggleDeficitSettings,
  setCalculatedData,
  setSelectedDate,
} = profileSlice.actions;
