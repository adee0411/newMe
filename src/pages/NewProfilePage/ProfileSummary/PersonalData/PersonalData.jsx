import { List, ListDivider, ListItem, Stack, Typography } from "@mui/joy";

import { useSelector } from "react-redux";

import { RxAvatar } from "react-icons/rx";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { LiaWeightSolid } from "react-icons/lia";
import { GiBodyHeight } from "react-icons/gi";
import { BsGenderAmbiguous } from "react-icons/bs";
import { IoFitnessOutline } from "react-icons/io5";

import { PAL } from "../../../../utils";
import { Fragment } from "react";

const labels = {
  name: { label: "Név", icon: <RxAvatar /> },
  gender: { label: "Nem", icon: <BsGenderAmbiguous /> },
  age: { label: "Kor", icon: <LiaBirthdayCakeSolid />, unit: "év" },
  weight: { label: "Súly", icon: <LiaWeightSolid />, unit: "kg" },
  height: { label: "Magasság", icon: <GiBodyHeight />, unit: "cm" },
  pal: { label: "Fizikai aktivitás", icon: <IoFitnessOutline /> },
};

const genders = {
  male: "Férfi",
  female: "Nő",
};

const PersonalData = () => {
  const { personalData } = useSelector((state) => state.profileData);
  const personalDataArr = Object.entries(personalData);

  return (
    <>
      <Typography component="h2" color="neutral">
        Személyes adatok
      </Typography>
      <List
        orientation="vertical"
        gap={1}
        color="neutral"
        variant="outlined"
        sx={{ borderRadius: "md" }}
      >
        {personalDataArr.map((data, index) => {
          let palLabel;
          if (data[0] === "pal") {
            palLabel = Object.entries(PAL).find((el) => {
              return el[1].multiplier === data[1];
            })[1].label;
          }

          return (
            <Fragment key={data[0]}>
              <ListItem sx={{ flex: "1" }}>
                <Stack
                  direction="row"
                  gap={1}
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Stack direction="row" gap={2}>
                    <Typography level="body-lg">
                      {labels[data[0]].icon}
                    </Typography>
                    <Typography level="body-sm">
                      {labels[data[0]].label}
                    </Typography>
                  </Stack>
                  <Typography level="body-sm" fontWeight={800} color="primary">
                    {`${
                      data[0] === "gender"
                        ? genders[data[1]]
                        : data[0] === "pal"
                        ? palLabel
                        : data[1]
                    } ${labels[data[0]].unit || ""}`}
                  </Typography>
                </Stack>
              </ListItem>
              {index < Object.entries(personalData).length - 1 && (
                <ListDivider inset="gutter"></ListDivider>
              )}
            </Fragment>
          );
        })}
      </List>
    </>
  );
};

export default PersonalData;
