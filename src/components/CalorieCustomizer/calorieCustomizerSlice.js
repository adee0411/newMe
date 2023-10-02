import { createSlice } from "@reduxjs/toolkit";

const initialCalorieCustomizerState = {
  customInputs: {
    deficit: 500,
    dietLength: 4,
    weightGoal: 70,
  },
  UI: {
    deficitWarning: false,
    checkBoxWarning: false,
  },
  checkboxState: {
    labelChecked: {
      deficit: true,
      dietLength: false,
      weightGoal: false,
    },
    disabledCheckboxName: "",
  },
};

export const calorieCustomizerReducer = createSlice({
  name: "calorieCustomizer",
  initialState: initialCalorieCustomizerState,
  reducers: {
    setDeficit(state, action) {
      state.customInputs.deficit = action.payload;
    },
    setDietLength(state, action) {
      state.customInputs.dietLength = action.payload;
    },
    setWeightGoal(state, action) {
      state.customInputs.weightGoal = action.payload;
    },
    showDeficitWarning(state, action) {
      state.UI.deficitWarning = action.payload;
    },
    showCheckboxWarning(state, action) {
      state.UI.checkBoxWarning = action.payload;
    },
    setLabelChecked(state, action) {
      state.checkboxState.labelChecked[action.payload] =
        !state.checkboxState.labelChecked[action.payload];
    },
    setDisabledCheckboxName(state, action) {
      state.checkboxState.disabledCheckboxName = action.payload;
    },
  },
});

// export actions!!!

export const {
  setDeficit,
  setDietLength,
  setWeightGoal,
  showCheckboxWarning,
  showDeficitWarning,
  setDisabledCheckboxName,
  setLabelChecked,
} = calorieCustomizerReducer.actions;

export default calorieCustomizerReducer.reducer;
