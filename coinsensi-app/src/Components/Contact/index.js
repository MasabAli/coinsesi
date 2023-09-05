import { Container, Grid, Typography, Box, TextField, Button } from "@mui/material";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); 
  };

  return (
    <Container>
      <Grid container spacing={2} my={3} mx={0.5} justifyContent="center" alignItems="center">
        <Box sx={{ textAlign: "center", color: "#5ec3e0", fontFamily: 'Merriweather, serif', fontWeight: "bold" }} my={2}>
          <Typography variant="h3">
            GET IN TOUCH
          </Typography>
        </Box>
        <Grid container spacing={2} mx={0.5} justifyContent="center" alignItems="center">
        <Box sx={{ textAlign: "center" }} my={2}>
        <Typography variant="body1">
            -------------------- 
        </Typography>
        </Box>
    </Grid>
        <Box sx={{ textAlign: "center" }} >
            <Typography variant="body1">
                We’re here to help and answer any questions you might have. We look forward to

hearing from you 🙂
            </Typography>
        </Box>
      </Grid>
      <Grid container spacing={2} my={3} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6} justifyContent="flex-end" my={2}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h4" sx={{ fontWeight: 600, color: '#5ec3e0', fontFamily: 'Merriweather, serif' }}>CONNECT</Typography>
          </Box>
          <Box sx={{ textAlign: "center" }} my={2}>
            <Typography variant="body1">
              <b>Phone:</b> +971 58 588 8000
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }} my={2}>
            <Typography variant="body1">
              <b>Email: Support@CoinSensei.co</b>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              variant="outlined"
              margin="normal"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              variant="outlined"
              margin="normal"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              margin="normal"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              variant="outlined"
              margin="normal"
              value={formData.message}
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}
