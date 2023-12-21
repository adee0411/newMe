import {
  IconButton,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Typography,
  Divider,
} from "@mui/joy";

import { useDispatch, useSelector } from "react-redux";

import { setWeightGoal } from "../../../store/profileSlice";

import { GrPowerReset } from "react-icons/gr";

const WeightGoalSettings = () => {
  const dispatch = useDispatch();

  const { weightGoalInput } = useSelector(
    (state) => state.profileData.dietData
  );

  const { weight } = useSelector((state) => state.profileData.personalData);

  const handleWeightGoalChange = (e) => {
    const weightGoalValue = e.target.value;
    if (
      (+weightGoalValue > +weight || +weightGoalValue < 1) &&
      weightGoalValue !== ""
    )
      return;
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
