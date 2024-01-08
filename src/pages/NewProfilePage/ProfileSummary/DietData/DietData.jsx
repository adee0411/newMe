import DateSummary from "./DateSummary/DateSummary";
import CalorieSummary from "./CalorieSummary/CalorieSummary";
import WeightSummary from "./WeightSummary/WeightSummary";

const DietData = () => {
  return (
    <div>
      <DateSummary />
      <CalorieSummary />
      <WeightSummary />
    </div>
  );
};

export default DietData;
