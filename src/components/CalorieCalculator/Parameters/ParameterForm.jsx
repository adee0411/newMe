import { Sheet } from "@mui/joy";

import StatsInput from "./StatsInput";
import GenderRadio from "./GenderRadio";
import PalSelect from "./PALSelect";

const ParameterForm = () => {
  return (
    <Sheet>
      <StatsInput />
      <GenderRadio />
      <PalSelect />
    </Sheet>
  );
};

export default ParameterForm;
