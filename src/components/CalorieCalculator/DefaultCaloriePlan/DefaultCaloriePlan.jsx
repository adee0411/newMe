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

import { useMemo } from "react";

import { calculateMacroValues } from "../../../utils";

import { useSelector } from "react-redux/es/hooks/useSelector";

import MacroTabPanel from "./MacroTabPanel";

const DefaultCaloriePlan = () => {
  const calculatedCalories = useSelector(
    (state) => state.calorieCalculator.calculatedCalories
  );

  const cutMacros = calculateMacroValues(calculatedCalories.cut.value);
  const bulkMacros = calculateMacroValues(calculatedCalories.bulk.value);
  const maintenanceMacros = calculateMacroValues(calculatedCalories.tdee.value);
  const calculatedMacros = {
    cutMacros,
    bulkMacros,
    maintenanceMacros,
  };

  return (
    <Sheet>
      <Tabs>
        <TabList tabFlex={1}>
          <Tab value={0}>Cut</Tab>
          <Tab value={1}>Maintenance</Tab>
          <Tab value={2}>Bulk</Tab>
        </TabList>
        {/* Loop through 'calculatedMacros' and render <TabPanel> components */}
        {Object.values(calculatedMacros).map((macroGoals, index) => {
          return (
            <MacroTabPanel
              panelValue={index}
              macroGoal={macroGoals}
              key={index}
            />
          );
        })}
      </Tabs>
    </Sheet>
  );
};

export default DefaultCaloriePlan;
