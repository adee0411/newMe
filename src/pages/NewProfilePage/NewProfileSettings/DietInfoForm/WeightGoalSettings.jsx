import { Alert, FormControl, FormLabel, Input, Grid } from "@mui/joy";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import {
  setWeightGoal,
  toggleDeficitSettings,
} from "../../../../store/profileSlice";

const WeightGoalSettings = () => {
  const dispatch = useDispatch();

  const [weightGoalAlert, setWeightGoalAlert] = useState(false);

  const { weightGoalInput, dietLengthInput } = useSelector(
    (state) => state.profileData.formInput.dietDataInput
  );

  const { weight } = useSelector(
    (state) => state.profileData.formInput.personalDataInput
  );

  const handleWeightGoalChange = (e) => {
    const weightGoalValue = e.target.value;

    if (weightGoalValue > weight) {
      setWeightGoalAlert(true);
    } else {
      setWeightGoalAlert(false);
    }

    if (weightGoalValue !== "" && dietLengthInput !== "") {
      dispatch(toggleDeficitSettings(true));
    } else {
      dispatch(toggleDeficitSettings(false));
    }
    dispatch(setWeightGoal(weightGoalValue));
  };

  return (
    <FormControl>
      <FormLabel>Célsúly</FormLabel>
      <Grid container spacing={2}>
        <Grid lg={6}>
          <Input
            type="number"
            value={weightGoalInput}
            name="weightGoal"
            onChange={handleWeightGoalChange}
            endDecorator="kg"
            sx={{ flex: 1 }}
          />
        </Grid>
        <Grid lg={6}>
          {weightGoalAlert ? (
            <Alert
              size="sm"
              color="warning"
              variant="plain"
              sx={{ background: "transparent", width: "100%" }}
            >
              A célsúly nem lehet nagyobb, mint a jelenlegi súlyod!
            </Alert>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default WeightGoalSettings;
