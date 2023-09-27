import { TabPanel, Stack } from "@mui/joy";

import MacroCard from "./MacroCard";

const MacroTabPanel = ({ macroGoal, panelValue }) => {
  const carbQuantities = ["Moderate", "Low", "High"];
  return (
    <TabPanel value={panelValue}>
      <Stack flexDirection="column" justifyContent="space-between" gap={1}>
        {/** Loop through 'cutMacros' object and generate <MacroCard> components from macro values */}
        {Object.entries(macroGoal).map((el, index) => {
          return (
            <MacroCard
              key={el[0]}
              macroDatas={el[1]}
              carbQuantity={carbQuantities[index]}
            />
          );
        })}
      </Stack>
    </TabPanel>
  );
};

export default MacroTabPanel;
