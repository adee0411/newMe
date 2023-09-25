import { Sheet, Divider } from "@mui/joy";

import StatsInput from "./StatsInput";
import GenderRadio from "./GenderRadio";
import PalSelect from "./PALSelect";

const ParameterForm = () => {
  return (
    <Sheet>
      <StatsInput />
      <Divider sx={{ my: 2 }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4,
        }}
      >
        <GenderRadio />
        <PalSelect />
      </div>
      <Divider sx={{ my: 2 }} />
    </Sheet>
  );
};

export default ParameterForm;
