import { Card, ListItem, List, Typography, ListDivider } from "@mui/joy";

import MacroItem from "./MacroItem";

const MacroCard = ({ macroDatas }) => {
  return (
    <Card>
      <List>
        {/* Loop through 'macroData' and return <MacroItem> components for each macro value*/}
        {Object.entries(macroDatas).map((el) => {
          return <MacroItem macroData={el} key={el[0]} />;
        })}
      </List>
    </Card>
  );
};

export default MacroCard;
