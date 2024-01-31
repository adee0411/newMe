import { doc, setDoc } from "firebase/firestore";
import db from "../../backend/firebase";

import classes from "./NewProfilePage.module.scss";

import NewProfileSettings from "./NewProfileSettings/NewProfileSettings";
import ProfileSummary from "./ProfileSummary/ProfileSummary";

import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import { calculateDailyDeficit } from "../../utils";

const NewProfilePage = () => {
  const { dietData } = useSelector((state) => state.profileData);
  const { dietLengthInput, weightGoalInput } = dietData;

  //const isDietFormFilled = dietLengthInput !== "" || weightGoalInput !== "";

  return (
    <div className={classes["new-profile-container"]}>
      <NewProfileSettings />
    </div>
  );
};

export default NewProfilePage;

export const createProfileAction = async ({ request }) => {
  try {
    const data = await request.formData();

    // Personal Data to send
    const profileData = {
      name: data.get("name"),
      gender: data.get("gender"),
      age: +data.get("age"),
      weight: +data.get("weight"),
      height: +data.get("height"),
      pal: +data.get("pal"),
    };

    // Diet variables
    const dietLength = data.get("dietLength");
    const weightGoal = data.get("weightGoal");
    const presetDeficit = data.get("presetDeficitInput");
    const finetunedDeficit = data.get("finetunedDeficitInput");
    const totalWeightloss = profileData.weight - weightGoal;

    let deficit;

    // Calculate deficit
    if (finetunedDeficit === null) {
      if (presetDeficit === null) {
        deficit = calculateDailyDeficit(dietLength, totalWeightloss);
      } else {
        deficit = presetDeficit;
      }
    } else {
      deficit = finetunedDeficit;
    }

    // Diet data to send
    const dietData = {
      dietStart: data.get("dietStart"),
      dietLength: +dietLength,
      weightGoal: +weightGoal,
      deficit: +deficit,
    };

    await setDoc(doc(db, "profile", "personal"), profileData);
    await setDoc(doc(db, "profile", "diet"), dietData);
  } catch (e) {
    console.log(e.message);
  }

  return redirect("/dashboard");
};
