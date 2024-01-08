import { Typography } from "@mui/joy";
import PALInputWrapper from "./PALInputWrapper";

import classes from "./PALForm.module.scss";

const PALForm = () => {
  return (
    <div className={classes["new-profile-content__personal-info"]}>
      <Typography textAlign="center" level="h3" color="neutral">
        Fizikai aktivitás
      </Typography>
      <Typography
        level="body-sm"
        color="neutral"
        textAlign="center"
        sx={{ width: "80%", margin: "0 auto" }}
      >
        Válaszd ki, hogy heti szinten milyen a fizikai aktivitásod. Az
        aktivitási szint befolyásolja a napi kalória-felhasználás mértékét, így
        ez egyénenként eltérő lehet.
      </Typography>
      <div>
        <PALInputWrapper />
      </div>
    </div>
  );
};

export default PALForm;
