import { Grid, Typography, Box, Container, Button } from "@mui/material";

export default function Home() {
    return (
        <>
            <Box item xs={12} sx={{ width: "100%", height: "auto" }}>
                <video width="100%" height="auto" autoPlay={true} controls>
                    <source src="/videos/video2.mp4" type="video/mp4" />
                </video>
            </Box>
            <Container>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={6} justifyContent="flex-end" my={2}>
                        <Box sx={{ textAlign: "left" }}>
                            <Typography variant="h3" sx={{ fontWeight: 600, color: '#5ec3e0', fontFamily: 'Merriweather, serif' }}>ABOUT US</Typography>
                        </Box>
                        <Box sx={{ textAlign: "left" }} my={2}>
                            <Typography variant="body1">
                                We’re on a Mission to Accelerate Cryptocurrency Adoption. With years of experience in the crypto space, we pride ourselves in being the first All in One cryptocurrency solutions company in Pakistan providing the best services with knowledge and competence.
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: "left" }}>
                            <Button variant="contained" sx={{ borderRadius: 8, color: '#FFFFF', backgroundColor: '#5ec3e0' }}>
                                Read More
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} justifyContent="center" alignItems="center" my={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <img src="/coin-unscreen.webp" alt="Description" style={{ maxWidth: '100%', maxHeight: '100%', animation: 'App-logo-spin 5s linear infinite' }} />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
