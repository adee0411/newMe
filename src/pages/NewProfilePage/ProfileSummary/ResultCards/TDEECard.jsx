import { Card, CardContent, Typography } from "@mui/joy";

import { useSelector, useDispatch } from "react-redux";

import { setCalculatedData } from "../../../../store/profileSlice";

import { calculateTDEE } from "../../../../utils";

const TDEECard = () => {
  const dispatch = useDispatch();
  const { personalData } = useSelector((state) => state.profileData);
  const { bmr } = useSelector((state) => state.profileData.calculatedData);
  const { pal } = useSelector((state) => state.profileData.personalData);

  const tdee = calculateTDEE(bmr, pal);

  dispatch(setCalculatedData({ dataName: "tdee", dataValue: tdee }));

  return (
    <Card color="neutral" variant="outlined">
      <CardContent>
        <Typography level="title-md" component="h3">
          TDEE (Total Daily Energy Expenditure)
        </Typography>
        <Typography level="body-sm">Napi kalória-szükséglet</Typography>
        <Typography level="body-lg" fontWeight={800} fontSize={40}>
          {tdee}{" "}
          <Typography component="span" level="body-lg">
            kcal
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TDEECard;
