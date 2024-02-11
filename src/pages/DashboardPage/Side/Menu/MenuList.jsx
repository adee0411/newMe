import {
  List,
  Tooltip,
  ListItem,
  ListItemButton,
  ListItemDecorator,
  ListItemContent,
  Typography,
} from "@mui/joy";
import { NavLink, useLocation } from "react-router-dom";

import { BiSolidDashboard } from "react-icons/bi";
import { LiaBurnSolid } from "react-icons/lia";
import { IoScaleOutline } from "react-icons/io5";
import { FaRunning } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";

const menuItems = [
  { label: "Főoldal", icon: <BiSolidDashboard />, path: "/dashboard" },
  {
    label: "Kalória követő",
    icon: <LiaBurnSolid />,
    path: "/dashboard/calorie-tracker",
  },
  {
    label: "Testsúly követő",
    icon: <IoScaleOutline />,
    path: "/dashboard/weight-tracker",
  },
  { label: "Aktivitás követő", icon: <FaRunning />, path: "activity-tracker" },
  {
    label: "Étrend tervező",
    icon: <GiMeal />,
    path: "/dashboard/meal-planner",
  },
];

const MenuList = () => {
  const currentLocation = useLocation();
  const currentPath = currentLocation.pathname;

  return (
    <List
      size="md"
      color="neutral"
      variant="plain"
      sx={{ '& [role="button"]': { borderRadius: "8px" }, my: 8 }}
    >
      {menuItems.map((menuItem) => {
        return (
          <Tooltip
            color="primary"
            variant="plain"
            size="sm"
            title={menuItem.label}
            placement="right-end"
            key={menuItem.label}
          >
            <ListItem sx={{ my: 2 }}>
              <ListItemButton selected={menuItem.path === currentPath}>
                <ListItemContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItem: "center",
                  }}
                >
                  <NavLink
                    to={menuItem.path}
                    style={{
                      textDecoration: "none",
                      display: "block",
                      width: "inherit",
                      height: "inherit",
                    }}
                  >
                    <Typography
                      color="primary"
                      component="span"
                      fontSize={22}
                      display="flex"
                      alignItems="center"
                    >
                      {menuItem.icon}
                    </Typography>
                  </NavLink>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
          </Tooltip>
        );
      })}
    </List>
  );
};

export default MenuList;
