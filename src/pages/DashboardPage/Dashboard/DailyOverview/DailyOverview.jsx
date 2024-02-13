import { Typography } from "@mui/joy";

import { useParams } from "react-router-dom";

const DailyOverview = () => {
  const date = useParams().date;

  return (
    <>
      <Typography>Daily stats page</Typography>
      <Typography>Date: {date}</Typography>
    </>
  );
};

export default DailyOverview;
