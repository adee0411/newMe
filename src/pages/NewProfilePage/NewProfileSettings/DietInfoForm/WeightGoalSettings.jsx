import { FormControl, FormLabel, Input } from "@mui/joy";

import { useDispatch, useSelector } from "react-redux";

import {
  setWeightGoal,
  toggleDeficitSettings,
} from "../../../../store/profileSlice";

const WeightGoalSettings = () => {
  const dispatch = useDispatch();

  const { weightGoalInput, dietLengthInput } = useSelector(
    (state) => state.profileData.dietData
  );

  const { weight } = useSelector(
    (state) => state.profileData.personalDataInput
  );

  const handleWeightGoalChange = (e) => {
    const weightGoalValue = e.target.value;
    /*
    if (
      (+weightGoalValue > +weight || +weightGoalValue < 1) &&
      weightGoalValue !== ""
    )
      return;*/

    if (weightGoalValue !== "" && dietLengthInput !== "") {
      dispatch(toggleDeficitSettings(true));
    } else {
      dispatch(toggleDeficitSettings(false));
    }
    dispatch(setWeightGoal(weightGoalValue));
  };

  return (
    <div>
      <FormControl>
        <FormLabel>Célsúly</FormLabel>
        <Input
          type="number"
          value={weightGoalInput}
          name="weightGoal"
          onChange={handleWeightGoalChange}
          endDecorator="kg"
        />
      </FormControl>
    </div>
  );
};

export default WeightGoalSettings;
