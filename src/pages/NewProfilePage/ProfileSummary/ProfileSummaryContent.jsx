import { Card } from "@mui/joy";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const ProfileSummaryContent = () => {
  const profileData = useSelector((state) => state.profileData);

  const { personalData, dietData, calculatedData } = profileData;

  const { name, gender, age, weight, height, pal } = personalData;
  const {
    dietStart,
    dietLength,
    dietEnd,
    weightGoal,
    presetDeficit,
    finetunedDeficit,
    dailyCalorieIntake,
    totalWeightloss,
  } = dietData;

  const { isFineTuneDeficitChecked, disableDeficitSettings } = useSelector(
    (state) => state.profileData.UI
  );

  const { bmr, tdee } = calculatedData;

  const calculateDietLength = (totalWeightLoss, dailyDeficit) => {
    return (totalWeightLoss * 7000) / dailyDeficit / 7;
  };

  const calculateDailyDeficit = (totalWeightloss, dietLength) => {
    return (totalWeightloss * 7000) / dietLength / 7;
  };

  const calculateWeightGoal = (dailyDeficit, dietLength) => {
    return weight - ((dailyDeficit * 7) / 7000) * dietLength;
  };

  const calculatedDailyDeficit = disableDeficitSettings
    ? calculateDailyDeficit(totalWeightloss, dietLength)
    : isFineTuneDeficitChecked
    ? finetunedDeficit
    : presetDeficit;

  const calculatedDietLength = dietLength
    ? dietLength
    : !totalWeightloss
    ? ""
    : calculateDietLength(totalWeightloss, calculatedDailyDeficit);

  const calculatedWeightGoal = weightGoal
    ? weightGoal
    : !dietLength
    ? ""
    : calculateWeightGoal(calculatedDailyDeficit, dietLength);

  const dietLengthInDays = calculatedDietLength * 7;

  return (
    <div>
      <Card color="primary" variant="outlined">
        <Typography>
          Alap anyagcsere kalória igénye (BMR): {bmr} kcal
        </Typography>
        <Typography>Napi kalóriaszükséglet (TDEE): {tdee} kcal</Typography>
      </Card>
      <Card color="primary" variant="outlined">
        <Typography>Diéta kezdete: {dietStart.replaceAll("-", ".")}</Typography>
        <Typography>
          Diéta hossza:{" "}
          {calculatedDietLength
            ? `${calculatedDietLength} hét (${dietLengthInDays} nap)`
            : ""}
        </Typography>
        <Typography>Diéta vége: {dietEnd}</Typography>
        <Typography>
          Napi átlagos kalória deficit: {calculatedDailyDeficit} kcal
        </Typography>
        <Typography>
          Napi átlagos kalóriabevitel: {dailyCalorieIntake}
        </Typography>
        <Typography>Célsúly: {calculatedWeightGoal}</Typography>
        <Typography>Összes súlyleadás: {totalWeightloss} </Typography>
        <Typography></Typography>
      </Card>
    </div>
  );
};

export default ProfileSummaryContent;
