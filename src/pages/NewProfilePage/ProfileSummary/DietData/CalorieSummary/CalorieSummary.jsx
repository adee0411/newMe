import { useSelector } from "react-redux";

import { Typography, Sheet } from "@mui/joy";

const CalorieSummary = () => {
  const { calculatedData } = useSelector((state) => state.profileData);

  const BMRWidth = (calculatedData.bmr / calculatedData.tdee) * 100;
  const calculatedCalorieIntakeWidth =
    (calculatedData.calculatedCalorieIntake / calculatedData.tdee) * 100;
  return (
    <>
      <Typography>
        Napi kalóriadeficit:{" "}
        {calculatedData.calculatedDailyDeficit
          ? `${calculatedData.calculatedDailyDeficit} kcal`
          : ""}
      </Typography>
      <Typography>
        Napi kalóriabevitel:{" "}
        {calculatedData.calculatedCalorieIntake
          ? `${calculatedData.calculatedCalorieIntake} kcal`
          : ""}
      </Typography>

      <div style={{ height: "10px", borderRadius: "3rem", overflow: "hidden" }}>
        <Sheet
          color="primary"
          variant="soft"
          height
          sx={{ width: "100%", height: "100%", position: "relative" }}
        >
          <Sheet
            color="primary"
            variant="solid"
            sx={{
              height: "100%",
              width: `${BMRWidth}%`,
              transition: "width 0.3s ease",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 2,
              opacity: 0.5,
            }}
          ></Sheet>
          <Sheet
            color="warning"
            variant="solid"
            sx={{
              height: "100%",
              width: `${calculatedCalorieIntakeWidth}%`,
              transition: "width 0.3s ease",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
              opacity: 0.5,
            }}
          ></Sheet>
        </Sheet>
      </div>
    </>
  );
};

export default CalorieSummary;
