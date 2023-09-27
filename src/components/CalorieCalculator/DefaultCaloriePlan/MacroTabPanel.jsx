import { TabPanel, Stack } from "@mui/joy";

import MacroCard from "./MacroCard";

const MacroTabPanel = ({ macroGoal, panelValue }) => {
  return (
    <TabPanel value={panelValue}>
      <Stack flexDirection="row" justifyContent="space-between">
        {/** Loop through 'cutMacros' object and generate <MacroCard> components from macro values */}
        {Object.entries(macroGoal).map((el) => {
          return <MacroCard key={el[0]} macroDatas={el[1]} />;
        })}
      </Stack>
    </TabPanel>
  );
};

export default MacroTabPanel;
