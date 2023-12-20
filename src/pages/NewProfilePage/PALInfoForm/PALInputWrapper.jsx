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
  setPersonalData,
} from "../../../store/profileSlice";

import { PAL, calculateTDEE } from "../../../utils";

const PALInputWrapper = () => {
  const dispatch = useDispatch();

  const { pal } = useSelector((state) => state.profileData.personalData);
  const { bmr } = useSelector((state) => state.profileData.calculatedData);

  const handlePalChange = (e) => {
    const inputValue = +e.target.value;
    const tdee = calculateTDEE(bmr, inputValue);
    dispatch(setCalculatedData({ dataName: "tdee", dataValue: tdee }));
    dispatch(setPersonalData({ inputName: "pal", inputValue }));
  };
  return (
    <FormControl>
      <RadioGroup name="pal" value={pal} overlay>
        <List
          sx={{
            "--List-gap": "12px",
            "--ListItem-radius": "8px",
            "--ListItem-paddingY": "1rem",
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
                }}
              >
                <Radio
                  overlay
                  value={pal[1].multiplier}
                  label={pal[1].label}
                  onChange={handlePalChange}
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
