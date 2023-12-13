import { Sheet, Typography } from "@mui/joy";

const CalculatorInputGroup = ({ children, labelName, icon }) => {
  return (
    <div color="neutral" variant="outlined" sx={{ p: 8, borderRadius: 8 }}>
      <Typography
        component="h2"
        level="h2"
        startDecorator={icon}
        fontWeight={900}
        color="neutral"
      >
        {labelName}
      </Typography>
      {children}
    </div>
  );
};

export default CalculatorInputGroup;
