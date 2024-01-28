import {
  List,
  ListItem,
  ListItemButton,
  ListItemDecorator,
  ListItemContent,
} from "@mui/joy";
import { NavLink } from "react-router-dom";

import { CiCalculator1 } from "react-icons/ci";
import { IoFitnessOutline } from "react-icons/io5";
import { GiMeal } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";

const Menu = () => {
  return (
    <List
      size="lg"
      color="neutral"
      variant="plain"
      sx={{ '& [role="button"]': { borderRadius: "8px" }, my: 3 }}
    >
      <ListItem>
        <NavLink
          style={{
            textDecoration: "none",
            display: "block",
            width: "100%",
          }}
          to="/dashboard"
        >
          <ListItemButton>
            <ListItemDecorator>
              <IoHomeOutline />
            </ListItemDecorator>
            <ListItemContent>Főoldal</ListItemContent>
          </ListItemButton>
        </NavLink>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemDecorator>
            <CiCalculator1 />
          </ListItemDecorator>
          <ListItemContent>Kalória kalkulátor</ListItemContent>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemDecorator>
            <IoFitnessOutline />
          </ListItemDecorator>
          <ListItemContent>Diéta tervező</ListItemContent>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemDecorator>
            <GiMeal />
          </ListItemDecorator>
          <ListItemContent>Étrend tervező</ListItemContent>
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default Menu;
