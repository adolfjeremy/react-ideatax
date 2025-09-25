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
                                Serves as Your Tax Partner
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
                                        "Initial Consultation and Document Preparation Stage",
                                        "Konsultasi Awal dan Tahap Persiapan Dokumen"
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
                                        "Preparation of administrative documents, compliance reports, financial data, and evidence of internal control systems.",
                                        "Persiapan dokumen administrasi, laporan kepatuhan, data keuangan, dan bukti-bukti sistem pengendalian internal."
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
                                        "Implementation and Certification Process",
                                        "Implementasi dan Proses sertifikasi"
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
                                        "Submission of application to the Directorate General of Customs and Excise (DGCE), interview preparation, field inspection readiness, and panel forum implementation.",
                                        "Pengajuan Permohonan ke DJBC, persiapan wawancara, persiapan pengecekan lapangan dan pelaksanaan forum panel."
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
                                        "The Company Obtains AEO Certification",
                                        "Perusahaan Mendapatkan Sertifikat AEO"
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
                                        "Once all requirements are complete and meet the standards, the AEO certificate will be granted and can be utilized.",
                                        "Setelah seluruh persyaratan lengkap dan sesuai standar, sertifikat AEO akan diberikan dan dapat digunakan."
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
