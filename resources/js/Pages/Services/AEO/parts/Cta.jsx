import { Typography, Button, Box } from "@mui/material";
import audit4 from "@/assets/images/tax-audit/audit4.webp";

function Cta({ locale, checkLang, theme }) {
    return (
        <Box
            className="py-5"
            sx={{
                mt: 10,
                backgroundImage: `url(${audit4})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            <div className="container">
                <div className="row py-5">
                    <div className="col-6 col-md-6 py-md-4">
                        <Typography
                            as="h2"
                            sx={{
                                fontSize: "2rem",
                                letterSpacing: "0.009em",
                                color: theme.palette.custom.white,
                                fontWeight: "700",
                                mb: 2,
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: "1.25rem",
                                },
                            }}
                        >
                            <Typography
                                as="span"
                                sx={{
                                    fontSize: "2rem",
                                    letterSpacing: "0.009em",
                                    color: theme.palette.custom.orange,
                                    fontWeight: "700",
                                    mb: 2,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "1.25rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Free Consultation, ",
                                    "Konsultasi Gratis ",
                                    "無料相談 ",
                                    "免费咨询"
                                )}
                            </Typography>
                            {checkLang(
                                locale,
                                "Focus on Your Destination!",
                                "Agar Anda Bisa Fokus ke Bisnis!",
                                "ジネスに集中するための!",
                                "让您专注业务！"
                            )}
                        </Typography>
                    </div>
                    <div className="col-6 col-md-6 py-md-4 d-flex align-items-center justify-content-center">
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
                                "Consult Now",
                                "Konsultasi Sekarang",
                                "今すぐ相談",
                                "立即咨询"
                            )}
                        </Button>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default Cta;
