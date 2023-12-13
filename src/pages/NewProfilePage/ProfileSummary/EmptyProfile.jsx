import { Typography } from "@mui/joy";

import classes from "./EmptyProfile.module.scss";

import PlaceholderImage from "../../../assets/images/undraw_profile_details_re_ch9r.svg";

const EmptyProfile = () => {
  return (
    <div>
      <Typography
        level="body-md"
        textAlign="center"
        mt={4}
        width="80%"
        mx="auto"
        color="neutral"
      >
        Itt fognak megjelenni a diéta adatai a megadott paraméterek alapján
      </Typography>
      <div>
        <div className={classes["placeholder-image"]}>
          <img src={PlaceholderImage} />
        </div>
      </div>
    </div>
  );
};

export default EmptyProfile;
