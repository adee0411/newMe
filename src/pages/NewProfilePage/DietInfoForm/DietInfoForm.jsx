import { useDispatch, useSelector } from "react-redux";

import {
  setCalculatedData,
  toggleDeficitSettings,
} from "../../../store/profileSlice";

import {
  calculateDietEnd,
  calculateTotalWeightloss,
  calculateDailyCalorieIntake,
  calculateWeightGoal,
  calculateDietLength,
  calculateDailyDeficit,
} from "../../../utils";

import { Typography } from "@mui/joy";

import classes from "./DietInfoForm.module.scss";

import DateSettings from "./DateSettings";
import WeightGoalSettings from "./WeightGoalSettings";
import DeficitSettings from "./DeficitSettings";
import { useEffect } from "react";

const DietInfoForm = () => {
  const dispatch = useDispatch();
  const { weight } = useSelector((state) => state.profileData.personalData);
  const {
    dietStartInput,
    dietLengthInput,
    weightGoalInput,
    presetDeficitInput,
    finetunedDeficitInput,
  } = useSelector((state) => state.profileData.dietData);

  const {
    tdee,
    calculatedWeightloss,
    calculatedDietLength,
    calculatedWeightGoal,
  } = useSelector((state) => state.profileData.calculatedData);

  const { isFineTuneDeficitChecked, isDeficitSettingsDisabled } = useSelector(
    (state) => state.profileData.UI
  );

  const dailyDeficit = isDeficitSettingsDisabled
    ? calculateDailyDeficit(dietLengthInput, calculatedWeightloss)
    : isFineTuneDeficitChecked
    ? finetunedDeficitInput
    : presetDeficitInput;

  const initialCalculatedData = {
    calculatedDietEndDate: calculatedDietLength
      ? calculateDietEnd(dietStartInput, dietLengthInput)
      : "",
    calculatedDietLength: dietLengthInput
      ? dietLengthInput
      : calculateDietLength(calculatedWeightloss, dailyDeficit),
    calculatedWeightloss: calculateTotalWeightloss(
      weight,
      calculatedWeightGoal
    ),
    calculatedDailyDeficit: dailyDeficit,
    calculatedWeightGoal: weightGoalInput
      ? weightGoalInput
      : calculateWeightGoal(dailyDeficit, dietLengthInput, weight),
    calculatedCalorieIntake: calculateDailyCalorieIntake(tdee, dailyDeficit),
  };

  // Prevent parallel component rendering with <StepperWrapper />
  useEffect(() => {
    // Set Initial Calculated Data in Store
    for (const data in initialCalculatedData) {
      dispatch(
        setCalculatedData({
          dataName: data,
          dataValue: initialCalculatedData[data],
        })
      );
    }

    dispatch(
      toggleDeficitSettings(dietLengthInput !== "" && weightGoalInput !== "")
    );
  });

  return (
    <div className={classes["new-profile-content__diet-info"]}>
      <Typography textAlign="center" level="h3" color="neutral">
        Diéta paraméterek
      </Typography>
      <div>
        <div>
          <DateSettings />
          <WeightGoalSettings />
          <DeficitSettings />
        </div>
      </div>
    </div>
  );
};

export default DietInfoForm;
