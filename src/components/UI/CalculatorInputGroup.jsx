import { FormControl, FormLabel, Typography } from "@mui/joy";

const CalculatorInputGroup = ({ children, labelName, icon }) => {
  return (
    <FormControl>
      <FormLabel>
        {" "}
        <Typography
          level="title-lg"
          component="h2"
          color="primary"
          mb={2}
          startDecorator={icon}
        >
          {labelName}
        </Typography>
      </FormLabel>
      {children}
    </FormControl>
  );
};

export default CalculatorInputGroup;
