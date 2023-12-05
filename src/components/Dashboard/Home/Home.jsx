import classes from "./Home.module.css";
import "react-calendar/dist/Calendar.css";
import "./customCalendarStyles.css";
import { Sheet, Typography, Card, Stack, Grid } from "@mui/joy";

import Calendar from "react-calendar";
import { IoHomeOutline } from "react-icons/io5";
import { IoScaleOutline } from "react-icons/io5";
import { BsGenderAmbiguous } from "react-icons/bs";
import { GiBodyHeight } from "react-icons/gi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FiActivity } from "react-icons/fi";

const Home = () => {
  return (
    <div className={classes["home-grid"]}>
      <div className={classes["home-grid__content"]}>
        <Sheet>
          <Typography
            component="h3"
            level="title-lg"
            color="neutral"
            sx={{ display: "flex", gap: "12px" }}
          >
            <IoHomeOutline />
            Főoldal
          </Typography>
          <Grid container columns={{ md: 12 }} spacing={8} wrap>
            <Grid lg={8} height="inherit">
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ "& > *": { flex: "1" }, height: "inherit" }}
                spacing={2}
              >
                <Card color="primary" variant="outlined" invertedColors>
                  <Stack direction="row" justifyContent="space-between">
                    {" "}
                    <BsGenderAmbiguous size={20} />
                    <Typography>Nem</Typography>
                  </Stack>
                  <Typography level="h3">Férfi</Typography>
                </Card>
                <Card color="primary" variant="outlined">
                  <Stack direction="row" justifyContent="space-between">
                    {" "}
                    <IoScaleOutline size={30} />
                    <Typography>Súly</Typography>
                  </Stack>

                  <Typography level="h3">97 kg</Typography>
                </Card>
                <Card color="primary" variant="outlined">
                  <Stack direction="row" justifyContent="space-between">
                    {" "}
                    <GiBodyHeight size={30} />
                    <Typography>Magasság</Typography>
                  </Stack>

                  <Typography level="h3">176 cm</Typography>
                </Card>
                <Card color="primary" variant="outlined">
                  <Stack direction="row" justifyContent="space-between">
                    {" "}
                    <LiaBirthdayCakeSolid size={30} />
                    <Typography>Kor</Typography>
                  </Stack>

                  <Typography level="h3">33 év</Typography>
                </Card>
                <Card color="primary" variant="outlined">
                  <Stack direction="row" justifyContent="space-between">
                    {" "}
                    <FiActivity size={30} />
                    <Typography>Aktivitás</Typography>
                  </Stack>

                  <Typography level="h3">Ülő életmód</Typography>
                </Card>
              </Stack>
            </Grid>
            <Grid alignContent="stretch" flex={1}>
              <Card sx={{ height: "100%" }}>
                <Typography>Napi kalória</Typography>
              </Card>
            </Grid>
          </Grid>
        </Sheet>
      </div>
      <div className={classes["home-grid__side"]}>
        <div className="calendar-container">
          <Calendar />
        </div>
        <Sheet
          color="primary"
          variant="plain"
          invertedColors
          sx={{ p: 2, my: 2, borderRadius: 12 }}
        >
          <Typography level="body-lg">Mentett étrendjeim</Typography>
        </Sheet>
      </div>
    </div>
  );
};

export default Home;
