import { Form } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Grid,
  Typography,
  Button,
} from "@mui/joy";

import classes from "./PersonalInfoForm.module.scss";

const PersonalInfoForm = ({ onSubmitForm }) => {
  return (
    <div className={classes["new-profile-content__personal-info"]}>
      <Typography textAlign="center" level="h3" color="neutral">
        Személyes adatok
      </Typography>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Grid container gap={2} justifyContent="space-between" my={4}>
          <Grid flex={1}>
            {" "}
            <FormControl>
              <FormLabel>Keresztnév</FormLabel>
              <Input sx={{ width: "100%" }} />
            </FormControl>
          </Grid>
          <Grid flex={1}>
            {" "}
            <FormControl>
              <FormLabel>Nem</FormLabel>
              <RadioGroup name="gender" orientation="horizontal">
                <Radio value="male" label="Férfi" />
                <Radio value="female" label="Nő" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container justifyContent="space-between" gap={2} my={4}>
          <Grid flex={1}>
            {" "}
            <FormControl>
              <FormLabel>Kor</FormLabel>
              <Input type="number" sx={{ width: "100%" }} endDecorator="év" />
            </FormControl>
          </Grid>
          <Grid flex={1}>
            {" "}
            <FormControl>
              <FormLabel>Testsúly</FormLabel>
              <Input type="number" sx={{ width: "100%" }} endDecorator="kg" />
            </FormControl>
          </Grid>
          <Grid flex={1}>
            {" "}
            <FormControl>
              <FormLabel>Magasság</FormLabel>
              <Input type="number" sx={{ width: "100%" }} endDecorator="cm" />
            </FormControl>
          </Grid>
        </Grid>

        <Button
          type="submit"
          size="md"
          sx={{ margin: "1rem 0", width: "100%" }}
          onClick={onSubmitForm}
        >
          Tovább
        </Button>
      </Form>
    </div>
  );
};

export default PersonalInfoForm;
