import {
    Box,
    Typography,
    useTheme,
    Button,
    Link,
    useMediaQuery,
} from "@mui/material";
import { usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import Guest from "@/Layout/Guest";
import checkLang from "@/utils/checkLang";
import hero from "./hero.webp";
import audit1 from "@/assets/images/tax-audit/audit1.webp";
import audit2 from "@/assets/images/tax-audit/audit2.webp";
import audit3 from "@/assets/images/tax-audit/audit3.webp";
import audit4 from "@/assets/images/tax-audit/audit4.webp";
import ken from "./ken.webp";
import CounterLg from "@/Components/CounterLg";
import aw from "@/assets/images/award/aw.webp";
import aw1 from "@/assets/images/award/aw-2025-2.png";
import aw2 from "@/assets/images/award/aw-2025.png";
import aw3 from "@/assets/images/award/aw-3.webp";
import aw4 from "@/assets/images/award/aw-4.webp";
import aw5 from "@/assets/images/award/aw-5.webp";
import aw6 from "@/assets/images/award/aw-6.webp";
import aw7 from "@/assets/images/award/aw-7.webp";
import circle from "@/assets/images/circle.png";
import circleOrange from "@/assets/images/circle-orange.png";
import CustomBreadcrumb from "@/Components/CustomBreadcrumb";

function TaxAudit() {
    const { t } = useTranslation();
    const theme = useTheme();
    const { locale, stats } = usePage().props;
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
    return (
        <Guest
            className="services"
            en={route("tax-audit")}
            id={route("tax-audit.id")}
            jp={route("tax-audit.jp")}
            ch={route("tax-audit.ch")}
            description={checkLang(
                locale,
                "We understand how exhausting the tax audit system can be. There are also many things that could be unfamiliar to you during the process of tax audit. We have a team of professionals who are experienced in tax audit for years, and we would be glad to assist you in it. Our service comprises of assistance prior to the receiving of the notification letter about tax audit process, providing a helping hand during the meeting with tax officer, to preparing the required data in tax audit process as well as providing the feedback of the audit results.",
                "Kami memahami betapa melelahkannya sistem pemeriksaan pajak. Ada banyak hal yang mungkin tidak Anda kenali selama proses pemeriksaan pajak. Kami memiliki tim profesional yang berpengalaman dalam pemeriksaan pajak selama bertahun-tahun, dan kami akan senang membantu Anda. Layanan kami mencakup bantuan sebelum menerima surat pemberitahuan tentang proses pemeriksaan pajak, memberikan bantuan selama pertemuan dengan petugas pajak, hingga menyiapkan data yang diperlukan dalam proses pemeriksaan pajak serta memberikan umpan balik atas hasil pemeriksaan.",
                "私たちは、税務調査制度がいかに疲れるものであるかを理解しています。また、税務調査の過程では不慣れなことも多々あるかと思います。当事務所には、税務調査に長年携わってきた専門家チームがおり、喜んで税務調査のお手伝いをさせていただきます。私たちのサービスは、税務調査の通知書を受け取る前のサポートから、税務官との面談時のサポート、税務調査に必要な資料の作成、調査結果のフィードバックまで、多岐にわたります。",
                "我们理解税务稽查过程可能会让人感到非常疲惫。在稽查过程中，您也可能会遇到许多不熟悉的事项。我们的专业团队拥有多年税务稽查经验，很乐意为您提供协助。我们的服务包括：在收到税务稽查通知信之前的协助、陪同与税务官的会面、准备稽查过程中所需的资料，以及协助您对稽查结果做出回应。"
            )}
            seo_title={checkLang(
                locale,
                "Tax Audit Assistance Service Ideatax Tax Consultant",
                "Layanan Bantuan Pemeriksaan Audit Pajak Ideatax Konsultan Pajak",
                "税務調査支援サービス Ideatax Tax Consultant",
                "税务稽查协助服务 Ideatax 税务顾问"
            )}
            href={checkLang(
                locale,
                route("tax-audit"),
                route("tax-audit.id"),
                route("tax-audit.jp"),
                route("tax-audit.ch")
            )}
        >
            {isMobile && (
                <Box
                    sx={{
                        [theme.breakpoints.down("md")]: {
                            paddingTop: "100px",
                        },
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <CustomBreadcrumb separator=">">
                                <Link
                                    href={checkLang(
                                        locale,
                                        route("service"),
                                        route("service.id"),
                                        route("service.jp"),
                                        route("service.ch")
                                    )}
                                    sx={{
                                        fontSize: "0.6rem",
                                        textDecoration: "none",
                                        color: "#a19f9f",
                                    }}
                                >
                                    Services
                                </Link>
                                <Typography
                                    sx={{
                                        fontSize: "0.6rem",
                                        color: theme.palette.custom.darkBlue,
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Tax Audit Assistance Service Ideatax Tax Consultant",
                                        "Layanan Bantuan Pemeriksaan Audit Pajak Ideatax Konsultan Pajak",
                                        "税務調査支援サービス Ideatax Tax Consultant",
                                        "税务稽查协助服务 Ideatax 税务顾问"
                                    )}
                                </Typography>
                            </CustomBreadcrumb>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12">
                                <Typography
                                    sx={{
                                        color: theme.palette.custom.lightBlue,
                                        fontSize: "1.4459rem",
                                        [theme.breakpoints.down("md")]: {
                                            fontSize: "0.825rem",
                                        },
                                        margin: 0,
                                        padding: 0,
                                        lineHeight: "1.42498753em",
                                        letterSpacing: "0.009em",
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Solve Tax Issues Wisely",
                                        "Selesaikan Masalah Pajak Dengan Bijak",
                                        "税務問題を賢く解決",
                                        "明智的解决税务问题"
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
                                        [theme.breakpoints.down("md")]: {
                                            fontSize: "1.625rem",
                                        },
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "20+ Years of Experience in Tax Audits",
                                        "20+ Tahun Menangani Pemeriksaan Pajak",
                                        "20年以上の税務調査対応経験",
                                        "20+年处理税务审计的经验"
                                    )}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: theme.palette.custom.darkBlue,
                                        fontSize: "1.25rem",
                                        [theme.breakpoints.down("md")]: {
                                            fontSize: "0.825rem",
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
                                        "Avoid potential financial losses for your company with Ideatax's support, from document preparation to the audit process.",
                                        "Hindari  potensi kerugian keuangan perusahaan Anda dengan dampingan Ideatax dalam persiapan dokumen hingga proses pemeriksaan",
                                        "Ideataxのサポートを受け、書類準備から税務調査まで、貴社の財務損失のリスクを避けましょう。",
                                        "借助 Ideatax 从文件准备到检查过程的协助，避免您的公司潜在的财务损失"
                                    )}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Box>
            )}
            <Box className="position-relative mt-4 mt-md-0">
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
                        [theme.breakpoints.down("md")]: {
                            alignItems: "end",
                        },
                    }}
                >
                    <div className="row d-flex align-items-center justify-content-end">
                        <Box className="col-12 col-md-7 text-end d-flex flex-column align-items-center align-items-md-end justify-content-center gap-2">
                            {!isMobile && (
                                <>
                                    <Typography
                                        sx={{
                                            color: theme.palette.custom
                                                .lightBlue,
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
                                            "Solve Tax Issues Wisely",
                                            "Selesaikan Masalah Pajak Dengan Bijak",
                                            "税務問題を賢く解決",
                                            "明智的解决税务问题"
                                        )}
                                    </Typography>
                                    <Typography
                                        as="h1"
                                        sx={{
                                            fontSize: "3rem",
                                            letterSpacing: "0.009em",
                                            lineHeight: "1.5em",
                                            color: theme.palette.custom
                                                .darkBlue,
                                            fontWeight: "700",
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: "1.5rem",
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "20+ Years of Experience in Tax Audits",
                                            "20+ Tahun Menangani Pemeriksaan Pajak",
                                            "20年以上の税務調査対応経験",
                                            "20+年处理税务审计的经验"
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: theme.palette.custom
                                                .darkBlue,
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
                                            "Avoid potential financial losses for your company with Ideatax's support, from document preparation to the audit process.",
                                            "Hindari  potensi kerugian keuangan perusahaan Anda dengan dampingan Ideatax dalam persiapan dokumen hingga proses pemeriksaan",
                                            "Ideataxのサポートを受け、書類準備から税務調査まで、貴社の財務損失のリスクを避けましょう。",
                                            "借助 Ideatax 从文件准备到检查过程的协助，避免您的公司潜在的财务损失"
                                        )}
                                    </Typography>
                                </>
                            )}
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
                                    "今すぐ相談",
                                    "立即咨询"
                                )}
                            </Button>
                            {!isMobile && (
                                <Box className="d-flex align-items-center justify-content-end mt-2">
                                    <img src={aw} className="award_image-2" />
                                    <img src={aw1} className="award_image-2" />
                                    <img src={aw2} className="award_image-2" />
                                    <img src={aw3} className="award_image-2" />
                                    <img src={aw4} className="award_image-2" />
                                    <img src={aw5} className="award_image-2" />
                                    <img src={aw6} className="award_image-2" />
                                    <img src={aw7} className="award_image-2" />
                                </Box>
                            )}
                        </Box>
                    </div>
                </Box>
            </Box>
            {isMobile && (
                <Box>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mt-3">
                                <Box className="d-flex align-items-center justify-content-center mt-2">
                                    <img src={aw} className="award_image-2" />
                                    <img src={aw1} className="award_image-2" />
                                    <img src={aw2} className="award_image-2" />
                                    <img src={aw3} className="award_image-2" />
                                    <img src={aw4} className="award_image-2" />
                                    <img src={aw5} className="award_image-2" />
                                    <img src={aw6} className="award_image-2" />
                                    <img src={aw7} className="award_image-2" />
                                </Box>
                            </div>
                        </div>
                    </div>
                </Box>
            )}
            <Box mt={5}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
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
                                    "If you're facing any of these situations, schedule a consultation now to prevent future problems:",
                                    "Jika Anda Mengalami Hal Ini, Segera Jadwalkan Konsultasi Agar Terhindar Masalah di Kemudian Hari",
                                    "以下のような問題が発生した場合、後々のトラブルを避けるために、すぐに相談予約をしましょう。",
                                    "如果您遇到这种情况，请立即安排咨询，以避免将来出现问题"
                                )}
                            </Typography>
                        </div>
                    </div>
                </div>
            </Box>
            <Box className="container" mt={5}>
                <div className="row">
                    <Box className="col-12 col-md-4">
                        <Box
                            className="d-flex flex-column align-items-center justify-content-end p-4"
                            sx={{
                                backgroundImage: `url(${audit1})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                height: "100%",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "1.5rem",
                                    letterSpacing: "0.009em",
                                    lineHeight: "1.3em",
                                    color: theme.palette.custom.white,
                                    textAlign: "center",
                                    fontWeight: "500",
                                    mt: 20,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.9rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Receiving an SP2DK or Audit Notice from the tax office?",
                                    "Menerima SP2DK atau Surat Perintah Pemeriksaan dari Kantor Pajak.",
                                    "税務署からのSP2DK (税務調査通知）または調査命令書を受け取った。",
                                    "收到税务局发出的 SP2DK 或审计令函。"
                                )}
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="col-12 col-md-4 mt-3 mt-md-0">
                        <Box
                            className="d-flex flex-column align-items-center justify-content-end p-4"
                            sx={{
                                backgroundImage: `url(${audit2})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "1.5rem",
                                    letterSpacing: "0.009em",
                                    lineHeight: "1.3em",
                                    color: theme.palette.custom.white,
                                    textAlign: "center",
                                    fontWeight: "500",
                                    mt: 20,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.9rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Worrying about potential tax audit findings and unsure how to respond?",
                                    "Khawatir mendapatkan temuan audit pajak dan tidak tau cara untuk menanggapinya?",
                                    "税務監査の指摘が出るのではないかと心配しており、どのように対応すれば良いか分からないですか？",
                                    "担心收到税务审计结果而不知道如何应对？"
                                )}
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="col-12 col-md-4 mt-3 mt-md-0">
                        <Box
                            className="d-flex flex-column align-items-center justify-content-end p-4"
                            sx={{
                                backgroundImage: `url(${audit3})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "1.5rem",
                                    letterSpacing: "0.009em",
                                    lineHeight: "1.3em",
                                    color: theme.palette.custom.white,
                                    textAlign: "center",
                                    fontWeight: "500",
                                    mt: 20,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.9rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Unready to face a tax audit and unsure of what to do?",
                                    "Belum Siap Menghadapi Pemeriksaan Pajak dan Tidak Tahu Harus Berbuat Apa.",
                                    "税務調査に対する準備ができておらず、何をすべきか分からない。",
                                    "还没有准备好面对税务审计并且不知道该怎么做"
                                )}
                            </Typography>
                        </Box>
                    </Box>
                </div>
            </Box>
            <Box mt={8}>
                <div className="container">
                    <div className="row">
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
                                    </Typography>{" "}
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
                                    の税務パートナーとしての役割
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
                                    作为您税务合作伙伴的角色
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
                                            color: theme.palette.custom
                                                .darkBlue,
                                            fontSize: "1.25rem",
                                            letterSpacing: "0.009em",
                                            fontWeight: "600",
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Document Review",
                                            "Review Dokumen",
                                            "書類レビュー",
                                            "文件审查"
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
                                            "Review and analyze audit documents before submission to the tax examiner.",
                                            "Meninjau dan menganalisa dokumen pemeriksaan untuk diserahkan ke pemeriksa.",
                                            "税務調査に提出する書類を確認し、分析します。",
                                            "审查并分析提交给审查员的检查文件"
                                        )}
                                    </Typography>
                                </div>
                                <div className="col-12 col-lg-3">
                                    <Typography
                                        as="h3"
                                        sx={{
                                            color: theme.palette.custom
                                                .darkBlue,
                                            fontSize: "1.25rem",
                                            letterSpacing: "0.009em",
                                            fontWeight: "600",
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Preparation of Formal Responses",
                                            "Persiapan Tanggapan Formal",
                                            "正式な回答準備",
                                            "准备正式回应"
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
                                            "Membantu menyiapkan tanggapan formal dari temuan awal pajak hingga dikeluarkannya SPHP.",
                                            "税務調査の初期発見からSPHP発行までの正式な回答を準備します。",
                                            "帮助准备从最初税务调查结果到签发 SPHP 的正式答复。"
                                        )}
                                    </Typography>
                                </div>
                                <div className="col-12 col-lg-3">
                                    <Typography
                                        as="h3"
                                        sx={{
                                            color: theme.palette.custom
                                                .darkBlue,
                                            fontSize: "1.25rem",
                                            letterSpacing: "0.009em",
                                            fontWeight: "600",
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Audit Assistance",
                                            "Pendampingan Selama Pemeriksaan",
                                            "調査中のサポート",
                                            "陪同审查"
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
                                            "Accompany, attend, and/or represent you during meetings with the tax office.",
                                            "Mendampingi, menghadiri, dan/atau mewakilkan pada setiap panggilan ke kantor pajak.",
                                            "税務署への呼び出しに同席、代理、または出席します。",
                                            "陪同、出席和/或代表每次致电税务局。"
                                        )}
                                    </Typography>
                                </div>
                                <div className="col-12 col-lg-3">
                                    <Typography
                                        as="h3"
                                        sx={{
                                            color: theme.palette.custom
                                                .darkBlue,
                                            fontSize: "1.25rem",
                                            letterSpacing: "0.009em",
                                            fontWeight: "600",
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Stress-Free Tax Solutions",
                                            "Bebas Stress!",
                                            "ストレスフリー！",
                                            "无压力！"
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
                                            "Peace of mind from complex tax regulations so you can focus on your business without worrying about taxes.",
                                            "Tenang dari peraturan perpajakan yang kompleks sehingga Anda bisa fokus ke bisnis tanpa khawatir pajak",
                                            "複雑な税制から解放されて、税金の心配をせずにビジネスに集中できます。",
                                            "免于复杂税务规定的困扰，让您专注于业务，无需担心税务问题。"
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
                                                fontSize: "1.25rem",
                                                letterSpacing: "0.009em",
                                                fontWeight: "600",
                                            }}
                                        >
                                            {checkLang(
                                                locale,
                                                "Document Review",
                                                "Review Dokumen",
                                                "書類レビュー",
                                                "文件审查"
                                            )}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: theme.palette.custom
                                                    .black,
                                                fontSize: "1rem",
                                                letterSpacing: "0.009em",
                                                fontWeight: 500,
                                                mt: 1,
                                            }}
                                        >
                                            {checkLang(
                                                locale,
                                                "Review and analyze audit documents before submission to the tax examiner.",
                                                "Meninjau dan menganalisa dokumen pemeriksaan untuk diserahkan ke pemeriksa.",
                                                "税務調査に提出する書類を確認し、分析します。",
                                                "审查并分析提交给审查员的检查文件"
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
                                            color: theme.palette.custom
                                                .darkBlue,
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
                                                fontSize: "1.25rem",
                                                letterSpacing: "0.009em",
                                                fontWeight: "600",
                                            }}
                                        >
                                            {checkLang(
                                                locale,
                                                "Preparation of Formal Responses",
                                                "Persiapan Tanggapan Formal",
                                                "正式な回答準備",
                                                "准备正式回应"
                                            )}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: theme.palette.custom
                                                    .black,
                                                fontSize: "1rem",
                                                letterSpacing: "0.009em",
                                                fontWeight: 500,
                                                mt: 1,
                                            }}
                                        >
                                            {checkLang(
                                                locale,
                                                "Assist in preparing formal responses from initial findings to the issuance of the SPHP.",
                                                "Membantu menyiapkan tanggapan formal dari temuan awal pajak hingga dikeluarkannya SPHP.",
                                                "税務調査の初期発見からSPHP発行までの正式な回答を準備します。",
                                                "帮助准备从最初税务调查结果到签发 SPHP 的正式答复。"
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
                                            color: theme.palette.custom
                                                .darkBlue,
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
                                                fontSize: "1.25rem",
                                                letterSpacing: "0.009em",
                                                fontWeight: "600",
                                            }}
                                        >
                                            {checkLang(
                                                locale,
                                                "Audit Assistance",
                                                "Pendampingan Selama Pemeriksaan",
                                                "調査中のサポート",
                                                "陪同审查"
                                            )}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: theme.palette.custom
                                                    .black,
                                                fontSize: "1rem",
                                                letterSpacing: "0.009em",
                                                fontWeight: 500,
                                                mt: 1,
                                            }}
                                        >
                                            {checkLang(
                                                locale,
                                                "Accompany, attend, and/or represent you during meetings with the tax office.",
                                                "Mendampingi, menghadiri, dan/atau mewakilkan pada setiap panggilan ke kantor pajak.",
                                                "税務署への呼び出しに同席、代理、または出席します。",
                                                "陪同、出席和/或代表每次致电税务局。"
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
                                                fontSize: "1.25rem",
                                                letterSpacing: "0.009em",
                                                fontWeight: "600",
                                            }}
                                        >
                                            {checkLang(
                                                locale,
                                                "Stress-Free Tax Solutions",
                                                "Bebas Stress!",
                                                "ストレスフリー！",
                                                "无压力！"
                                            )}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: theme.palette.custom
                                                    .black,
                                                fontSize: "1rem",
                                                letterSpacing: "0.009em",
                                                fontWeight: 500,
                                                mt: 1,
                                            }}
                                        >
                                            {checkLang(
                                                locale,
                                                "Peace of mind from complex tax regulations so you can focus on your business without worrying about taxes.",
                                                "Tenang dari peraturan perpajakan yang kompleks sehingga Anda bisa fokus ke bisnis tanpa khawatir pajak",
                                                "複雑な税制から解放されて、税金の心配をせずにビジネスに集中できます。",
                                                "免于复杂税务规定的困扰，让您专注于业务，无需担心税务问题。"
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
                                    backgroundColor:
                                        theme.palette.custom.darkBlue,
                                    padding: 0,
                                    zIndex: 10,
                                }}
                            ></Box>
                        </div>
                    )}
                </div>
            </Box>
            <Box mt={8}>
                <div className="container">
                    <div className="row">
                        <Box className="col-12 col-md-5 mt-4 mt-md-0 d-flex flex-column justify-content-center align-items-center p-5 gap-5">
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
                                            "2015年から2017年まで、インドネシア財務省総局長 (Dirjen Kemenkeu RI) を務めた人物。",
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
                                            "のシニアアドバイザー。",
                                            "Ideatax高级顾问"
                                        )}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <div className="col-12 col-md-7">
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
                                                fontSize: "1.25rem",
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
                                                fontSize: "1rem",
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Over 20 Years of Experience in Managing Tax Audits",
                                            "Pengalaman 20+ Tahun Menangani Pemeriksaan Pajak",
                                            "20年以上の税務調査対応経験",
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
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: "0.9rem",
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Ideatax partners bring over 20 years of experience in taxation. Our partners have worked with Big Four tax consulting firms and tax authorities, providing you with comprehensive solutions.",
                                            "Partner Ideatax berpengalaman lebih dari 20 tahun di bidang perpajakan. Partner Kami berpengalaman bekerja di Konsultan Pajak Big Four dan otoritas pajak sehingga memberikan solusi yang komprehensif kepada Anda.",
                                            "Ideataxのパートナーは、税務分野で20年以上の経験を持っています。私たちのパートナーは、ビッグフォーの税務コンサルタントや税務当局での勤務経験があるため、包括的なソリューションを提供できます。",
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
                                                fontSize: "1.25rem",
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
                                                fontSize: "1rem",
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Specialized for Domestic and International Investors",
                                            "Spesialisasi untuk Investor Dalam dan Luar Negeri",
                                            "国内外の投資家向けの専門知識",
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
                                            "As one of the leading consultants in both domestic and foreign investment in Indonesia, we have extensive experience in handling taxation for both Foreign Investment Companies (PMA) and Domestic Investment Companies (PMDN).",
                                            "Salah satu konsultan terkemuka di bidang investasi asing maupun dalam negeri di Indonesia. Kami telah berpengalaman dalam menangani perpajakan perusahaan Penanaman Modal Asing (PMA)  maupun Penanaman Modal Dalam Negeri (PMDN).",
                                            "インドネシアにおける外国および国内投資の分野での主要なコンサルタントの一つです。私たちは、外国直接投資 PMA および国内投資 PMDN の税務処理において豊富な経験を持っています。",
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
                                                fontSize: "1.25rem",
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
                                                fontSize: "1rem",
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Client-Centric Approach",
                                            "Pendekatan Kebutuhan Client",
                                            "クライアントのニーズへのアプローチ",
                                            "客户的需求方案"
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
                                            "We believe that open communication and prompt responses are the cornerstones of successful collaboration. At every stage, we are committed to providing full support, with a strong dedication to maintaining privacy and confidentiality as our core values.",
                                            "Kami percaya bahwa komunikasi yang terbuka dan tanggapan yang cepat adalah dasar dari kolaborasi yang sukses. Di setiap tahap, kami siap mendukung sepenuhnya, dengan komitmen kuat untuk menjaga privasi dan kerahasiaan sebagai bagian tak terpisahkan dari nilai yang kami junjung.",
                                            "私たちは、オープンなコミュニケーションと迅速な応答が成功するコラボレーションの基本であると信じています。すべての段階で、私たちは完全にサポートする準備が整っており、プライバシーと機密性を守ることを、私たちの価値観の不可欠な部分として強くコミットしています。",
                                            "我们相信开放的沟通和快速的响应是成功合作的关键。在每个阶段，我们致力于全力支持和维护隐私和保密作为重要的价值观"
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
                                    " is trusted to resolve and assist with tax issues.",
                                    " Telah Dipercaya Menyelesaikan dan Membantu Permasalahan Pajak",
                                    " はさまざまな業界の税務問題解決に信頼されています。",
                                    " 已获得可以解决和帮助解决税务问题的信赖"
                                )}
                            </Typography>
                        </div>
                    </div>
                    <div className="row mt-5 d-flex align-items-center justify-content-center">
                        <div className="col-12 d-flex gap-5 align-items-center justify-content-center">
                            {stats.map((stat) => (
                                <div>
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
                                    "Trusted by Diverse Industries for Tax Solutions",
                                    "Dari Berbagai Industri",
                                    "さまざまな業界から",
                                    "从各种行业"
                                )}
                            </Typography>
                        </Box>
                    </div>
                    {isMobile ? (
                        <div className="row">
                            <div className="col-6">
                                <ul style={{ listStyleType: "disc" }}>
                                    <Typography component="li">
                                        {checkLang(
                                            locale,
                                            "Mining and Quarrying",
                                            "Pertambangan dan Penggalian",
                                            "さまざまな業界から",
                                            "采矿和采石业"
                                        )}
                                    </Typography>
                                    <Typography component="li">
                                        {checkLang(
                                            locale,
                                            "Manufacturing",
                                            "Manufaktur",
                                            "製造業",
                                            "制造业"
                                        )}
                                    </Typography>
                                    <Typography component="li">
                                        {checkLang(
                                            locale,
                                            "Electricity and Gas",
                                            "Listrik dan Gas",
                                            "電気・ガス業",
                                            "电力和燃气"
                                        )}
                                    </Typography>
                                    <Typography component="li">
                                        {checkLang(
                                            locale,
                                            "Business Activities",
                                            "Kegiatan Bisnis",
                                            "商業活動",
                                            "商业活动"
                                        )}
                                    </Typography>
                                    <Typography component="li">
                                        {checkLang(
                                            locale,
                                            "Agriculture, Forestry, and Fisheries",
                                            "Pertanian, Kehutanan dan Perikanan",
                                            "農業、林業、漁業",
                                            "农林渔业"
                                        )}
                                    </Typography>
                                    <Typography component="li">
                                        {checkLang(
                                            locale,
                                            "Legal Services",
                                            "Hukum",
                                            "法律業",
                                            "法律"
                                        )}
                                    </Typography>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul style={{ listStyleType: "disc" }}>
                                    <Typography component="li">
                                        {checkLang(
                                            locale,
                                            "Construction",
                                            "Konstruksi",
                                            "建設業",
                                            "建造"
                                        )}
                                    </Typography>
                                    <Typography component="li">
                                        {checkLang(
                                            locale,
                                            "Finance and Insurance Activities",
                                            "Kegiatan Keuangan dan Asuransi",
                                            "金融業・保険業",
                                            "金融和保险活动"
                                        )}
                                    </Typography>
                                    <Typography component="li">
                                        {checkLang(
                                            locale,
                                            "Transportation and Warehousing",
                                            "Transportasi dan Pergudangan",
                                            "運輸・倉庫業",
                                            "运输及仓储"
                                        )}
                                    </Typography>
                                    <Typography component="li">
                                        {checkLang(
                                            locale,
                                            "Information and Communication",
                                            "Informasi dan Komunikasi",
                                            "情報・通信業",
                                            "信息与通讯"
                                        )}
                                    </Typography>
                                    <Typography component="li">
                                        {checkLang(
                                            locale,
                                            "Wholesale and Retail Trade, Vehicle and Motorcycle Repair",
                                            "Perdagangan Besar dan Eceran, Reparasi Mobil dan Sepeda Motor",
                                            "卸売業・小売業、車両・バイクの修理",
                                            "批发零售业、汽车摩托车维修"
                                        )}
                                    </Typography>
                                    <Typography component="li">
                                        {checkLang(
                                            locale,
                                            "Personal Services",
                                            "Pribadi",
                                            "個人",
                                            "个人的"
                                        )}
                                    </Typography>
                                    <Typography component="li">
                                        {checkLang(
                                            locale,
                                            "Other Services",
                                            "Kegiatan Jasa Lainnya",
                                            "その他のサービス業",
                                            "其他服务活动"
                                        )}
                                    </Typography>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <div className="row mt-3">
                            <div className="col-12 d-flex justify-content-center align-items-center text-center">
                                <Typography
                                    sx={{
                                        borderRight: `2px solid ${theme.palette.custom.orange}`,
                                        px: 2,
                                        fontWeight: 500,
                                        fontSize: "1.2rem",
                                        color: theme.palette.custom.black,
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Mining and Quarrying",
                                        "Pertambangan dan Penggalian",
                                        "さまざまな業界から",
                                        "采矿和采石业"
                                    )}
                                </Typography>
                                <Typography
                                    sx={{
                                        borderRight: `2px solid ${theme.palette.custom.orange}`,
                                        px: 2,
                                        fontWeight: 500,
                                        fontSize: "1.2rem",
                                        color: theme.palette.custom.black,
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Finance and Insurance Activities",
                                        "Kegiatan Keuangan dan Asuransi",
                                        "金融業・保険業",
                                        "金融和保险活动"
                                    )}
                                </Typography>
                                <Typography
                                    sx={{
                                        borderRight: `2px solid ${theme.palette.custom.orange}`,
                                        px: 2,
                                        fontWeight: 500,
                                        fontSize: "1.2rem",
                                        color: theme.palette.custom.black,
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Business Activities",
                                        "Kegiatan Bisnis",
                                        "商業活動",
                                        "商业活动"
                                    )}
                                </Typography>
                                <Typography
                                    sx={{
                                        px: 2,
                                        fontWeight: 500,
                                        fontSize: "1.2rem",
                                        color: theme.palette.custom.black,
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Agriculture, Forestry, and Fisheries",
                                        "Pertanian, Kehutanan dan Perikanan",
                                        "農業、林業、漁業",
                                        "农林渔业"
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
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Electricity and Gas",
                                        "Listrik dan Gas",
                                        "電気・ガス業",
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
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Accommodation and Food Services",
                                        "Akomodasi dan Penyediaan Makanan dan Minuman",
                                        "宿泊業・飲食提供業",
                                        "住宿和食物和饮料的供应"
                                    )}
                                </Typography>
                                <Typography
                                    sx={{
                                        borderRight: `2px solid ${theme.palette.custom.orange}`,
                                        px: 2,
                                        fontWeight: 500,
                                        fontSize: "1.2rem",
                                        color: theme.palette.custom.black,
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Legal Services",
                                        "Hukum",
                                        "法律業",
                                        "法律"
                                    )}
                                </Typography>

                                <Typography
                                    sx={{
                                        px: 2,
                                        fontWeight: 500,
                                        fontSize: "1.2rem",
                                        color: theme.palette.custom.black,
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Construction",
                                        "Konstruksi",
                                        "建設業",
                                        "建造"
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
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Finance and Insurance Activities",
                                        "Kegiatan Keuangan dan Asuransi",
                                        "金融業・保険業",
                                        "金融和保险活动"
                                    )}
                                </Typography>
                                <Typography
                                    sx={{
                                        borderRight: `2px solid ${theme.palette.custom.orange}`,
                                        px: 2,
                                        fontWeight: 500,
                                        fontSize: "1.2rem",
                                        color: theme.palette.custom.black,
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Transportation and Warehousing",
                                        "Transportasi dan Pergudangan",
                                        "運輸・倉庫業",
                                        "运输及仓储"
                                    )}
                                </Typography>
                                <Typography
                                    sx={{
                                        px: 2,
                                        fontWeight: 500,
                                        fontSize: "1.2rem",
                                        color: theme.palette.custom.black,
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Information and Communication",
                                        "Informasi dan Komunikasi",
                                        "情報・通信業",
                                        "信息与通讯"
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
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Wholesale and Retail Trade, Vehicle and Motorcycle Repair",
                                        "Perdagangan Besar dan Eceran, Reparasi Mobil dan Sepeda Motor",
                                        "卸売業・小売業、車両・バイクの修理",
                                        "批发零售业、汽车摩托车维修"
                                    )}
                                </Typography>
                                <Typography
                                    sx={{
                                        borderRight: `2px solid ${theme.palette.custom.orange}`,
                                        px: 2,
                                        fontWeight: 500,
                                        fontSize: "1.2rem",
                                        color: theme.palette.custom.black,
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Personal Services",
                                        "Pribadi",
                                        "個人",
                                        "个人的"
                                    )}
                                </Typography>
                                <Typography
                                    sx={{
                                        px: 2,
                                        fontWeight: 500,
                                        fontSize: "1.2rem",
                                        color: theme.palette.custom.black,
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Other Services",
                                        "Kegiatan Jasa Lainnya",
                                        "その他のサービス業",
                                        "其他服务活动"
                                    )}
                                </Typography>
                            </div>
                        </div>
                    )}
                </div>
            </Box>
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
                                    "今すぐ相談",
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

export default TaxAudit;
