import db from "../../../../backend/firebase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import classes from "./Home.module.css";
import "react-calendar/dist/Calendar.css";
import "./customCalendarStyles.css";

import { Grid, Stack, Sheet, Typography } from "@mui/joy";

import Calendar from "react-calendar";

import DashboardWrapper from "./DashboardWrapper";
import CalorieOverview from "./CalorieOverview/CalorieOverview";
import WeightOverview from "./WeightOverview/WeightOverview";

import { setSelectedDate } from "../../../../store/profileSlice";
import {
  setCalorieData,
  setCurrentWeek,
} from "../../../../store/calorieTrackerSlice";
import { formatDate } from "../../../../utils";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const { dietStart } = useSelector(
    (state) => state.profileData.fetchedData.diet
  );

  // Fetch data from Firebase
  const calorieIntakeData = useLoaderData();

  const numOfWeeks = Math.ceil(calorieIntakeData.length / 7);

  dispatch(setCurrentWeek(numOfWeeks));

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
          {/*<WeightOverview />*/}
        </Grid>
        <Grid width="350px">
          {" "}
          <div className="calendar-container">
            <Calendar
              onChange={handleCalendarChange}
              minDate={new Date(dietStart)}
            />
          </div>
        </Grid>
      </Grid>
    </DashboardWrapper>
  );
};

export default Home;

// LOADERS AND ACTIONS
export const newCalorieAction = async ({ request }) => {
  try {
    const formData = await request.formData();

    const newCalorieData = {
      data: {
        date: formData.get("date"),
        calorieIntake: +formData.get("dailyCalorie"),
      },
      id: formData.get("date"),
    };

    const calorieRef = doc(db, "calorie", newCalorieData.id);
    await setDoc(calorieRef, newCalorieData);
  } catch (e) {
    console.error(e);
  }
  return redirect("/dashboard");
};

export const calorieIntakeLoader = async () => {
  let calorieData = [];
  const calorieIntakeRef = collection(db, "calorie");
  const calorieIntakeSnap = await getDocs(calorieIntakeRef);

  calorieIntakeSnap.forEach((dataValue) => {
    const currentCalorieData = { ...dataValue.data(), id: dataValue.id };
    calorieData.push(currentCalorieData);
  });
  return calorieData;
};
