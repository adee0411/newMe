import { Stack, Sheet, IconButton, Tooltip } from "@mui/joy";
import { Link } from "react-router-dom";

import MenuList from "./MenuList";

import Logo from "../../../../assets/images/achievement_256.png";
import { IoIosLogOut } from "react-icons/io";

const Menu = () => {
  return (
    <Sheet
      color="primary"
      variant="solid"
      invertedColors
      sx={{
        p: 3,
      }}
    >
      <nav style={{ height: "80%" }}>
        <Link>
          <img src={Logo} alt="logo" style={{ width: "38px" }} />
        </Link>
        <Stack justifyContent="space-between" height="100%">
          <MenuList />
          <Tooltip title="Kilépés" placement="right-end">
            <IconButton
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                fontSize: 32,
              }}
            >
              <IoIosLogOut />
            </IconButton>
          </Tooltip>
        </Stack>
      </nav>
    </Sheet>
  );
};

export default Menu;
