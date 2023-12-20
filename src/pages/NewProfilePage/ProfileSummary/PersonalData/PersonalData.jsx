import { Card, CardContent, Stack, Typography } from "@mui/joy";

import { useSelector } from "react-redux";

import { RxAvatar } from "react-icons/rx";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { LiaWeightSolid } from "react-icons/lia";
import { GiBodyHeight } from "react-icons/gi";
import { BsGenderAmbiguous } from "react-icons/bs";
import { IoFitnessOutline } from "react-icons/io5";

import { PAL } from "../../../../utils";

const labels = {
  name: { label: "Név", icon: <RxAvatar /> },
  gender: { label: "Nem", icon: <BsGenderAmbiguous /> },
  age: { label: "Kor", icon: <LiaBirthdayCakeSolid /> },
  weight: { label: "Súly", icon: <LiaWeightSolid /> },
  height: { label: "Magasság", icon: <GiBodyHeight /> },
  pal: { label: "Fizikai aktivitás", icon: <IoFitnessOutline /> },
};

const genders = {
  male: "Férfi",
  female: "Nő",
};

const PersonalData = () => {
  const { personalData } = useSelector((state) => state.profileData);
  return (
    <Stack direction="row" gap={2} flexWrap="wrap">
      {Object.entries(personalData).map((data) => {
        let palLabel;
        if (data[0] === "pal") {
          palLabel = Object.entries(PAL).find((el) => {
            return el[1].multiplier === data[1];
          })[1].label;
        }

        return (
          <Card sx={{ width: "calc(33% - 9px)" }} key={data[0]}>
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography color="neutral">{labels[data[0]].icon}</Typography>
                <Typography color="neutral">{labels[data[0]].label}</Typography>
              </Stack>
              <Typography level="body-lg" fontWeight={800}>
                {data[0] === "gender"
                  ? genders[data[1]]
                  : data[0] === "pal"
                  ? palLabel
                  : data[1]}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
};

export default PersonalData;
