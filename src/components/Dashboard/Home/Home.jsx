import { useState } from "react";

import classes from "./Home.module.css";
import "react-calendar/dist/Calendar.css";
import "./customCalendarStyles.css";

import { Sheet, Typography } from "@mui/joy";

import Calendar from "react-calendar";

import { IoHomeOutline } from "react-icons/io5";
import { IoScaleOutline } from "react-icons/io5";
import { BsGenderAmbiguous } from "react-icons/bs";
import { GiBodyHeight } from "react-icons/gi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FiActivity } from "react-icons/fi";

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
    <div className={classes["home-grid"]}>
      <div>
        <CalorieOverview />
      </div>

      <div className={classes["home-grid__side"]}>
        <div className="calendar-container">
          <Calendar onChange={handleDateChange} minDate={new Date(dietStart)} />
        </div>
      </div>
    </div>
  );
};

export default Home;
