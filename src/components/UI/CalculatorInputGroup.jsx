import { Sheet, Typography } from "@mui/joy";

const CalculatorInputGroup = ({ children, labelName, icon }) => {
  return (
    <Sheet>
      <Typography
        level="title-lg"
        component="h2"
        color="primary"
        startDecorator={icon}
      >
        {labelName}
      </Typography>
      {children}
    </Sheet>
  );
};

export default CalculatorInputGroup;
