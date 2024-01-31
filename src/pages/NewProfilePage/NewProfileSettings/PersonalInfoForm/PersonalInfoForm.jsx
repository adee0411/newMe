import {
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Stack,
  Typography,
  Sheet,
  Avatar,
  Button,
} from "@mui/joy";

import MaleAvatar from "../../../../assets/images/male_avatar.png";
import FemaleAvatar from "../../../../assets/images/female_avatar.png";

import { RxAvatar } from "react-icons/rx";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { LiaWeightSolid } from "react-icons/lia";
import { GiBodyHeight } from "react-icons/gi";

import classes from "./PersonalInfoForm.module.scss";

import { useDispatch, useSelector } from "react-redux";

import { debounce } from "lodash";

import {
  setPersonalDataInput,
  setCalculatedData,
  incrementActiveFormIndex,
  startProfile,
} from "../../../../store/profileSlice";
import { calculateBMR, calculateTDEE } from "../../../../utils";

const PersonalInfoForm = () => {
  const dispatch = useDispatch();

  const { personalDataInput } = useSelector((state) => state.profileData);
  const { name, age, gender, weight, height } = personalDataInput;
  const { activeFormIndex } = useSelector((state) => state.profileData.UI);

  const handleActiveFormChange = () => {
    dispatch(incrementActiveFormIndex());
  };

  const handleNameChange = (e) => {
    const inputName = e.target.name;
    let inputValue = e.target.value.trim();
    if (inputValue.length !== 0) {
      inputValue = inputValue[0].toUpperCase() + inputValue.slice(1);
    }

    dispatch(setPersonalDataInput({ inputName, inputValue }));
  };

  const handleGenderChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    dispatch(setPersonalDataInput({ inputName, inputValue }));
  };

  const handleAgeChange = (e) => {
    const inputName = e.target.name;
    let inputValue = e.target.value;
    if (+inputValue < 1 && inputValue !== "") return;
    dispatch(setPersonalDataInput({ inputName, inputValue: +inputValue }));
  };

  const handleWeightChange = (e) => {
    const inputName = e.target.name;
    let inputValue = e.target.value;
    if (+inputValue < 1 && inputValue !== "") return;
    dispatch(setPersonalDataInput({ inputName, inputValue: +inputValue }));
  };

  const handleHeightChange = (e) => {
    const inputName = e.target.name;
    let inputValue = e.target.value;
    if (+inputValue < 1 && inputValue !== "") return;
    dispatch(setPersonalDataInput({ inputName, inputValue: +inputValue }));
  };

  const isPersonalInfoFormFilled = Object.values(personalDataInput).every(
    (data) => data !== ""
  );

  const renderNextForm = () => {
    // Calculate BMR and TDEE values
    const bmr = calculateBMR(personalDataInput);
    const tdee = calculateTDEE(bmr, personalDataInput.pal);

    // Set the calculated BMR and TDEE values to store
    dispatch(setCalculatedData({ dataName: "bmr", dataValue: bmr }));
    dispatch(setCalculatedData({ dataName: "tdee", dataValue: tdee }));

    // Skip to next form component
    dispatch(incrementActiveFormIndex());
    // Start profile form filling
    dispatch(startProfile());
  };

  return (
    <div
      className={`${classes["new-profile-content__personal-info"]} ${
        activeFormIndex === 0 ? classes["active"] : ""
      }`}
    >
      <Typography textAlign="center" level="h3" color="neutral">
        Személyes adatok
      </Typography>
      <div>
        <Stack width="100%" spacing={2} mb={2}>
          {" "}
          <FormControl sx={{ height: "100%" }}>
            <FormLabel>Nem</FormLabel>
            <RadioGroup
              name="gender"
              orientation="horizontal"
              value={gender}
              overlay
              sx={{ gap: 1, p: 0, m: 0 }}
            >
              <Sheet
                component="label"
                variant="outlined"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                  flex: 1,
                  borderRadius: "md",
                  p: 2,
                  boxShadow: "sm",
                }}
              >
                <Radio value="male" onChange={handleGenderChange} size="sm" />
                <Avatar
                  src={MaleAvatar}
                  sx={{ width: "50px", height: "50px" }}
                />
                <Typography level="body-sm">Férfi</Typography>
              </Sheet>

              <Sheet
                component="label"
                variant="outlined"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                  flex: 1,
                  borderRadius: "md",
                  p: 2,
                  boxShadow: "sm",
                }}
              >
                <Radio value="female" onChange={handleGenderChange} size="sm" />
                <Avatar
                  src={FemaleAvatar}
                  size="sm"
                  sx={{ width: "50px", height: "50px" }}
                />
                <Typography level="body-sm">Nő</Typography>
              </Sheet>
            </RadioGroup>
          </FormControl>{" "}
          <FormControl sx={{ width: "100%" }}>
            <FormLabel>Keresztnév</FormLabel>
            <Input
              name="name"
              value={name}
              startDecorator={<RxAvatar />}
              sx={{ width: "100%" }}
              onChange={handleNameChange}
            />
          </FormControl>{" "}
          <Stack direction="column" spacing={2} width="100%">
            <FormControl sx={{ flex: 1 }}>
              <FormLabel>Kor</FormLabel>
              <Input
                type="number"
                endDecorator="év"
                name="age"
                onChange={handleAgeChange}
                value={age}
                startDecorator={<LiaBirthdayCakeSolid />}
              />
            </FormControl>{" "}
            <FormControl sx={{ flex: 1 }}>
              <FormLabel>Testsúly</FormLabel>
              <Input
                type="number"
                endDecorator="kg"
                name="weight"
                onChange={handleWeightChange}
                value={weight}
                startDecorator={<LiaWeightSolid />}
              />
            </FormControl>{" "}
            <FormControl sx={{ flex: 1 }}>
              <FormLabel>Magasság</FormLabel>
              <Input
                type="number"
                endDecorator="cm"
                name="height"
                onChange={handleHeightChange}
                value={height}
                startDecorator={<GiBodyHeight />}
              />
            </FormControl>
          </Stack>
        </Stack>
        <Button type="button" fullWidth onClick={handleActiveFormChange}>
          Tovább
        </Button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
