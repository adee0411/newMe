import { Link } from "react-router-dom";
import { Sheet, Typography, Switch } from "@mui/joy";

import { IoSunnyOutline } from "react-icons/io5";
import { MdOutlineModeNight } from "react-icons/md";

const Header = () => {
  return (
    <header style={{ height: "56px" }}>
      <Switch
        startDecorator={<IoSunnyOutline />}
        endDecorator={<MdOutlineModeNight />}
        color="primary"
        variant="soft"
        slotProps={{ "aria-label": "Toggle theme" }}
        sx={{ ml: "auto" }}
      />
    </header>
  );
};

export default Header;
