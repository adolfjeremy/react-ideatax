import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import HeroCTA from "@/Components/HeroCTA";
import hero from "@/assets/images/sp2dk-hero.png";
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
                    className="span_heading"
                    sx={{
                        fontSize: "3rem",
                        letterSpacing: "0.009em",
                        lineHeight: "1.5em",
                        color: theme.palette.custom.darkBlue,
                        [theme.breakpoints.down("sm")]: {
                            fontSize: "1rem",
                        },
                        margin: 0,
                        padding: 0,
                    }}
                ></Typography>
                <Typography
                    as="h1"
                    sx={{
                        fontSize: "3rem",
                        letterSpacing: "0.009em",
                        lineHeight: "1.5em",
                        color: theme.palette.custom.darkBlue,
                        fontWeight: "700",
                        [theme.breakpoints.down("sm")]: {
                            fontSize: "1.25rem",
                            textAlign: "center",
                        },
                    }}
                >
                    {checkLang(
                        locale,
                        "Did Your Company Receive a Request for Explanation of Data and/or Information Notice (SP2DK)?",
                        "Perusahaan Anda Mendapat Surat Permintaan Penjelasan atas Data dan/atau Keterangan (SP2DK)?"
                    )}
                </Typography>
                <Typography
                    sx={{
                        color: theme.palette.custom.darkBlue,
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
                        "Don't worry, Ideatax is here to help!",
                        "Jangan khawatir! Ideatax siap membantu!"
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
