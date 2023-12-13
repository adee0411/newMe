import { FormControl, FormLabel, Input } from "@mui/joy";

import { useDispatch, useSelector } from "react-redux";

import {
  setWeightGoal,
  setTotalWeightloss,
  toggleDeficitSettings,
} from "../../../store/profileSlice";

const WeightGoalSettings = () => {
  const dietData = useSelector((state) => state.profileData.dietData);
  const { weightGoal, dietLength } = dietData;
  const { weight } = useSelector((state) => state.profileData.personalData);

  const dispatch = useDispatch();

  const handleWeightGoalChange = (e) => {
    const weightGoalValue = e.target.value;
    const totalWeightloss = weight - weightGoalValue;
    dispatch(setWeightGoal(weightGoalValue));
    dispatch(setTotalWeightloss(totalWeightloss));

    if (dietLength && e.target.value !== "") {
      dispatch(toggleDeficitSettings(true));
    } else {
      dispatch(toggleDeficitSettings(false));
    }
  };

  return (
    <div>
      <FormControl>
        <FormLabel>Célsúly</FormLabel>
        <Input
          type="number"
          value={weightGoal}
          name="weightGoal"
          onChange={handleWeightGoalChange}
          endDecorator="kg"
        />
      </FormControl>
    </div>
  );
};

export default WeightGoalSettings;
