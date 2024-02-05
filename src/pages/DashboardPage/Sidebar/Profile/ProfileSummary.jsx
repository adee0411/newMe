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
} from "@mui/joy";
import MaleAvatar from "../../../../assets/images/male_avatar.png";
import FemaleAvatar from "../../../../assets/images/female_avatar.png";
import { CiSettings } from "react-icons/ci";

import { Form } from "react-router-dom";
import { useState } from "react";

import { PAL } from "../../../../utils";

import PersonalData from "../../../NewProfilePage/ProfileSummary/PersonalData/PersonalData";
import { useSelector } from "react-redux";

const avatars = {
  male: MaleAvatar,
  female: FemaleAvatar,
};

const ProfileSummary = () => {
  const { personal } = useSelector((state) => state.profileData.fetchedData);
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
              <DialogContent>
                <Form>
                  <Stack spacing={2}>
                    <FormControl>
                      <FormLabel>Név</FormLabel>
                      <Input
                        autoFocus
                        required
                        name="name"
                        value={personal.name}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Nem</FormLabel>
                      <RadioGroup value={personal.gender}>
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
                      <Input type="number" required value={personal.age} />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Magasság</FormLabel>
                      <Input type="number" required value={personal.height} />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Testsúly</FormLabel>
                      <Input type="number" required value={personal.weight} />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Fizikai aktivitás</FormLabel>
                      <RadioGroup value={personal.pal}>
                        {Object.entries(PAL).map((pal) => {
                          return (
                            <Radio
                              value={pal[1].multiplier}
                              label={pal[1].label}
                              name="gender"
                              sx={{ flex: 1 }}
                              size="sm"
                              key={pal[1].label}
                            />
                          );
                        })}
                      </RadioGroup>
                    </FormControl>
                    <Button type="submit">Mentés</Button>
                  </Stack>
                </Form>
              </DialogContent>
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
          sx={{ width: "5rem", height: "5rem" }}
          src={avatars[personal.gender]}
        />

        <PersonalData variant="plain" data={personal} />
      </CardContent>
    </Card>
  );
};

export default ProfileSummary;
