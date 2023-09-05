import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

const Navbar = styled(AppBar)({
  backgroundColor: "transparent",
  boxShadow: "revert",
});

const Logo = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.down("sm")]: {},
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
    top: "103%",
    left: 0,
    width: "100%",
    padding: "1rem 0",
    zIndex: 999,
    "& > a": {
      textDecoration: "none",
      color: "black",
      transition: "color 0.3s ease",
      "&:hover": {
        color: "#5ec3e0",
      },
    },
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
            <Typography
              variant="h6"
              sx={{
                fontSize: "25px",
                fontFamily: "sans-serif",
                fontWeight: "bolder",
              }}
            >
              <span style={{ color: "black" }}>Coin</span>
              <span style={{ color: "black" }}>Sensi</span>
            </Typography>
          </Logo>
          <MenuItems sx={{ display: isMenuOpen ? "flex" : "none" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography variant="h6" sx={{ color: "black" }}>
                Home
              </Typography>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Typography variant="h6" sx={{ color: "black" }}>
                About
              </Typography>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Typography variant="h6" sx={{ color: "black" }}>
                Contact
              </Typography>
            </Link>
            <Link to="/buy" style={{ textDecoration: "none" }}>
              <Typography variant="h6" sx={{ color: "black" }}>
                Buy
              </Typography>
            </Link>
            <Link to="/reviews" style={{ textDecoration: "none" }}>
              <Typography variant="h6" sx={{ color: "black" }}>
                Reviews
              </Typography>
            </Link>
            <Link to="/trading" style={{ textDecoration: "none" }}>
              <Typography variant="h6" sx={{ color: "black" }}>
                Trading
              </Typography>
            </Link>
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
