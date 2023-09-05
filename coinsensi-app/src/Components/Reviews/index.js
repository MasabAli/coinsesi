import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const userReviews = [
  {
    id: 1,
    name: "KIANI_TRADERS",
    date: "2023-08-02",
    text: "👍 Safe and trustworthy, Fast transaction, Polite and friendly",
  },
  {
    id: 2,
    name: "Mehboobalam",
    date: "2023-08-02",
    text: "👍 Fast transaction, Polite and friendly",
  },
  {
    id: 3,
    name: "espressotrade",
    date: "2023-07-30",
    text: "👍 Fast transaction,Safe and trustworthy",
  },
  {
    id: 4,
    name: "Delhi USDT_lover",
    date: "2023-07-27",
    text: "👍 Fast transaction",
  },
    {
        id: 5,
        name: "gm_cyber",
        date: "2023-07-27",
        text: "👍 Fast transaction, Patient,Safe and trustworthy, Polite and friendly.Good price",
    },
    {
        id: 6,
        name: "Sumair",
        date: "2023-07-20",
        text: "👍 Fast transaction, Polite and friendly, Patient,Good price,Safe and trustworthy",
    },
    {
        id: 7,
        name: "kka*****.com",
        date: "2023-07-20",
        text: "👍 Fast transaction, Safe and trustworthy, Polite and friendly",
    },

];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  buttons: true,
  color: "#5ec3e0",
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: "50px",
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: "50px",
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: "50px",
                infinite: true,
                dots: true,
            },
        },
    ],

};

export default function Reviews() {
  return (
    <Container>
      <Grid container spacing={2} my={3} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6} justifyContent="flex-end" my={2}>
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h3" sx={{ fontWeight: 600, color: '#5ec3e0', fontFamily: 'Merriweather, serif' }}>REVIEWS</Typography>
          </Box>
          <Box sx={{ textAlign: "left" }} my={2}>
            <Typography variant="body1">
              Customers of our P2P trading platform rave about its user-friendly interface, making buying and selling cryptocurrencies a breeze. They commend our escrow system's security, ensuring trust and safe transactions. The prompt customer support received has left a lasting positive impression, and the seamless fiat-crypto conversions have empowered hassle-free trading experiences. Overall, our P2P trading platform has garnered enthusiastic reviews for its reliability and convenience.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} justifyContent="center" alignItems="center" my={2} sx={{ display: 'flex', flexDirection: 'column' }}>
          <img src="/ezgif.com-gif-maker (16).webp" alt="Description" style={{ maxWidth: '300px', maxHeight: '100%', borderRadius: 8, boxShadow: ' 0px 0px 10px 0px black' }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} my={3} mx={0.5} justifyContent="center" alignItems="center">
        <Box sx={{ textAlign: "center", color: "#5ec3e0", fontFamily: 'Merriweather, serif', fontWeight: "600" }} my={2}>
          <Typography variant="h3">
            Some User Reviews
          </Typography>
        </Box>
      </Grid>

      <Grid spacing={2} my={3} mx={0.5} justifyContent="center" alignItems="center">
        <Box>
          <Slider {...sliderSettings}>
            {userReviews.map((review) => (
              <div key={review.id} className="slide swiper-slide">
                <div className="details">
                  <span className="name">{review.name}</span>
                  <Box><span className="job">{review.date}</span></Box>
                  
                </div>
                <p>
                  {review.text}
                </p>
                <i className="bx bxs-quote-alt-left quote-icon"></i>
              </div>
            ))}
          </Slider>
        </Box>
      </Grid>
    </Container>
  );
}
