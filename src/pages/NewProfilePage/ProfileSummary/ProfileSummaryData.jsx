import { Stack } from "@mui/joy";

import BMRCard from "./ResultCards/BMRCard";
import TDEECard from "./ResultCards/TDEECard";

import PersonalData from "./PersonalData/PersonalData";
import DietData from "./DietData/DietData";

const ProfileSummaryData = () => {
  return (
    <div>
      <PersonalData />
      <Stack direction="row" gap={2} justifyContent="space-between">
        <BMRCard />
        <TDEECard />
      </Stack>
      <DietData />
    </div>
  );
};

export default ProfileSummaryData;
