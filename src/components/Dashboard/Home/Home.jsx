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
