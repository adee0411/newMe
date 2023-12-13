import { Form } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Grid,
  Typography,
  Button,
  Sheet,
  Avatar,
} from "@mui/joy";

import MaleAvatar from "../../../assets/images/undraw_male_avatar_g98d.svg";
import FemaleAvatar from "../../../assets/images/undraw_female_avatar_efig.svg";

import { RxAvatar } from "react-icons/rx";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { LiaWeightSolid } from "react-icons/lia";
import { GiBodyHeight } from "react-icons/gi";

import classes from "./PersonalInfoForm.module.scss";

import { useDispatch, useSelector } from "react-redux";

import {
  setPersonalData,
  setBMR,
  setTDEE,
  startProfile,
} from "../../../store/profileSlice";

import { calculateBMR, calculateTDEE } from "../../../utils";

const PersonalInfoForm = ({ onSubmitForm }) => {
  const personalData = useSelector((state) => state.profileData.personalData);
  const { name, age, gender, weight, height, pal } = personalData;

  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    let inputValue = e.target.value.trim();
    if (inputValue.length !== 0) {
      inputValue = inputValue[0].toUpperCase() + inputValue.slice(1);
    }

    dispatch(setPersonalData({ inputName: "name", inputValue }));
  };

  const handleGenderChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    dispatch(setPersonalData({ inputName, inputValue }));
  };

  const handleAgeChange = (e) => {
    let inputValue = +e.target.value;
    dispatch(setPersonalData({ inputName: "age", inputValue }));
  };

  const handleWeightChange = (e) => {
    let inputValue = +e.target.value;

    dispatch(setPersonalData({ inputName: "weight", inputValue }));
  };

  const handleHeightChange = (e) => {
    let inputValue = +e.target.value;

    dispatch(setPersonalData({ inputName: "height", inputValue }));
  };

  const submitData = (e) => {
    e.preventDefault();
    const bmr = calculateBMR(personalData);
    const tdee = calculateTDEE(bmr, pal);
    dispatch(setBMR(bmr));
    dispatch(setTDEE(tdee));
    dispatch(startProfile());
    onSubmitForm();
  };

  return (
    <div className={classes["new-profile-content__personal-info"]}>
      <Typography textAlign="center" level="h3" color="neutral">
        Személyes adatok
      </Typography>
      <Form onSubmit={submitData}>
        <Grid container gap={2} justifyContent="space-between" my={4}>
          <Grid>
            <FormControl>
              <FormLabel>Keresztnév</FormLabel>
              <Input
                sx={{ width: "100%" }}
                name="name"
                value={name}
                onChange={handleNameChange}
                startDecorator={<RxAvatar />}
              />
            </FormControl>{" "}
            <FormControl>
              <FormLabel>Kor</FormLabel>
              <Input
                type="number"
                sx={{ width: "100%" }}
                endDecorator="év"
                name="age"
                onChange={handleAgeChange}
                value={age}
                startDecorator={<LiaBirthdayCakeSolid />}
              />
            </FormControl>{" "}
            <FormControl>
              <FormLabel>Testsúly</FormLabel>
              <Input
                type="number"
                sx={{ width: "100%" }}
                endDecorator="kg"
                name="weight"
                onChange={handleWeightChange}
                value={weight}
                startDecorator={<LiaWeightSolid />}
              />
            </FormControl>{" "}
            <FormControl>
              <FormLabel>Magasság</FormLabel>
              <Input
                type="number"
                sx={{ width: "100%" }}
                endDecorator="cm"
                name="height"
                onChange={handleHeightChange}
                value={height}
                startDecorator={<GiBodyHeight />}
              />
            </FormControl>
          </Grid>
          <Grid container justifyContent="space-between" gap={2} my={4}>
            {" "}
            <FormControl>
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
                    p: 0.2,
                    boxShadow: "sm",
                  }}
                >
                  <Radio value="male" onChange={handleGenderChange} size="sm" />
                  <Avatar src={MaleAvatar} size="sm" />
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
                    p: 0.2,
                    boxShadow: "sm",
                  }}
                >
                  <Radio
                    value="female"
                    onChange={handleGenderChange}
                    size="sm"
                  />
                  <Avatar src={FemaleAvatar} size="sm" />
                </Sheet>
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <Button
          type="submit"
          size="md"
          sx={{ margin: "1rem 0", width: "100%" }}
        >
          Tovább
        </Button>
      </Form>
    </div>
  );
};

export default PersonalInfoForm;
