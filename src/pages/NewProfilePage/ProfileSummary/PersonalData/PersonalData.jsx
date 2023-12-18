import { Card, CardContent, Stack, Grid, Typography } from "@mui/joy";

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
    <Grid container gap={1}>
      {Object.entries(personalData).map((data) => {
        let palLabel;
        if (data[0] === "pal") {
          palLabel = Object.entries(PAL).find((el) => {
            return el[1].multiplier === data[1];
          })[1].label;
        }

        return (
          <Grid flex={1}>
            <Card>
              <CardContent>
                {labels[data[0]].icon}
                <Typography>{labels[data[0]].label}</Typography>
                <Typography>
                  {data[0] === "gender"
                    ? genders[data[1]]
                    : data[0] === "pal"
                    ? palLabel
                    : data[1]}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PersonalData;
