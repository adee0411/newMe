import db from "../../../../backend/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

import { useState, useEffect } from "react";
import classes from "./Home.module.css";
import "react-calendar/dist/Calendar.css";
import "./customCalendarStyles.css";

import { Grid, Stack, Sheet } from "@mui/joy";

import Calendar from "react-calendar";

import CalorieOverview from "./CalorieOverview/CalorieOverview";

const Home = () => {
  return (
    <Grid container spacing={4}>
      <Grid lg={9}>
        <Stack direction="row" spacing={4}></Stack>
      </Grid>

      <Grid lg={3}>
        <div className="calendar-container">
          <Calendar />
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;
