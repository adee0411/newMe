import {
  Typography,
  IconButton,
  Divider,
  Card,
  Avatar,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemDecorator,
  ListItemContent,
  Tooltip,
} from "@mui/joy";
import { Link, NavLink } from "react-router-dom";

import Image from "../../assets/images/female-fitness_512.png";
import AvatarMe from "../../assets/images/Avatar_me.jpg";

import { RxHamburgerMenu } from "react-icons/rx";
import { CiSettings } from "react-icons/ci";
import { CiCalculator1 } from "react-icons/ci";
import { IoFitnessOutline } from "react-icons/io5";
import { GiMeal } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <aside style={{ gridArea: "sidebar" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          height: "56px",
        }}
      >
        <Link
          to=".."
          style={{
            textDecoration: "none",
          }}
        >
          <Typography level="h1" display="inline-block" color="primary">
            <span>
              <img style={{ width: "32px" }} src={Image} />
            </span>
            <Typography>newMe</Typography>
          </Typography>
        </Link>
      </header>
      <Divider />
      <div style={{ padding: "24px 0" }}>
        <Card>
          <header>
            <div
              style={{
                width: "fit-content",
                marginLeft: "auto",
              }}
            >
              <Tooltip title="Profil szerkesztése" size="sm">
                <IconButton
                  color="neutral"
                  variant="plain"
                  title="Profil módosítása"
                  size="lg"
                  sx={{ fontSize: "1.6rem" }}
                >
                  <CiSettings />
                </IconButton>
              </Tooltip>
            </div>
          </header>
          <CardContent
            orientation="vertical"
            sx={{ alignItems: "center", gap: "12px" }}
          >
            <Avatar
              color="primary"
              variant="soft"
              src={AvatarMe}
              sx={{ width: "5rem", height: "5rem" }}
            />
            <Typography level="title-md" color="neutral">
              Berki Ádám
            </Typography>
          </CardContent>
        </Card>
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
      </div>
    </aside>
  );
};

export default Sidebar;
