import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/joy";

import AvatarMe from "../../../../../assets/images/Avatar_me.jpg";

import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { GiBodyHeight } from "react-icons/gi";
import { BsGenderAmbiguous } from "react-icons/bs";
import { IoFitnessOutline } from "react-icons/io5";
import { IoScaleOutline } from "react-icons/io5";
import { LiaBurnSolid } from "react-icons/lia";

const Goals = () => {
  return (
    <Card variant="plain" sx={{ boxShadow: "lg", marginTop: "16px" }}>
      <Avatar
        src={AvatarMe}
        sx={{
          position: "absolute",
          top: "-40px",
          left: "50%",
          transform: "translateX(-50%)",
          "--Avatar-size": "100px",
          border: "10px solid #FBFCFE",
        }}
      />
      <CardContent sx={{ marginTop: "48px" }}>
        <Stack direction="row" p={2}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            flex={1}
          >
            <Typography fontSize={26}>
              <BsGenderAmbiguous />
            </Typography>
            <Typography fontSize={12}>FÉRFI</Typography>
          </Stack>
          <Divider orientation="vertical" inset="gutter" />
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            flex={1}
          >
            <Typography fontSize={26}>
              <LiaBirthdayCakeSolid />
            </Typography>
            <Typography fontSize={12}>33 ÉVES</Typography>
          </Stack>
          <Divider orientation="vertical" inset="gutter" />
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            flex={1}
          >
            <Typography fontSize={26}>
              <GiBodyHeight />
            </Typography>
            <Typography fontSize={12}>176 CM</Typography>
          </Stack>
        </Stack>
        <Divider orientation="horizontal" inset="gutter" />
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          flex={1}
          p={2}
        >
          <Typography
            fontSize={26}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <IoFitnessOutline />
          </Typography>
          <Typography fontSize={12} textAlign="center">
            RENDSZERES EDZÉS
          </Typography>
        </Stack>
        <Divider orientation="horizontal" inset="gutter" />
        <Stack p={2}>
          <Typography textAlign="center" mb={2} fontSize={18} color="neutral">
            CÉLOK
          </Typography>
          <Stack direction="row">
            <Stack flex={1} spacing={1}>
              <Typography textAlign="center" fontSize={26}>
                <IoScaleOutline />
              </Typography>
              <Stack direction="row" justifyContent="space-around">
                <Stack textAlign="center">
                  <Typography fontSize={10}>KEZDŐ SÚLY</Typography>
                  <Typography fontSize={10}>100 KG</Typography>
                </Stack>
                <Stack textAlign="center">
                  <Typography fontSize={10}>SÚLYLEADÁS</Typography>
                  <Typography fontSize={10}>15 KG</Typography>
                </Stack>
              </Stack>
              <Typography textAlign="center" fontSize={24} fontWeight={800}>
                85 KG
              </Typography>
            </Stack>
            <Divider orientation="vertical" inset="gutter" />
            <Stack flex={1} spacing={1}>
              <Typography textAlign="center" fontSize={26}>
                <LiaBurnSolid />
              </Typography>
              <Stack direction="row" justifyContent="space-around">
                <Stack textAlign="center">
                  <Typography fontSize={10}>TDEE</Typography>
                  <Typography fontSize={10}>2800 CAL</Typography>
                </Stack>
                <Stack textAlign="center">
                  <Typography fontSize={10}>DEFICIT</Typography>
                  <Typography fontSize={10}>500 CAL</Typography>
                </Stack>
              </Stack>
              <Typography textAlign="center" fontSize={24} fontWeight={800}>
                2300 CAL
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Goals;
