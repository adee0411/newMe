import { Outlet } from "react-router-dom";

import Header from "../pages/LandingPage/Header/Header";

import classes from "./RootLayout.module.scss";

const RootLayout = () => {
  return (
    <div className={classes["root-layout"]}>
      <Header />
      <main className={classes["root-layout__main"]}>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
