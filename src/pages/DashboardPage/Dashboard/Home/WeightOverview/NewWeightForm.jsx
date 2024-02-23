import { Form, useNavigation } from "react-router-dom";
import { FormControl, Input, Button, FormLabel, Stack } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";

import { setIsFormSubmitting } from "../../../../../store/weightTrackerSlice";

const NewWeightForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { isFormSubmitting } = useSelector((state) => state.weightTracker.UI);

  const { selectedDate } = useSelector((state) => state.profileData);

  if (navigation.state === "submitting") {
    dispatch(setIsFormSubmitting(true));
  } else {
    dispatch(setIsFormSubmitting(false));
  }
  return (
    <Form method="post" action="/dashboard" id="weight-form">
      <Stack direction="row" spacing={2} my={2}>
        <FormControl sx={{ flex: 1 }}>
          <FormLabel sx={{ display: "none" }}>Napi súly</FormLabel>

          <Input
            type="number"
            placeholder="Súly"
            slotProps={{
              input: {
                style: { width: "100%" },
                step: "0.1",
              },
            }}
            endDecorator="kg"
            name="weight"
          />
        </FormControl>
        <FormControl sx={{ display: "none" }}>
          {" "}
          <Input name="date" value={selectedDate} readOnly />
        </FormControl>

        <Button
          type="submit"
          name="logType"
          value="logWeight"
          loading={isFormSubmitting}
        >
          Naplóz
        </Button>
      </Stack>
    </Form>
  );
};

export default NewWeightForm;
