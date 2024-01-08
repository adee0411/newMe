import { useSelector } from "react-redux";

import {
  Typography,
  Alert,
  List,
  ListItem,
  Stack,
  Card,
  ListDivider,
} from "@mui/joy";

import { CiWarning } from "react-icons/ci";

const CalorieSummary = () => {
  const { calculatedData } = useSelector((state) => state.profileData);
  const { bmr, calculatedCalorieIntake, calculatedDailyDeficit } =
    calculatedData;

  const dailyCalorieIntakeWarning =
    calculatedCalorieIntake !== "" && calculatedCalorieIntake < bmr;
  return (
    <Card sx={{ my: 2 }}>
      <List orientation="horizontal">
        <ListItem sx={{ flex: 1 }}>
          <Stack>
            <Typography level="body-sm">Napi kalóriadeficit: </Typography>
            <Typography fontWeight={800} level="body-lg">
              {calculatedDailyDeficit ? `${calculatedDailyDeficit} kcal` : ""}
            </Typography>
          </Stack>
        </ListItem>
        <ListDivider inset="gutter" />
        <ListItem sx={{ flex: 1 }}>
          <Stack>
            <Typography
              color={dailyCalorieIntakeWarning ? "danger" : ""}
              level="body-sm"
            >
              Napi kalóriabevitel:{" "}
            </Typography>
            <Typography
              color={dailyCalorieIntakeWarning ? "danger" : ""}
              fontWeight={800}
              level="body-lg"
            >
              {calculatedCalorieIntake ? `${calculatedCalorieIntake} kcal` : ""}
            </Typography>
          </Stack>
        </ListItem>
      </List>

      {dailyCalorieIntakeWarning ? (
        <Alert
          color="danger"
          variant="outlined"
          startDecorator={<CiWarning />}
          size="sm"
        >
          Túl alacsony napi kalóriabevitel, változtass a diéta paraméterein!
        </Alert>
      ) : (
        ""
      )}
    </Card>
  );
};

export default CalorieSummary;
