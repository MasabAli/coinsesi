import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "hsl(152.76deg 11% 85% / 38%)",
        paddingTop: "4rem",
        paddingBottom: "2rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={6} md={2}>
            <img
              src="/1.webp"
              alt="Sensei 5"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <img
              src="/2.webp"
              alt="Sensei 5"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <img
              src="/3.webp"
              alt="Sensei 5"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <img
              src="/4.webp"
              alt="Sensei 5"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <img
              src="/5.png"
              alt="Sensei 5"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" alignItems="center" spacing={2} marginTop={2}>
          <Grid item xs={12} md={6} >
            <Typography
              color="white"
              variant="body1"
              sx={{
                textAlign: "start",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                fontSize: "14px",
              }}
            >
              <span
                style={{
                  color: "#2ACCFB",
                  fontSize: "3rem",
                  fontWeight: "bolder",
                }}
              >
                Worldwide Students
              </span>
              <br />
              <Typography sx={{ color: "black", fontSize: "20px" }}>
                <span>
                  Sensei has helped over 300 people from all over the world
                  become PRO Traders and reach{" "}
                  <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
                    Financial <span>Freedom.</span>
                  </Typography>
                </span>
              </Typography>
              <br />
              <span
                style={{
                  fontSize: "42px",
                  fontWeight: "bold",
                  color: "#2ACCFB",
                  display: "block",
                  wordSpacing: "25px",
                }}
              >
                300+ 40H+ 30M+
              </span>
              <br />
              <Typography
                color={"black"}
                sx={{ fontSize: "20px", wordSpacing: "40px" }}
              >
                <span>Students</span> <span>Content</span>
                {"   "} <span>USDTProfit</span>
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="/digital.webp"
              alt="Sensei 5"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>

        <hr color="black" style={{ borderTop: "1px solid", marginTop: "5%" }} />
      </Container>

      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography
              color="white"
              variant="body2"
              sx={{
                textAlign: "center",
                paddingBottom: "1rem",
                fontSize: "14px",
                color: "black",
                marginTop: "3rem",
              }}
            >
              All information provided on this site is intended solely for the
              study purposes related to trading on financial markets and does
              not serve in any way as a specific investment recommendation,
              business recommendation, investment opportunity analysis or
              similar general recommendation regarding the trading of investment
              instruments. Trading in financial markets is a high-risk activity
              and it is advised not to risk more than one can afford to lose!
              CoinSensei.co does not provide any of the investment services
              listed in the Capital Market Undertakings Act No. 256/2004 Coll.
              The information on this site is not directed at residents in any
              country or jurisdiction where such distribution or use would be
              contrary to local laws or regulations. CoinSensei.co is not a
              broker and do not accept deposits. The offered technical solution
              for the CoinSensei platforms and data feed is powered by the
              institutional liquidity providers. The website CoinSensei.co is
              owned and operated by an EU company.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              color="textSecondary"
              variant="subtitle1"
              sx={{ fontWeight: "bold", fontSize: "14px", marginTop: "1rem" }}
            >
              {new Date().getFullYear()} © Copyright CoinSensei.CO
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
