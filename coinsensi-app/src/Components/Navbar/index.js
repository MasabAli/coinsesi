import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = styled(AppBar)({
  backgroundColor: "transparent",
  boxShadow: "none",
});

const Logo = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const MenuItems = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto", // Push menu items to the right on large screens
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const HamburgerMenu = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

export default function SearchAppBar() {
  return (
    <Box container sx={{ flexGrow: 1 }}>
      <Navbar position="static">
        <Toolbar>
          <Logo>
            <img src="/fav.webp" alt="logo" style={{ height: "70px" }} />
            <Typography variant="h6" sx={{fontSize:"25px", fontFamily:"sans-serif", fontWeight:"bolder"}}>
              <span style={{ color: "black" }}>Coin</span>
              <span style={{ color: "black" }}>Sensi</span>
            </Typography>
          </Logo>
          <MenuItems sx={{ marginRight: "50px" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ marginRight: 2, color: "black" }}
            >
              Home
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ marginRight: 2, color: "black" }}
            >
              About
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ marginRight: 2, color: "black" }}
            >
              Services
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ marginRight: 2, color: "black" }}
            >
              Reviews
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ marginRight: 2, color: "black" }}
            >
              Contact
            </Typography>
          </MenuItems>
          <HamburgerMenu>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ marginRight: 2, color: "black" }}
            >
              <MenuIcon />
            </IconButton>
          </HamburgerMenu>
        </Toolbar>
      </Navbar>
    </Box>
  );
}
