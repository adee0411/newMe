import { Grid } from "@mui/joy";

import Logo from "./Logo";
import NavLinks from "./NavLinks";

const MainNav = () => {
  return (
    <nav>
      <Grid container alignItems="center" flexGrow={1} columns={12}>
        <Grid lg={4} md={4} sm={4}>
          <Logo />
        </Grid>
        <Grid flex={1}>
          <NavLinks />
        </Grid>
      </Grid>
    </nav>
  );
};

export default MainNav;
