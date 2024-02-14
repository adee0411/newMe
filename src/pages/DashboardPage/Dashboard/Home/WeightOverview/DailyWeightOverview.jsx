import { Grid, Card, Typography, Stack, Sheet, CardContent } from "@mui/joy";

import { useSelector } from "react-redux";

import NewCalorieForm from "../CalorieOverview/NewCalorieForm";

import { IoCalendarOutline } from "react-icons/io5";
import WeightImg from "../../../../../assets/images/weight-scale (1).png";
import NewWeightForm from "./NewWeightForm";

const DailyWeightOverview = () => {
  const { selectedDate } = useSelector((state) => state.profileData);

  return (
    <div style={{ padding: "12px" }}>
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={WeightImg} style={{ width: "20%" }} />
        </div>
        <NewWeightForm />
        <Stack>
          <Typography textAlign="center" level="title-sm">
            NAPI SÚLY:
          </Typography>
          <Typography textAlign="center" fontSize={32} fontWeight={800}>
            99.8 KG
          </Typography>
        </Stack>
      </CardContent>
    </div>
  );
};

export default DailyWeightOverview;
