import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";

const tiers = [
    {
        title: "MONTHLY PLAN",
        subheader: "Paid in Ethereum",
        price: "1",
        description: [
            'Created by pro ss traders',
            'user friendly',
            '24/7 support',
            "Help center access",
        ],
        buttonText: "BUY NOW",
        buttonVariant: "outlined",
    },
    {
        title: "LIFETIME PLAN",
        subheader: "Paid in Ethereum",
        price: "30",
        description: [
            'Created by pro ss traders',
            'user friendly',
            '24/7 support',
            'lifetime access',

        ],
        buttonText: "BUY NOW",
        buttonVariant: "contained",
    },
    {
        title: "3 MONTHLY PLAN",
        subheader: "Paid in Ethereum",
        price: "15",
        description: [
            'Created by pro ss traders',
            'user friendly',
            '24/7 support',
            "Phone & email support",
        ],
        buttonText: "BUY NOW",
        buttonVariant: "outlined",
    },
];

export default function PricingCards() {
    return (
        <>
            <GlobalStyles
                styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
            />
            <CssBaseline />
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === "3 MONTHLY PLAN" ? 12 : 6}
                            md={4}
                        >
                            <Card
                                sx={{
                                    transition: "transform 0.2s, box-shadow 0.2s",
                                    ":hover": {
                                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        transform: "scale(1.05)",
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === "light"
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    },
                                }}
                            >
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{
                                        align: "center",
                                        style: {
                                            fontFamily: 'Merriweather, serif', // Add the font family here
                                            fontWeight: 600,
                                        },
                                    }}
                                    action={tier.title === "LIFETIME PLAN" ? <StarIcon /> : null}
                                    subheaderTypographyProps={{
                                        align: "center",
                                    }}
                                    sx={{
                                        color: '#5ec3e0',
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === "light"
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "baseline",
                                            mb: 2,
                                        }}
                                    >
                                        <Typography
                                            component="h2"
                                            variant="h3"
                                            color="#5ec3e0"
                                        >
                                            ${tier.price}
                                        </Typography>
                                        {/* <Typography variant="h6" color="text.secondary">
                                            /mo
                                        </Typography> */}
                                    </Box>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth variant={tier.buttonVariant} sx={{
                                        backgroundColor: tier.buttonVariant === 'contained' ? '#5ec3e0' : null,
                                        color: tier.buttonVariant === 'contained' ? '#fff' : '#5ec3e0',
                                        border: `1px solid ${tier.buttonVariant === 'outlined' ? '#5ec3e0' : 'transparent'}`,
                                    }}>
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

        </>
    );
}