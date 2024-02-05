import { Form, Link } from "react-router-dom";
import { FormControl, FormLabel, Input, Button, Divider } from "@mui/joy";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { formatDate } from "../../../../../utils";

import { setDailyCalorieIntake } from "../../../../../store/calorieTrackerSlice";

const NewCalorieForm = () => {
  const dispatch = useDispatch();
  const calorieIntakeRef = useRef(null);

  const { selectedDate } = useSelector((state) => state.profileData.dietData);
  const formattedDate = selectedDate;

  const { calorieData } = useSelector((state) => state.calorieTracker);

  const selectedDateData = calorieData.find(
    (data) => data.date === selectedDate
  );

  const submitDailyCalorie = (e) => {
    e.preventDefault();

    // Must convert to Number!
    const calorieIntakeValue = +calorieIntakeRef.current.value;

    dispatch(
      setDailyCalorieIntake({
        date: formattedDate,
        calorieIntake: calorieIntakeValue,
      })
    );
  };
  return (
    <Form onSubmit={submitDailyCalorie}>
      <FormControl orientation="horizontal" sx={{ gap: 2, my: 2 }}>
        <Input
          type="number"
          sx={{ width: "120px" }}
          placeholder="Kalória"
          slotProps={{ input: { ref: calorieIntakeRef, step: 50 } }}
          defaultValue="0"
        />
        <Button type="submit">Naplóz</Button>
        <Divider orientation="vertical" sx={{ mx: 1 }}></Divider>
        <Link to="/meal-planner">Étrend naplózása</Link>
      </FormControl>
    </Form>
  );
};

export default NewCalorieForm;
