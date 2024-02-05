import { Typography, Divider, Sheet } from "@mui/joy";
import { Link } from "react-router-dom";

import classes from "./Sidebar.module.scss";

import Image from "../../../assets/images/weight-scale_256.png";

import ProfileSummary from "./Profile/ProfileSummary";
import Menu from "./Menu/Menu";

const Sidebar = () => {
  return (
    <nav className={classes["nav"]}>
      <Sheet
        sx={{ height: "100%", padding: "12px" }}
        color="primary"
        variant="solid"
        invertedColors
      >
        <Link
          to=".."
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className={classes["nav__logo"]}>
            <img src={Image} alt="logo" />
          </div>
        </Link>
        <Menu />{" "}
      </Sheet>
    </nav>
  );
};

export default Sidebar;
