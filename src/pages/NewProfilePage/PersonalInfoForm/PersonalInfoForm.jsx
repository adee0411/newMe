import {
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Grid,
  Typography,
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

import { setPersonalDataInput } from "../../../store/profileSlice";

const PersonalInfoForm = () => {
  const dispatch = useDispatch();

  const { personalDataInput } = useSelector((state) => state.profileData);
  const { name, age, gender, weight, height } = personalDataInput;

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

  return (
    <div className={classes["new-profile-content__personal-info"]}>
      <Typography textAlign="center" level="h3" color="neutral">
        Személyes adatok
      </Typography>
      <div>
        <Grid container spacing={2} flexGrow={1} mb={4}>
          <Grid lg={6}>
            {" "}
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
          </Grid>
          <Grid lg={6}>
            {" "}
            <FormControl sx={{ height: "100%" }}>
              <FormLabel>Nem</FormLabel>
              <RadioGroup
                name="gender"
                orientation="horizontal"
                value={gender}
                overlay
                sx={{ gap: 1, p: 0, m: 0, height: "100%" }}
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
                  <Avatar
                    src={MaleAvatar}
                    sx={{ width: "20px", height: "20px" }}
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
                    p: 0.2,
                    boxShadow: "sm",
                  }}
                >
                  <Radio
                    value="female"
                    onChange={handleGenderChange}
                    size="sm"
                  />
                  <Avatar
                    src={FemaleAvatar}
                    size="sm"
                    sx={{ width: "20px", height: "20px" }}
                  />
                  <Typography level="body-sm">Nő</Typography>
                </Sheet>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid lg={4}>
            {" "}
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
          </Grid>
          <Grid lg={4}>
            {" "}
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
          </Grid>
          <Grid lg={4}>
            {" "}
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
        </Grid>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
