import { Card, CardContent, Typography, Grid } from "@mui/joy";

import { useSelector } from "react-redux";

const TDEECard = () => {
  const { tdee } = useSelector((state) => state.profileData.calculatedData);

  return (
    <Card color="neutral" variant="outlined">
      <CardContent>
        <Grid container justifyContent="space-between" flexWrap="nowrap">
          <Grid>
            {" "}
            <Typography level="title-md" component="h3">
              TDEE (Total Daily Energy Expenditure)
            </Typography>
            <Typography level="body-sm">Napi kalória-szükséglet</Typography>
          </Grid>
          <Grid>
            {" "}
            <Typography level="body-lg" fontWeight={800} fontSize={20}>
              {tdee}{" "}
              <Typography component="span" level="body-sm">
                kcal/nap
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TDEECard;
