import { Sheet, Typography } from "@mui/joy";

const CalorieTracker = () => {
  return (
    <div>
      <Sheet sx={{ borderRadius: "md", p: "24px", background: "transparent" }}>
        <Typography>Kalória történet</Typography>
      </Sheet>
    </div>
  );
};

export default CalorieTracker;
