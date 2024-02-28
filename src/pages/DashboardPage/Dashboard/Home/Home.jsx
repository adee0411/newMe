import db from "../../../../backend/firebase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import classes from "./Home.module.css";
import "react-calendar/dist/Calendar.css";
import "./customCalendarStyles.css";

import { Grid } from "@mui/joy";

import Calendar from "react-calendar";

import DashboardWrapper from "./DashboardWrapper";
import CalorieOverview from "./CalorieOverview/CalorieOverview";
import WeightOverview from "./WeightOverview/WeightOverview";

import { setSelectedDate } from "../../../../store/profileSlice";
import { setCalorieData } from "../../../../store/calorieTrackerSlice";
import { setWeightData } from "../../../../store/weightTrackerSlice";
import { formatDate, fillFetchedData } from "../../../../utils";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const { dietStart } = useSelector(
    (state) => state.profileData.fetchedData.diet
  );

  // Fetch data from Firebase
  const dietData = useLoaderData();
  const { calorieIntakeData, weightData } = dietData;

  // Calculate the number of blocks from diet start to current date
  const numOfWeeks = Math.ceil(
    (new Date().getTime() - new Date(dietStart).getTime()) /
      (24 * 60 * 60 * 1000) /
      7
  );

  // Create new calorieData from fetched data
  const filledCalorieData = fillFetchedData(
    dietStart,
    numOfWeeks,
    calorieIntakeData,
    "calorieIntake"
  );

  // Create new weightData from fetche data
  const filledWeightData = fillFetchedData(
    dietStart,
    numOfWeeks,
    weightData,
    "weight"
  );

  dispatch(setCalorieData(filledCalorieData));

  dispatch(setWeightData(filledWeightData));

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
            <Calendar
              onChange={handleCalendarChange}
              minDate={new Date(dietStart)}
              maxDate={new Date()}
            />
          </div>
        </Grid>
      </Grid>
    </DashboardWrapper>
  );
};

export default Home;

// LOADERS AND ACTIONS

/*
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



export const newWeightAction = async ({ request }) => {
  try {
    const formData = await request.formData();

    const newWeightData = {
      data: {
        date: formData.get("date"),
        weight: +formData.get("weight"),
      },
      id: formData.get("date"),
    };

    const weightRef = doc(db, "weight", newWeightData.id);
    await setDoc(weightRef, newWeightData);
  } catch (e) {
    console.error(e);
  }
  return redirect("/dashboard");
};*/

export const logNewDataAction = async ({ request }) => {
  try {
    const formData = await request.formData();
    const logType = formData.get("logType");

    // In case "new calorie form" us submitted
    if (logType === "logCalorie") {
      const newCalorieData = {
        data: {
          date: formData.get("date"),
          calorieIntake: +formData.get("dailyCalorie"),
        },
        id: formData.get("date"),
      };

      const calorieRef = doc(db, "calorie", newCalorieData.id);
      await setDoc(calorieRef, newCalorieData);
    } else if (logType === "logWeight") {
      const newWeightData = {
        data: {
          date: formData.get("date"),
          weight: +formData.get("weight"),
        },
        id: formData.get("date"),
      };

      const weightRef = doc(db, "weight", newWeightData.id);
      await setDoc(weightRef, newWeightData);
    }
  } catch (e) {
    console.error(e);
  }

  return redirect("/dashboard");
};

export const dietDataLoader = async () => {
  const dietData = {
    calorieIntakeData: [],
    weightData: [],
  };

  const calorieIntakeRef = collection(db, "calorie");
  const calorieIntakeSnap = await getDocs(calorieIntakeRef);

  const weightRef = collection(db, "weight");
  const weightSnap = await getDocs(weightRef);

  calorieIntakeSnap.forEach((dataValue) => {
    const currentCalorieData = { ...dataValue.data(), id: dataValue.id };
    dietData.calorieIntakeData.push(currentCalorieData);
  });

  weightSnap.forEach((dataValue) => {
    const currentWeightData = { ...dataValue.data(), id: dataValue.id };
    dietData.weightData.push(currentWeightData);
  });
  return dietData;
};
