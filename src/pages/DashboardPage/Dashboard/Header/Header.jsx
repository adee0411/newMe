import { useHref } from "react-router-dom";

import {
  Avatar,
  Sheet,
  Switch,
  Stack,
  IconButton,
  Badge,
  Typography,
  Modal,
  ModalDialog,
  DialogTitle,
  DialogContent,
} from "@mui/joy";

import EditProfileForm from "./EditProfileForm";

import { IoSunnyOutline } from "react-icons/io5";
import { MdOutlineModeNight } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import AvatarMe from "../../../../assets/images/Avatar_me.jpg";
import { useState } from "react";

const Header = () => {
  const href = useHref();

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen("true");
  };

  return (
    <header>
      <Sheet
        sx={{
          p: 3,
          borderRadius: "md",
          background: "transparent",
          minHeight: "100px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          {href === "/dashboard" ? (
            ""
          ) : (
            <IconButton color="primary" variant="soft" size="lg">
              <Typography
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <IoIosArrowBack />
              </Typography>
              <Typography level="body-sm">Vissza</Typography>
            </IconButton>
          )}

          <Stack direction="row" spacing={8} marginLeft="auto">
            {" "}
            <Switch
              startDecorator={<IoSunnyOutline />}
              endDecorator={<MdOutlineModeNight />}
              color="primary"
              variant="solid"
              slotProps={{ "aria-label": "Toggle theme" }}
              sx={{ ml: "auto" }}
            />
            <Stack direction="row" spacing={2}>
              <Badge badgeContent="3" size="sm" badgeInset="14%">
                <IconButton color="primary" variant="soft" size="lg">
                  <IoIosNotificationsOutline />
                </IconButton>
              </Badge>

              <IconButton
                sx={{ borderRadius: "50%" }}
                onClick={handleModalOpen}
              >
                <Avatar src={AvatarMe} />
              </IconButton>
              <Modal
                open={modalOpen}
                onClose={() => {
                  setModalOpen(false);
                }}
              >
                <ModalDialog>
                  <DialogTitle>Profil szerkesztése</DialogTitle>
                  <EditProfileForm />
                </ModalDialog>
              </Modal>
            </Stack>
          </Stack>
        </Stack>
      </Sheet>
    </header>
  );
};

export default Header;
