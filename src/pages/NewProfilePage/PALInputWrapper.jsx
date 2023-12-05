import {
  FormControl,
  FormLabel,
  List,
  ListItem,
  RadioGroup,
  Radio,
  Typography,
} from "@mui/joy";

const PAL = {
  Sedentary: {
    multiplier: 1.2,
    label: "Ülő munka",
    description: "Tudatos edzés nélküli, leginkább ülő életmód",
  },
  "Light exercise": {
    multiplier: 1.375,
    label: "Alkalmi edzés",
    description: "Fizikai edzés, heti 1-3 alkalommal",
  },
  "Moderate exercise": {
    multiplier: 1.55,
    label: "Rendszeres edzés",
    description: "Rendszeres edzés, heti 4-5 alkalommal",
  },
  "Heavy exercise": {
    multiplier: 1.725,
    label: "Napi szintű edzés",
    description: "Napi rendszerességű edzés",
  },
  "Physical job": {
    multiplier: 1.9,
    label: "Fizikai munka",
    description: "Megterhelő fizikai munka és aktivitás",
  },
  Athlete: {
    multiplier: 2.5,
    label: "Atléta",
    description: "Hivatásos sportoló, atléta",
  },
};

const PALInputWrapper = () => {
  return (
    <FormControl>
      <RadioGroup>
        <List
          sx={{
            "--List-gap": "12px",
            "--ListItem-radius": "8px",
            "--ListItem-paddingY": "1rem",
          }}
          size="md"
        >
          {Object.entries(PAL).map((pal) => {
            return (
              <ListItem
                variant="outlined"
                key={pal[0]}
                sx={{
                  boxShadow: "sm",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Radio
                  overlay
                  value={pal[1].multiplier}
                  label={pal[1].label}
                  checked={pal[1].multiplier === 1.2}
                ></Radio>
                <Typography fontSize="sm" color="neutral">
                  {pal[1].description}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </RadioGroup>
    </FormControl>
  );
};

export default PALInputWrapper;
