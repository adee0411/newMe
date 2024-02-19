import { Form, useNavigation } from "react-router-dom";
import { FormControl, Input, Button, Stack } from "@mui/joy";

import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setIsFormSubmitting } from "../../../../../store/calorieTrackerSlice";

const NewCalorieForm = () => {
  const calorieIntakeRef = useRef(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { isFormSubmitting } = useSelector((state) => state.calorieTracker.UI);

  const { selectedDate } = useSelector((state) => state.profileData);
  const formattedDate = selectedDate;

  if (navigation.state === "submitting") {
    dispatch(setIsFormSubmitting(true));
  } else {
    dispatch(setIsFormSubmitting(false));
  }

  return (
    <Form method="post" action="/dashboard">
      <Stack direction="row" spacing={2} my={2}>
        <FormControl sx={{ flex: 1 }}>
          <Input
            type="number"
            placeholder="Kalória"
            slotProps={{
              input: {
                ref: calorieIntakeRef,
                style: { width: "100%" },
              },
            }}
            endDecorator="kcal"
            name="dailyCalorie"
          />{" "}
        </FormControl>
        <FormControl sx={{ display: "none" }}>
          {" "}
          <Input name="date" value={formattedDate} readOnly />
        </FormControl>
        <Button type="submit" loading={isFormSubmitting}>
          Naplóz
        </Button>
      </Stack>
    </Form>
  );
};

export default NewCalorieForm;
