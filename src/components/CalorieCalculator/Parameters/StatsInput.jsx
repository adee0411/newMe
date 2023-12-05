import { Grid, FormControl, FormLabel, Input } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import MonitorWeightOutlinedIcon from "@mui/icons-material/MonitorWeightOutlined";
import HeightOutlinedIcon from "@mui/icons-material/HeightOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";

import CalculatorInputGroup from "../../UI/CalculatorInputGroup";

import { setParameters } from "../calorieCalculatorSlice";

const StatsInput = () => {
  // Be careful with the property names and input names - MUST be the same!
  const { weight, height, age } = useSelector(
    (state) => state.calorieCalculator.parameters
  );

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const inputName = event.target.name; // Must be the same as state property names!
    const inputValue = +event.target.value; // converted to Number!

    dispatch(setParameters({ name: inputName, value: inputValue }));
  };
  return (
    <CalculatorInputGroup labelName="Alapadatok" icon={<EqualizerIcon />}>
      <Grid spacing={2} container columns={12}>
        <Grid md={4}>
          <FormControl>
            <FormLabel>
              <MonitorWeightOutlinedIcon />
              Súly
            </FormLabel>
            <Input
              type="number"
              variant="outlined"
              color="primary"
              endDecorator={weight.unit}
              onChange={handleInputChange}
              name="weight"
              value={weight.value}
            />
          </FormControl>
        </Grid>
        <Grid md={4}>
          <FormControl>
            <FormLabel>
              <HeightOutlinedIcon />
              Magasság
            </FormLabel>
            <Input
              type="number"
              variant="outlined"
              color="primary"
              endDecorator={height.unit}
              onChange={handleInputChange}
              name="height"
              value={height.value}
            />
          </FormControl>
        </Grid>
        <Grid md={4}>
          <FormControl>
            <FormLabel>
              <CakeOutlinedIcon />
              Életkor
            </FormLabel>
            <Input
              type="number"
              variant="outlined"
              color="primary"
              onChange={handleInputChange}
              name="age"
              value={age.value}
              endDecorator="yo"
            />
          </FormControl>
        </Grid>
      </Grid>
    </CalculatorInputGroup>
  );
};

export default StatsInput;
