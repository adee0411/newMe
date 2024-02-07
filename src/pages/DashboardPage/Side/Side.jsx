import { Stack, Typography } from "@mui/joy";

import Menu from "./Menu/Menu";
import Overview from "./Overview/Overview";
import { Link } from "react-router-dom";

import classes from "./Side.module.scss";

const Side = () => {
  return (
    <div className={classes["side"]}>
      <Stack direction="row" height="100%">
        <Menu />
        <Overview />
      </Stack>
    </div>
  );
};
export default Side;
