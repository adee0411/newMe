import {
  Sheet,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Input,
  Typography,
  Button,
} from "@mui/joy";

import { useDispatch } from "react-redux";

import { useRef, useState } from "react";

import { useNavigate, Form } from "react-router-dom";

import Image from "../../assets/images/undraw_stability_ball_b-4-ia.svg";
import { setName } from "../../store/PersonalDataSlice";

const WelcomePage = () => {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const navigate = useNavigate();

  const [genderValue, setGenderValue] = useState("male");

  const [nameValue, setNameValue] = useState("");

  const handleGenderChange = (e) => {
    setGenderValue(e.target.value);
  };

  const capitalizeName = (name) => {
    if (!name) return;
    return name[0].toUpperCase() + name.slice(1);
  };

  const handleNameChange = (e) => {
    const capitalizedName = capitalizeName(e.target.value.trim());
    if (!capitalizedName) {
      setNameValue("");
      return;
    }

    e.target.value = capitalizedName;
    setNameValue(capitalizedName);
  };

  const handleAgeChange = (e) => {
    if (e.target.value < 1) e.target.value = 1;
  };

  const handleWeightChange = (e) => {
    if (e.target.value < 30) e.target.value = 30;
  };

  const handleHeightChange = (e) => {
    if (e.target.value < 60) e.target.value = 60;
  };

  return (
    <Sheet
      sx={{
        width: "100%",
        height: "100vh",
        margin: 0,
        padding: 0,
        display: "flex",
      }}
    >
      <header>
        <div>
          <span>Logo</span>
        </div>
        <nav>
          <ul>
            <li>Kalória kalkulátor</li>
            <li>Diéta tervező</li>
            <li>Étrend tervező</li>
          </ul>
        </nav>
      </header>
      {/** LEFT SIDE - FIXED */}
      <Sheet
        sx={{
          flex: "1",
        }}
      >
        <div
          style={{
            position: "relative",
            padding: "6rem 4rem",
            height: "100%",
          }}
        >
          <div
            style={{
              position: "relative",
              zIndex: 1,
            }}
          >
            <Typography level="h1" color="primary" fontSize={44} mb={1}>
              newMe
            </Typography>
            <Typography level="h1" fontSize={64} lineHeight={1} mb={6}>
              Újulj meg és hozd ki magadból a legjobbat!
            </Typography>
            <Typography level="h2" color="neutral" fontWeight={100} width="75%">
              Tervezd meg étrendedet, számold a szükséges kalóriáidat, kövesd
              nyomon a változásod!{" "}
            </Typography>
          </div>
          <div
            style={{
              position: "absolute",
              right: "10%",
              bottom: "10%",
              zIndex: "0",
            }}
          >
            <img
              src={Image}
              style={{
                width: "90%",
                margin: "0 auto",
                opacity: 0.8,
                display: "block",
              }}
            />
          </div>
        </div>
      </Sheet>
      {/** RIGHT SIDE - DYNAMIC */}
      <Sheet
        sx={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        variant="soft"
      >
        <Form
          style={{ marginTop: "3rem" }}
          onSubmit={(e) => e.preventDefault()}
        >
          <Typography color="neutral" level="h1" sx={{ textAlign: "center" }}>
            Üdvözlünk{nameValue ? `, ${nameValue}` : ""}!
          </Typography>
          <Typography
            color="neutral"
            component="p"
            sx={{ fontSize: "1.2rem", textAlign: "center", margin: "1rem 0" }}
          >
            Az alkalmazás használatához szükségem van néhány adatra.
            <br /> Kérlek, töltsd ki az alábbi mezőket!
          </Typography>
          <FormControl sx={{ margin: "2rem auto" }}>
            <Input
              placeholder="Keresztnév"
              sx={{ width: "100%" }}
              slotProps={{ input: { ref: nameRef } }}
              onChange={handleNameChange}
            />
          </FormControl>
          <FormControl sx={{ margin: "1rem auto" }}>
            <FormLabel>Nem</FormLabel>
            <RadioGroup
              name="gender"
              onChange={handleGenderChange}
              orientation="horizontal"
            >
              <Radio
                value="male"
                checked={genderValue === "male"}
                label="Férfi"
              />
              <Radio
                value="female"
                checked={genderValue === "female"}
                label="Nő"
              />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ margin: "1rem auto" }}>
            <FormLabel>Kor</FormLabel>
            <Input
              type="number"
              placeholder="Kor"
              sx={{ width: "100%" }}
              endDecorator="év"
              onChange={handleAgeChange}
            />
          </FormControl>
          <FormControl sx={{ margin: "1rem auto" }}>
            <FormLabel>Testsúly</FormLabel>
            <Input
              type="number"
              placeholder="Testsúly"
              sx={{ width: "100%" }}
              endDecorator="kg"
              onChange={handleWeightChange}
            />
          </FormControl>
          <FormControl sx={{ margin: "1rem auto" }}>
            <FormLabel>Magasság</FormLabel>
            <Input
              type="number"
              placeholder="Magasság"
              sx={{ width: "100%" }}
              endDecorator="cm"
              onChange={handleHeightChange}
            />
          </FormControl>
          <Button
            type="submit"
            size="md"
            sx={{ margin: "1rem 0", width: "100%" }}
          >
            Tovább
          </Button>
        </Form>
      </Sheet>
    </Sheet>
  );
};

export default WelcomePage;
