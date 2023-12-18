import { Form } from "react-router-dom";
import { Typography, Button } from "@mui/joy";
import PALInputWrapper from "./PALInputWrapper";

import classes from "./PALForm.module.scss";

const PALForm = () => {
  return (
    <div className={classes["new-profile-content__personal-info"]}>
      <Typography textAlign="center" level="h3" color="neutral">
        Fizikai aktivitás
      </Typography>
      <div>
        <PALInputWrapper />
      </div>
    </div>
  );
};

export default PALForm;
