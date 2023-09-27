import { Sheet } from "@mui/joy";

import ParameterForm from "../../components/CalorieCalculator/Parameters/ParameterForm";
import CalculatedValues from "../../components/CalorieCalculator/DefaultCaloriePlan/CalculatedValues";
/*import DefaultCaloriePlan from "../../components/CalorieCalculator/DefaultCaloriePlan/DefaultCaloriePlan";*/

const CalorieCalculatorPage = () => {
  return (
    <Sheet>
      <ParameterForm />
      <CalculatedValues />
      {/*<DefaultCaloriePlan />*/}
    </Sheet>
  );
};

export default CalorieCalculatorPage;
