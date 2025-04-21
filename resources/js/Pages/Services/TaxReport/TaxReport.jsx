import React from "react";
import {
    Box,
    Typography,
    useTheme,
    Button,
    useMediaQuery,
} from "@mui/material";
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
import AwardDesktop from "@/Components/AwardDesktop";
import AwardIconMobile from "@/Components/AwardIconMobile";

function TaxReport() {
    const { t } = useTranslation();
    const theme = useTheme();
    const { locale, stats } = usePage().props;
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
    return (
        <Guest
            className="services"
            en={route("tax-report")}
            id={route("tax-report.id")}
            jp={route("tax-report.jp")}
            ch={route("tax-report.ch")}
            description={checkLang(
                locale,
                "Filing an annual tax return is a legal obligation for corporations and individuals to report income, expenses, and tax liabilities for a fiscal year. Accurate and timely filing ensures compliance with tax regulations and helps prevent penalties or audits. Our team is here to assist you at every stage of the process, from document preparation and tax calculations to the completion and submission of your tax return.",
                "Pelaporan SPT Tahunan merupakan kewajiban bagi wajib pajak, baik badan maupun pribadi, untuk melaporkan penghasilan, pengeluaran, serta kewajiban pajaknya dalam satu tahun pajak. Dengan pelaporan yang akurat dan tepat waktu, wajib pajak dapat memastikan kepatuhan terhadap peraturan perpajakan serta menghindari risiko denda atau pemeriksaan pajak. Kami siap membantu Anda dalam setiap tahap pelaporan, mulai dari persiapan dokumen, perhitungan pajak, hingga pengisian dan pengiriman SPT.",
                "年間納税申告 SPT は、法人・個人を問わず納税者が1年間の所得、支出、および税務義務を報告するための義務です。正確かつ期限内に申告することで、納税者は税法の遵守を確実にし、罰則や税務調査のリスクを回避できます。当社は、書類準備、税額計算、申告書の記入・提出まで、あらゆる申告プロセスをサポートいたします。",
                "年度税务申报是企业和个人依法履行的义务，用于报告一个财政年度的收入、支出和税务负债。准确且按时申报有助于确保符合税法规定，并避免罚款或审计。我们的团队将在整个过程中为您提供帮助，包括文件准备、税款计算，以及税务申报表的完成与提交。"
            )}
            seo_title={checkLang(
                locale,
                "Annual Tax Return Reporting Service for Corporations and Individuals | Ideatax",
                "Layanan Pelaporan SPT Tahunan Badan dan Pribadi | Ideatax",
                "法人および個人向け年間納税申告 SPT サービス | Ideatax",
                "年度企业和个人税务申报服务 | Ideatax"
            )}
            href={checkLang(
                locale,
                route("tax-report"),
                route("tax-report.id"),
                route("tax-report.jp"),
                route("tax-report.ch")
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
                            "",
                            "税务报告"
                        )}
                        <br />
                        {checkLang(
                            locale,
                            "Annual Tax Return Filing Efficient, Accurate, and Hassle-Free",
                            "SPT Tahunan Badan/Orang Pribadi Rapih, Cepat dan Tepat",
                            "",
                            "年度企业/个人 SPT 整齐、快速、准确"
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
                            "",
                            "SPT 报告常常令人头痛。计算复杂，文书工作很多，万一迟到怎么办？罚款等待！不用担心，我们已准备好帮助确保您的税务报告准确、及时且无风险。"
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
                            "",
                            "安排咨询"
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
                    "",
                    "您是否遇到过这些问题？"
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
                                        "",
                                        "由于SPT与财务报告不兼容而收到SP2DK"
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
                                        "",
                                        "进入或使用税务系统的困难"
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
                                        "",
                                        "对最新税收法规缺乏了解"
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
                                        "",
                                        "没有时间和人力资源来处理税务事项"
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
                                        "",
                                        "为什么"
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
                                        "",
                                        "是解决税务问题的最佳选择？"
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
                                                "",
                                                "20多年处理税务合规的经验"
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
                                                "",
                                                "Ideatax合伙人在税务领域拥有20多年的经验。我们的合作伙伴拥有与四大税务顾问和税务机关合作的经验, 可为您提供全面的解决方案。"
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
                                                "",
                                                "外资以及内资投资者的专家"
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
                                                "",
                                                "作为印度尼西亚国内外投资领域的领先顾问之一, 我们在处理外国投资公司 和国内投资公司 的税务事务方面拥有丰富的经验。"
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
                                                "",
                                                "您的需求方案"
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
                                                "",
                                                "我们相信开放的沟通和快速的响应是成功合作的关键。我们致力于全力支持和维护隐私和保密作为重要的价值观"
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
                                    "",
                                    "安排咨询"
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
                                headingCh="的年度企业所得税申报表服务"
                                tagLineEng="Hassle-Free "
                                tagLineId="Tanpa Ribet"
                                tagLineJp=""
                                tagLineCh="无麻烦"
                            >
                                <CheckIconContent
                                    eng="Tax Analysis and Calculation"
                                    id="Analisa dan Perhitungan Pajak"
                                    jp=""
                                    ch="税收分析与计算"
                                />
                                <CheckIconContent
                                    eng="Account Review and Tax Return Preparation"
                                    id="Peninjauan akun dan Penyiapan SPT"
                                    jp=""
                                    ch="账户审查和SPT准备"
                                />
                                <CheckIconContent
                                    eng="Annual Tax Return Filing"
                                    id="Pelaporan SPT Tahunan"
                                    jp=""
                                    ch="年度SPT报告"
                                />
                            </ServiceDetailBox>
                        </div>
                        <div className="col-12 col-md-4 p-3">
                            <ServiceDetailBox
                                locale={locale}
                                headingEng="for Individual Annual Tax Return Filing Service"
                                headingId="Layanan Pelaporan SPT Tahunan Orang Pribadi"
                                headingJp=""
                                headingCh="个人年度 SPT 报告服务"
                                tagLineEng="Comprehensive Assistance "
                                tagLineId="Dibantu Sampai Beres"
                                tagLineJp=""
                                tagLineCh="帮助完成"
                            >
                                <CheckIconContent
                                    eng="Tax Analysis and Calculation"
                                    id="Analisa dan Perhitungan Pajak"
                                    jp=""
                                    ch="税收分析与计算"
                                />
                                <CheckIconContent
                                    eng="Account Review and Tax Return Preparation"
                                    id="Peninjauan akun dan Penyiapan SPT"
                                    jp=""
                                    ch="账户审查和SPT准备"
                                />
                                <CheckIconContent
                                    eng="Annual Tax Return Filing"
                                    id="Pelaporan SPT Tahunan"
                                    jp=""
                                    ch="年度SPT报告"
                                />
                            </ServiceDetailBox>
                        </div>
                        <div className="col-12 col-md-4 p-3">
                            <ServiceDetailBox
                                locale={locale}
                                headingEng="Tax Return Correction Service"
                                headingId="Layanan Pembetulan SPT  dikerjakan oleh "
                                headingJp=""
                                headingCh="提供 SPT 矫正服务。"
                                tagLineId="Para Ahli"
                                tagLineEng="Expert-Led "
                                tagLineJp=""
                                tagLineCh="专家"
                            >
                                <CheckIconContent
                                    eng="Error Identification and Analysis"
                                    id="Identifikasi dan Analisis Kesalahan"
                                    jp=""
                                    ch="错误识别与分析"
                                />
                                <CheckIconContent
                                    eng="Amended Tax Return Preparation"
                                    id="Penyusunan SPT Pembetulan"
                                    jp=""
                                    ch="校正SPT的准备"
                                />
                                <CheckIconContent
                                    eng="Amended Tax Return Filing and Submission"
                                    id="Pengajuan dan Pelaporan SPT Pembetulan"
                                    jp=""
                                    ch="更正的SPT的提交和报告"
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
                                    "",
                                    "已获得可以解决和帮助解决税务问题的信赖"
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
                                    "",
                                    "从各种行业"
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
                                            "",
                                            "采矿业"
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
                                            "",
                                            "制造业"
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
                                            "",
                                            "商业活动"
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
                                            "建设"
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
                                            "农业, 林业和渔业"
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
                                            "",
                                            "电力和燃气"
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
                                            "法律"
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
                                            "运输和仓储"
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
                                            "住宿和餐饮提供"
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
                                            "",
                                            "金融和保险活动"
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
                                            "",
                                            "信息和通信"
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
                                            "",
                                            "个人"
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
                                            "",
                                            "其他服务活动"
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
                                            "贸易和零售, 汽车和摩托车维修"
                                        )}
                                    </Typography>
                                </div>
                            </Box>
                        </Box>
                    </div>
                </div>
            </Box>
            <div className="container">
                <div className="row mt-5">
                    {isMobile ? <AwardIconMobile /> : <AwardDesktop />}
                </div>
            </div>
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
                                    "免费咨询，"
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
                                    "让您专注业务！"
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
                                    "",
                                    "立即咨询"
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
