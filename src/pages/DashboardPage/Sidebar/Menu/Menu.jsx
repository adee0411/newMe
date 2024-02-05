import {
  List,
  ListItem,
  ListItemButton,
  ListItemDecorator,
  ListItemContent,
  Tooltip,
} from "@mui/joy";
import { NavLink } from "react-router-dom";

import { BiSolidDashboard } from "react-icons/bi";
import { LiaBurnSolid } from "react-icons/lia";
import { IoScaleOutline } from "react-icons/io5";
import { FaRunning } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";

const menuItems = [
  { label: "Főoldal", icon: <BiSolidDashboard />, path: "/" },
  { label: "Kalória követő", icon: <LiaBurnSolid />, path: "/calorie-tracker" },
  {
    label: "Testsúly követő",
    icon: <IoScaleOutline />,
    path: "/weight-tracker",
  },
  { label: "Aktivitás követő", icon: <FaRunning />, path: "/activity-tracker" },
  { label: "Étrend tervező", icon: <GiMeal />, path: "/meal-planner" },
];

const Menu = () => {
  return (
    <List
      size="lg"
      color="neutral"
      variant="plain"
      sx={{ '& [role="button"]': { borderRadius: "8px" }, my: 8 }}
    >
      {menuItems.map((menuItem) => {
        return (
          <Tooltip variant="solid" title={menuItem.label} placement="right-end">
            <ListItem sx={{ my: 2 }}>
              <NavLink
                style={{
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
                to={menuItem.path}
              >
                <ListItemButton
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ListItemDecorator
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      fontSize: 22,
                    }}
                  >
                    <span
                      style={{ position: "relative", left: "-6px", top: "4px" }}
                    >
                      {menuItem.icon}
                    </span>
                  </ListItemDecorator>
                </ListItemButton>
              </NavLink>
            </ListItem>
          </Tooltip>
        );
      })}
    </List>
  );
};

export default Menu;
