import { useSelector } from "react-redux";

import { Form } from "react-router-dom";
import { Stack, FormControl, FormLabel, Input, Radio, Button } from "@mui/joy";

const EditProfileForm = () => {
  const profileData = useSelector((state) => state.profileData.fetchedData);
  const personalData = profileData.personal;
  const dietData = profileData.diet;

  return (
    <Form>
      <Stack spacing={2}>
        <FormControl>
          <FormLabel>Név</FormLabel>
          <Input
            autoFocus
            required
            name="name"
            defaultValue={personalData.name}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Kor</FormLabel>
          <Input
            type="number"
            required
            name="age"
            defaultValue={personalData.age}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Magasság</FormLabel>
          <Input
            type="number"
            required
            name="height"
            defaultValue={personalData.height}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Súly</FormLabel>
          <Input
            type="number"
            required
            name="weight"
            defaultValue={personalData.weight}
          />
        </FormControl>
        <Button type="submit">Submit</Button>
      </Stack>
    </Form>
  );
};

export default EditProfileForm;
