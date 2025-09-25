import { Box, Typography, Button } from "@mui/material";

function Choose({ theme, locale, checkLang }) {
    return (
        <Box py={5}>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-column align-items-center justify-content-center mt-4 mt-lg-0">
                        <div className="text-center">
                            <Typography
                                variant="h2"
                                fontSize="2rem"
                                color={theme.palette.custom.darkBlue}
                            >
                                {checkLang(locale, "Why Choose ", "Kenapa ")}
                                <Typography
                                    fontSize="2rem"
                                    variant="span"
                                    color={theme.palette.custom.orange}
                                >
                                    Ideatax
                                </Typography>{" "}
                                {checkLang(
                                    locale,
                                    "for Tax Solutions?",
                                    "Menjadi Pilihan Terbaik Dalam Masalah Perpajakan?"
                                )}
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12 col-md-4">
                        <Box
                            sx={{
                                display: "flex",
                                alignItem: "start",
                                justifyContent: "center",
                                gap: 4,
                                mt: 6,
                            }}
                        >
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: "2.4rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.01561707em",
                                        color: theme.palette.custom.darkBlue,
                                        fontWeight: "500",
                                        mb: 2,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "2rem",
                                        },
                                    }}
                                >
                                    01
                                </Typography>
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
                                        fontSize: "1.3rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.2em",
                                        color: theme.palette.custom.darkBlue,
                                        fontWeight: "500",
                                        mb: 2,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "1.25em",
                                        },
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "20+ Years of Experience in Taxation",
                                        "Pengalaman 20+ Tahun Menangani Masalah Perpajakan"
                                    )}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "1rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.5em",
                                        color: theme.palette.custom.black,
                                        fontWeight: "500",
                                        mb: 2,
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Ideatax partners bring over 20 years of experience in taxation. Our partners have worked at the Big 4 consulting firms and within the Indonesian tax authority, enabling us to deliver comprehensive and well-rounded tax solutions.",
                                        "Partner Ideatax berpengalaman lebih dari 20 tahun di bidang perpajakan. Partner Kami berpengalaman bekerja di Konsultan Pajak Big Four dan otoritas pajak sehingga memberikan solusi yang komprehensif kepada Anda."
                                    )}
                                </Typography>
                            </Box>
                        </Box>
                    </div>
                    <div className="col-12 col-md-4">
                        <Box
                            sx={{
                                display: "flex",
                                alignItem: "start",
                                justifyContent: "center",
                                gap: 4,
                                mt: 6,
                            }}
                        >
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: "2.4rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.01561707em",
                                        color: theme.palette.custom.darkBlue,
                                        fontWeight: "500",
                                        mb: 2,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "2rem",
                                        },
                                    }}
                                >
                                    02
                                </Typography>
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
                                        fontSize: "1.3rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.2em",
                                        color: theme.palette.custom.darkBlue,
                                        fontWeight: "500",
                                        mb: 2,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "1.25em",
                                        },
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Trusted by Local and Foreign Investors",
                                        "Spesialis untuk Investor Dalam dan Luar Negeri"
                                    )}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "1rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.5em",
                                        color: theme.palette.custom.black,
                                        fontWeight: "500",
                                        mb: 2,
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Ideatax is a trusted advisor in both foreign and domestic investment. We have extensive experience handling tax matters for PMA (foreign capital investment) and PMDN (domestic capital investment) companies.",
                                        "Salah satu konsultan terkemuka di bidang investasi asing maupun dalam negeri di Indonesia. Kami telah berpengalaman dalam menangani perpajakan perusahaan Penanaman Modal Asing (PMA)  maupun Penanaman Modal Dalam Negeri (PMDN)."
                                    )}
                                </Typography>
                            </Box>
                        </Box>
                    </div>
                    <div className="col-12 col-md-4">
                        <Box
                            sx={{
                                display: "flex",
                                alignItem: "start",
                                justifyContent: "center",
                                gap: 4,
                                mt: 6,
                            }}
                        >
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: "2.4rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.01561707em",
                                        color: theme.palette.custom.darkBlue,
                                        fontWeight: "500",
                                        mb: 2,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "2rem",
                                        },
                                    }}
                                >
                                    03
                                </Typography>
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
                                        fontSize: "1.3rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.2em",
                                        color: theme.palette.custom.darkBlue,
                                        fontWeight: "500",
                                        mb: 2,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "1.25em",
                                        },
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Client-Centered Approach",
                                        "Solusi yang Menyesuaikan Kebutuhan Anda"
                                    )}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "1rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.5em",
                                        color: theme.palette.custom.black,
                                        fontWeight: "500",
                                        mb: 2,
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "We prioritize open communication and prompt responses to foster successful collaboration. We are committed to providing full support while maintaining strict confidentiality as our core value.",
                                        "Kami percaya bahwa komunikasi terbuka dan respons cepat adalah kunci kolaborasi sukses. Kami berkomitmen untuk mendukung sepenuhnya dan menjaga privasi serta kerahasiaan sebagai nilai penting."
                                    )}
                                </Typography>
                            </Box>
                        </Box>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-5 d-flex justify-content-center align-items-center">
                        <Button
                            href="https://wa.me/62811195708?text=Hello%20Ideatax"
                            rel="noopener noreferrer"
                            target="_blank"
                            sx={{
                                color: theme.palette.custom.white,
                                fontWeight: "500",
                                backgroundColor: theme.palette.custom.darkBlue,
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
                                "Jadwalkan Konsultasi"
                            )}
                        </Button>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default Choose;
