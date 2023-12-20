import { Typography } from "@mui/joy";
import { useSelector } from "react-redux";

const DietData = () => {
  const { dietStartInput } = useSelector((state) => state.profileData.dietData);
  const { calculatedData } = useSelector((state) => state.profileData);
  return (
    <div>
      <Typography>
        Diéta kezdete: {`${dietStartInput.replaceAll("-", ".")}.`}
      </Typography>
      <Typography>
        Diéta vége:{" "}
        {calculatedData.calculatedDietEndDate
          ? `${calculatedData.calculatedDietEndDate.replaceAll("-", ".")}.`
          : ""}
      </Typography>
      <Typography>
        Diéta hossza:{" "}
        {calculatedData.calculatedDietLength
          ? `${calculatedData.calculatedDietLength} hét`
          : ""}
      </Typography>

      <Typography>
        Napi kalóriadeficit:{" "}
        {calculatedData.calculatedDailyDeficit
          ? `${calculatedData.calculatedDailyDeficit} kcal`
          : ""}
      </Typography>
      <Typography>
        Napi kalóriabevitel:{" "}
        {calculatedData.calculatedCalorieIntake
          ? `${calculatedData.calculatedCalorieIntake} kcal`
          : ""}
      </Typography>
      <Typography>
        Célsúly:{" "}
        {calculatedData.calculatedWeightGoal
          ? `${calculatedData.calculatedWeightGoal} kg`
          : ""}
      </Typography>
      <Typography>
        Összes súlyvesztés:{" "}
        {calculatedData.calculatedWeightloss
          ? `${calculatedData.calculatedWeightloss} kg`
          : ""}
      </Typography>
    </div>
  );
};

export default DietData;
