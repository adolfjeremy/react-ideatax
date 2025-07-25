import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import HeroCTA from "@/Components/HeroCTA";
import hero from "@/assets/images/tax_planning_lg.png";
import heroSM from "@/assets/images/tax_planning_sm.png";

function Hero({ locale, checkLang, theme }) {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
    return (
        <HeroCTA padding="0" image={isMobile ? heroSM : hero}>
            <Box
                sx={{
                    [theme.breakpoints.down("md")]: {
                        paddingTop: "20px",
                    },
                    [theme.breakpoints.down("sm")]: {
                        height: "100%",
                    },
                }}
                className="col-12 col-md-7 text-md-end text-center d-flex flex-column align-items-center align-items-md-end justify-content-between justify-content-md-center gap-2"
            >
                <div className="mt-2">
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
                            "Cut Your Company's Tax Bill With Effective Tax Planning",
                            "Kurangi Beban Pajak Perusahaan dengan Perencanaan Pajak yang Baik"
                        )}
                    </Typography>
                    <Typography
                        sx={{
                            color: theme.palette.custom.darkBlue,
                            fontSize: "1.5625rem",
                            [theme.breakpoints.down("sm")]: {
                                fontSize: "0.9rem",
                                marginTop: ".9375rem",
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
                            "Ideatax offers professional tax planning services to improve your business efficiency.",
                            "Ideatax menyediakan Jasa Perencanaan Pajak untuk meningkatkan efisiensi perusahaan Anda."
                        )}
                    </Typography>
                </div>
                <div className="mb-4">
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
                </div>
            </Box>
        </HeroCTA>
    );
}
export default Hero;
