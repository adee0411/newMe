import { Sheet, Typography, FormControl, Slider, Alert, Input } from "@mui/joy";
import { LineChart } from "@mui/x-charts";

import { useSelector, useDispatch } from "react-redux";

import { useState } from "react";

import {
  setDeficit,
  setLabelChecked,
  showDeficitWarning,
  setDisabledCheckboxName,
  showCheckboxWarning,
  setDietLength,
  setWeightGoal,
} from "./calorieCustomizerSlice";

import * as utils from "../../utils";

import CalculatorInputGroup from "../UI/CalculatorInputGroup";
import InputGroup from "./InputGroup";

import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

/** Property settings for <Slider /> Component */
const marks = [
  { value: 100, label: "100 kcal" },
  { value: 500, label: "500 kcal" },
  { value: 1000, label: "1000 kcal" },
  { value: 1500, label: "1500 kcal" },
];

function valueText(value) {
  return `${value} kcal`;
}

/* COMPONENT */
const CalorieCustomizer = () => {
  const dispatch = useDispatch();

  const personalData = useSelector(
    (state) => state.calorieCalculator.parameters
  );
  const { deficit, dietLength, weightGoal } = useSelector(
    (state) => state.calorieCustomizer.customInputs
  );
  const { labelChecked } = useSelector(
    (state) => state.calorieCustomizer.checkboxState
  );
  const { deficitWarning } = useSelector((state) => state.calorieCustomizer.UI);
  const { checkBoxWarning } = useSelector(
    (state) => state.calorieCustomizer.UI
  );

  const { disabledCheckboxName } = useSelector(
    (state) => state.calorieCustomizer.checkboxState
  );

  /** Handle State Value Changes */
  const handleDeficitChange = (e) => {
    dispatch(setDeficit(+e.target.value));
    if (e.target.value > 1000) {
      dispatch(showDeficitWarning(true));
    } else {
      dispatch(showDeficitWarning(false));
    }
  };

  const handleDietLengthChange = (e) => {
    dispatch(setDietLength(e.target.value));
  };

  const handleWeightGoalChange = (e) => {
    dispatch(setWeightGoal(e.target.value));
  };

  const handleInputVisibilityCheckboxChange = (e) => {
    const checkboxName = e.target.name;
    if (
      e.target.checked &&
      Object.values(labelChecked).find((el) => el === true)
    ) {
      const checkboxToDisable = Object.entries(labelChecked).find(
        (el) => el[1] === false && el[0] !== e.target.name
      );
      dispatch(setDisabledCheckboxName(checkboxToDisable[0]));
    }
    if (!e.target.checked) {
      if (
        Object.values(labelChecked).filter((el) => el === false).length === 2
      ) {
        dispatch(showCheckboxWarning(true));
        setTimeout(() => {
          dispatch(showCheckboxWarning(false));
        }, 4000);
        return;
      }
      dispatch(setDisabledCheckboxName(""));
    }
    dispatch(setLabelChecked(checkboxName));
    dispatch(showCheckboxWarning(false));
  };

  /* Calculator functions */

  const initialDietParameters = {
    startWeight: personalData.weight.value,
    deficit,
    dietLength: 12,
    weightGoal: null,
  };

  const defineTableToRender = (checkedLabelsStatus) => {
    // Filter the label's name to be rendered
    const tableToRender = Object.entries(checkedLabelsStatus)
      .filter((labelEntry) => labelEntry[1] === true)
      .map((label) => label[0]);

    if (tableToRender.length === 1) {
      if (tableToRender.includes("deficit")) {
        console.log(
          utils.calculateWeightLossWeekByWeek(
            personalData.weight.value,
            12,
            deficit
          )
        );
      }
      if (tableToRender.includes("dietLength")) {
        console.log(
          utils.calculateWeightLossWeekByWeek(
            personalData.weight.value,
            dietLength
          )
        );
      }
      if (tableToRender.includes("weightGoal")) {
        console.log(
          utils.calculateWeightLossWeekByWeek(
            personalData.weight.value,
            12,
            500,
            weightGoal
          )
        );
      }
    } else {
      if (
        tableToRender.includes("deficit") &&
        tableToRender.includes("dietLength")
      ) {
        console.log(
          utils.calculateWeightLossWeekByWeek(
            personalData.weight.value,
            dietLength,
            deficit
          )
        );
      } else if (
        tableToRender.includes("deficit") &&
        tableToRender.includes("weightGoal")
      ) {
        // different function
      } else {
        // different function
      }
    }
  };

  // defineTableToRender(labelChecked);

  return (
    <Sheet>
      <Typography level="title-lg">Calorie Customizer Page</Typography>
      <CalculatorInputGroup
        labelName="Diet Customizer"
        icon={<TuneOutlinedIcon />}
      >
        <InputGroup
          onChange={handleInputVisibilityCheckboxChange}
          checked={labelChecked.deficit}
          name="deficit"
          disabled={disabledCheckboxName === "deficit"}
          label="Calorie deficit (daily)"
        >
          <FormControl>
            <Slider
              type="range"
              size="sm"
              valueLabelDisplay="auto"
              value={deficit}
              min={100}
              max={1500}
              step={100}
              onChange={handleDeficitChange}
              getAriaValueText={valueText}
              marks={marks}
              disabled={!labelChecked.deficit}
              name="deficit"
            />
            {deficitWarning ? (
              <Alert color="warning" sx={{ marginTop: 3 }} size="sm">
                Deficit is getting too high!
              </Alert>
            ) : (
              ""
            )}
          </FormControl>
        </InputGroup>
        <InputGroup
          onChange={handleInputVisibilityCheckboxChange}
          checked={labelChecked.dietLength}
          name="dietLength"
          disabled={disabledCheckboxName === "dietLength"}
          label="Diet length"
        >
          {" "}
          <Input
            type="number"
            endDecorator="weeks"
            value={dietLength}
            onChange={handleDietLengthChange}
            slotProps={{ input: { min: 4 } }}
            disabled={!labelChecked.dietLength}
            name="dietLength"
          />
        </InputGroup>
        <InputGroup
          onChange={handleInputVisibilityCheckboxChange}
          checked={labelChecked.weightGoal}
          name="weightGoal"
          disabled={disabledCheckboxName === "weightGoal"}
          label="Weight goal"
        >
          <Input
            type="number"
            endDecorator="kg"
            value={weightGoal}
            onChange={handleWeightGoalChange}
            slotProps={{ input: { min: 60 } }}
            disabled={!labelChecked.weightGoal}
            name="weightGoal"
          />
        </InputGroup>
      </CalculatorInputGroup>
      {checkBoxWarning ? (
        <Alert color="danger">You're not allowed to uncheck all options!</Alert>
      ) : (
        ""
      )}
    </Sheet>
  );
};

export default CalorieCustomizer;
