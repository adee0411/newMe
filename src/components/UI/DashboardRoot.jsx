import { Outlet } from "react-router-dom";
import { Sheet, Grid, Typography } from "@mui/joy";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Dashboard/Header/Header";

import classes from "./DashboardRoot.module.css";

const DashboardRoot = () => {
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
