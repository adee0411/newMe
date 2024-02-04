import { createSlice } from "@reduxjs/toolkit";

import { formatDate } from "../utils";

import { PAL } from "../utils";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    formInput: {
      personalDataInput: {
        name: "",
        gender: "male",
        age: "",
        weight: "",
        height: "",
        pal: PAL.Sedentary.multiplier,
      },
      dietDataInput: {
        dietStartInput: formatDate(new Date()),
        dietLengthInput: "",
        weightGoalInput: "",
        presetDeficitInput: 1000,
        finetunedDeficitInput: 1000,
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
    fetchedData: {},
  },
  reducers: {
    setPersonalDataInput(state, action) {
      state.formInput.personalDataInput[action.payload.inputName] =
        action.payload.inputValue;
    },
    setDietStartDate(state, action) {
      state.formInput.dietDataInput.dietStartInput = action.payload;
    },
    setDietLength(state, action) {
      state.formInput.dietDataInput.dietLengthInput = action.payload;
    },
    setWeightGoal(state, action) {
      state.formInput.dietDataInput.weightGoalInput = action.payload;
    },
    setPresetDeficit(state, action) {
      state.formInput.dietDataInput.presetDeficitInput = action.payload;
    },
    setFinetunedDeficit(state, action) {
      state.formInput.dietDataInput.finetunedDeficitInput = action.payload;
    },
    setActiveFormIndex(state, action) {
      state.formInput.UI.activeFormIndex = action.payload;
    },
    incrementActiveFormIndex(state) {
      state.formInput.UI.activeFormIndex++;
    },
    toggleFineTuneDeficitCheck(state) {
      state.formInput.UI.isFineTuneDeficitChecked =
        !state.formInput.UI.isFineTuneDeficitChecked;
    },
    toggleDeficitSettings(state, action) {
      state.formInput.UI.isDeficitSettingsDisabled = action.payload;
    },
    toggleIsPersonalInfoFormValid(state) {
      state.formInput.UI.isPersonalInfoFormValid =
        !state.formInput.UI.isPersonalInfoFormValid;
    },
    toggleIsDietInfoFormValid(state) {
      state.formInput.UI.isDietInfoFormValid =
        !state.formInput.UI.isDietInfoFormValid;
    },
    setPersonalData(state, action) {
      state.fetchedData = action.payload;
    },
  },
});

export default profileSlice.reducer;

export const {
  setPersonalDataInput,
  setDietStartDate,
  setDietLength,
  setWeightGoal,
  setPresetDeficit,
  setFinetunedDeficit,
  setActiveFormIndex,
  incrementActiveFormIndex,
  startProfile,
  toggleFineTuneDeficitCheck,
  toggleDeficitSettings,
  toggleIsPersonalInfoFormValid,
  toggleIsDietInfoFormValid,
  setPersonalData,
} = profileSlice.actions;
