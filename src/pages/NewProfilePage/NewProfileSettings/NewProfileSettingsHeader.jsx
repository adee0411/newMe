import { Typography } from "@mui/joy";

import StepperWrapper from "../StepperWrapper";

const NewProfileSettingsHeader = () => {
  return (
    <div>
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
  );
};

export default NewProfileSettingsHeader;
