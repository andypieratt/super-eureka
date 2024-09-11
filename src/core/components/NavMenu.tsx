import LunchDiningIcon from "@mui/icons-material/LunchDining";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

const NavMenu = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNavigate = (route: string) => {
    navigate(route);
    handleClose();
  };

  return (
    <Box>
      <IconButton onClick={handleClick}>
        <LunchDiningIcon />
      </IconButton>

      <Drawer
        open={open}
        onClose={handleClose}
        anchor="left"
        sx={{
          width: 240,
          mt: "50px", // Makes drawer start below the navbar
        }}
        PaperProps={{
          sx: { top: "50px" }, // Must match NavBar height
        }}
        slotProps={{
          backdrop: { invisible: true }, // Disables screen darkening when drawer is open
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            mx: 2,
            mt: 2,
          }}
        >
          <Typography
            onClick={() => handleNavigate("/resume")}
            sx={{ cursor: "pointer" }}
          >
            Resume
          </Typography>
          <Typography
            onClick={() => handleNavigate("/contact")}
            sx={{ cursor: "pointer" }}
          >
            Contact
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
};

export default NavMenu;
