import { Stepper, Step, StepButton, StepIndicator } from "@mui/joy";
import { IoCheckmark } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";

import { setActiveFormIndex } from "../../store/profileSlice";

const steps = ["Személyes adatok", "Fizikai aktivitás", "Diéta adatai"];

const StepperWrapper = () => {
  const { activeFormIndex } = useSelector(
    (state) => state.profileData.formInput.UI
  );
  const dispatch = useDispatch();

  const handleFormIndexChange = (e) => {
    const buttonValue = +e.target.value;
    // prevent from unnecessary state update if active button is clicked
    if (activeFormIndex !== +e.target.value) {
      dispatch(setActiveFormIndex(buttonValue));
    }
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
                variant={
                  index === activeFormIndex
                    ? "solid"
                    : index < activeFormIndex
                    ? "soft"
                    : "outlined"
                }
                color="primary"
              >
                {index <= activeFormIndex ? <IoCheckmark /> : index + 1}
              </StepIndicator>
            }
          >
            <StepButton
              value={index}
              onClick={handleFormIndexChange}
              disabled={index > activeFormIndex}
            >
              {step}
            </StepButton>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default StepperWrapper;
