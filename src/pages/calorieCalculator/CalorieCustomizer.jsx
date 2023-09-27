import { useState } from "react";

import {
  Sheet,
  Typography,
  FormControl,
  FormLabel,
  Slider,
  Alert,
  Input,
  Checkbox,
} from "@mui/joy";

import CalculatorInputGroup from "../../components/UI/CalculatorInputGroup";

import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

const marks = [
  { value: 250, label: "250 kcal" },
  { value: 500, label: "500 kcal" },
  { value: 750, label: "750 kcal" },
  { value: 1000, label: "1000 kcal" },
  { value: 1250, label: "1250 kcal" },
  { value: 1500, label: "1500 kcal" },
];

function valueText(value) {
  return `${value} kcal`;
}

const CalorieCustomizer = () => {
  const [deficitValue, setDeficitValue] = useState(500);
  const [warning, setWarning] = useState(false);

  const [dietLength, setDietLength] = useState(4);
  const [weightGoal, setWeightGoal] = useState(80);

  const [labelChecked, setLabelChecked] = useState({
    deficit: false,
    length: false,
    goal: false,
  });

  /** Handle Value Changes */
  const handleDietPaceChange = (e) => {
    setDeficitValue(+e.target.value);
    if (e.target.value > 1000) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  };

  const handleDietLengthChange = (e) => {
    setDietLength(+e.target.value);
  };

  const handleWeightGoalChange = (e) => {
    setWeightGoal(+e.target.value);
  };

  /** Handle Checkbox Changes */

  const handleDeficitCheckboxChange = (e) => {
    setLabelChecked((prevState) => {
      return { ...prevState, deficit: !prevState.deficit };
    });
  };

  const handleDietLengthCheckboxChange = (e) => {
    setLabelChecked((prevState) => {
      return { ...prevState, length: !prevState.length };
    });
  };

  const handleWeightGoalCheckboxChange = (e) => {
    setLabelChecked((prevState) => {
      return { ...prevState, goal: !prevState.goal };
    });
  };

  return (
    <Sheet>
      <Typography level="title-lg">Calorie Customizer Page</Typography>
      <CalculatorInputGroup
        labelName="Diet Customizer"
        icon={<TuneOutlinedIcon />}
      >
        <Sheet sx={{ my: 3 }}>
          <FormControl orientation="horizontal" sx={{ gap: 1, my: 1 }}>
            <Checkbox onChange={handleDeficitCheckboxChange} />
            <FormLabel sx={{ opacity: `${!labelChecked.deficit ? 0.5 : 1}` }}>
              Calorie deficit pace (daily)
            </FormLabel>
          </FormControl>
          <FormControl>
            <Slider
              type="range"
              size="sm"
              valueLabelDisplay="auto"
              value={deficitValue}
              min={100}
              max={1500}
              step={50}
              onChange={handleDietPaceChange}
              getAriaValueText={valueText}
              marks={marks}
              disabled={!labelChecked.deficit}
              name="deficit"
            />
            {warning ? (
              <Alert color="warning" sx={{ marginTop: 3 }} size="sm">
                Deficit is getting too high!
              </Alert>
            ) : (
              ""
            )}
          </FormControl>
        </Sheet>

        <Sheet sx={{ my: 3 }}>
          <FormControl orientation="horizontal" sx={{ gap: 1, my: 1 }}>
            <Checkbox onChange={handleDietLengthCheckboxChange} />
            <FormLabel sx={{ opacity: `${!labelChecked.length ? 0.5 : 1}` }}>
              Diet length
            </FormLabel>
          </FormControl>
          <FormControl>
            {" "}
            <Input
              type="number"
              endDecorator="weeks"
              value={dietLength}
              onChange={handleDietLengthChange}
              slotProps={{ input: { min: 4 } }}
              disabled={!labelChecked.length}
              name="length"
            />
          </FormControl>
        </Sheet>

        <Sheet sx={{ my: 3 }}>
          <FormControl orientation="horizontal" sx={{ gap: 1, my: 1 }}>
            <Checkbox onChange={handleWeightGoalCheckboxChange} />
            <FormLabel sx={{ opacity: `${!labelChecked.goal ? 0.5 : 1}` }}>
              Weight goal
            </FormLabel>
          </FormControl>
          <FormControl>
            {" "}
            <Input
              type="number"
              endDecorator="kg"
              value={weightGoal}
              onChange={handleWeightGoalChange}
              slotProps={{ input: { min: 60 } }}
              disabled={!labelChecked.goal}
              name="goal"
            />
          </FormControl>
        </Sheet>
      </CalculatorInputGroup>
    </Sheet>
  );
};

export default CalorieCustomizer;
