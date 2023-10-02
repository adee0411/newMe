import { Sheet, FormControl, Checkbox, FormLabel } from "@mui/joy";

import { useDispatch, useSelector } from "react-redux";
import {
  setDisabledCheckboxName,
  showCheckboxWarning,
  setLabelChecked,
} from "./calorieCustomizerSlice";

const InputGroup = ({ children }) => {
  const dispatch = useDispatch();
  const checkboxState = useSelector(
    (state) => state.calorieCustomizer.checkboxState
  );

  const { labelChecked, disabledCheckboxName } = checkboxState;

  const handleInputVisibilityCheckboxChange = (e) => {
    const checkboxName = e.target.name;
    if (
      e.target.checked &&
      Object.values(labelChecked).find((el) => el === true)
    ) {
      const [checkboxNameToDisable] = Object.entries(labelChecked).find(
        (el) => el[1] === false && el[0] !== e.target.name
      );
      dispatch(setDisabledCheckboxName(checkboxNameToDisable));
    }
    if (!e.target.checked) {
      if (
        Object.values(labelChecked).filter((el) => el === false).length === 2
      ) {
        dispatch(showCheckboxWarning(true));
        setTimeout(() => {
          dispatch(showCheckboxWarning(false));
        }, 4000);
        return;
      }
      setDisabledCheckboxName("");
    }
    dispatch(setLabelChecked(checkboxName));
    dispatch(showCheckboxWarning(false));
  };

  return (
    <Sheet sx={{ my: 3 }}>
      <FormControl orientation="horizontal" sx={{ gap: 1, my: 1 }}>
        <Checkbox
          onChange={handleInputVisibilityCheckboxChange}
          checked={labelChecked.deficit}
          name="deficit"
          disabled={disabledCheckboxName === "deficit"}
        />
        <FormLabel sx={{ opacity: `${!labelChecked.deficit ? 0.5 : 1}` }}>
          Calorie deficit pace (daily)
        </FormLabel>
      </FormControl>
      <FormControl>{children}</FormControl>
    </Sheet>
  );
};

export default InputGroup;
