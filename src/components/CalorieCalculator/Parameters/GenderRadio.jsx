import { useSelector, useDispatch } from "react-redux";

import { RadioGroup, Radio } from "@mui/joy";

import CalculatorInputGroup from "../../UI/CalculatorInputGroup";

import WcIcon from "@mui/icons-material/Wc";

import { setParameters } from "../calorieCalculatorSlice";

const GenderRadio = () => {
  const gender = useSelector(
    (state) => state.calorieCalculator.parameters.gender.value
  );
  const dispatch = useDispatch();

  const handleGenderChange = (event) => {
    dispatch(setParameters({ name: "gender", value: event.target.value }));
  };
  return (
    <CalculatorInputGroup labelName="Nem" icon={<WcIcon />}>
      <RadioGroup orientation="horizontal" size="sm">
        <Radio
          label="Férfi"
          value="male"
          name="gender"
          checked={gender === "male"}
          onChange={handleGenderChange}
        />
        <Radio
          label="Nő"
          value="female"
          name="gender"
          checked={gender === "female"}
          onChange={handleGenderChange}
        />
      </RadioGroup>
    </CalculatorInputGroup>
  );
};

export default GenderRadio;
