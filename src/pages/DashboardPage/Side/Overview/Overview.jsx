import { Sheet, Stack, Typography } from "@mui/joy";

import classes from "./Overview.module.scss";

import Goals from "./Goals/Goals";

const Overview = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  const greeting =
    currentHour >= 18
      ? "Szép estét"
      : currentHour < 10 && currentHour >= 6
      ? "Jó reggelt"
      : "Szép napot";
  return (
    <div className={classes["overview"]}>
      <header>
        <Sheet
          sx={{
            p: 3,
            borderRadius: "md",
            background: "transparent",
            minHeight: "100px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography level="title-lg" color="neutral">
              {`${greeting}, Ádám!`}
            </Typography>
            <Typography level="title-sm" color="neutral">
              2024. 02. 08.
            </Typography>
          </Stack>
        </Sheet>
      </header>
      <div style={{ padding: "24px" }}>
        <Goals />
      </div>
    </div>
  );
};

export default Overview;
