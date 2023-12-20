import { Card, CardContent, Typography } from "@mui/joy";

import { useSelector } from "react-redux";

const TDEECard = () => {
  const { tdee } = useSelector((state) => state.profileData.calculatedData);

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
