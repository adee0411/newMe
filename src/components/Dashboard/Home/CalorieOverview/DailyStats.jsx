import {
  List,
  ListItem,
  Typography,
  Stack,
  Alert,
  Grid,
  Divider,
} from "@mui/joy";

import { FaBalanceScale } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { MdOutlineSavings } from "react-icons/md";

const DailyStats = ({ tdee, calculatedCalorieIntake, calorieIntake }) => {
  const caloriesLeft = calculatedCalorieIntake - calorieIntake;
  return (
    <>
      <Stack direction="column">
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography alignItems="center">
            Szintentartó kalória: <Typography>{tdee} cal</Typography>
          </Typography>
        </Stack>
        <Stack>
          <Typography>
            Mai napon bevitt:{" "}
            <Typography color="primary">
              {calorieIntake} cal / {calculatedCalorieIntake} cal
            </Typography>
          </Typography>
        </Stack>
        <Stack>
          <Typography>
            Fennmaradt:{" "}
            <Typography color="primary">{caloriesLeft} cal</Typography>
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default DailyStats;
