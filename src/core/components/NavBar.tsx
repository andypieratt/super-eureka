import { AppBar, Box, Typography } from "@mui/material";
import NavMenu from "./NavMenu";
import { useNavigate } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
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

        <Box onClick={handleNavigateHome}>
          <Typography sx={{ cursor: "pointer" }}>Andy Pieratt</Typography>
        </Box>
      </Box>
    </AppBar>
  );
};

export default NavBar;
