import { Typography } from "@mui/joy";

import classes from "./ProfileSummary.module.scss";

import ProfileSummaryData from "./ProfileSummaryData";

const ProfileSummary = ({ data }) => {
  console.log(data);
  return (
    <div className={classes["profile-sum-sontainer"]}>
      <Typography level="h1" fontSize={32} mb="1rem" textAlign="center">
        Profil összesítő
      </Typography>
      <ProfileSummaryData data={data} />
    </div>
  );
};

export default ProfileSummary;
