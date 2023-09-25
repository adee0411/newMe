import { useSelector, useDispatch } from "react-redux";
import { setPal } from "./tdeeCalculatorSlice";

import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Typography,
} from "@mui/joy";

import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";

const PALRadio = ({ PAL }) => {
  const pal = useSelector((state) => state.tdeeCalculator.pal);
  const dispatch = useDispatch();

  const handlePalChange = (event) => {
    const palValue = event.target.value;

    dispatch(setPal({ name: "pal", value: palValue }));
  };
  return (
    <FormControl>
      <FormLabel sx={{ marginTop: 2 }}>
        <Typography
          color="primary"
          startDecorator={<MonitorHeartOutlinedIcon />}
        >
          Weekly Physical Activity Level (PAL)
        </Typography>
      </FormLabel>
      <RadioGroup size="sm">
        {/** Map the PAL Object */}
        {Object.entries(PAL).map((palItem) => {
          return (
            <Radio
              label={palItem[0]}
              checked={pal === palItem[0]}
              value={palItem[0]}
              onChange={handlePalChange}
              key={palItem[0]}
              name="pal"
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default PALRadio;
