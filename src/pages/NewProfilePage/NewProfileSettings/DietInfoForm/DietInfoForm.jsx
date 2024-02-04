import { useSelector } from "react-redux";

import { Stack, Typography } from "@mui/joy";

import classes from "./DietInfoForm.module.scss";

import DateSettings from "./DateSettings";
import WeightGoalSettings from "./WeightGoalSettings";
import DeficitSettings from "./DeficitSettings";

const DietInfoForm = () => {
  const { activeFormIndex } = useSelector(
    (state) => state.profileData.formInput.UI
  );

  return (
    <div
      className={`${classes["new-profile-content__diet-info"]} ${
        activeFormIndex === 2 ? classes["active"] : ""
      }`}
    >
      <Typography textAlign="center" level="h3" color="neutral" mb={4}>
        Diéta paraméterek
      </Typography>
      <Stack spacing={2}>
        <DateSettings />
        <WeightGoalSettings />
        <DeficitSettings />
      </Stack>
    </div>
  );
};

export default DietInfoForm;
