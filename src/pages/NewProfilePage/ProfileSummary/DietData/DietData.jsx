import DateSummary from "./DateSummary/DateSummary";
import CalorieSummary from "./CalorieSummary/CalorieSummary";

const DietData = () => {
  return (
    <div>
      <DateSummary />
      <CalorieSummary />
      {/** 

      <Typography>
        Célsúly:{" "}
        {calculatedData.calculatedWeightGoal
          ? `${calculatedData.calculatedWeightGoal} kg`
          : ""}
      </Typography>
      <Typography>
        Összes súlyvesztés:{" "}
        {calculatedData.calculatedWeightloss !== ""
          ? `${calculatedData.calculatedWeightloss} kg`
          : ""}
      </Typography>*/}
    </div>
  );
};

export default DietData;
