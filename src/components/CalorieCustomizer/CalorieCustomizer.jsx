import {
  Sheet,
  Typography,
  FormControl,
  FormLabel,
  Slider,
  Alert,
  Input,
  Checkbox,
  Table,
} from "@mui/joy";

import { useSelector, useDispatch } from "react-redux";

import { setDeficit, showDeficitWarning } from "./calorieCustomizerSlice";

import CalculatorInputGroup from "../UI/CalculatorInputGroup";
import InputGroup from "./InputGroup";

import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

const marks = [
  { value: 100, label: "100 kcal" },
  { value: 500, label: "500 kcal" },
  { value: 1000, label: "1000 kcal" },
  { value: 1500, label: "1500 kcal" },
];

function valueText(value) {
  return `${value} kcal`;
}

function calculateWeightLossByWeeks(pace) {
  const weeklyCalorieDeficit = pace * 7;
  const weeklyWeightLoss = (weeklyCalorieDeficit / 7000).toFixed(2);

  let weeklyWeights = [];

  for (let i = 2; i <= 20; i += 2) {
    weeklyWeights.push([i, i * weeklyWeightLoss]);
  }

  return weeklyWeights;
}

function calculateWeightLossByPace(length) {
  const paceIndexes = [200, 400, 600, 800, 1000];

  function calculateWeightLossPerWeek(pace) {
    return (7 * pace) / 7000;
  }

  const totalWeightLossForLength = paceIndexes.map((deficit) => {
    return [deficit, calculateWeightLossPerWeek(deficit) * length];
  });

  return totalWeightLossForLength;
}

function calculateLengthByGoal(currentWeight, goalWeight) {
  function calculateWeightLossPerWeek(pace) {
    return (7 * pace) / 7000;
  }
  const paceIndexes = [200, 400, 600, 800, 1000];

  const weightToLose = currentWeight - goalWeight;

  const lengthByPace = paceIndexes
    .map((deficit) => {
      return calculateWeightLossPerWeek(deficit);
    })
    .map((weightLoss) => {
      return weightToLose / weightLoss;
    });

  return lengthByPace;
}

function calculatePaceByGoal(currentWeight, goalWeight) {
  const weightToLose = currentWeight - goalWeight;

  let paceArray = [];

  for (let i = 8; i <= 30; i += 2) {
    const weightToLosePerWeek = weightToLose / i;
    const dailyDeficit = (7000 * weightToLosePerWeek) / 7;

    /**** If goal weight to lose is too high, the minimum diet length (in weeks) must be the number that allows 1000 or less daily deficit!!!!  */
    if (dailyDeficit >= 1000) continue;
    paceArray.push([dailyDeficit, i]);
  }

  return paceArray;
}

/* COMPONENT */
const CalorieCustomizer = () => {
  const dispatch = useDispatch();
  const { deficit, dietLength, weightGoal } = useSelector(
    (state) => state.calorieCustomizer.customInputs
  );
  const { labelChecked } = useSelector(
    (state) => state.calorieCustomizer.checkboxState
  );
  const { deficitWarning } = useSelector((state) => state.calorieCustomizer.UI);

  /** Handle Value Changes */
  const handleDeficitChange = (e) => {
    dispatch(setDeficit(+e.target.value));
    if (e.target.value > 1000) {
      dispatch(showDeficitWarning(true));
    } else {
      dispatch(showDeficitWarning(false));
    }
  };

  /** Handle Checkbox Changes */

  const weeklyWeightLoss = calculateWeightLossByWeeks(deficit);
  const weightLossByPace = calculateWeightLossByPace(dietLength);
  const lengthByGoalWeight = calculateLengthByGoal(100, weightGoal);
  const paceByGoal = calculatePaceByGoal(100, weightGoal);

  return (
    <Sheet>
      <Typography level="title-lg">Calorie Customizer Page</Typography>
      <CalculatorInputGroup
        labelName="Diet Customizer"
        icon={<TuneOutlinedIcon />}
      >
        <InputGroup>
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
      </CalculatorInputGroup>
    </Sheet>
  );
};
{
  /*
        <Sheet sx={{ my: 3 }}>
          <FormControl orientation="horizontal" sx={{ gap: 1, my: 1 }}>
            <Checkbox
              onChange={handleInputVisibilityCheckboxChange}
              checked={labelChecked.deficit}
              name="deficit"
              disabled={disabledCheckboxName === "deficit"}
            />
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
              step={100}
              onChange={handleDeficitChange}
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
            <Checkbox
              onChange={handleInputVisibilityCheckboxChange}
              checked={labelChecked.length}
              name="length"
              disabled={disabledCheckboxName === "length"}
            />
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
            <Checkbox
              onChange={handleInputVisibilityCheckboxChange}
              checked={labelChecked.goal}
              name="goal"
              disabled={disabledCheckboxName === "goal"}
            />
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
            
        {checkboxWarning ? (
          <Alert color="danger">
            You're not allowed to uncheck all options!
          </Alert>
        ) : (
          ""
        )}
      </CalculatorInputGroup>
      <Sheet color="neutral" variant="soft" sx={{ p: 2, borderRadius: 5 }}>
        Based on your settings,your diet plan will look like the following:
      </Sheet>
      {labelChecked.deficit && (
        <Sheet>
          <Table size="sm">
            <thead>
              <tr>
                <th>Week</th>
                <th>Weight loss</th>
              </tr>
            </thead>
            <tbody>
              {weeklyWeightLoss.map((el) => {
                return (
                  <tr key={el[0]}>
                    <td>{el[0]}</td>
                    <td>{el[1]} kg</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Sheet>
      )}

      {labelChecked.length && (
        <Sheet>
          <Table size="sm">
            <thead>
              <tr>
                <th>Average deficit/day</th>
                <th>Total weight loss</th>
              </tr>
            </thead>
            <tbody>
              {weightLossByPace.map((el) => {
                return (
                  <tr key={el[0]}>
                    <td>{el[0]} kcal/day</td>
                    <td>{el[1]} kg</td>
                  </tr>
                );
              })}
            </tbody>
            </Table>
        </Sheet>
            )}
            </Sheet>*/
}

export default CalorieCustomizer;
