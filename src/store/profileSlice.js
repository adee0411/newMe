import { createSlice } from "@reduxjs/toolkit";

import { formatDate } from "../utils";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    personalDataInput: {
      name: "",
      gender: "",
      age: "",
      weight: "",
      height: "",
      pal: 1.2,
    },
    personalData: {},
    dietData: {
      dietStartInput: formatDate(new Date()),
      dietLengthInput: "",
      weightGoalInput: "",
      presetDeficitInput: 1000,
      finetunedDeficitInput: 1000,
      selectedDate: formatDate(new Date()),
    },
    calculatedData: {
      bmr: 0,
      tdee: 0,
      calculatedDietEndDate: "",
      calculatedDietLength: 0,
      calculatedWeightloss: 0,
      calculatedDailyDeficit: 0,
      calculatedWeightGoal: 0,
      calculatedCalorieIntake: 0,
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
    setPersonalDataInput(state, action) {
      state.personalDataInput[action.payload.inputName] =
        action.payload.inputValue;
    },
    setPersonalData(state, action) {
      state.personalData = action.payload;
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
  setPersonalDataInput,
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
