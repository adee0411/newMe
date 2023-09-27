import {
  Sheet,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Card,
  List,
  ListItem,
  ListDivider,
  Stack,
  Typography,
} from "@mui/joy";

import { calculateMacroValues } from "../../../utils";

import { useSelector } from "react-redux/es/hooks/useSelector";

const DefaultCaloriePlan = () => {
  const macroRatios = {
    moderateCarb: {
      protein: 0.3,
      fats: 0.35,
      carbs: 0.35,
    },
    lowCarb: {
      protein: 0.4,
      fats: 0.4,
      carbs: 0.2,
    },
    highCarb: { protein: 0.3, fats: 0.2, carbs: 0.5 },
  };
  const calculatedCalories = useSelector(
    (state) => state.calorieCalculator.calculatedCalories
  );

  const cutMacros = calculateMacroValues(
    calculatedCalories.cut.value,
    macroRatios
  );
  const bulkMacros = calculateMacroValues(
    calculatedCalories.bulk.value,
    macroRatios
  );
  const maintenanceMacros = calculateMacroValues(
    calculatedCalories.tdee.value,
    macroRatios
  );
  console.log(cutMacros);

  return (
    <Sheet>
      <Tabs>
        <TabList tabFlex={1}>
          <Tab value={0}>Cut</Tab>
          <Tab value={1}>Maintenance</Tab>
          <Tab value={2}>Bulk</Tab>
        </TabList>
        <TabPanel value={0}>
          <Stack flexDirection="row" justifyContent="space-between">
            <Card>
              <List>
                <ListItem>
                  <Typography>Protein</Typography>
                  <Typography>{cutMacros.lowCarb.protein}</Typography>
                </ListItem>
                <ListDivider />
                <ListItem>Fats</ListItem>
                <ListDivider />
                <ListItem>Carbs</ListItem>
              </List>
            </Card>
            <Card>
              <List>
                <ListItem>Protein</ListItem>
                <ListItem>Fats</ListItem>
                <ListItem>Carbs</ListItem>
              </List>
            </Card>
            <Card>
              <List>
                <ListItem>Protein</ListItem>
                <ListItem>Fats</ListItem>
                <ListItem>Carbs</ListItem>
              </List>
            </Card>
          </Stack>
        </TabPanel>
        <TabPanel value={1}>Panel 2</TabPanel>
        <TabPanel value={2}>Panel 3</TabPanel>
      </Tabs>
    </Sheet>
  );
};

export default DefaultCaloriePlan;
