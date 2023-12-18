import { Grid, FormControl, FormLabel, Input } from "@mui/joy";

import { useDispatch, useSelector } from "react-redux";

import {
  setDietStartDate,
  setDietLength,
  setDietEndDate,
  toggleDeficitSettings,
} from "../../../store/profileSlice";

import { formatDate } from "../../../utils";

const DateSettings = () => {
  const { weight } = useSelector((state) => state.profileData.personalData);
  const {
    dietStartInput,
    dietLengthInput,
    weightGoalInput,
    presetDeficitInput,
    finetunedDeficitInput,
  } = useSelector((state) => state.profileData.dietData);
  const { totalWeightloss } = useSelector(
    (state) => state.profileData.calculatedData
  );
  const { disableDeficitSettings, isFineTuneDeficitChecked } = useSelector(
    (state) => state.profileData.UI
  );

  const dispatch = useDispatch();

  // Handle diet START change
  const handleDietStartDateChange = (e) => {
    const startDateValue = e.target.value;
    dispatch(setDietStartDate(startDateValue));
  };

  // Handle diet LENGTH change
  const handleDietLengthChange = (e) => {
    const lengthValue = e.target.value;

    // Function to Calculate DIET LENGTH based on weight goal and deficit

    // Set daily deficit
    const dailyDeficit = isFineTuneDeficitChecked
      ? finetunedDeficitInput
      : presetDeficitInput;
  };

  return (
    <div>
      <Grid container columns={3} direction="row" gap={2}>
        <Grid flex={1}>
          <div>
            <FormControl>
              <FormLabel>Diéta kezdete</FormLabel>
              <Input
                type="date"
                name="dietStart"
                onChange={handleDietStartDateChange}
                value={dietStartInput}
                slotProps={{ input: { min: formatDate(new Date()) } }}
              />
            </FormControl>
          </div>
        </Grid>
        <Grid flex={1}>
          <div>
            <FormControl>
              <FormLabel>Diéta hossza</FormLabel>
              <Input
                type="number"
                name="dietLength"
                value={dietLengthInput}
                onChange={handleDietLengthChange}
                endDecorator="hét"
              />
            </FormControl>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DateSettings;
