import { useState } from "react";
import classes from "./Home.module.css";
import "react-calendar/dist/Calendar.css";
import "./customCalendarStyles.css";

import { Grid } from "@mui/joy";

import Calendar from "react-calendar";

import CalorieOverview from "./CalorieOverview/CalorieOverview";

import { useDispatch, useSelector } from "react-redux";

import { setSelectedDate } from "../../../store/profileSlice";
import { formatDate } from "../../../utils";

const Home = () => {
  const dispatch = useDispatch();
  const { dietStartInput: dietStart } = useSelector(
    (state) => state.profileData.dietData
  );

  const handleDateChange = (value) => {
    const formattedDateValue = formatDate(value);
    dispatch(setSelectedDate(formattedDateValue));
  };
  return (
    <Grid container spacing={8}>
      <Grid lg={9}>
        <CalorieOverview />
      </Grid>

      <Grid lg={3}>
        <div className="calendar-container">
          <Calendar onChange={handleDateChange} minDate={new Date(dietStart)} />
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;
