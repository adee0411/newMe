import { Card, List, Typography } from "@mui/joy";

import MacroItem from "./MacroItem";

const MacroCard = ({ macroDatas, carbQuantity }) => {
  return (
    <Card>
      <Typography textAlign="center" level="title-md">
        {carbQuantity} carb
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {/* Loop through 'macroData' and return <MacroItem> components for each macro value*/}
        {Object.entries(macroDatas).map((el) => {
          return <MacroItem macroData={el} key={el[0]} />;
        })}
      </List>
    </Card>
  );
};

export default MacroCard;
