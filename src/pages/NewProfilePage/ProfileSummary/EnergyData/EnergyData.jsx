import { Typography, Stack } from "@mui/joy";
import BMRCard from "./ResultCards/BMRCard";
import TDEECard from "./ResultCards/TDEECard";

const EnergyData = () => {
  return (
    <div>
      <Typography component="h2" color="neutral">
        Energia adatok
      </Typography>
      <Stack spacing={2}>
        <BMRCard />
        <TDEECard />
      </Stack>
    </div>
  );
};

export default EnergyData;
