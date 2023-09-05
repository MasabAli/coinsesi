import { Container, Grid, Typography, Box } from '@mui/material';

export default function About() {
    return (
        <Container>
            <Grid container spacing={2} my={3} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={6} sm={6} justifyContent="flex-end" my={2}>
                    <Box sx={{ textAlign: "left" }}>
                        <Typography variant="h3" sx={{ fontWeight: 600, color: '#5ec3e0', fontFamily: 'Merriweather, serif' }}>ABOUT US</Typography>
                    </Box>
                    <Box sx={{ textAlign: "left" }} my={2}>
                        <Typography variant="body1">
                            At Coin Sensei, we are a pioneering force in the world of cryptocurrency, offering a comprehensive platform that seamlessly combines P2P trading and advanced signal services.
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: "left" }} my={2}>
                        <Typography variant="body1">
                            Our mission is to empower users with a secure and intuitive environment for buying and selling digital assets directly. With a team of seasoned experts, we provide real-time crypto signals that guide traders towards informed decisions, optimizing their investment strategies.
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: "left" }} my={2}>
                        <Typography variant="body1">
                            Backed by cutting-edge technology, our project is committed to revolutionizing the way individuals navigate the dynamic landscape of cryptocurrency trading.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} justifyContent="center" alignItems="center" my={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <img src="/ezgif.com-gif-maker (2).webp" alt="Description" style={{ maxWidth: '300px', maxHeight: '100%', borderRadius: 8, boxShadow: ' 0px 0px 10px 0px black' }} />
                </Grid>
            </Grid>
            <Grid container spacing={2} my={3} mx={0.5} justifyContent="center" alignItems="center">
                <Box sx={{ textAlign: "left" }} my={2}>
                    <Typography variant="body1">
                        With years of revel in in the crypto area, in addition to knowledge in P2P exchange, Dubai actual property, advertising, & NFTs, we satisfaction ourselves in presenting the quality service with knowledge and competence. We understand our clients, take their privacy significantly, and furnish them comfortability, comfort and notable outcomes.
                    </Typography>
                </Box>
                <Box sx={{ textAlign: "left" }} my={2}>
                    <Typography variant="body1">
                        Our vision is to provide all varieties of useful and needed cryptocurrency services to individuals, communities, and corporations right here in Dubai and the UAE, and make sure that its adoption progresses as easily as feasible.
                    </Typography>
                </Box>
            </Grid>
        </Container>
    );
}