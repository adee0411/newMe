import {
  Card,
  Tooltip,
  IconButton,
  CardContent,
  Avatar,
  Modal,
  ModalDialog,
  DialogTitle,
  DialogContent,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  RadioGroup,
  Radio,
  Grid,
} from "@mui/joy";
import MaleAvatar from "../../../assets/images/male_avatar.png";
import FemaleAvatar from "../../../assets/images/female_avatar.png";
import { CiSettings } from "react-icons/ci";

import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, Form } from "react-router-dom";
import { useState } from "react";
import { setPersonalData } from "../../../store/profileSlice";

import { PAL } from "../../../utils";

import PersonalData from "../../../pages/NewProfilePage/ProfileSummary/PersonalData/PersonalData";

const avatars = {
  male: MaleAvatar,
  female: FemaleAvatar,
};

const ProfileSummary = () => {
  const fetchedPersonalData = useLoaderData();
  const orderedPersonalData = {
    name: fetchedPersonalData.name,
    age: fetchedPersonalData.age,
    gender: fetchedPersonalData.gender,
    weight: fetchedPersonalData.weight,
    height: fetchedPersonalData.height,
    pal: fetchedPersonalData.pal,
  };

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <Card>
      <header>
        <div
          style={{
            width: "fit-content",
            marginLeft: "auto",
          }}
        >
          <Tooltip title="Profil szerkesztése" size="sm">
            <IconButton
              color="neutral"
              variant="plain"
              title="Profil módosítása"
              size="lg"
              sx={{ fontSize: "1.6rem" }}
              onClick={handleModalOpen}
            >
              <CiSettings />
            </IconButton>
          </Tooltip>
          <Modal open={modalOpen} onClose={handleModalClose}>
            <ModalDialog>
              <DialogTitle>Profil szerkesztése</DialogTitle>
              <Form>
                <Stack spacing={2}>
                  <FormControl>
                    <FormLabel>Név</FormLabel>
                    <Input
                      autoFocus
                      required
                      defaultValue={orderedPersonalData.name}
                      name="name"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Nem</FormLabel>
                    <RadioGroup defaultValue={orderedPersonalData.gender}>
                      <Stack direction="row">
                        <Radio
                          value="male"
                          label="Férfi"
                          name="gender"
                          sx={{ flex: 1 }}
                          size="sm"
                        />
                        <Radio
                          value="female"
                          label="Nő"
                          name="gender"
                          sx={{ flex: 1 }}
                          size="sm"
                        />
                      </Stack>
                    </RadioGroup>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Kor</FormLabel>
                    <Input
                      type="number"
                      required
                      defaultValue={orderedPersonalData.age}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Magasság</FormLabel>
                    <Input
                      type="number"
                      required
                      defaultValue={orderedPersonalData.height}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Testsúly</FormLabel>
                    <Input
                      type="number"
                      required
                      defaultValue={orderedPersonalData.weight}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Fizikai aktivitás</FormLabel>
                    <RadioGroup defaultValue={orderedPersonalData.pal}>
                      {Object.entries(PAL).map((pal) => {
                        return (
                          <Radio
                            value={pal[1].multiplier}
                            label={pal[1].label}
                            name="gender"
                            sx={{ flex: 1 }}
                            size="sm"
                          />
                        );
                      })}
                    </RadioGroup>
                  </FormControl>
                  <Button type="submit">Mentés</Button>
                </Stack>
              </Form>
            </ModalDialog>
          </Modal>
        </div>
      </header>
      <CardContent
        orientation="vertical"
        sx={{ alignItems: "center", gap: "12px" }}
      >
        <Avatar
          color="primary"
          variant="soft"
          src={avatars[orderedPersonalData.gender]}
          sx={{ width: "5rem", height: "5rem" }}
        />

        <PersonalData data={orderedPersonalData} />
      </CardContent>
    </Card>
  );
};

export default ProfileSummary;
