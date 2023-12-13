import { Typography, Button } from "@mui/joy";
import { Form } from "react-router-dom";

import classes from "./DietInfoForm.module.scss";

import DateSettings from "./DateSettings";
import WeightGoalSettings from "./WeightGoalSettings";
import DeficitSettings from "./DeficitSettings";

const DietInfoForm = () => {
  return (
    <div className={classes["new-profile-content__diet-info"]}>
      <Typography textAlign="center" level="h3" color="neutral">
        Diéta paraméterek
      </Typography>
      <Form>
        <div>
          <DateSettings />
          <WeightGoalSettings />
          <DeficitSettings />
        </div>
        <Button
          type="submit"
          size="md"
          sx={{ margin: "1rem 0", width: "100%" }}
        >
          Mentés
        </Button>
      </Form>
    </div>
  );
};

export default DietInfoForm;
