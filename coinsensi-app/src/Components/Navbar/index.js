import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";

const Navbar = styled(AppBar)({
  backgroundColor: "transparent",
  boxShadow: "revert",
});

const Logo = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",


  [theme.breakpoints.down("sm")]: {
   
  },
}));

const MenuItems = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  gap: "2rem",
  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    flexDirection: "column",
    backgroundColor: "white",
    top: '103%',
    left: 0,
    width: '100%',
    padding: '1rem 0',
    zIndex: 999,
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    position: "relative",
  },
  
}));

const HamburgerMenu = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block",
    position: "absolute",
    right: 0,
  },
}));

export default function SearchAppBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  return (
    <Container container sx={{ flexGrow: 1 }}>
      <Navbar position="static">
        <Toolbar>
          <Logo>
            <img src="/fav.webp" alt="logo" style={{ height: "70px" }} />
            <Typography variant="h6" sx={{ fontSize: "25px", fontFamily: "sans-serif", fontWeight: "bolder" }}>
              <span style={{ color: "black" }}>Coin</span>
              <span style={{ color: "black" }}>Sensi</span>
            </Typography>
          </Logo>
          <MenuItems sx={{display: isMenuOpen ? "flex" : "none" }}>
            <Typography
              variant="h6"
              wrap
              component="div"
              sx={{ color: "black" }}
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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon />
            </IconButton>
          </HamburgerMenu>
        </Toolbar>
      </Navbar>
    </Container>
  );
}
