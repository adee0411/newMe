import { Grid, FormControl, FormLabel, Input } from "@mui/joy";

import { useDispatch, useSelector } from "react-redux";

import {
  setDietStartDate,
  setDietLengthDate,
  setDietEndDate,
  toggleDeficitSettings,
} from "../../../store/profileSlice";

import { formatDate } from "../../../utils";

const DateSettings = () => {
  const dietData = useSelector((state) => state.profileData.dietData);
  const { dietStart, dietLength, weightGoal } = dietData;

  const dispatch = useDispatch();

  const handleDietStartDateChange = (e) => {
    const startDateValue = e.target.value;
    dispatch(setDietStartDate(startDateValue));
  };

  const handleDietLengthChange = (e) => {
    const lengthValue = e.target.value;
    const dietEnd = formatDate(
      new Date(
        new Date(dietStart).setDate(
          new Date(dietStart).getDate() + lengthValue * 7
        )
      )
    );
    dispatch(setDietEndDate(dietEnd));

    dispatch(setDietLengthDate(lengthValue));
    if (weightGoal && e.target.value !== "") {
      dispatch(toggleDeficitSettings(true));
    } else {
      dispatch(toggleDeficitSettings(false));
    }
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
                value={dietStart}
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
                value={dietLength}
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
