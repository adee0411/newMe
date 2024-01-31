import {
  FormControl,
  List,
  ListItem,
  RadioGroup,
  Radio,
  Typography,
} from "@mui/joy";

import { useDispatch, useSelector } from "react-redux";

import {
  setCalculatedData,
  setPersonalDataInput,
} from "../../../../store/profileSlice";

import { PAL, calculateTDEE } from "../../../../utils";

const PALInputWrapper = () => {
  const dispatch = useDispatch();

  const { pal } = useSelector((state) => state.profileData.personalDataInput);
  const { bmr } = useSelector((state) => state.profileData.calculatedData);

  const handlePalChange = (e) => {
    const inputName = e.target.name;
    const inputValue = +e.target.value;
    const tdee = calculateTDEE(bmr, inputValue);
    dispatch(setCalculatedData({ dataName: "tdee", dataValue: tdee }));
    dispatch(setPersonalDataInput({ inputName, inputValue }));
  };
  return (
    <FormControl>
      <RadioGroup name="pal" value={pal} overlay>
        <List
          sx={{
            "--ListItem-radius": "8px",
            "--ListItem-paddingY": "0.5rem",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "6px",
          }}
          size="md"
        >
          {Object.entries(PAL).map((pal) => {
            return (
              <ListItem
                variant="outlined"
                key={pal[0]}
                sx={{
                  boxShadow: "sm",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "calc(50% - 4px)",
                }}
              >
                <Radio
                  overlay
                  value={pal[1].multiplier}
                  label={pal[1].label}
                  onChange={handlePalChange}
                  name="pal"
                ></Radio>
                <Typography fontSize="sm" color="neutral">
                  ({pal[1].description})
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </RadioGroup>
    </FormControl>
  );
};

export default PALInputWrapper;
