import { Button } from "@mui/joy";
import { Form } from "react-router-dom";

import PersonalInfoForm from "./PersonalInfoForm/PersonalInfoForm";
import PALForm from "./PALInfoForm/PALForm";
import DietInfoForm from "./DietInfoForm/DietInfoForm";
import { useSelector } from "react-redux";

const NewProfileSettingsForms = () => {
  const { activeFormIndex } = useSelector((state) => state.profileData.UI);
  return (
    <div>
      <Form action="/new-profile" method="post">
        <PersonalInfoForm />
        <PALForm />
        <DietInfoForm />
        {activeFormIndex === 2 && (
          <Button type="submit" fullWidth>
            Profil elkészítése
          </Button>
        )}
      </Form>
    </div>
  );
};

export default NewProfileSettingsForms;
