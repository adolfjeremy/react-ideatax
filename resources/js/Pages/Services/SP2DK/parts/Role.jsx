import { Box, Typography, useMediaQuery, Button } from "@mui/material";
import circle from "@/assets/images/circle.png";
import circleOrange from "@/assets/images/circle-orange.png";

function Role({ theme, locale, checkLang }) {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
    return (
        <Box sx={{ backgroundColor: "#d4f0fc", mt: 4, py: 5 }}>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-10">
                        <Typography
                            sx={{
                                fontSize: "1.25rem",
                                textAlign: "center",
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: "0.9rem",
                                },
                            }}
                        >
                            {checkLang(
                                locale,
                                "Responding to an  ",
                                "Menghadapi"
                            )}
                            <Typography
                                as="span"
                                sx={{
                                    fontSize: "1.25rem",
                                    fontWeight: "bold",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.9rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    " SP2DK ",
                                    " Surat Permintaan Penjelasan atas Data dan/atau Keterangan (SP2DK) "
                                )}
                            </Typography>
                            {checkLang(
                                locale,
                                "from the tax authority can be challenging for taxpayers. Unfamiliarity with the procedures or requested data often makes the process feel overwhelming.",
                                "dari otoritas pajak dapat menjadi tantangan tersendiri bagi wajib pajak. Ketidakpahaman terhadap prosedur atau data yang diminta sering kali membuat proses ini terasa rumit dan penuh tekanan."
                            )}
                        </Typography>
                    </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-10">
                        <Typography
                            sx={{
                                fontSize: "1.25rem",
                                textAlign: "center",
                                mt: 3,
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: "0.9rem",
                                },
                            }}
                        >
                            {checkLang(
                                locale,
                                "That’s why we offer SP2DK assistance service to provide professional support to guide you through it, minimize your risk of penalties, and help your tax compliance stay intact.",
                                "Untuk itu, Jasa Pendampingan SP2DK hadir sebagai solusi profesional untuk membantu Anda merespons SP2DK dengan tepat, mengurangi risiko denda, dan memastikan kepatuhan pajak tetap terjaga."
                            )}
                        </Typography>
                    </div>
                </div>
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
                            <div className="col-3 d-flex align-items-start justify-content-start position-relative">
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
                            <div className="col-3 d-flex align-items-start justify-content-start position-relative">
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
                            <div className="col-3 d-flex align-items-start justify-content-start position-relative">
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
                            <div className="col-3 d-flex align-items-start justify-content-start position-relative">
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
                            <div className="col-12 col-lg-3">
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
                                        "Review Your SP2DK ",
                                        "Menganalisis isi SP2DK"
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
                                        "We examine the content of your SP2DK and identify which tax type and fiscal year are disputed.",
                                        "Mengidentifikasi dasar penerbitan SP2DK, jenis pajak dan tahun pajak yang dipermasalahkan."
                                    )}
                                </Typography>
                            </div>
                            <div className="col-12 col-lg-3">
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
                                        "Assist in preparing formal responses from initial findings to the issuance of the SPHP.",
                                        "Memastikan kebenaran dan kelengkapan data pajak yang dilaporkan."
                                    )}
                                </Typography>
                            </div>
                            <div className="col-12 col-lg-3">
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
                                        "Draft Your Response",
                                        "Penyusunan Jawaban atas SP2DK"
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
                                        "We highlight the main issues to address, prepare a proper written explanation, and compile the necessary supporting documents.",
                                        "Kami menelaah isi SP2DK, mengidentifikasi poin-poin penting yang perlu dijelaskan, dan menyiapkan dokumen pendukung yang relevan. "
                                    )}
                                </Typography>
                            </div>
                            <div className="col-12 col-lg-3">
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
                                        "Submit and Follow Up",
                                        "Penyampaian dan Penyelesaian SP2DK"
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
                                        "We assist in preparing a complete and timely response within the 14-day deadline set by the DGT.",
                                        "Membantu menjawaban SP2DK dalam waktu 14 hari dengan benar dan lengkap."
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
                                            "Review Your SP2DK ",
                                            "Menganalisis isi SP2DK"
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
                                            "We examine the content of your SP2DK and identify which tax type and fiscal year are disputed.",
                                            "Mengidentifikasi dasar penerbitan SP2DK, jenis pajak dan tahun pajak yang dipermasalahkan."
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
                                            "Reconcile Your Tax Data",
                                            "Memeriksa Data Pajak Wajib Pajak"
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
                                            "Assist in preparing formal responses from initial findings to the issuance of the SPHP.",
                                            "Memastikan kebenaran dan kelengkapan data pajak yang dilaporkan."
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
                                            "Draft Your Response",
                                            "Penyusunan Jawaban atas SP2DK"
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
                                            "We highlight the main issues to address, prepare a proper written explanation, and compile the necessary supporting documents.",
                                            "Kami menelaah isi SP2DK, mengidentifikasi poin-poin penting yang perlu dijelaskan, dan menyiapkan dokumen pendukung yang relevan. "
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
                                            "Submit and Follow Up",
                                            "Penyampaian dan Penyelesaian SP2DK"
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
                                            "We assist in preparing a complete and timely response within the 14-day deadline set by the DGT.",
                                            "Membantu menjawaban SP2DK dalam waktu 14 hari dengan benar dan lengkap."
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
                </div>
            </div>
        </Box>
    );
}

export default Role;
