import { Box, Typography, Button } from "@mui/material";
import imam from "@/assets/images/imam-basuki.png";
import icon1 from "@/assets/images/custom-audit.png";
import icon2 from "@/assets/images/appeal-dispute.png";
import icon3 from "@/assets/images/facility-application.png";

function Why({ checkLang, locale, theme }) {
    return (
        <Box mt={3}>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <Typography
                            sx={{
                                fontSize: "2.25rem",
                                letterSpacing: "0.009em",
                                color: theme.palette.custom.darkBlue,
                                fontWeight: "600",
                                mb: 2,
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: "1.25rem",
                                    textAlign: "center",
                                },
                            }}
                            variant="h2"
                        >
                            {checkLang(
                                locale,
                                "Ideatax Customs Specialist",
                                "Ahli Kepabeanan Ideatax"
                            )}
                        </Typography>
                    </div>
                </div>
                <div className="row d-flex flex-column-reverse flex-md-row mt-4">
                    <div className="col-12 col-md-7 d-flex flex-column justify-content-start align-items-start mt-5 mt-md-0">
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: "1.1rem",
                                    letterSpacing: "0.009em",
                                    lineHeight: "1.5em",
                                    color: theme.palette.custom.black,
                                    fontWeight: "500",
                                    mb: 2,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.9rem",
                                    },
                                    span: {
                                        color: theme.palette.custom.darkBlue,
                                        fontWeight: "600",
                                    },
                                }}
                            >
                                <span>Imam Basuki Rahmanto</span>
                                {checkLang(
                                    locale,
                                    " is a seasoned expert in the field of customs, bringing over 18 years of professional experience. He began his career at the Directorate General of Customs and Excise from 2007 to 2014. He specializes in customs audits, appeals, and the application of customs facilities.",
                                    " adalah seorang ahli berpengalaman di bidang kepabeanan dengan lebih dari 18 tahun pengalaman profesional. Ia memulai kariernya di Direktorat Jenderal Bea dan Cukai dari tahun 2007 hingga 2014. Keahliannya mencakup audit kepabeanan, keberatan, serta penerapan fasilitas kepabeanan."
                                )}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: "1.1rem",
                                    letterSpacing: "0.009em",
                                    lineHeight: "1.5em",
                                    color: theme.palette.custom.darkBlue,
                                    fontWeight: "600",
                                    mb: 2,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.9rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Experienced in:",
                                    "Berpengalaman dalam:"
                                )}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItem: "start",
                                justifyContent: "center",
                                gap: 2,
                                mt: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    img: { width: "50px" },
                                }}
                            >
                                <img
                                    src={icon1}
                                    alt="Customs Audits & Compliance"
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "start",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography
                                    as="h3"
                                    sx={{
                                        fontSize: "1.1rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.2em",
                                        color: theme.palette.custom.darkBlue,
                                        fontWeight: "600",
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "0.9rem",
                                        },
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Customs Audits & Compliance",
                                        "Audit & Kepatuhan Kepabeanan"
                                    )}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "1.1rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.5em",
                                        color: theme.palette.custom.black,
                                        fontWeight: "500",
                                        mb: 2,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "0.9rem",
                                        },
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Comprehensive audit support and compliance guidance",
                                        "Dukungan audit menyeluruh dan panduan kepatuhan"
                                    )}
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItem: "start",
                                justifyContent: "center",
                                gap: 2,
                                mt: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    img: { width: "50px" },
                                }}
                            >
                                <img
                                    src={icon2}
                                    alt="Appeals & Dispute Resolution"
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "start",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography
                                    as="h3"
                                    sx={{
                                        fontSize: "1.1rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.2em",
                                        color: theme.palette.custom.darkBlue,
                                        fontWeight: "600",
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "0.9rem",
                                        },
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Appeals & Dispute Resolution",
                                        "Keberatan & Penyelesaian Sengketa"
                                    )}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "1.1rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.5em",
                                        color: theme.palette.custom.black,
                                        fontWeight: "500",
                                        mb: 2,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "0.9rem",
                                        },
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Expert representation in customs disputes",
                                        "Representasi ahli dalam sengketa kepabeanan"
                                    )}
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItem: "start",
                                justifyContent: "center",
                                gap: 2,
                                mt: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    img: { width: "50px" },
                                }}
                            >
                                <img src={icon3} alt="Facility Applications" />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "start",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography
                                    as="h3"
                                    sx={{
                                        fontSize: "1.1rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.2em",
                                        color: theme.palette.custom.darkBlue,
                                        fontWeight: "600",
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "0.9rem",
                                        },
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Facility Applications",
                                        "Aplikasi Fasilitas"
                                    )}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "1.1rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.5em",
                                        color: theme.palette.custom.black,
                                        fontWeight: "500",
                                        mb: 2,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "0.9rem",
                                        },
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "AEO Certification, Bonded zones, duty exemptions, and preferential schemes",
                                        "Sertifikasi AEO, Kawasan berikat, pembebasan bea, dan skema preferensial"
                                    )}
                                </Typography>
                            </Box>
                        </Box>
                    </div>
                    <Box className="col-12 col-md-5 mt-4 mt-md-0 d-flex flex-column justify-content-center align-items-cemter p-2 p-md- gap-5">
                        <Box
                            sx={{
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                img: {
                                    width: "80%",
                                },
                            }}
                        >
                            <img src={imam} alt="Imam Basuki Rahmanto" />
                        </Box>
                        <Box className="d-flex align-items-center justify-content-center w-100">
                            <Button
                                href="https://wa.me/62811195708?text=Hello%20Ideatax"
                                rel="noopener noreferrer"
                                target="_blank"
                                sx={{
                                    color: theme.palette.custom.white,
                                    fontWeight: "500",
                                    backgroundColor:
                                        theme.palette.custom.orange,
                                    padding: "15px",
                                    fontSize: "1.2rem",
                                    textTransform: "none",
                                    [theme.breakpoints.down("sm")]: {
                                        padding: "7px",
                                        fontSize: "0.7rem",
                                        fontWeight: "500",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Book a Consultation",
                                    "Konsultasi Sekarang"
                                )}
                            </Button>
                        </Box>
                    </Box>
                </div>
            </div>
        </Box>
    );
}

export default Why;
