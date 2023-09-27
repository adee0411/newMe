import { ListItem, Typography } from "@mui/joy";

const MacroItem = ({ macroData }) => {
  return (
    <ListItem sx={{ flexDirection: "column" }}>
      <Typography>
        {macroData[0][0].toUpperCase() + macroData[0].slice(1)}
      </Typography>
      <Typography>{macroData[1]} g</Typography>
    </ListItem>
  );
};

export default MacroItem;
