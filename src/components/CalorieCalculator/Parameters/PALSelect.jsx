import { Select, Option } from "@mui/joy";
import { useSelector, useDispatch } from "react-redux";
import { setParameters } from "../calorieCalculatorSlice";

import CalculatorInputGroup from "../../UI/CalculatorInputGroup";

import DirectionsRunOutlinedIcon from "@mui/icons-material/DirectionsRunOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";

import { PAL } from "../calorieCalculatorSlice";

const PalSelect = () => {
  const palValue = useSelector(
    (state) => state.calorieCalculator.parameters.pal.value
  );
  const dispatch = useDispatch();

  const handlePalChange = (_, newValue) => {
    dispatch(
      setParameters({
        name: "pal",
        value: newValue,
      })
    );
  };
  return (
    <CalculatorInputGroup
      labelName="Heti aktivitási szint"
      icon={<MonitorHeartOutlinedIcon />}
    >
      <Select
        value={palValue}
        placeholder="Select activity level"
        onChange={handlePalChange}
        startDecorator={<DirectionsRunOutlinedIcon />}
        size="xs"
        sx={{ px: 1, py: 0.5 }}
      >
        {/** Map the PAL Object */}
        {Object.entries(PAL).map((palItem) => {
          return (
            <Option
              value={palItem[0]}
              name="pal"
              key={palItem[0]}
              sx={{ p: 1 }}
            >
              {palItem[0]}
            </Option>
          );
        })}
      </Select>
    </CalculatorInputGroup>
  );
};

export default PalSelect;
