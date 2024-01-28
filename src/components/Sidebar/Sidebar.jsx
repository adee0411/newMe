import { Typography, Divider } from "@mui/joy";
import { Link } from "react-router-dom";

import Image from "../../assets/images/female-fitness_512.png";

import ProfileSummary from "./Profile/ProfileSummary";
import Menu from "./Menu/Menu";

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
      <div style={{ padding: "24px 0" }}>
        <ProfileSummary />
        <Menu />
      </div>
    </aside>
  );
};

export default Sidebar;
