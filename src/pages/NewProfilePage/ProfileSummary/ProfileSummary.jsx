import { Typography } from "@mui/joy";

import classes from "./ProfileSummary.module.scss";

import ProfileSummaryData from "./ProfileSummaryData";

const ProfileSummary = () => {
  return (
    <div className={classes["profile-sum-sontainer"]}>
      <Typography level="h1" fontSize={32} mb="1rem" textAlign="center">
        Profil összesítő
      </Typography>
      <ProfileSummaryData />
    </div>
  );
};

export default ProfileSummary;
