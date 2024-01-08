import { Typography } from "@mui/joy";

import { useSelector } from "react-redux";

import classes from "./ProfileSummary.module.scss";

import EmptyProfile from "./EmptyProfile";
import ProfileSummaryData from "./ProfileSummaryData";

const ProfileSummary = () => {
  const { isProfileEmpty } = useSelector((state) => state.profileData.UI);

  const profileSummaryContent = isProfileEmpty ? (
    <EmptyProfile />
  ) : (
    <ProfileSummaryData />
  );

  return (
    <div className={classes["profile-sum-sontainer"]}>
      <Typography level="h1" fontSize={32} mb="1rem" textAlign="center">
        Profil összesítő
      </Typography>
      {profileSummaryContent}
    </div>
  );
};

export default ProfileSummary;
