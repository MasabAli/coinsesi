import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "white",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >

    <Container maxWidth="lg" sx={{marginBottom:"3%"}}>
    <hr/>
    
    
    
    
    </Container>



      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="body2" sx={{textAlign: 'start', paddingBottom: '20px', fontWeight:"bold", lineHeight:"25px", fontSize:"small"}}>
              All information provided on this site is intended solely for the
              study purposes related to trading on financial markets and does
              not serve in any way as a specific investment recommendation,
              business recommendation, investment opportunity analysis, or
              similar general recommendation regarding the trading of investment
              instruments. Trading in financial markets is a high-risk activity,
              and it is advised not to risk more than one can afford to lose!
              CoinSensei.co does not provide any of the investment services
              listed in the Capital Market Undertakings Act No. 256/2004 Coll.
              The information on this site is not directed at residents in any
              country or jurisdiction where such distribution or use would be
              contrary to local laws or regulations. CoinSensei.co is not a
              broker and does not accept deposits. The offered technical
              solution for the CoinSensei platforms and data feed is powered by
              the institutional liquidity providers. The website CoinSensei.co
              is owned and operated by an EU company.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1" sx={{fontWeight:"bolder"}}>
            {new Date().getFullYear()} © Copyright CoinSensei.CO
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
