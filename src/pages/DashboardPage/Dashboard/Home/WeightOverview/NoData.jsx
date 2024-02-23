import { Typography, Stack } from "@mui/joy";

import ScaleIcon from "../../../../../assets/images/weight-scale (1).png";

const NoData = () => {
  return (
    <Stack
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Typography width="50%" textAlign="center" color="neutral">
        Kezdd el naplózni a testsúlyod és lássuk, hogy alakul a diétád!
      </Typography>
      <div style={{ width: "120px" }}>
        <img src={ScaleIcon} style={{ width: "100%" }} />
      </div>
    </Stack>
  );
};

export default NoData;
