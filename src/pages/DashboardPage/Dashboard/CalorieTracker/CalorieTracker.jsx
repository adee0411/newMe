import { Sheet, Typography } from "@mui/joy";

// Firestore imports
import db from "../../../../backend/firebase";
import { doc, getDoc } from "firebase/firestore";

const CalorieTracker = () => {
  return (
    <div>
      <Sheet sx={{ borderRadius: "md", p: "24px", background: "transparent" }}>
        <Typography>Kalória történet</Typography>
      </Sheet>
    </div>
  );
};

export default CalorieTracker;

export const calorieIntakeLoader = async () => {
  const calorieIntakeRef = doc(db, "calorie", "data");
  const calorieIntakeSnap = await getDoc(calorieIntakeRef);

  return calorieIntakeSnap.data();
};
