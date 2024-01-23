import { useState } from "react";
import classes from "./Home.module.css";
import "react-calendar/dist/Calendar.css";
import "./customCalendarStyles.css";

import { Grid, Typography, Stack } from "@mui/joy";

import Calendar from "react-calendar";

import CalorieOverview from "./CalorieOverview/CalorieOverview";
import WeightOverview from "./WeightOverview/WeightOverview";

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
    <Grid container spacing={4}>
      <Grid lg={9}>
        <Stack direction="row" spacing={4}>
          <CalorieOverview />
          <Stack flex={1}>
            <WeightOverview />
          </Stack>
        </Stack>
      </Grid>

      <Grid lg={3}>
        <div className="calendar-container">
          <Calendar onChange={handleDateChange} />
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;
