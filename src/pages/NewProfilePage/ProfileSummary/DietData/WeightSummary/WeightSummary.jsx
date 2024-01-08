import { Typography, Card, List, ListItem, Stack, ListDivider } from "@mui/joy";

import { useSelector } from "react-redux";

const WeightSummary = () => {
  const { calculatedData } = useSelector((state) => state.profileData);
  return (
    <Card sx={{ my: 2 }}>
      <List orientation="horizontal">
        <ListItem sx={{ flex: 1 }}>
          <Stack>
            <Typography level="body-sm">Célsúly: </Typography>
            <Typography fontWeight={800} level="body-lg">
              {calculatedData.calculatedWeightGoal !== ""
                ? `${calculatedData.calculatedWeightGoal} kg`
                : ""}
            </Typography>
          </Stack>
        </ListItem>
        <ListDivider inset="gutter" />
        <ListItem sx={{ flex: 1 }}>
          <Stack>
            <Typography level="body-sm">Összes súlyvesztés: </Typography>
            <Typography fontWeight={800} level="body-lg">
              {calculatedData.calculatedWeightloss !== ""
                ? `${calculatedData.calculatedWeightloss} kg`
                : ""}
            </Typography>
          </Stack>
        </ListItem>
      </List>
    </Card>
  );
};

export default WeightSummary;
