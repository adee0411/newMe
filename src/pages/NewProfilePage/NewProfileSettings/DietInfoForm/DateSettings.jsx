import { Grid, FormControl, FormLabel, Input } from "@mui/joy";

import { useDispatch, useSelector } from "react-redux";

import {
  setDietStartDate,
  setDietLength,
  setCalculatedData,
} from "../../../../store/profileSlice";

import { formatDate, calculateDietEnd } from "../../../../utils";

const DateSettings = () => {
  const dispatch = useDispatch();
  const { dietStartInput, dietLengthInput } = useSelector(
    (state) => state.profileData.dietData
  );

  // Handle diet START change
  const handleDietStartDateChange = (e) => {
    const startDateValue = e.target.value;
    dispatch(setDietStartDate(startDateValue));
  };

  // Handle diet LENGTH change
  const handleDietLengthChange = (e) => {
    const lengthValue = e.target.value;
    if (lengthValue < 1 && lengthValue !== "") return;
    dispatch(setDietLength(lengthValue));

    let calculatedDietLength;
    calculatedDietLength = lengthValue;

    const calculatedDietEndDate =
      lengthValue !== "" ? calculateDietEnd(dietStartInput, lengthValue) : "";
    dispatch(
      setCalculatedData({
        dataName: "calculatedDietEndDate",
        dataValue: calculatedDietEndDate,
      })
    );

    dispatch(
      setCalculatedData({
        dataName: "calculatedDietLength",
        dataValue: calculatedDietLength,
      })
    );
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
