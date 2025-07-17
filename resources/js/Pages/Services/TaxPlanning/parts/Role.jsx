import { Box, Typography, useMediaQuery, Button } from "@mui/material";
import circle from "@/assets/images/circle.png";
import circleOrange from "@/assets/images/circle-orange.png";

function Role({ theme, locale, checkLang }) {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
    return (
        <Box sx={{ backgroundColor: "#d4f0fc", mt: 4, py: 5 }}>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12 col-md-5 text-start">
                        {checkLang(
                            locale,
                            <Typography
                                sx={{
                                    fontSize: "2rem",
                                    letterSpacing: "0.009em",
                                    color: theme.palette.custom.darkBlue,
                                    fontWeight: "600",
                                    mb: 2,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "1.25rem",
                                    },
                                }}
                            >
                                How{" "}
                                <Typography
                                    as="span"
                                    sx={{
                                        color: theme.palette.custom.orange,
                                        fontSize: "2rem",
                                        letterSpacing: "0.009em",
                                        fontWeight: "600",
                                        mb: 2,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "1.25rem",
                                        },
                                    }}
                                >
                                    Ideatax
                                </Typography>
                                <br />
                                Can Help
                            </Typography>,
                            <Typography
                                sx={{
                                    fontSize: "2rem",
                                    letterSpacing: "0.009em",
                                    color: theme.palette.custom.darkBlue,
                                    fontWeight: "600",
                                    mb: 2,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "1.25rem",
                                    },
                                }}
                            >
                                Peran{" "}
                                <Typography
                                    as="span"
                                    sx={{
                                        color: theme.palette.custom.orange,
                                        fontSize: "2rem",
                                        letterSpacing: "0.009em",
                                        fontWeight: "600",
                                        mb: 2,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "1.25rem",
                                        },
                                    }}
                                >
                                    Ideatax
                                </Typography>{" "}
                                Sebagai Partner Pajak Anda
                            </Typography>
                        )}
                    </div>
                </div>
                {!isMobile && (
                    <>
                        <div className="row mt-4 position-relative">
                            <div className="col-4 d-flex align-items-start justify-content-start position-relative">
                                <Box
                                    sx={{
                                        height: "40px",
                                        width: "40px",
                                        borderRadius: "50%",
                                        backgroundColor:
                                            theme.palette.custom.darkBlue,
                                        position: "relative",
                                        zIndex: 10,
                                    }}
                                ></Box>
                            </div>
                            <div className="col-4 d-flex align-items-start justify-content-start position-relative">
                                <Box
                                    sx={{
                                        height: "40px",
                                        width: "40px",
                                        borderRadius: "50%",
                                        backgroundColor:
                                            theme.palette.custom.darkBlue,
                                        position: "relative",
                                        zIndex: 10,
                                    }}
                                ></Box>
                            </div>
                            <div className="col-4 d-flex align-items-start justify-content-start position-relative">
                                <Box
                                    sx={{
                                        height: "40px",
                                        width: "40px",
                                        borderRadius: "50%",
                                        backgroundColor:
                                            theme.palette.custom.orange,
                                        position: "relative",
                                        zIndex: 10,
                                    }}
                                ></Box>
                            </div>
                            <Box
                                className="col-12"
                                sx={{
                                    position: "absolute",
                                    top: "50%",
                                    translate: "transformY(-50%)",
                                    zIndex: 1,
                                }}
                            >
                                <Box
                                    sx={{
                                        height: "4px",
                                        backgroundColor:
                                            theme.palette.custom.darkBlue,
                                        width: "100%",
                                    }}
                                ></Box>
                            </Box>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12 col-lg-4">
                                <Typography
                                    as="h3"
                                    sx={{
                                        color: theme.palette.custom.darkBlue,
                                        fontSize: "1.25rem",
                                        letterSpacing: "0.009em",
                                        fontWeight: "600",
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Data Collection and Analysis",
                                        "Pengumpulan Data dan Analisis"
                                    )}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: theme.palette.custom.black,
                                        fontSize: "1rem",
                                        letterSpacing: "0.009em",
                                        fontWeight: 500,
                                        mt: 1,
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "We gather and analyze your company's financial data to identify the most effective tax planning strategy.",
                                        "Mengumpulkan data keuangan bisnis, lalu menganalisisnya untuk menentukan strategi tax planning yang tepat."
                                    )}
                                </Typography>
                            </div>
                            <div className="col-12 col-lg-4">
                                <Typography
                                    as="h3"
                                    sx={{
                                        color: theme.palette.custom.darkBlue,
                                        fontSize: "1.25rem",
                                        letterSpacing: "0.009em",
                                        fontWeight: "600",
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Reconcile Your Tax Data",
                                        "Memeriksa Data Pajak Wajib Pajak"
                                    )}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: theme.palette.custom.black,
                                        fontSize: "1rem",
                                        letterSpacing: "0.009em",
                                        fontWeight: 500,
                                        mt: 1,
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "We define clear tax planning goals and develop a strategy by considering available tax incentives, legitimate deductions, and other regulatory considerations.",
                                        "Menentukan tujuan dan strategi tax planning dengan mempertimbangkan insentif pajak, pengurangan yang sah, dan aspek terkait lainnya sesuai peraturan yang berlaku."
                                    )}
                                </Typography>
                            </div>
                            <div className="col-12 col-lg-4">
                                <Typography
                                    as="h3"
                                    sx={{
                                        color: theme.palette.custom.darkBlue,
                                        fontSize: "1.25rem",
                                        letterSpacing: "0.009em",
                                        fontWeight: "600",
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Tax Planning Implementation in Your Company",
                                        "Implementasi Strategi Tax Planning di Perusahaan Anda"
                                    )}
                                </Typography>
                            </div>
                        </div>
                    </>
                )}
                {isMobile && (
                    <div className="row position-relative">
                        <Box className="col-12 d-flex flex-column position-relative">
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    justifyContent: "start",
                                    gap: 3,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        justifyContent: "center",
                                        height: "100%",
                                        flex: "0 0 30px",
                                        img: {
                                            width: "30px",
                                            height: "30px",
                                        },
                                    }}
                                >
                                    <img src={circle} alt="" />
                                </Box>
                                <Box>
                                    <Typography
                                        as="h3"
                                        sx={{
                                            color: theme.palette.custom
                                                .darkBlue,
                                            fontSize: "1rem",
                                            letterSpacing: "0.009em",
                                            fontWeight: "600",
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Data Collection and Analysis",
                                            "Pengumpulan Data dan Analisis"
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: theme.palette.custom.black,
                                            fontSize: "0.9rem",
                                            letterSpacing: "0.009em",
                                            fontWeight: 500,
                                            mt: 1,
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "We gather and analyze your company’s financial data to identify the most effective tax planning strategy.",
                                            "Mengumpulkan data keuangan bisnis, lalu menganalisisnya untuk menentukan strategi tax planning yang tepat."
                                        )}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    justifyContent: "start",
                                    gap: 3,
                                    mt: 6,
                                    svg: {
                                        width: "48px",
                                        height: "48px",
                                        color: theme.palette.custom.darkBlue,
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        justifyContent: "center",
                                        height: "100%",
                                        flex: "0 0 30px",
                                        img: {
                                            width: "30px",
                                            height: "30px",
                                        },
                                    }}
                                >
                                    <img src={circle} alt="" />
                                </Box>
                                <Box>
                                    <Typography
                                        as="h3"
                                        sx={{
                                            color: theme.palette.custom
                                                .darkBlue,
                                            fontSize: "1rem",
                                            letterSpacing: "0.009em",
                                            fontWeight: "600",
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Setting Tax Planning Objectives and Strategy",
                                            "Penentuan Tujuan dan Strategi Tax Planning"
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: theme.palette.custom.black,
                                            fontSize: "0.9rem",
                                            letterSpacing: "0.009em",
                                            fontWeight: 500,
                                            mt: 1,
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "We define clear tax planning goals and develop a strategy by considering available tax incentives, legitimate deductions, and other regulatory considerations.",
                                            "Menentukan tujuan dan strategi tax planning dengan mempertimbangkan insentif pajak, pengurangan yang sah, dan aspek terkait lainnya sesuai peraturan yang berlaku."
                                        )}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    justifyContent: "start",
                                    gap: 3,
                                    mt: 6,
                                    svg: {
                                        width: "48px",
                                        height: "48px",
                                        color: theme.palette.custom.orange,
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        justifyContent: "center",
                                        height: "100%",
                                        flex: "0 0 30px",
                                        position: "relative",
                                        zIndex: 11,
                                        img: {
                                            width: "30px",
                                            height: "30px",
                                        },
                                    }}
                                >
                                    <img src={circleOrange} alt="" />
                                </Box>
                                <Box>
                                    <Typography
                                        as="h3"
                                        sx={{
                                            color: theme.palette.custom
                                                .darkBlue,
                                            fontSize: "1rem",
                                            letterSpacing: "0.009em",
                                            fontWeight: "600",
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Tax Planning Implementation in Your Company",
                                            "Implementasi Strategi Tax Planning di Perusahaan Anda"
                                        )}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                position: "absolute",
                                width: "3px",
                                top: "0",
                                left: "25px",
                                bottom: 0,
                                backgroundColor: theme.palette.custom.darkBlue,
                                padding: 0,
                                zIndex: 10,
                            }}
                        ></Box>
                    </div>
                )}
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
                                "Jadwalkan Konsultasi",
                                "",
                                "安排咨询"
                            )}
                        </Button>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default Role;
