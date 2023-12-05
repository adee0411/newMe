import { Stepper, Step, StepButton, StepIndicator } from "@mui/joy";
import { IoCheckmark } from "react-icons/io5";

const steps = ["Személyes adatok", "Fizikai aktivitás", "Diéta adatai"];

const StepperWrapper = ({ activeFormIndex, onSetFormIndex }) => {
  const handleFormIndexChange = (e) => {
    e.preventDefault();
    onSetFormIndex(+e.target.value);
  };

  return (
    <Stepper sx={{ width: "100%", mx: "auto", my: 4 }}>
      {steps.map((step, index) => {
        return (
          <Step
            orientation="vertical"
            key={index}
            indicator={
              <StepIndicator
                variant={index <= activeFormIndex ? "solid" : "outlined"}
                color="primary"
              >
                {index <= activeFormIndex ? <IoCheckmark /> : index + 1}
              </StepIndicator>
            }
            sx={{
              "&::after": {
                ...(activeFormIndex > index &&
                  index !== 2 && { bgcolor: "primary.solidBg" }),
              },
            }}
          >
            <StepButton value={index} onClick={handleFormIndexChange}>
              {step}
            </StepButton>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default StepperWrapper;
