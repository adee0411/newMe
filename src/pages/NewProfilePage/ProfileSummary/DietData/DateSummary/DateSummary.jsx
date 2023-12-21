import { Card, CardContent, Divider, Stack, Typography } from "@mui/joy";
import { useSelector } from "react-redux";

const DateSummary = () => {
  const { dietStartInput } = useSelector((state) => state.profileData.dietData);
  const { calculatedData } = useSelector((state) => state.profileData);
  return (
    <Stack direction="row" justifyContent="space-between">
      <Card color="danger" variant="soft" invertedColors>
        <CardContent>
          <Typography level="body-sm" textAlign="center">
            Diéta kezdete
          </Typography>
          <Typography
            level="body-lg"
            fontWeight={800}
            textAlign="center"
          >{`${dietStartInput.replaceAll("-", ".")}.`}</Typography>
        </CardContent>
      </Card>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography fontWeight={800} textAlign="center">
          {" "}
          {calculatedData.calculatedDietLength
            ? `${calculatedData.calculatedDietLength} hét`
            : ""}
        </Typography>
        <Divider />
      </div>
      <Card color="success" variant="soft" invertedColors>
        {" "}
        <CardContent>
          <Typography level="body-sm" textAlign="center">
            Diéta vége
          </Typography>
          <Typography level="body-lg" fontWeight={800} textAlign="center">
            {" "}
            {calculatedData.calculatedDietEndDate
              ? `${calculatedData.calculatedDietEndDate.replaceAll("-", ".")}.`
              : ""}
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default DateSummary;
