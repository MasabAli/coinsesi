import { Grid, Typography, Box, Container, Button } from "@mui/material";
import { useRef, useEffect, useState } from "react";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);
    const [showPlayButton, setShowPlayButton] = useState(true);

    const handlePlayButtonClick = () => {
        const video = videoRef.current;
        if (video) {
            video.play();
            setShowPlayButton(false);
        }
    };

    useEffect(() => {
        if (videoRef.current)
            AOS.init();
    }, []);

    const videoStyle = {
        width: "100%",
        height: "auto",
        position: "relative", // Make sure the play button is positioned relative to the video container
    };

    const playButtonStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: "auto", // Center the play button
        zIndex: 1,
        cursor: "pointer",
    };
    return (
        <>
            <Box item xs={12} sx={{ width: "100%", height: "auto" }}>
                <video style={videoStyle} width="100%" height="auto" autoPlay loop ref={videoRef}
                    onPlay={() => setShowPlayButton(false)}
                    onPause={() => setShowPlayButton(true)}
                >
                    <source src="/videos/video2.mp4" type="video/mp4" />
                </video>
                {showPlayButton && (

                    <PlayCircleOutlineIcon onClick={handlePlayButtonClick}
                        sx={{
                            position: "absolute",
                            fontSize: 128,
                            top: { xs: '20%', sm: "30%", md: "40%", lg: "45%", xl: "38%" },
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 1,
                        }} />
                )}
            </Box>
            <Container>
                <Grid container spacing={2} my={3} justifyContent="center" alignItems="center">
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
                            <Button variant="contained" href={'/about'} sx={{ borderRadius: 8, color: '#FFFFF', backgroundColor: '#5ec3e0' }}>
                                Read More
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} justifyContent="center" alignItems="center" my={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <img src="/coin-unscreen.webp" alt="Description" style={{ maxWidth: '500px', maxHeight: '100%', animation: 'App-logo-spin 5s linear infinite' }} />
                    </Grid>
                </Grid>
                <Grid container spacing={2} my={3} justifyContent="center" alignItems="center" data-aos="fade-left" data-aos-duration="1500">
                    <Grid item xs={12} md={6} justifyContent="flex-end" my={2}>
                        <Box sx={{ textAlign: "left" }}>
                            <Typography variant="h3" sx={{ fontWeight: 600, color: '#5ec3e0', fontFamily: 'Merriweather, serif' }}>Buy and Sell</Typography>
                        </Box>
                        <Box sx={{ textAlign: "left" }} my={2}>
                            <Typography variant="body1">
                                Facilitate seamless transactions by buying and selling USDT in Pakistan, bridging the gap between digital assets and local currency. Enjoy secure and efficient cryptocurrency trading within the country's financial ecosystem.
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: "left" }}>
                            <Button variant="contained" href={'/buy'} sx={{ borderRadius: 8, color: '#FFFFF', backgroundColor: '#5ec3e0' }}>
                                Read More
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} justifyContent="center" alignItems="center" my={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <img src="/ezgif.com-gif-maker (20).webp" alt="Description" style={{ maxWidth: '300px', maxHeight: 'auto' }} />
                    </Grid>
                </Grid>
                <Grid container my={3} spacing={2} justifyContent="center" alignItems="center" data-aos="fade-right" data-aos-duration="1500">
                    <Grid item xs={12} md={6} justifyContent="flex-end" my={2}>
                        <Box sx={{ textAlign: "left" }}>
                            <Typography variant="h3" sx={{ fontWeight: 600, color: '#5ec3e0', fontFamily: 'Merriweather, serif' }}>Crypto Trading Academy</Typography>
                        </Box>
                        <Box sx={{ textAlign: "left" }} my={2}>
                            <Typography variant="body1">
                                Elevate your trading strategy with expert precision through our crypto signals service, delivering real-time insights and analysis to guide your cryptocurrency investment decisions with confidence.
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: "left" }}>
                            <Button href={'/trading'} variant="contained" sx={{ borderRadius: 8, color: '#FFFFF', backgroundColor: '#5ec3e0' }}>
                                Read More
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} justifyContent="center" alignItems="center" my={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <img src="/ezgif.com-gif-maker (18).webp" alt="Description" style={{ maxWidth: '300px', maxHeight: 'auto' }} />
                    </Grid>
                </Grid>
                <Grid container my={3} spacing={2} justifyContent="center" alignItems="center" data-aos="fade-left" data-aos-duration="1500">
                    <Grid item xs={12} md={6} justifyContent="flex-end" my={2}>
                        <Box sx={{ textAlign: "left" }}>
                            <Typography variant="h3" sx={{ fontWeight: 600, color: '#5ec3e0', fontFamily: 'Merriweather, serif' }}>Happy Customers</Typography>
                        </Box>
                        <Box sx={{ textAlign: "left" }} my={2}>
                            <Typography variant="body1">
                                Our reliable and accurate crypto signals empower customers to make informed decisions and effectively navigate the ever-changing world of digital assets.
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: "left" }}>
                            <Button variant="contained" href={'/review'} sx={{ borderRadius: 8, color: '#FFFFF', backgroundColor: '#5ec3e0' }}>
                                Read More
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} justifyContent="center" alignItems="center" my={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <img src="/ezgif.com-gif-maker (17).webp" alt="Description" style={{ maxWidth: '300px', maxHeight: 'auto' }} />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
