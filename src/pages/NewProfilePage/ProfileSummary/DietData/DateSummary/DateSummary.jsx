import {
  List,
  ListItem,
  Divider,
  Stack,
  Typography,
  ListDivider,
} from "@mui/joy";
import { useSelector } from "react-redux";

const DateSummary = () => {
  const { dietStartInput } = useSelector((state) => state.profileData.dietData);
  const { calculatedData } = useSelector((state) => state.profileData);
  return (
    <List
      variant="outlined"
      orientation="horizontal"
      sx={{ borderRadius: "md", my: 2 }}
    >
      <ListItem sx={{ flex: 1 }}>
        <Stack width="100%">
          <Typography level="body-sm" textAlign="center">
            Diéta kezdete
          </Typography>
          <Typography
            level="body-lg"
            fontWeight={800}
            textAlign="center"
          >{`${dietStartInput.replaceAll("-", ".")}.`}</Typography>
        </Stack>
      </ListItem>
      <ListDivider inset="gutter" />
      <ListItem sx={{ flex: 1 }}>
        <Stack width="100%">
          <Typography level="body-sm" textAlign="center">
            Diéta hossza
          </Typography>
          <Typography fontWeight={800} textAlign="center">
            {" "}
            {calculatedData.calculatedDietLength
              ? `${calculatedData.calculatedDietLength} hét`
              : ""}
          </Typography>
        </Stack>
      </ListItem>
      <ListDivider inset="gutter" />
      <ListItem sx={{ flex: 1 }}>
        <Stack width="100%">
          <Typography level="body-sm" textAlign="center">
            Diéta vége
          </Typography>
          <Typography level="body-lg" fontWeight={800} textAlign="center">
            {" "}
            {calculatedData.calculatedDietEndDate
              ? `${calculatedData.calculatedDietEndDate.replaceAll("-", ".")}.`
              : ""}
          </Typography>
        </Stack>
      </ListItem>
    </List>
  );
};

export default DateSummary;
