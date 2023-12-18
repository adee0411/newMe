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
      <div>
        <div>
          <DateSettings />
          <WeightGoalSettings />
          <DeficitSettings />
        </div>
      </div>
    </div>
  );
};

export default DietInfoForm;
