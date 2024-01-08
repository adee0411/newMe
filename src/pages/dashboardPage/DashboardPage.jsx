import { Sheet, Typography } from "@mui/joy";
import { Outlet } from "react-router-dom";

import Header from "../../components/Dashboard/Header/Header";

const DashboardPage = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <aside style={{ width: "25%", height: "100%" }}>
          <Sheet>
            <Typography>Left side</Typography>
          </Sheet>
        </aside>
        <main>
          <Outlet />
        </main>
        <aside style={{ width: "25%", height: "100%" }}>
          <Sheet>
            <Typography>Right side</Typography>
          </Sheet>
        </aside>
      </div>
    </>
  );
};

export default DashboardPage;
