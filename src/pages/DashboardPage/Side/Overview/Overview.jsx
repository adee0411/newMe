import { Card, Stack, Typography } from "@mui/joy";

import classes from "./Overview.module.scss";

import Goals from "./Goals/Goals";

const Overview = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  let greeting =
    currentHour >= 18
      ? "Szép estét"
      : currentHour < 10 && currentHour >= 6
      ? "Jó reggelt"
      : "Szép napot";
  return (
    <div className={classes["overview"]}>
      <div>
        <Typography level="h2" color="neutral" textAlign="center">
          {`${greeting}, Ádám!`}
        </Typography>
      </div>
      <Goals />
    </div>
  );
};

export default Overview;
