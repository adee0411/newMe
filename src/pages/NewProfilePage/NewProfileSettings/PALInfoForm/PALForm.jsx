import { Typography, Button } from "@mui/joy";
import PALInputWrapper from "./PALInputWrapper";

import classes from "./PALForm.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { incrementActiveFormIndex } from "../../../../store/profileSlice";

const PALForm = () => {
  const dispatch = useDispatch();

  const { activeFormIndex } = useSelector(
    (state) => state.profileData.formInput.UI
  );

  const handleActiveFormChange = () => {
    // Skip to next form component
    dispatch(incrementActiveFormIndex());
  };
  return (
    <div
      className={`${classes["new-profile-content__pal-info"]} ${
        activeFormIndex === 1 ? classes["active"] : ""
      }`}
    >
      <Typography textAlign="center" level="h3" color="neutral">
        Fizikai aktivitás
      </Typography>
      <Typography
        level="body-sm"
        color="neutral"
        textAlign="center"
        sx={{ width: "80%", margin: "0 auto" }}
      >
        Válaszd ki, hogy heti szinten milyen a fizikai aktivitásod. Az
        aktivitási szint befolyásolja a napi kalória-felhasználás és
        elfogyasztható kalória mértékét.
      </Typography>
      <div>
        <PALInputWrapper />
        <Button type="button" fullWidth onClick={handleActiveFormChange}>
          Tovább
        </Button>
      </div>
    </div>
  );
};

export default PALForm;
