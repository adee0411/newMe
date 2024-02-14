import db from "../backend/firebase";
import { collection, getDocs } from "firebase/firestore";

import { useLoaderData } from "react-router-dom";

import { Outlet } from "react-router-dom";
import { Sheet, Grid, Typography, Divider } from "@mui/joy";
import Side from "../pages/DashboardPage/Side/Side";
import Header from "../pages/DashboardPage/Dashboard/Header/Header";

import classes from "./DashboardRoot.module.scss";
import { useDispatch } from "react-redux";
import { setPersonalData } from "../store/profileSlice";

const DashboardRoot = () => {
  const dispatch = useDispatch();
  const data = useLoaderData();

  dispatch(setPersonalData(data));

  return (
    <Sheet color="primary" variant="soft">
      <div className={classes["dashboard-grid"]}>
        <Side />
        <main style={{ gridArea: "main" }}>
          <Header />

          <Outlet />
        </main>
      </div>
    </Sheet>
  );
};

export default DashboardRoot;

export const profileCollectionLoader = async () => {
  let data = {};
  const profileCollectionRef = collection(db, "profile");
  const profileCollectionSnap = await getDocs(profileCollectionRef);

  profileCollectionSnap.forEach((doc) => {
    data[doc.id] = doc.data();
  });

  return data;
};
