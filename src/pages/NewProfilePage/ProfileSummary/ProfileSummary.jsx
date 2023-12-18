import { Sheet, Typography } from "@mui/joy";

import { useSelector } from "react-redux";

import classes from "./ProfileSummary.module.scss";

import EmptyProfile from "./EmptyProfile";
import ProfileSummaryContent from "./ProfileSummaryContent";

const ProfileSummary = () => {
  const { personalData } = useSelector((state) => state.profileData);
  const isPersonalDataFormFilled = Object.values(personalData).every(
    (val) => val !== ""
  );

  const profileSummaryContent = isPersonalDataFormFilled ? (
    <ProfileSummaryContent />
  ) : (
    <EmptyProfile />
  );

  return (
    <div className={classes["profile-sum-sontainer"]}>
      <Sheet
        color="neutral"
        variant="plain"
        sx={{
          boxShadow: "md",
          maxWidth: "600px",
          mx: "auto",
          p: 4,
          height: "100%",
        }}
      >
        <Typography level="h1" textAlign="center">
          Profil összesítő
        </Typography>

        {profileSummaryContent}
      </Sheet>
    </div>
  );
};

export default ProfileSummary;
