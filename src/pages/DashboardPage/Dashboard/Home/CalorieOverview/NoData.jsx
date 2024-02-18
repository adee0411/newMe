import { Typography, Stack } from "@mui/joy";
import CyclingIcon from "../../../../../assets/images/cycling.png";
import { useSelector } from "react-redux";

const NoData = () => {
  const { name } = useSelector(
    (state) => state.profileData.fetchedData.personal
  );
  return (
    <Stack
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Typography width="50%" textAlign="center" color="neutral">
        Hajrá {name}!<br />
        Kezdd el naplózni a kalória-beviteled és érjük el együtt a kitűzött
        céljaidat!
      </Typography>
      <div style={{ width: "180px" }}>
        <img src={CyclingIcon} style={{ width: "100%" }} />
      </div>
    </Stack>
  );
};

export default NoData;
