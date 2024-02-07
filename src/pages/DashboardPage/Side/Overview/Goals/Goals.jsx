import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/joy";

import AvatarMe from "../../../../../assets/images/Avatar_me.jpg";

import { RxAvatar } from "react-icons/rx";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { LiaWeightSolid } from "react-icons/lia";
import { GiBodyHeight } from "react-icons/gi";
import { BsGenderAmbiguous } from "react-icons/bs";
import { IoFitnessOutline } from "react-icons/io5";

const Goals = () => {
  return (
    <Card variant="plain" sx={{ boxShadow: "lg", marginTop: "128px" }}>
      <Avatar
        src={AvatarMe}
        size="lg"
        sx={{
          position: "absolute",
          top: "-40px",
          left: "50%",
          transform: "translateX(-50%)",
          "--Avatar-size": "80px",
          border: "5px solid #fff",
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
        <Stack direction="row" p={2}>
          <Stack flex={1} spacing={1}>
            <Stack direction="row" justifyContent="space-around">
              <Typography textAlign="center" fontSize={12}>
                100 KG
              </Typography>
              <Typography textAlign="center" fontSize={12}>
                15 KG
              </Typography>
            </Stack>
            <Typography textAlign="center" fontSize={24} fontWeight={800}>
              85 KG
            </Typography>
          </Stack>
          <Divider orientation="vertical" inset="gutter" />
          <Stack flex={1} spacing={1}>
            <Stack direction="row" justifyContent="space-around">
              <Typography textAlign="center" fontSize={12}>
                2800 CAL
              </Typography>
              <Typography textAlign="center" fontSize={12}>
                500 CAL
              </Typography>
            </Stack>
            <Typography textAlign="center" fontSize={24} fontWeight={800}>
              2300 CAL
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Goals;
