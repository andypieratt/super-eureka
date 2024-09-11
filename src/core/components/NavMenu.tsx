import LunchDiningIcon from "@mui/icons-material/LunchDining";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { useState } from "react";

const NavMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
          mt: "50px", // Makes drawer starts below the navbar
        }}
        PaperProps={{
          sx: { top: "50px" }, // Must match NavBar height
        }}
        slotProps={{
          backdrop: { invisible: true }, // Disables when drawer is open screen darkening
        }}
      >
        <Typography sx={{ p: 2 }}>.</Typography>
      </Drawer>
    </Box>
  );
};

export default NavMenu;
