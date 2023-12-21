import classes from "./NewProfilePage.module.scss";

import { Typography, Grid, Button } from "@mui/joy";

import StepperWrapper from "./StepperWrapper";
import PersonalInfoForm from "./PersonalInfoForm/PersonalInfoForm";
import PALForm from "./PALInfoForm/PALForm";
import DietInfoForm from "./DietInfoForm/DietInfoForm";
import ProfileSummary from "./ProfileSummary/ProfileSummary";

import { useSelector, useDispatch } from "react-redux";
import { Form } from "react-router-dom";

import {
  incrementActiveFormIndex,
  setCalculatedData,
  startProfile,
} from "../../store/profileSlice";

import { calculateBMR, calculateTDEE } from "../../utils";

const NewProfilePage = () => {
  const dispatch = useDispatch();

  const { activeFormIndex } = useSelector((state) => state.profileData.UI);
  const { personalData } = useSelector((state) => state.profileData);

  const isPersonalDataFormFilled = Object.values(personalData).every(
    (data) => data !== ""
  );

  const handlePersonalDataSubmit = (e) => {
    e.preventDefault();
    const bmr = calculateBMR(personalData);
    const tdee = calculateTDEE(bmr, personalData.pal);

    dispatch(setCalculatedData({ dataName: "bmr", dataValue: bmr }));
    dispatch(setCalculatedData({ dataName: "tdee", dataValue: tdee }));
    dispatch(incrementActiveFormIndex());
    dispatch(startProfile());
  };

  const handlePALSubmit = (e) => {
    e.preventDefault();
    dispatch(incrementActiveFormIndex());
  };

  const handleCreateProfile = (e) => {
    e.preventDefault();
    console.log("creating");
  };

  const forms = {
    0: { component: <PersonalInfoForm />, handler: handlePersonalDataSubmit },
    1: {
      component: <PALForm />,
      handler: handlePALSubmit,
    },
    2: { component: <DietInfoForm />, handler: handleCreateProfile },
  };

  return (
    <div className={classes["new-profile-container"]}>
      <Grid container columns={2} height="100%" gap="2rem">
        <Grid flex={1} display="flex" justifyContent="center">
          <div className={classes["new-profile-content"]}>
            <div className={classes["new-profile-content__header"]}>
              <Typography level="h1" fontSize={32} mb="1rem" textAlign="center">
                Készítsd el a profilodat!
              </Typography>
              <Typography textAlign="center" fontSize="sm" color="neutral">
                Néhány egyszerű lépésben add meg adataid, céljaid, hogy a lehető
                legpontosabb terveket és mérőszámokat készíthessük el neked!
              </Typography>
              <Typography textAlign="center" fontSize="sm" color="neutral">
                Ha azonnal a vezérlőpulthoz ugranál,{" "}
                <Typography component="span" color="primary">
                  kattints ide
                </Typography>
                ! A beállításaid alapértelmezettek lesznek, amelyeket bármikor
                módosíthatsz.
              </Typography>
              <StepperWrapper />
            </div>
            <div className={classes["new-profile-content__body"]}>
              <Form>
                {forms[activeFormIndex].component}
                <Button
                  type={`${activeFormIndex === 2 ? "submit" : "button"}`}
                  onClick={forms[activeFormIndex].handler}
                  size="md"
                  fullWidth
                  disabled={!isPersonalDataFormFilled}
                >
                  Tovább
                </Button>
              </Form>
            </div>
          </div>
        </Grid>
        <Grid flex={1}>
          <ProfileSummary />
        </Grid>
      </Grid>
    </div>
  );
};

export default NewProfilePage;
