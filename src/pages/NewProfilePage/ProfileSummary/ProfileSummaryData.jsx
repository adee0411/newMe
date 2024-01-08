import PersonalData from "./PersonalData/PersonalData";
import EnergyData from "./EnergyData/EnergyData";
import DietData from "./DietData/DietData";
import { useSelector } from "react-redux";

import { Grid } from "@mui/joy";

const ProfileSummaryData = () => {
  const { activeFormIndex } = useSelector((state) => state.profileData.UI);
  const { weightGoalInput, dietLengthInput } = useSelector(
    (state) => state.profileData.dietData
  );

  const isDietDataEmpty = weightGoalInput === "" && dietLengthInput === "";
  const gridColumns = activeFormIndex === 1 ? 12 : 6;
  return (
    <>
      {activeFormIndex > 0 && (
        <Grid container direction="row" spacing={2}>
          <Grid lg={gridColumns}>
            <PersonalData />
          </Grid>
          {activeFormIndex > 1 && (
            <Grid lg={gridColumns}>
              <EnergyData />
            </Grid>
          )}
        </Grid>
      )}

      {activeFormIndex > 1 && !isDietDataEmpty && <DietData />}
    </>
  );
};

export default ProfileSummaryData;
