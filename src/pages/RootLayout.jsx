import { Outlet } from "react-router-dom";
import { Sheet } from "@mui/joy";

import Header from "./LandingPage/Header/Header";

import classes from "./RootLayout.module.scss";

const RootLayout = () => {
  return (
    <Sheet color="neutral" variant="plain" sx={{ minHeight: "100svh" }}>
      {/******** Full App Container for UI reasons ********/}
      <div className={classes["root-layout"]}>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </Sheet>
  );
};

export default RootLayout;
