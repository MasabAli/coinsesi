import { Container, Typography, Box, Button, Grid } from "@mui/material";

export default function Buy() {
    const rowsForBuying = [
        {
            step: 1,
            description: "Let us know the amount of USDT you require."
        },
        {
            step: 2,
            description: "We will provide you with our bank information."
        },
        {
            step: 3,
            description: "Transfer the amount, send us your USDT (TRC20) address, and you will receive the USDT within minutes."
        }
    ];

    const rowsForSelling = [
        {
            step: 1,
            description: "Let us know the amount of USDT you are selling."
        },
        {
            step: 2,
            description: "We will provide you with our USDT (TRC20) address."
        },
        {
            step: 3,
            description: "Send us your banking information, transfer the USDT, and you will receive the amount to your bank within minutes."
        }
    ];

    return (<>
        <Box sx={{ background: '#5ec3e0' }}>
            <Container >
                <Grid container spacing={2} my={3} justifyContent="center" alignItems="center" >
                    <Grid item xs={12} md={6} justifyContent="flex-end" my={2}>
                        <Box sx={{ textAlign: "left" }}>
                            <Typography variant="h3" sx={{ fontWeight: 600, fontFamily: 'Merriweather, serif' }}>Buy & Sell USDT In Pakistan!</Typography>
                        </Box>
                        <Box sx={{ textAlign: "left" }} my={2}>
                            <Typography variant="body1">
                                We are an all in one crypto solutions provider located in the Pakistan, offering
                                a simple and convenient way to exchange cryptocurrencies. Our services
                                allow for swift and secure fiat-to-crypto and crypto-to-fiat exchanges.
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: "left" }}>
                            <Button variant="outlined" href={'/contact'} sx={{ borderRadius: 8, color: '#FFFFFF', borderColor: '#FFFFFF' }}>
                                Contact Us
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} justifyContent="center" alignItems="center" my={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <img src="/buysell.webp" alt="Description" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
        <Box>
            <Grid spacing={2} my={3} justifyContent="center" alignItems="center" >
                <Grid item xs={12} justifyContent="center" alignItems="center" my={2}>
                    <Typography variant="h4" sx={{ fontWeight: 600, fontFamily: 'Merriweather, serif' }}>
                        How To buy or sell Tether (USDT) In Pakistan?
                    </Typography>
                </Grid>
                <Grid item xs={12} justifyContent="center" alignItems="center" my={2} >
                    <Typography variant="body1" >
                        Simply come to our office, tell us how much USDT you want to buy or sell.
                    </Typography>
                </Grid>
                <Grid item xs={12} justifyContent="center" alignItems="center" my={2} >
                    <Typography variant="h4" sx={{ fontWeight: 600, fontFamily: 'Merriweather, serif' }}>
                        For Cash Deals
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3} justifyContent="center" alignItems="center" my={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ textAlign: "center" }}>
                        <img src="/ezgif.com-gif-maker (11).webp" alt="Description" style={{ maxWidth: '150px', maxHeight: '100%' }} />
                    </Box>
                    <Box sx={{ textAlign: "center" }} my={2}>
                        <Typography variant="body1" >
                            Visit our office with your ID and let
                            us know how much USDT you will
                            like to buy or sell.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={3} justifyContent="center" alignItems="center" m={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ textAlign: "center" }}>
                        <img src="/bars.gif" alt="Description" style={{ maxWidth: '150px', maxHeight: '100%' }} />
                    </Box>
                    <Box sx={{ textAlign: "center" }} my={2}>
                        <Typography variant="body1" >
                            Calculate and confirm the
                            current buying/selling price.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={3} justifyContent="center" alignItems="center" m={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ textAlign: "center" }}>
                        <img src="/cirlce.gif" alt="Description" style={{ maxWidth: '150px', maxHeight: '100%' }} />
                    </Box>
                    <Box sx={{ textAlign: "center" }} my={2}>
                        <Typography variant="body1" >
                            Receive your Crypto or Fiat.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} justifyContent="center" alignItems="center" my={2}>
                    <Typography variant="h4" sx={{ fontWeight: 600, fontFamily: 'Merriweather, serif' }}>
                        How does our Crypto exchange work in Pakistan?
                    </Typography>
                </Grid>
                <Grid item xs={9} justifyContent="center" alignItems="center"  >
                    <Typography variant="body1" m={3}>
                        Regardless of the cryptocurrency, whether it is Bitcoin (BTC), Ether (ETH), Binance (BNB), or Tether (USDT), we buy and sell all of them. The procedure is described
                        in detail below.
                    </Typography>
                </Grid>
                <Grid item xs={12} justifyContent="center" alignItems="center" my={2}>
                    <Typography variant="h4" sx={{ fontWeight: 600, fontFamily: 'Merriweather, serif' }}>
                        For Bank Transfer
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} justifyContent="center" alignItems="center" m={{ xs: 0, sm: 0, md: 2, lg: 2, xl: 2 }} >
                    <Grid container xs={12} my={3} justifyContent="center" alignItems="center" sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Grid item xs={5} justifyContent="center" alignItems="center" my={2}>
                            <Typography variant="h4" sx={{ color: '#5ec3e0', fontWeight: 600, fontFamily: 'Merriweather, serif' }}>
                                Buying USDT?
                            </Typography>
                        </Grid>
                        <Grid item xs={5} justifyContent="center" alignItems="center" my={2}>
                            <Typography variant="h4" ml={5} sx={{ textAlign: 'left', color: '#5ec3e0', fontWeight: 600, fontFamily: 'Merriweather, serif' }}>
                                Selling USDT?
                            </Typography>
                        </Grid>
                        <Grid item xs={4} justifyContent="center" alignItems="center" p={{ xs: 0, sm: 0, md: 2, lg: 2, xl: 2 }}
                            sx={{
                                borderRight: '6px solid #5ec3e0',
                            }}
                        >
                            {rowsForBuying.map((row, index) => (
                                <Grid item justifyContent="center" alignItems="center" my={2} key={index}>
                                    <Typography variant="body1" style={{ textAlign: 'left' }}>
                                        {`${row.step}. ${row.description}`}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid item xs={4} justifyContent="center" alignItems="center" p={{ xs: 0, sm: 0, md: 2, lg: 2, xl: 2 }}
                        >
                            {rowsForSelling.map((row, index) => (
                                <Grid item justifyContent="flex-end" alignItems="flex-end" my={2} key={index}>
                                    <Typography variant="body1" style={{ textAlign: 'left' }}>
                                        {`${row.step}. ${row.description}`}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box >
        <Box>
            <Container>
                <Grid container spacing={2} my={3} justifyContent="center" alignItems="center" >
                    <Grid item xs={12} justifyContent="center" alignItems="center" my={2}>
                        <Typography variant="h4" sx={{ fontWeight: 600, fontFamily: 'Merriweather, serif' }}>
                            Why Choose Us?
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3} justifyContent="center" alignItems="center" my={2} sx={{ display: 'flex', flexDirection: 'column' }} >
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="h6" sx={{ fontWeight: 600, fontFamily: 'Merriweather, serif' }}>
                                    Safe & Secure
                                </Typography>
                                <Typography variant="body1" >
                                    Our USDT transaction and
                                    exchange process is
                                    safe & secure.
                                </Typography>
                            </Box>
                            <Box sx={{ verticalAlign: 'top' }}>
                                <img src='/ezgif.com-gif-maker (1).webp' width='100%' alt="ez" />
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} my={2}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="h6" sx={{ fontWeight: 600, fontFamily: 'Merriweather, serif' }}>
                                    Global Support
                                </Typography>
                                <Typography variant="body1" >
                                    We provide full support to
                                    our customers about how
                                    to buy Tether in Dubai.
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <img src='/ezgif.com-gif-maker (1).webp' width='100%' alt="ez" />
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} my={2}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="h6" sx={{ fontWeight: 600, fontFamily: 'Merriweather, serif' }}>
                                    Privacy
                                </Typography>
                                <Typography variant="body1" >
                                    Your privacy is much
                                    valuable to us.You can buy
                                    or sell here with identity
                                    protection.
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <img src='/ezgif.com-gif-maker (1).webp' width='100%' alt="ez" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} justifyContent="center" alignItems="center" my={2}>
                        <img src="/ezgif.com-gif-maker.webp" alt="Description" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    </Grid>
                    <Grid item xs={12} md={3} justifyContent="center" alignItems="center" my={2} sx={{ display: 'flex', flexDirection: 'column' }} >
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Box sx={{ verticalAlign: 'top' }}>
                                <img src='/ezgif.com-gif-maker (1).webp' width='100%' alt="ez"/>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="h6" sx={{ fontWeight: 600, fontFamily: 'Merriweather, serif' }}>
                                    Safe & Secure
                                </Typography>
                                <Typography variant="body1" >
                                    Our USDT transaction and
                                    exchange process is
                                    safe & secure.
                                </Typography>
                            </Box>

                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} my={2}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <img src='/ezgif.com-gif-maker (1).webp' width='100%' alt="ez" />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="h6" sx={{ fontWeight: 600, fontFamily: 'Merriweather, serif' }}>
                                    Global Support
                                </Typography>
                                <Typography variant="body1" >
                                    We provide full support to
                                    our customers about how
                                    to buy Tether in Dubai.
                                </Typography>
                            </Box>

                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} my={2}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <img src='/ezgif.com-gif-maker (1).webp' width='100%' alt="ez" />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="h6" sx={{ fontWeight: 600, fontFamily: 'Merriweather, serif' }}>
                                    Privacy
                                </Typography>
                                <Typography variant="body1" >
                                    Your privacy is much
                                    valuable to us.You can buy
                                    or sell here with identity
                                    protection.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    </>
    );
}
