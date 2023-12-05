import { Grid, Button } from "@mui/joy";

const AuthActions = () => {
  return (
    <Grid container justifyContent="flex-end" columnSpacing={2}>
      <Grid>
        <Button>Bejelentkezés</Button>
      </Grid>
      <Grid>
        <Button variant="outlined">Regisztráció</Button>
      </Grid>
    </Grid>
  );
};

export default AuthActions;
