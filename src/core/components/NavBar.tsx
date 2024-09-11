import { AppBar, Box, Typography } from "@mui/material";
import NavMenu from "./NavMenu";

const NavBar = () => (
  <AppBar
    position="fixed"
    sx={{
      minHeight: 50,
      display: "flex",
      justifyContent: "center",
      maxWidth: "100%",
    }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mx: 2,
        alignItems: "center",
      }}
    >
      <NavMenu />

      <Typography>Andy Pieratt</Typography>
    </Box>
  </AppBar>
);

export default NavBar;
