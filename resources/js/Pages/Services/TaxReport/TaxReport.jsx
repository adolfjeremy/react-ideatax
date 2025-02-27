import React from "react";
import { Box, Typography, useTheme, Button } from "@mui/material";
import { usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import Guest from "@/Layout/Guest";
import checkLang from "@/utils/checkLang";
import HeroCTA from "@/Components/HeroCTA";
import ProblemsQuestioner from "@/Components/ProblemsQuestioner";
import RoleHeading from "@/Components/RoleHeading";

import quest1 from "./quest1.png";
import quest2 from "./quest2.png";
import quest3 from "./quest3.png";
import quest4 from "./quest4.png";
import partner from "./partner.png";
import audit4 from "@/assets/images/tax-audit/audit4.webp";

import hero from "./hero.png";
import Steps from "@/Components/Steps";
import RoleItems from "@/Components/RoleItems";
import ServiceDetailBox from "@/Components/ServiceDetailBox";
import CheckIconContent from "@/Components/CheckIconContent";
import CounterLg from "@/Components/CounterLg";
import AwardImage from "@/Components/AwardImage";

function TaxReport() {
    const { t } = useTranslation();
    const theme = useTheme();
    const { locale, stats } = usePage().props;
    return (
        <Guest
            className="services"
            en={route("tax-report")}
            id={route("tax-report.id")}
            jp={route("tax-report.jp")}
            description={checkLang(
                locale,
                "Filing an annual tax return is a legal obligation for corporations and individuals to report income, expenses, and tax liabilities for a fiscal year. Accurate and timely filing ensures compliance with tax regulations and helps prevent penalties or audits. Our team is here to assist you at every stage of the process, from document preparation and tax calculations to the completion and submission of your tax return.",
                "Pelaporan SPT Tahunan merupakan kewajiban bagi wajib pajak, baik badan maupun pribadi, untuk melaporkan penghasilan, pengeluaran, serta kewajiban pajaknya dalam satu tahun pajak. Dengan pelaporan yang akurat dan tepat waktu, wajib pajak dapat memastikan kepatuhan terhadap peraturan perpajakan serta menghindari risiko denda atau pemeriksaan pajak. Kami siap membantu Anda dalam setiap tahap pelaporan, mulai dari persiapan dokumen, perhitungan pajak, hingga pengisian dan pengiriman SPT.",
                "年間納税申告 SPT は、法人・個人を問わず納税者が1年間の所得、支出、および税務義務を報告するための義務です。正確かつ期限内に申告することで、納税者は税法の遵守を確実にし、罰則や税務調査のリスクを回避できます。当社は、書類準備、税額計算、申告書の記入・提出まで、あらゆる申告プロセスをサポートいたします。"
            )}
            seo_title={checkLang(
                locale,
                "Annual Tax Return Reporting Service for Corporations and Individuals | Ideatax",
                "Layanan Pelaporan SPT Tahunan Badan dan Pribadi | Ideatax",
                "法人および個人向け年間納税申告 SPT サービス | Ideatax"
            )}
            href={checkLang(
                locale,
                route("tax-report"),
                route("tax-report.id"),
                route("tax-report.jp")
            )}
        >
            {/* start of hero section */}
            <HeroCTA image={hero}>
                <Box
                    sx={{
                        [theme.breakpoints.down("md")]: {
                            paddingTop: "100px",
                        },
                    }}
                    className="col-9 col-md-7 text-end d-flex flex-column align-items-end justify-content-center gap-2"
                >
                    <Typography
                        className="span_heading"
                        sx={{
                            fontSize: "3rem",
                            letterSpacing: "0.009em",
                            lineHeight: "1.5em",
                            color: theme.palette.custom.darkBlue,
                            [theme.breakpoints.down("sm")]: {
                                fontSize: "1.2rem",
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
                                fontSize: "1.2rem",
                            },
                        }}
                    >
                        {checkLang(
                            locale,
                            "Corporate/Individual",
                            "Pelaporan Pajak",
                            ""
                        )}
                        <br />
                        {checkLang(
                            locale,
                            "Annual Tax Return Filing Efficient, Accurate, and Hassle-Free",
                            "SPT Tahunan Badan/Orang Pribadi Rapih, Cepat dan Tepat",
                            ""
                        )}
                    </Typography>
                    <Typography
                        sx={{
                            color: theme.palette.custom.darkBlue,
                            fontSize: "1.25rem",
                            [theme.breakpoints.down("sm")]: {
                                fontSize: "0.7rem",
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
                            "Filing your tax return can be stressful with complex calculations and piles of documents. If you miss the deadline, penalties await! But don't worry, we're here to ensure your tax returns are accurate, timely, and risk-free.",
                            "Pelaporan SPT sering kali bikin pusing. hitungannya rumit, dokumennya banyak, dan kalau telat? Denda menanti! Jangan khawatir, kami siap membantu memastikan laporan pajak Anda akurat, tepat waktu, dan bebas risiko.",
                            ""
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
                            "Consult Now",
                            "Jadwalkan Konsultasi",
                            ""
                        )}
                    </Button>
                </Box>
            </HeroCTA>
            {/* end of hero section */}
            {/* start of problems questioner */}
            <ProblemsQuestioner
                question={checkLang(
                    locale,
                    "Are you facing any of these problems?",
                    "Apakah Anda pernah merasakan salah satu masalah ini?",
                    ""
                )}
            />
            {/* end of problems questioner */}

            {/* start of problems */}
            <Box>
                <Box className="container" mt={5}>
                    <div className="row">
                        <Box className="col-12 col-md-6 col-xl-3 mb-3 mb-sm-0">
                            <Box
                                className="d-flex flex-column align-items-center justify-content-end p-4"
                                sx={{
                                    backgroundImage: `url(${quest1})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    height: "300px",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "1.1rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.3em",
                                        color: theme.palette.custom.white,
                                        textAlign: "center",
                                        fontWeight: "500",
                                        m: 0,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "1rem",
                                        },
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Receiving an SP2DK Due to Inconsistencies Between Your Tax Return and Financial Statement",
                                        "Mendapat SP2DK Karena Ketidaksesuaian SPT dengan Laporan Keuangan",
                                        ""
                                    )}
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="col-12 col-md-6 col-xl-3 mb-3 mb-sm-0">
                            <Box
                                className="d-flex flex-column align-items-center justify-content-end p-4"
                                sx={{
                                    backgroundImage: `url(${quest2})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    height: "300px",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "1.1rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.3em",
                                        color: theme.palette.custom.white,
                                        textAlign: "center",
                                        fontWeight: "500",
                                        m: 0,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "1rem",
                                        },
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Struggling to Access or Navigate the Tax System",
                                        "Kesulitan dalam Mengakses atau Menggunakan Sistem Perpajakan",
                                        ""
                                    )}
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="col-12 col-md-6 col-xl-3 mb-3 mb-sm-0">
                            <Box
                                className="d-flex flex-column align-items-center justify-content-end p-4"
                                sx={{
                                    backgroundImage: `url(${quest3})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    height: "300px",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "1.1rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.3em",
                                        color: theme.palette.custom.white,
                                        textAlign: "center",
                                        fontWeight: "500",
                                        m: 0,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "1rem",
                                        },
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Unfamiliar with the Latest Tax Regulations",
                                        "Kurangnya Pemahaman Terhadap Peraturan Perpajakan Terbaru",
                                        ""
                                    )}
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="col-12 col-md-6 col-xl-3 mb-3 mb-sm-0">
                            <Box
                                className="d-flex flex-column align-items-center justify-content-end p-4"
                                sx={{
                                    backgroundImage: `url(${quest4})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    height: "300px",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "1.1rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.3em",
                                        color: theme.palette.custom.white,
                                        textAlign: "center",
                                        fontWeight: "500",
                                        m: 0,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "1rem",
                                        },
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Lacking the Time or Resources to Manage Your Taxes",
                                        "Tidak Punya Waktu dan SDM untuk Mengurus Perpajakan",
                                        ""
                                    )}
                                </Typography>
                            </Box>
                        </Box>
                    </div>
                </Box>
            </Box>
            {/* end of problems */}
            {/* start of role */}
            <Box>
                <div className="container">
                    <RoleHeading />
                    <Steps />
                    <RoleItems />
                </div>
            </Box>
            {/* end of role */}
            {/* start of ideatax quality */}
            <Box mt={8}>
                <div className="container">
                    <div className="row">
                        <Box className="col-12 col-md-5 mt-4 mt-md-0 d-flex flex-column justify-content-center align-items-center p-2 gap-5">
                            <Box
                                sx={{
                                    position: "relative",
                                }}
                            >
                                <img
                                    src={partner}
                                    alt="Jovita and Cecilia"
                                    className="w-100"
                                />
                            </Box>
                        </Box>
                        <div className="col-12 col-md-7 d-flex flex-column align-items-center justify-content-center">
                            <div className="row">
                                <Typography
                                    variant="h2"
                                    fontSize="2rem"
                                    color={theme.palette.custom.darkBlue}
                                >
                                    {checkLang(
                                        locale,
                                        "Why Choose ",
                                        "Kenapa ",
                                        ""
                                    )}
                                    <Typography
                                        fontSize="2rem"
                                        variant="span"
                                        color={theme.palette.custom.orange}
                                    >
                                        Ideatax
                                    </Typography>{" "}
                                    {checkLang(
                                        locale,
                                        "for Your Tax Matters?",
                                        "Adalah Pilihan Terbaik dalam Masalah Pajak?",
                                        ""
                                    )}
                                </Typography>
                            </div>
                            <div className="row">
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
                                                color: theme.palette.custom
                                                    .darkBlue,
                                                fontWeight: "600",
                                                mb: 2,
                                                [theme.breakpoints.down("sm")]:
                                                    {
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
                                                color: theme.palette.custom
                                                    .darkBlue,
                                                fontWeight: "600",
                                                mb: 2,
                                                [theme.breakpoints.down("sm")]:
                                                    {
                                                        fontSize: "1.25rem",
                                                    },
                                            }}
                                        >
                                            {checkLang(
                                                locale,
                                                "20+ Years of Tax Compliance Handling Experience",
                                                "Pengalaman 20+ Tahun Menangani Kepatuhan Pajak",
                                                ""
                                            )}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "1rem",
                                                letterSpacing: "0.009em",
                                                lineHeight: "1.5em",
                                                color: theme.palette.custom
                                                    .black,
                                                fontWeight: "00",
                                                mb: 2,
                                                [theme.breakpoints.down("sm")]:
                                                    {
                                                        fontSize: "0.9rem",
                                                    },
                                            }}
                                        >
                                            {checkLang(
                                                locale,
                                                "Ideatax partners bring over 20 years of experience in taxation. Our partners have worked with Big Four tax consultants and tax authorities, providing you with comprehensive solutions.",
                                                "Partner Ideatax berpengalaman lebih dari 20 tahun di bidang perpajakan. Partner Kami berpengalaman bekerja di Konsultan Pajak Big Four dan otoritas pajak sehingga memberikan solusi yang komprehensif kepada Anda.",
                                                ""
                                            )}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItem: "start",
                                        justifyContent: "center",
                                        gap: 4,
                                        mt: 2,
                                    }}
                                >
                                    <Box>
                                        <Typography
                                            sx={{
                                                fontSize: "2.4rem",
                                                letterSpacing: "0.009em",
                                                lineHeight: "1.01561707em",
                                                color: theme.palette.custom
                                                    .darkBlue,
                                                fontWeight: "600",
                                                mb: 2,
                                                [theme.breakpoints.down("sm")]:
                                                    {
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
                                                color: theme.palette.custom
                                                    .darkBlue,
                                                fontWeight: "600",
                                                mb: 2,
                                                [theme.breakpoints.down("sm")]:
                                                    {
                                                        fontSize: "1.25rem",
                                                    },
                                            }}
                                        >
                                            {checkLang(
                                                locale,
                                                "Specialists for Domestic and Foreign Investors",
                                                "Spesialisasi untuk Investor Dalam dan Luar Negeri",
                                                ""
                                            )}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "1rem",
                                                letterSpacing: "0.009em",
                                                lineHeight: "1.5em",
                                                color: theme.palette.custom
                                                    .black,
                                                fontWeight: "500",
                                                mb: 2,
                                                [theme.breakpoints.down("sm")]:
                                                    {
                                                        fontSize: "0.9rem",
                                                    },
                                            }}
                                        >
                                            {checkLang(
                                                locale,
                                                "As one of the leading consultants in both domestic and foreign investment in Indonesia, we have extensive experience in handling taxation for both Foreign Investment Companies (PMA) and Domestic Investment Companies (PMDN).",
                                                "Salah satu konsultan terkemuka di bidang investasi asing maupun dalam negeri di Indonesia. Kami telah berpengalaman dalam menangani perpajakan perusahaan Penanaman Modal Asing (PMA)  maupun Penanaman Modal Dalam Negeri (PMDN).",
                                                ""
                                            )}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItem: "start",
                                        justifyContent: "center",
                                        gap: 4,
                                        mt: 2,
                                    }}
                                >
                                    <Box>
                                        <Typography
                                            sx={{
                                                fontSize: "2.4rem",
                                                letterSpacing: "0.009em",
                                                lineHeight: "1.01561707em",
                                                color: theme.palette.custom
                                                    .darkBlue,
                                                fontWeight: "600",
                                                mb: 2,
                                                [theme.breakpoints.down("sm")]:
                                                    {
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
                                                color: theme.palette.custom
                                                    .darkBlue,
                                                fontWeight: "600",
                                                mb: 2,
                                                [theme.breakpoints.down("sm")]:
                                                    {
                                                        fontSize: "1.25rem",
                                                    },
                                            }}
                                        >
                                            {checkLang(
                                                locale,
                                                "Client-Centric Approach",
                                                "Pendekatan Kebutuhan Client",
                                                ""
                                            )}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "1rem",
                                                letterSpacing: "0.009em",
                                                lineHeight: "1.5em",
                                                color: theme.palette.custom
                                                    .black,
                                                fontWeight: "500",
                                                mb: 2,
                                                [theme.breakpoints.down("sm")]:
                                                    {
                                                        fontSize: "0.9rem",
                                                    },
                                            }}
                                        >
                                            {checkLang(
                                                locale,
                                                "We believe that open communication and prompt responses are the cornerstones of successful collaboration. At every stage, we are committed to providing full support, with a strong dedication to maintaining privacy and confidentiality as our core values.",
                                                "Kami percaya bahwa komunikasi yang terbuka dan tanggapan yang cepat adalah dasar dari kolaborasi yang sukses. Di setiap tahap, kami siap mendukung sepenuhnya, dengan komitmen kuat untuk menjaga privasi dan kerahasiaan sebagai bagian tak terpisahkan dari nilai yang kami junjung.",
                                                ""
                                            )}
                                        </Typography>
                                    </Box>
                                </Box>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex align-items-center justify-content-center mt-4">
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
                                    fontSize: "1.3rem",
                                    textTransform: "none",
                                    [theme.breakpoints.down("sm")]: {
                                        padding: "7px",
                                        fontSize: "1.25rem",
                                        fontWeight: "500",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Consult Now",
                                    "Konsultasi Sekarang",
                                    ""
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </Box>
            {/* end of ideatax quality */}
            {/* start of tax report service details */}
            <Box
                mt={8}
                sx={{
                    background: "linear-gradient(180deg, #267ddf, #70b6f4)",
                }}
            >
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12 col-md-4 p-3">
                            <ServiceDetailBox
                                locale={locale}
                                headingEng="Corporate Annual Income Tax Return Filing Service"
                                headingId="Layanan Pelaporan SPT Tahunan PPh Badan"
                                headingJp=""
                                tagLineEng="Hassle-Free "
                                tagLineId="Tanpa Ribet"
                                tagLineJp=""
                            >
                                <CheckIconContent
                                    eng="Tax Analysis and Calculation"
                                    id="Analisa dan Perhitungan Pajak"
                                    jp=""
                                />
                                <CheckIconContent
                                    eng="Account Review and Tax Return Preparation"
                                    id="Peninjauan akun dan Penyiapan SPT"
                                    jp=""
                                />
                                <CheckIconContent
                                    eng="Annual Tax Return Filing"
                                    id="Pelaporan SPT Tahunan"
                                    jp=""
                                />
                            </ServiceDetailBox>
                        </div>
                        <div className="col-12 col-md-4 p-3">
                            <ServiceDetailBox
                                locale={locale}
                                headingEng="for Individual Annual Tax Return Filing Service"
                                headingId="Layanan Pelaporan SPT Tahunan Orang Pribadi"
                                headingJp=""
                                tagLineEng="Comprehensive Assistance "
                                tagLineId="Dibantu Sampai Beres"
                                tagLineJp=""
                            >
                                <CheckIconContent
                                    eng="Tax Analysis and Calculation"
                                    id="Analisa dan Perhitungan Pajak"
                                    jp=""
                                />
                                <CheckIconContent
                                    eng="Account Review and Tax Return Preparation"
                                    id="Peninjauan akun dan Penyiapan SPT"
                                    jp=""
                                />
                                <CheckIconContent
                                    eng="Annual Tax Return Filing"
                                    id="Pelaporan SPT Tahunan"
                                    jp=""
                                />
                            </ServiceDetailBox>
                        </div>
                        <div className="col-12 col-md-4 p-3">
                            <ServiceDetailBox
                                locale={locale}
                                headingEng="Tax Return Correction Service"
                                headingId="Layanan Pembetulan SPT  dikerjakan oleh "
                                headingJp=""
                                tagLineId="Para Ahli"
                                tagLineEng="Expert-Led "
                                tagLineJp=""
                            >
                                <CheckIconContent
                                    eng="Error Identification and Analysis"
                                    id="Identifikasi dan Analisis Kesalahan"
                                    jp=""
                                />
                                <CheckIconContent
                                    eng="Amended Tax Return Preparation"
                                    id="Penyusunan SPT Pembetulan"
                                    jp=""
                                />
                                <CheckIconContent
                                    eng="Amended Tax Return Filing and Submission"
                                    id="Pengajuan dan Pelaporan SPT Pembetulan"
                                    jp=""
                                />
                            </ServiceDetailBox>
                        </div>
                    </div>
                </div>
            </Box>
            {/* end of tax report service details */}
            <Box mt={8}>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-12 col-md-8 text-center">
                            <Typography
                                as="h2"
                                sx={{
                                    fontSize: "2rem",
                                    letterSpacing: "0.009em",
                                    color: theme.palette.custom.darkBlue,
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
                                    Ideatax
                                </Typography>
                                {checkLang(
                                    locale,
                                    " Has Been Trusted for Tax Solutions and Assistance ",
                                    " Telah Dipercaya Menyelesaikan dan Membantu Permasalahan Pajak",
                                    ""
                                )}
                            </Typography>
                        </div>
                    </div>
                    <div className="row mt-5 d-flex align-items-center justify-content-center">
                        {stats.map((stat) => (
                            <div
                                key={stat.id}
                                className="col-12 col-md-3 d-flex flex-column gap-2 align-items-center justify-content-center"
                            >
                                <CounterLg target={stat.value} />
                                <Typography
                                    sx={{
                                        color: theme.palette.custom.orange,
                                        fontSize: "1.25rem",
                                        lineHeight: "1.390625em",
                                        textAlign: "center",
                                        fontWeight: "600",
                                        textTransform: "capitalize",
                                    }}
                                    className="stat_head m-0"
                                >
                                    {checkLang(
                                        locale,
                                        stat.head_eng,
                                        stat.head,
                                        stat.head_jpn
                                    )}
                                </Typography>
                            </div>
                        ))}
                    </div>
                    <div className="row d-flex align-items-center justify-content-center">
                        <Box mt={7} className="col-12 text-center">
                            <Typography
                                as="h2"
                                sx={{
                                    fontSize: "2rem",
                                    letterSpacing: "0.009em",
                                    color: theme.palette.custom.darkBlue,
                                    fontWeight: "700",
                                    mb: 2,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "1.25rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "From Various Industries",
                                    "Dari Berbagai Industri",
                                    ""
                                )}
                            </Typography>
                        </Box>
                    </div>
                    <div className="row px-3">
                        <Box className="col-12">
                            <Box className="row py-3 mt-3">
                                <div className="col-12 d-flex justify-content-center align-items-center text-center">
                                    <Typography
                                        sx={{
                                            borderRight: `2px solid ${theme.palette.custom.orange}`,
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            color: theme.palette.custom.black,
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Mining and Quarrying",
                                            "Pertambangan dan Penggalian",
                                            ""
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            borderRight: `2px solid ${theme.palette.custom.orange}`,
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            color: theme.palette.custom.black,
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Manufacturing",
                                            "Manufaktur",
                                            ""
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            borderRight: `2px solid ${theme.palette.custom.orange}`,
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            color: theme.palette.custom.black,
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Business Activities",
                                            "Kegiatan Bisnis",
                                            ""
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            color: theme.palette.custom.black,
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Agricultural,",
                                            "Konstruksi",
                                            "",
                                            ""
                                        )}
                                    </Typography>
                                </div>
                                <div className="col-12 mt-4 d-flex justify-content-center align-items-center text-center">
                                    <Typography
                                        sx={{
                                            borderRight: `2px solid ${theme.palette.custom.orange}`,
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            color: theme.palette.custom.black,
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Forestry, and Fishery Constructions",
                                            "Pertanian, Kehutanan, dan Perikanan",
                                            "",
                                            ""
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            borderRight: `2px solid ${theme.palette.custom.orange}`,
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            color: theme.palette.custom.black,
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Electricity and Gas",
                                            "Listrik dan Gas",
                                            ""
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            borderRight: `2px solid ${theme.palette.custom.orange}`,
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            color: theme.palette.custom.black,
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Legal",
                                            "Hukum",
                                            "",
                                            ""
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            color: theme.palette.custom.black,
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Transport and Warehousing",
                                            "Transportasi dan Pergudangan",
                                            "",
                                            ""
                                        )}
                                    </Typography>
                                </div>
                                <div className="col-12 mt-4 d-flex justify-content-center align-items-center text-center">
                                    <Typography
                                        sx={{
                                            borderRight: `2px solid ${theme.palette.custom.orange}`,
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            color: theme.palette.custom.black,
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Accommodation and Food and Beverage Services",
                                            "Akomodasi dan Penyediaan Makanan dan Minuman",
                                            "",
                                            ""
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            color: theme.palette.custom.black,
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Financial and Insurance Activities",
                                            "Kegiatan Keuangan dan Asuransi",
                                            ""
                                        )}
                                    </Typography>
                                </div>
                                <div className="col-12 mt-4 d-flex justify-content-center align-items-center text-center">
                                    <Typography
                                        sx={{
                                            borderRight: `2px solid ${theme.palette.custom.orange}`,
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            color: theme.palette.custom.black,
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Information and Communication",
                                            "Informasi dan Komunikasi",
                                            ""
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            borderRight: `2px solid ${theme.palette.custom.orange}`,
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            color: theme.palette.custom.black,
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Private",
                                            "Pribadi",
                                            ""
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            color: theme.palette.custom.black,
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Other Services",
                                            "Kegiatan Jasa Lainnya",
                                            ""
                                        )}
                                    </Typography>
                                </div>
                                <div className="col-12 mt-4 d-flex justify-content-center align-items-center text-center">
                                    <Typography
                                        sx={{
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            color: theme.palette.custom.black,
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Wholesale and Retail Trade, Vehicle and Motorcycle Repair",
                                            "Perdagangan Besar dan Eceran, Reparasi Mobil dan Sepeda Motor",
                                            ""
                                        )}
                                    </Typography>
                                </div>
                            </Box>
                        </Box>
                    </div>
                </div>
            </Box>
            <AwardImage />
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
                        <div className="col-12 col-md-6">
                            <Typography
                                className="text-center text-md-start"
                                sx={{
                                    fontSize: "3rem",
                                    letterSpacing: "0.009em",
                                    color: theme.palette.custom.orange,
                                    fontFamily: "OpenSauceBold",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "1.25rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Get a Free Consultation ",
                                    "Konsultasi Gratis ",
                                    "",
                                    ""
                                )}
                            </Typography>
                            <Typography
                                className="text-center text-md-start"
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
                                {checkLang(
                                    locale,
                                    "and Focus on Growing Your Business!",
                                    "Agar Anda Bisa Fokus ke Bisnis!",
                                    "",
                                    ""
                                )}
                            </Typography>
                        </div>
                        <div className="col-12 col-md-6 py-md-4 d-flex align-items-center justify-content-center">
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
                                    fontSize: "1.3rem",
                                    textTransform: "none",
                                    [theme.breakpoints.down("sm")]: {
                                        padding: "7px",
                                        fontSize: "1.25rem",
                                        fontWeight: "500",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Consult Now",
                                    "Konsultasi Sekarang",
                                    ""
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </Box>
        </Guest>
    );
}

export default TaxReport;
