import { Card, CardContent, Typography } from "@mui/joy";

import { useSelector, useDispatch } from "react-redux";

import { setCalculatedData } from "../../../../store/profileSlice";

import { calculateBMR } from "../../../../utils";

const BMRCard = () => {
  const dispatch = useDispatch();
  const { personalData } = useSelector((state) => state.profileData);

  const bmr = calculateBMR(personalData);

  dispatch(setCalculatedData({ dataName: "bmr", dataValue: bmr }));

  return (
    <Card color="neutral" variant="outlined">
      <CardContent>
        <Typography level="title-md" component="h3">
          BMR (Basal Metabolic Rate)
        </Typography>
        <Typography level="body-sm">
          Alap anyagcsere kalória-szükséglete
        </Typography>
        <Typography level="body-lg" fontWeight={800} fontSize={40}>
          {bmr}{" "}
          <Typography component="span" level="body-lg">
            kcal
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BMRCard;
