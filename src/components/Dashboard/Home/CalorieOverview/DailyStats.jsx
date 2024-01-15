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

const DailyStats = ({
  tdee,
  calculatedCalorieIntake,
  calorieIntake,
  cumulatedCalorieDeficit,
}) => {
  return (
    <>
      <Grid container spacing={8} justifyContent="space-between" mb>
        <Grid>
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography level="body-lg">
                <FaBalanceScale />
              </Typography>
              <Typography level="body-sm" alignItems="center">
                Szintentartó kalória:{" "}
                <Typography level="body-lg">{tdee} cal</Typography>
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <Typography>
                <FiTarget />
              </Typography>
              <Typography level="body-sm">
                Napi bevihető:{" "}
                <Typography level="body-lg">
                  {calculatedCalorieIntake} cal
                </Typography>
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography>
                <MdOutlineSavings />
              </Typography>
              <Typography level="body-sm">
                Kalória-deficit tartalék:{" "}
                <Typography level="body-lg">
                  {cumulatedCalorieDeficit} cal
                </Typography>
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid>
          <Stack>
            <Typography>Mai napon bevitt:</Typography>
            <Typography fontSize="3rem" fontWeight={800} color="primary">
              {calorieIntake}{" "}
              <Typography level="body-md" color="primary" fontWeight={100}>
                cal
              </Typography>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default DailyStats;
