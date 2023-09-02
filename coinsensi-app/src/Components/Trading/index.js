import { Box, Container, Grid, Typography, Button } from '@mui/material';
import PricingCards from '../PricingCard';


export default function Trading() {
    return (
        <Box>
            <Container >

                <Grid container spacing={2} my={3} justifyContent="center" alignItems="center" >
                    <Grid item xs={12} justifyContent="flex-end" my={2}>
                        <Typography variant="h3" sx={{ fontWeight: 600, fontFamily: 'Merriweather, serif', color: '#5ec3e0' }}>
                            Join Coin Sensei
                        </Typography>
                    </Grid>
                    <Grid item xs={12} justifyContent="flex-start" my={2}>
                        <PricingCards />
                    </Grid>
                    <Grid item sm={12} md={6} justifyContent="flex-start" my={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 600, fontFamily: 'Merriweather, serif', color: '#5ec3e0', textAlign: 'start' }}>
                                Become a PRO Trader
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1" sx={{ fontWeight: 600, textAlign: 'start' }} my={1}>
                                Become a PRO TRADER in no time by
                                getting access to hours of trading video
                                and reading content.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1" sx={{ textAlign: 'start' }}>
                                ✓ Created by the pro coin traders
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1" sx={{ textAlign: 'start' }}>
                                ✓ Complete beginner friendly
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1" sx={{ textAlign: 'start' }}>
                                ✓ Available in video and text
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1" sx={{ textAlign: 'start' }}>
                                ✓ Learn charts and indicators
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1" sx={{ textAlign: 'start' }}>
                                ✓ Market analysis
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={6} justifyContent="flex-start" my={2} >
                        <img src="/ezgif.com-gif-maker (8).webp" alt="Trading" width={'200px'} />
                    </Grid>
                    <Grid item sm={12} md={6} justifyContent="flex-start" my={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 600, fontFamily: 'Merriweather, serif', color: '#5ec3e0', textAlign: 'start' }}>
                                Real Time Buy & Sell Signals
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1" sx={{ fontWeight: 600, textAlign: 'start' }} my={1}>
                                Receive Buy and Sell signals in REAL TIME directly on your phone or e-mail.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1" sx={{ textAlign: 'start' }}>
                                <Button variant="contained" href={'/buy'} sx={{ borderRadius: 8, color: '#FFFFF', backgroundColor: '#5ec3e0' }}>
                                    Buy and Sell
                                </Button>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={6} justifyContent="flex-start" my={2} >
                        <img src="/ezgif.com-gif-maker (7).webp" alt="Trading" width={'200px'} />
                    </Grid>
                    <Grid item sm={12} md={6} justifyContent="flex-start" my={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 600, fontFamily: 'Merriweather, serif', color: '#5ec3e0', textAlign: 'start' }}>
                                Improve Your Trading Strategy
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1" sx={{ fontWeight: 600, textAlign: 'start' }} my={1}>
                                No matter if you are an experienced trader or a complete beginner, by taking advantage of our content and signals you will be able to improve your current trading strategy or create a new winning one.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={6} justifyContent="flex-start" my={2} >
                        <img src="/ezgif.com-gif-maker (6).webp" alt="Trading" width={'200px'} />
                    </Grid>
                </Grid>
            </Container>

        </Box>
    );
}