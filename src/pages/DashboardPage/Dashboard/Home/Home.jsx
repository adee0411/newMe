import db from "../../../../backend/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import classes from "./Home.module.css";
import "react-calendar/dist/Calendar.css";
import "./customCalendarStyles.css";

import { Grid, Stack, Sheet, Typography } from "@mui/joy";

import Calendar from "react-calendar";

import DashboardWrapper from "./DashboardWrapper";
import CalorieOverview from "./CalorieOverview/CalorieOverview";
import WeightOverview from "./WeightOverview/WeightOverview";

import { setSelectedDate } from "../../../../store/profileSlice";
import { setCalorieData } from "../../../../store/calorieTrackerSlice";
import { formatDate } from "../../../../utils";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  // Fetch data from Firebase
  const calorieIntakeData = useLoaderData()[0];

  dispatch(setCalorieData(calorieIntakeData));

  const handleCalendarChange = (value, event) => {
    const formattedDate = formatDate(new Date(value));
    dispatch(setSelectedDate(formattedDate));
  };
  return (
    <DashboardWrapper title="Összesítés">
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        flexWrap="nowrap"
      >
        <Grid lg={9}>
          {" "}
          <CalorieOverview />
          <WeightOverview />
        </Grid>
        <Grid width="350px">
          {" "}
          <div className="calendar-container">
            <Calendar onChange={handleCalendarChange} />
          </div>
        </Grid>
      </Grid>
    </DashboardWrapper>
  );
};

export default Home;
