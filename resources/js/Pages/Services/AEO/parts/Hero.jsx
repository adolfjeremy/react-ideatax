import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import HeroCTA from "@/Components/HeroCTA";

import hero from "@/assets/images/aeo-hero.png";
import heroSM from "@/assets/images/sp2dk-hero-sm.png";

function Hero({ locale, checkLang, theme }) {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
    return (
        <HeroCTA image={isMobile ? heroSM : hero}>
            <Box
                sx={{
                    [theme.breakpoints.down("md")]: {
                        paddingTop: "20px",
                    },
                }}
                className="col-12 col-md-7 text-end d-flex flex-column align-items-end justify-content-center gap-2"
            >
                <Typography
                    as="h1"
                    sx={{
                        fontSize: "3rem",
                        letterSpacing: "0.009em",
                        lineHeight: "1.5em",
                        color: theme.palette.custom.white,
                        fontWeight: "700",
                        [theme.breakpoints.down("sm")]: {
                            fontSize: "1.25rem",
                            textAlign: "center",
                        },
                    }}
                >
                    {checkLang(
                        locale,
                        "AEO Certification for Your Global Business",
                        "Sertifikasi AEO untuk Bisnis Global Anda"
                    )}
                </Typography>
                <Typography
                    sx={{
                        color: theme.palette.custom.white,
                        fontSize: "1.5625rem",
                        [theme.breakpoints.down("sm")]: {
                            fontSize: "0.9rem",
                            marginTop: "1.625rem",
                        },
                        margin: 0,
                        padding: 0,
                        fontWeight: 500,
                        lineHeight: "1.42498753em",
                        letterSpacing: "0.009em",
                        [theme.breakpoints.up("md")]: {
                            padding: "0 0 0 100px",
                        },
                    }}
                >
                    {checkLang(
                        locale,
                        "Obtain Authorized Economic Operator (AEO) status and enjoy the benefits of faster, more efficient customs processes for international trade.",
                        "Dapatkan status Authorized Economic Operator (AEO) dan nikmati kemudahan perdagangan internasional dengan proses bea cukai yang lebih cepat dan efisien."
                    )}
                </Typography>
                <Button
                    href="https://wa.me/62811195708?text=Hello%20Ideatax"
                    rel="noopener noreferrer"
                    target="_blank"
                    sx={{
                        color: theme.palette.custom.white,
                        fontWeight: "500",
                        backgroundColor: theme.palette.custom.orange,
                        padding: "15px",
                        fontSize: "1.2rem",
                        textTransform: "none",
                        [theme.breakpoints.down("sm")]: {
                            padding: "7px",
                            fontSize: "0.8rem",
                            fontWeight: "500",
                        },
                    }}
                >
                    {checkLang(
                        locale,
                        "Book a Consultation",
                        "Jadwalkan Konsultasi",
                        "",
                        "安排咨询"
                    )}
                </Button>
            </Box>
        </HeroCTA>
    );
}

export default Hero;
