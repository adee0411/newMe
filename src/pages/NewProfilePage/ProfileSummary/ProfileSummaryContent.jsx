import { Stack } from "@mui/joy";

import { useSelector, useDispatch } from "react-redux";

import { setCalculatedData } from "../../../store/profileSlice";

import BMRCard from "./ResultCards/BMRCard";
import TDEECard from "./ResultCards/TDEECard";

import { calculateBMR, calculateTDEE } from "../../../utils";
import PersonalData from "./PersonalData/PersonalData";

const ProfileSummaryContent = () => {
  const dispatch = useDispatch();

  const { personalData } = useSelector((state) => state.profileData);
  const { pal } = personalData;

  const bmr = calculateBMR(personalData);
  const tdee = calculateTDEE(bmr, pal);

  dispatch(setCalculatedData({ dataName: "bmr", dataValue: bmr }));
  dispatch(setCalculatedData({ dataName: "tdee", dataValue: tdee }));
  return (
    <div>
      <PersonalData />
      <Stack direction="row" gap={2} justifyContent="space-between">
        <BMRCard />
        <TDEECard />
      </Stack>
    </div>
  );
};

export default ProfileSummaryContent;
