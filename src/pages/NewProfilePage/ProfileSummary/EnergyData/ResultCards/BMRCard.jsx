import { Card, CardContent, Typography, Grid } from "@mui/joy";

import { useSelector } from "react-redux";

const BMRCard = () => {
  const { bmr } = useSelector((state) => state.profileData.calculatedData);

  return (
    <Card color="neutral" variant="outlined">
      <CardContent>
        <Grid container justifyContent="space-between" flexWrap="nowrap">
          <Grid>
            {" "}
            <Typography level="title-md" component="h3">
              BMR (Basal Metabolic Rate)
            </Typography>
            <Typography level="body-sm">
              Alap anyagcsere kalória-szükséglete
            </Typography>
          </Grid>
          <Grid>
            {" "}
            <Typography level="body-lg" fontWeight={800} fontSize={20}>
              {bmr}{" "}
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

export default BMRCard;
