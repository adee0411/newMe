import { Grid } from "@mui/joy";

import MainNav from "./MainNav";
import AuthActions from "./AuthActions";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <Grid
        container
        columns={12}
        justifyContent="space-between"
        height="100%"
        alignItems="center"
      >
        <Grid flexGrow={1}>
          <MainNav />
        </Grid>
        <Grid>
          <AuthActions />
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
