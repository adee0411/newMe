import {
  List,
  ListItem,
  Divider,
  Stack,
  Typography,
  ListDivider,
} from "@mui/joy";
import { useSelector } from "react-redux";

import { calculateDietEnd } from "../../../../../utils";

const DateSummary = () => {
  const dietData = useSelector((state) => state.profileData.fetchedData.diet);
  const { dietStart, dietLength } = dietData;
  const dietEnd = calculateDietEnd(dietStart, dietLength);

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
          >{`${dietStart.replaceAll("-", ".")}.`}</Typography>
        </Stack>
      </ListItem>
      <ListDivider inset="gutter" />
      <ListItem sx={{ flex: 1 }}>
        <Stack width="100%">
          <Typography level="body-sm" textAlign="center">
            Diéta hossza
          </Typography>
          <Typography fontWeight={800} textAlign="center">
            {`${dietLength} hét`}
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
            {`${dietEnd.replaceAll("-", ".")}.`}
          </Typography>
        </Stack>
      </ListItem>
    </List>
  );
};

export default DateSummary;
