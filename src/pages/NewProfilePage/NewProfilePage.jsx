import { useState } from "react";

import classes from "./NewProfilePage.module.scss";

import { Typography, Grid } from "@mui/joy";

import StepperWrapper from "./StepperWrapper";
import PersonalInfoForm from "./PersonalInfoForm";
import PALForm from "./PALForm";

const NewProfilePage = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(0);

  const renderPALInfoForm = (e) => {
    e.preventDefault();
    setActiveFormIndex(1);
  };

  const renderDietInfoForm = (e) => {
    e.preventDefault();
    setActiveFormIndex(2);
  };
  return (
    <div className={classes["new-profile-container"]}>
      <Grid container columns={2} height="100%" gap="2rem">
        <Grid flex={1} display="flex" justifyContent="center">
          <div className={classes["new-profile-content"]}>
            <div className={classes["new-profile-content__header"]}>
              <Typography level="h1" fontSize={32} mb="1rem" textAlign="center">
                Készítsd el profilodat!
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
              <StepperWrapper
                activeFormIndex={activeFormIndex}
                onSetFormIndex={setActiveFormIndex}
              />
            </div>
            <div className={classes["new-profile-content__body"]}>
              {activeFormIndex === 0 && (
                <PersonalInfoForm onSubmitForm={renderPALInfoForm} />
              )}
              {activeFormIndex === 1 && (
                <PALForm onSubmitForm={renderDietInfoForm} />
              )}
            </div>
          </div>
        </Grid>
        <Grid flex={1}>Some content on the right side</Grid>
      </Grid>
    </div>
  );
};

export default NewProfilePage;
