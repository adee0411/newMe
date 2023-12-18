import classes from "./NewProfilePage.module.scss";

import { Typography, Grid, Button } from "@mui/joy";

import StepperWrapper from "./StepperWrapper";
import PersonalInfoForm from "./PersonalInfoForm/PersonalInfoForm";
import PALForm from "./PALInfoForm/PALForm";
import DietInfoForm from "./DietInfoForm/DietInfoForm";
import ProfileSummary from "./ProfileSummary/ProfileSummary";

import { useSelector, useDispatch } from "react-redux";
import { Form } from "react-router-dom";

import { incrementActiveFormIndex } from "../../store/profileSlice";

const forms = {
  0: <PersonalInfoForm />,
  1: <PALForm />,
  2: <DietInfoForm />,
};

const NewProfilePage = () => {
  const dispatch = useDispatch();

  const { activeFormIndex } = useSelector((state) => state.profileData.UI);

  const handleIncrementActiveFormIndex = (e) => {
    e.preventDefault();
    dispatch(incrementActiveFormIndex());
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
                {forms[activeFormIndex]}
                {activeFormIndex !== 2 && (
                  <Button
                    type="button"
                    onClick={handleIncrementActiveFormIndex}
                    size="md"
                    fullWidth
                  >
                    Tovább
                  </Button>
                )}
                {activeFormIndex === 2 && (
                  <Button type="submit" size="md" fullWidth>
                    Profil elkészítése
                  </Button>
                )}
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
