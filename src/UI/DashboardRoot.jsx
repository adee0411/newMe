import db from "../backend/firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

import { useLoaderData } from "react-router-dom";

import { Outlet } from "react-router-dom";
import { Sheet, Grid, Typography } from "@mui/joy";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Dashboard/Header/Header";

import classes from "./DashboardRoot.module.css";
import { useDispatch } from "react-redux";
import { setPersonalData } from "../store/profileSlice";

const DashboardRoot = () => {
  const dispatch = useDispatch();
  const data = useLoaderData();
  console.log(data);

  dispatch(setPersonalData(data));

  return (
    <div className={classes["dashboard-grid"]}>
      <Sidebar />
      <main style={{ gridArea: "main" }}>
        <Header />
        <Sheet
          color="primary"
          variant="plain"
          sx={{
            borderRadius: 8,
            padding: "20px",
            height: "calc(100vh - 118px)",
          }}
        >
          <Outlet />
        </Sheet>
      </main>
    </div>
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
