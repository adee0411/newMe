import { Form } from "react-router-dom";
import { Typography, Button } from "@mui/joy";
import PALInputWrapper from "./PALInputWrapper";

import classes from "./PALForm.module.scss";

const PALForm = ({ onSubmitForm }) => {
  return (
    <div className={classes["new-profile-content__personal-info"]}>
      <Typography textAlign="center" level="h3" color="neutral">
        Fizikai aktivitás
      </Typography>
      <Form>
        <PALInputWrapper />
        <Button
          type="submit"
          size="md"
          sx={{ margin: "1rem 0", width: "100%" }}
          onClick={onSubmitForm}
        >
          Tovább
        </Button>
      </Form>
    </div>
  );
};

export default PALForm;
