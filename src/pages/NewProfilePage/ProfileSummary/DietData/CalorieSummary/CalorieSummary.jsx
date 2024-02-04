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
  const { diet } = useSelector((state) => state.profileData.fetchedData);

  /*const dailyCalorieIntakeWarning =
    calculatedCalorieIntake !== "" && calculatedCalorieIntake < bmr;*/
  return (
    <Card sx={{ my: 2 }}>
      <List orientation="horizontal">
        <ListItem sx={{ flex: 1 }}>
          <Stack>
            <Typography level="body-sm">Napi kalóriadeficit: </Typography>
            <Typography fontWeight={800} level="body-lg">
              {`${diet.deficit} kcal`}
            </Typography>
          </Stack>
        </ListItem>
        <ListDivider inset="gutter" />
        <ListItem sx={{ flex: 1 }}>
          <Stack>
            <Typography level="body-sm">Napi kalóriabevitel: </Typography>
            <Typography fontWeight={800} level="body-lg"></Typography>
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
          Túl alacsony napi kalóriabevitel! Csökkents a napi kalória-defcit
          célodon vagy növeld a célsúly mértékét!
        </Alert>
      ) : (
        ""
      )}
    </Card>
  );
};

export default CalorieSummary;
