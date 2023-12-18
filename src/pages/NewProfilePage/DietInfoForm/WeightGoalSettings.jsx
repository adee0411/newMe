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

import {
  setWeightGoal,
  setTotalWeightloss,
  toggleDeficitSettings,
  setCalculatedWeightGoal,
  setCalculatedDietLength,
  setDietEndDate,
} from "../../../store/profileSlice";

import { formatDate } from "../../../utils";

import { GrPowerReset } from "react-icons/gr";

const WeightGoalSettings = () => {
  const dispatch = useDispatch();

  const { weightGoalInput } = useSelector(
    (state) => state.profileData.dietData
  );

  const handleWeightGoalChange = (e) => {
    const weightGoalValue = e.target.value;

    dispatch(setWeightGoal(weightGoalValue));
  };

  const resetWeightGoal = () => {
    dispatch(setWeightGoal(""));
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
          endDecorator={
            <Stack direction="row" spacing={1}>
              <Typography>kg</Typography>
              <Divider color="neutral" orientation="vertical" />
              <IconButton
                color="primary"
                variant="plain"
                title="Visszaállítás"
                onClick={resetWeightGoal}
              >
                <GrPowerReset />
              </IconButton>
            </Stack>
          }
        />
      </FormControl>
    </div>
  );
};

export default WeightGoalSettings;
