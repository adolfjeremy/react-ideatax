import React from "react";
import { usePage } from "@inertiajs/react";
import {
    Box,
    useTheme,
    Typography,
    Button,
    useMediaQuery,
} from "@mui/material";
import Guest from "@/Layout/Guest";
import checkLang from "@/utils/checkLang";
import CounterLg from "@/Components/CounterLg";
import ProblemsQuestioner from "@/Components/ProblemsQuestioner";

import hero from "./hero.png";
import quest1 from "../TaxReport/quest1.png";
import quest2 from "../TaxReport/quest2.png";
import quest3 from "../TaxReport/quest3.png";
import tableId from "./table_id.png";
import tableEn from "./table_en.png";
import tableCh from "./table_ch.png";
import ken from "./ken.png";
import industryBg from "./industri_bg.png";

import quest4 from "./quest4.png";
import Steps from "@/Components/Steps";
import RoleItem from "@/Components/RoleItem";
import AwardDesktop from "@/Components/AwardDesktop";
import AwardIconMobile from "@/Components/AwardIconMobile";

function TaxRefund() {
    const theme = useTheme();
    const { locale, stats } = usePage().props;
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
    return (
        <Guest
            className="services"
            en={route("tax-refund")}
            id={route("tax-refund.id")}
            jp={route("tax-refund.jp")}
            ch={route("tax-refund.ch")}
            description={checkLang(
                locale,
                "Tax refund happens when there is a remaining tax in a tax return year that should be returned to the Taxpayer. Ideatax is ready to to help you in submitting and processing refund of tax overpayment. Our team has been routinely assisting the clients in mitigating the risks which could occur during the refund process. Our service includes: planning the submission, preparing the evidence, and assisting the audit process.",
                "Pengembalian pajak terjadi ketika ada sisa pajak pada tahun pengembalian pajak yang harus dikembalikan kepada Wajib Pajak. Ideatax siap membantu Anda dalam mengajukan dan memproses pengembalian kelebihan pembayaran pajak. Tim kami telah rutin membantu klien dalam meminimalkan risiko yang dapat terjadi selama proses pengembalian. Layanan kami meliputi: perencanaan penyerahan, penyiapan bukti, dan membantu proses audit.",
                "税金の還付は、納税者に返還されるべき税金が確定申告年度に残っている場合に行われます。Ideataxは、過払い税金の還付申請と手続きをお手伝いいたします。私たちのチームは、還付手続き中に発生する可能性のあるリスクを軽減するために、日常的にお客様を支援してきました。私たちのサービスには、提出の計画、証拠の準備、監査プロセスの支援が含まれます。",
                "税款退还发生在纳税年度内存在应退还给纳税人的剩余税款时。Ideatax 随时准备帮助您提交和处理多缴税款的退还。我们的团队一直在协助客户降低退税过程中可能出现的风险。我们的服务包括：规划申请流程、准备相关证据，并协助审计过程。"
            )}
            seo_title={checkLang(
                locale,
                "Tax Refund Assistance Service Best and Trusted Tax Consultant in Indonesia | Ideatax",
                "Layanan Bantuan Pengembalian Pajak Konsultan Pajak Terbaik dan Terpercaya di Indonesia | Ideatax",
                "税金の還付 サポート | Ideatax",
                "税款退还协助服务 | 印度尼西亚最佳且值得信赖的税务顾问 | Ideatax"
            )}
            href={checkLang(
                locale,
                route("tax-refund"),
                route("tax-refund.id"),
                route("tax-refund.jp"),
                route("tax-refund.ch")
            )}
        >
            <Box
                sx={{
                    [theme.breakpoints.down("md")]: {
                        paddingTop: "100px",
                    },
                }}
                className="position-relative"
            >
                <img
                    src={hero}
                    alt="Pemeriksaan Pajak Lancar, Perusahaan Aman"
                    className="w-100"
                />
                <Box
                    className="container"
                    sx={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                    }}
                >
                    <div className="row w-100">
                        <Box
                            sx={{
                                [theme.breakpoints.down("md")]: {
                                    paddingTop: "100px",
                                },
                            }}
                            className="col-12 col-md-7 text-start d-flex flex-column align-items-start justify-content-center gap-2"
                        >
                            <Typography
                                sx={{
                                    color: theme.palette.custom.lightBlue,
                                    fontSize: "1.4459rem",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.7rem",
                                    },
                                    margin: 0,
                                    padding: 0,
                                    lineHeight: "1.42498753em",
                                    letterSpacing: "0.009em",
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Solve Your Tax Problems Wisely",
                                    "Selesaikan Masalah Pajak dengan Bijak",
                                    "",
                                    "明智地解决税务问题"
                                )}
                            </Typography>
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
                                    "Over 20 Years of Tax Refund Handling Experience",
                                    "Lebih dari 20 Tahun Pengalaman dalam Menangani Restitusi Pajak",
                                    "",
                                    "20多年办理退税经验"
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
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Maximize your company's tax refund with Ideatax, from document preparation to a seamless refund process.",
                                    "Maksimalkan restitusi pajak perusahaan Anda dengan bantuan Ideatax, mulai dari persiapan dokumen hingga proses pengembalian yang lancar.",
                                    "",
                                    "从文件准备到顺利的退款流程，在 Ideatax 的帮助下，最大限度地提高您公司的退税率。"
                                )}
                            </Typography>
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
                                        fontSize: "0.8rem",
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
                        </Box>
                    </div>
                </Box>
            </Box>
            <ProblemsQuestioner
                question={checkLang(
                    locale,
                    "If you are facing any of these situations, schedule a consultation now to prevent future problems:",
                    "Jika Anda menghadapi salah satu dari situasi ini, jadwalkan konsultasi sekarang untuk mencegah masalah di masa depan:",
                    "",
                    "如果您遇到以下任何情况，请立即安排咨询以防止将来出现问题："
                )}
            />
            <Box>
                <Box className="container" mt={5}>
                    <div className="row">
                        <Box className="col-12 col-md-6 col-xl-3 mb-3 mb-md-0">
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
                                        fontSize: "1.4rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.3em",
                                        color: theme.palette.custom.white,
                                        textAlign: "center",
                                        fontWeight: "500",
                                        m: 0,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "1.2rem",
                                        },
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Experiencing Tax Refund Delays?",
                                        "Mengalami Keterlambatan dalam Proses Pengembalian atau Restitusi Pajak?",
                                        "",
                                        "纳税申报或归还流程遇到延误？"
                                    )}
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="col-12 col-md-6 col-xl-3 mb-3 mb-md-0">
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
                                        fontSize: "1.4rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.3em",
                                        color: theme.palette.custom.white,
                                        textAlign: "center",
                                        fontWeight: "500",
                                        mt: 20,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "1.2rem",
                                        },
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Unsure about your tax refund application status and how to proceed?",
                                        "Tidak yakin dengan status permohonan restitusi pajak Anda dan bagaimana menindaklanjutinya?",
                                        "",
                                        "不确定您的退税申请的状态以及如何进行？"
                                    )}
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="col-12 col-md-6 col-xl-3 mb-3 mb-md-0">
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
                                        fontSize: "1.4rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.3em",
                                        color: theme.palette.custom.white,
                                        textAlign: "center",
                                        fontWeight: "500",
                                        mt: 20,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "1.2rem",
                                        },
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Not prepared for a tax audit related to your tax refund claim and need expert guidance?",
                                        "Tidak siap menghadapi pemeriksaan pajak terkait klaim restitusi Anda dan membutuhkan panduan ahli?",
                                        "",
                                        "没准备好对您的退款申请进行税务审计并需要专家指导？"
                                    )}
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="col-12 col-md-6 col-xl-3 mb-3 mb-md-0">
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
                                        fontSize: "1.4rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.3em",
                                        color: theme.palette.custom.white,
                                        textAlign: "center",
                                        fontWeight: "500",
                                        mt: 20,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "1.2rem",
                                        },
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Did you file for a tax refund but didn't get the expected results?",
                                        "Mengajukan restitusi pajak, tetapi hasilnya tidak sesuai harapan?",
                                        "",
                                        "提交退税，但结果不符合预期？"
                                    )}
                                </Typography>
                            </Box>
                        </Box>
                    </div>
                </Box>
            </Box>
            <Box>
                <div className="container">
                    <Box className="row" mt={8}>
                        <div className="col-12 text-start">
                            {checkLang(
                                locale,
                                <Typography
                                    sx={{
                                        fontSize: "2.1rem",
                                        letterSpacing: "0.009em",
                                        color: theme.palette.custom.darkBlue,
                                        fontWeight: "600",
                                        mb: 2,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "1.5rem",
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
                                                fontSize: "1.5rem",
                                            },
                                        }}
                                    >
                                        Ideatax
                                    </Typography>{" "}
                                    Assists Your Tax Refund Process
                                </Typography>,
                                <Typography
                                    sx={{
                                        fontSize: "2.1rem",
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
                                    Membantu Pengembalian Pajak Anda
                                </Typography>,
                                "",
                                <Typography
                                    sx={{
                                        fontSize: "2.1rem",
                                        letterSpacing: "0.009em",
                                        color: theme.palette.custom.darkBlue,
                                        fontWeight: "600",
                                        mb: 2,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "1.25rem",
                                        },
                                    }}
                                >
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
                                    在帮助您退税方面的作用
                                </Typography>
                            )}
                        </div>
                    </Box>
                    <Steps />
                    <div className="row mt-4">
                        <RoleItem
                            heading={checkLang(
                                locale,
                                "Document Review & Submission",
                                "Tinjauan & Pengajuan Dokumen",
                                "",
                                "文件审查和提交"
                            )}
                            subtitle={checkLang(
                                locale,
                                "Tax documents are reviewed to ensure accuracy and eligibility for a tax refund.",
                                "Dokumen pajak ditinjau untuk memastikan keakuratan dan kelayakan untuk restitusi.",
                                "",
                                "审查税务文件以确保准确性和归还资格"
                            )}
                        />
                        <RoleItem
                            heading={checkLang(
                                locale,
                                "Submission Documents Preparation",
                                "Persiapan Dokumen Pengajuan",
                                "",
                                "提交文件准备"
                            )}
                            subtitle={checkLang(
                                locale,
                                "Prepare the required documents for a tax refund submission",
                                "Menyusun dokumen yang diperlukan untuk mengajukan Pengembalian Pajak",
                                "",
                                "准备提交纳税申报表所需的文件"
                            )}
                        />
                        <RoleItem
                            heading={checkLang(
                                locale,
                                "Audit Assistance",
                                "Pendampingan Audit",
                                "",
                                "审查陪同"
                            )}
                            subtitle={checkLang(
                                locale,
                                "If audited, we provide guidance in preparing a response and attending a meeting with the tax office.",
                                "Jika diperiksa, panduan diberikan untuk menyiapkan tanggapan dan menghadiri pertemuan dengan kantor pajak.",
                                "",
                                "如果被检查，则会提供有关准备答复和参加税务局会议的指导。"
                            )}
                        />
                        <RoleItem
                            heading={checkLang(
                                locale,
                                "Tax Refund Completed",
                                "Restitusi Pajak Selesai",
                                "",
                                "退税完成"
                            )}
                            subtitle={checkLang(
                                locale,
                                "The tax refund process is completed seamlessly.",
                                "Proses pengembalian pajak selesai dengan lancar.",
                                "",
                                "退税流程顺利完成。"
                            )}
                        />
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 d-flex align-items-center justify-content-center">
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
            <Box mt={8}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-column">
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: "2.125rem",
                                    color: theme.palette.custom.darkBlue,
                                    mb: "20px",
                                }}
                                className="text-center text-lg"
                            >
                                {checkLang(
                                    locale,
                                    "Do You Know?",
                                    "Tahukah Kamu?",
                                    "",
                                    "您知道吗？"
                                )}
                            </Typography>
                            <Typography
                                sx={{ fontSize: "1.125rem" }}
                                className="text-center"
                            >
                                {checkLang(
                                    locale,
                                    "There are two types of tax refund in Indonesia: tax refund and preliminary tax refund. Each type follows a different process and set of requirements, impacting the tax refund timeline.",
                                    "Di Indonesia, terdapat dua jenis restitusi pajak: Restitusi Pajak dan Restitusi Pendahuluan. Masing-masing memiliki proses dan persyaratan yang berbeda, yang memengaruhi kecepatan pengembalian pajak.",
                                    "",
                                    "在印度尼西亚，退税有两种类型：退税和初步退税。每个都有不同的流程和要求，影响退税的速度。"
                                )}
                            </Typography>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center mt-5">
                        <div className="col-md-9 col-12">
                            {checkLang(
                                locale,
                                <img
                                    src={tableEn}
                                    alt="tax refund table"
                                    className="w-100"
                                />,
                                <img
                                    src={tableId}
                                    alt="table restitusi"
                                    className="w-100"
                                />,
                                "",
                                <img
                                    src={tableCh}
                                    alt="table restitusi"
                                    className="w-100"
                                />
                            )}
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <Typography
                                sx={{ fontSize: "1.125rem" }}
                                className="text-center"
                            >
                                {checkLang(
                                    locale,
                                    "Understanding these differences can help optimize your tax strategy and improve cash flow management",
                                    "Pahami perbedaan ini agar bisa mengoptimalkan strategi pajak dan meningkatkan pengelolaan arus kas",
                                    "",
                                    "了解这些差异以优化您的税务策略并改善现金流管理"
                                )}
                            </Typography>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 d-flex align-items-center justify-content-center">
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
            <Box mt={8}>
                <div className="container">
                    <div className="row">
                        <Box className="col-12 col-md-5 mt-4 mt-md-0 d-flex flex-column justify-content-center align-items-center p-0 p-lg-5 gap-5">
                            <Box
                                sx={{
                                    position: "relative",
                                }}
                            >
                                <img
                                    src={ken}
                                    alt="Ken Dwijugiasteadi"
                                    className="w-100"
                                />
                                <Box
                                    sx={{
                                        backgroundColor: "rgb(212, 240, 252)",
                                        padding: "7px 25px",
                                        position: "absolute",
                                        bottom: "20px",
                                        left: "20px",
                                        right: "20px",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "0.9rem",
                                            color: "rgb(25, 25, 25)",
                                            lineHeight: "26px",
                                            fontWeight: "700",
                                            textAlign: "center",
                                            borderBottom: "2px solid grey",
                                        }}
                                    >
                                        Ken Dwijugiasteadi
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "0.9rem",
                                            color: "rgb(25, 25, 25)",
                                            fontWeight: "500",
                                            textAlign: "center",
                                            mt: "5px",
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Director General of the Ministry of Finance of Indonesia (2015-2017).",
                                            "Dirjen Kemenkeu RI Tahun 2015-2017",
                                            "",
                                            "印度尼西亚财政部长 2015-2017"
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "0.9rem",
                                            color: "rgb(25, 25, 25)",
                                            fontWeight: "500",
                                            textAlign: "center",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Senior Advisor Ideatax",
                                            "Penasehat Senior Ideatax",
                                            "",
                                            "Ideatax高级顾问"
                                        )}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <div className="col-12 col-md-7 d-flex flex-column align-items-center justify-content-center mt-4 mt-lg-0">
                            <div className="text-lg-start text-center">
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
                                        "Menjadi Pilihan Terbaik Dalam Masalah Pajak?",
                                        "",
                                        "是解决税务问题的最佳选择？"
                                    )}
                                </Typography>
                            </div>
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
                                            color: theme.palette.custom
                                                .darkBlue,
                                            fontWeight: "600",
                                            mb: 2,
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: "1.25em",
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "20+ Years of Tax Refund Handling Experience",
                                            "Pengalaman 20+ Tahun Menangani Restitusi Pajak",
                                            "",
                                            "20+年处理退税的经验"
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
                                            "Ideatax partners bring over 20 years of experience in taxation. Our partners have worked with Big Four tax consultants and tax authorities, providing you with comprehensive solutions.",
                                            "Partner Ideatax berpengalaman lebih dari 20 tahun di bidang perpajakan. Partner Kami berpengalaman bekerja di konsultan pajak Big Four dan otoritas pajak sehingga memberikan solusi yang komprehensif kepada Anda.",
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
                                            color: theme.palette.custom
                                                .darkBlue,
                                            fontWeight: "600",
                                            mb: 2,
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: "1.25rem",
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Specialists for Domestic and Foreign Investors",
                                            "Spesialis untuk Investor Dalam dan Luar Negeri",
                                            "",
                                            "外资以及内资投资者的专家"
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
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: "0.9rem",
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "We are a leading tax consultant for both foreign and domestic investors in Indonesia. We have extensive experience in handling taxation for foreign capital investment and domestic capital investment companies",
                                            "Salah satu konsultan terkemuka di bidang investasi asing maupun dalam negeri di Indonesia. Kami telah berpengalaman dalam menangani perpajakan perusahaan Penanaman Modal Asing (PMA)  maupun Penanaman Modal Dalam Negeri (PMDN)",
                                            "",
                                            "印度尼西亚国内外投资领域的领先顾问之一。我们拥有处理外商投资 (PMA) 和内资 (PMDN) 公司税务的经验。"
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
                                            color: theme.palette.custom
                                                .darkBlue,
                                            fontWeight: "600",
                                            mb: 2,
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: "1.25rem",
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Client-Centric Approach",
                                            "Pendekatan Kebutuhan Anda",
                                            "",
                                            "您的需求方案"
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
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: "0.9rem",
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "We believe open communication and swift responses are key to successful collaboration. We are committed to providing full support while maintaining privacy and confidentiality as our core values",
                                            "Kami percaya bahwa komunikasi terbuka dan respons cepat adalah kunci kolaborasi sukses. Kami berkomitmen untuk mendukung sepenuhnya dan menjaga privasi serta kerahasiaan sebagai nilai penting",
                                            "",
                                            "我们相信开放的沟通和快速的响应是成功合作的关键。我们致力于全力支持和维护隐私和保密作为重要的价值观"
                                        )}
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
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
                                    "立即咨询"
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </Box>
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
                                {checkLang(locale, "", "", "", "为什么 ")}
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
                                    " Has Been Trusted for Tax Solutions and Assistance.",
                                    " Telah Dipercaya Menyelesaikan dan Membantu Permasalahan Pajak",
                                    "",
                                    " 是解决税务问题的最佳选择？"
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
                        <Box
                            sx={{
                                backgroundImage: `url(${industryBg})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderRadius: "30px",
                            }}
                            className="col-12"
                        >
                            <Box className="row py-3 mt-3">
                                <div className="col-12 d-flex justify-content-center align-items-center text-center">
                                    <Typography
                                        sx={{
                                            borderRight: `2px solid ${theme.palette.custom.orange}`,
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            color: theme.palette.custom.white,
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
                                            color: theme.palette.custom.white,
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
                                            color: theme.palette.custom.white,
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
                                            color: theme.palette.custom.white,
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
                                            "农业建设"
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
                                            color: theme.palette.custom.white,
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
                                            "林业和渔业"
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            borderRight: `2px solid ${theme.palette.custom.orange}`,
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            color: theme.palette.custom.white,
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
                                            color: theme.palette.custom.white,
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
                                            color: theme.palette.custom.white,
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
                                            color: theme.palette.custom.white,
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
                                            color: theme.palette.custom.white,
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
                                            color: theme.palette.custom.white,
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
                                            color: theme.palette.custom.white,
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
                                            color: theme.palette.custom.white,
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
                                            color: theme.palette.custom.white,
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
                                            "",
                                            "贸易和零售 汽车和摩托车维修"
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
                    backgroundImage: `url(${industryBg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                <div className="container">
                    <div className="row py-4">
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

export default TaxRefund;
