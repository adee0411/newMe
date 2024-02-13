import { Form } from "react-router-dom";
import { FormControl, Input, Button, FormLabel, Stack } from "@mui/joy";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { formatDate } from "../../../../../utils";

const NewWeightForm = () => {
  const dispatch = useDispatch();
  const weightRef = useRef(null);

  const { selectedDate } = useSelector((state) => state.profileData);
  const formattedDate = selectedDate;

  const submitDailyCalorie = (e) => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={submitDailyCalorie}>
      <FormControl sx={{ gap: 2, my: 2 }}>
        <FormLabel>Napi súly</FormLabel>
        <Stack direction="row" spacing={2}>
          <Input
            type="number"
            placeholder="Súly"
            slotProps={{ input: { ref: weightRef, step: 0.1 } }}
            endDecorator="kg"
          />
          <Button type="submit">Naplóz</Button>
        </Stack>
      </FormControl>
    </Form>
  );
};

export default NewWeightForm;
