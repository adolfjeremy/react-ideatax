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

import { FaCheckCircle } from "react-icons/fa";

import hero from "./hero.png";
import Steps from "@/Components/Steps";
import RoleItems from "@/Components/RoleItems";

function TaxReport() {
    const { t } = useTranslation();
    const theme = useTheme();
    const { locale } = usePage().props;
    return (
        <Guest
            className="services"
            en={route("tax-audit")}
            id={route("tax-audit.id")}
            jp={route("tax-audit.jp")}
            description={checkLang(
                locale,
                "We understand how exhausting the tax audit system can be. There are also many things that could be unfamiliar to you during the process of tax audit. We have a team of professionals who are experienced in tax audit for years, and we would be glad to assist you in it. Our service comprises of assistance prior to the receiving of the notification letter about tax audit process, providing a helping hand during the meeting with tax officer, to preparing the required data in tax audit process as well as providing the feedback of the audit results.",
                "Kami memahami betapa melelahkannya sistem pemeriksaan pajak. Ada banyak hal yang mungkin tidak Anda kenali selama proses pemeriksaan pajak. Kami memiliki tim profesional yang berpengalaman dalam pemeriksaan pajak selama bertahun-tahun, dan kami akan senang membantu Anda. Layanan kami mencakup bantuan sebelum menerima surat pemberitahuan tentang proses pemeriksaan pajak, memberikan bantuan selama pertemuan dengan petugas pajak, hingga menyiapkan data yang diperlukan dalam proses pemeriksaan pajak serta memberikan umpan balik atas hasil pemeriksaan.",
                "私たちは、税務調査制度がいかに疲れるものであるかを理解しています。また、税務調査の過程では不慣れなことも多々あるかと思います。当事務所には、税務調査に長年携わってきた専門家チームがおり、喜んで税務調査のお手伝いをさせていただきます。私たちのサービスは、税務調査の通知書を受け取る前のサポートから、税務官との面談時のサポート、税務調査に必要な資料の作成、調査結果のフィードバックまで、多岐にわたります。"
            )}
            seo_title={checkLang(
                locale,
                "Tax Audit Assistance Service Ideatax Tax Consultant",
                "Layanan Bantuan Pemeriksaan Audit Pajak Ideatax Konsultan Pajan",
                "税務調査支援サービス Ideatax Tax Consultant"
            )}
            href={checkLang(
                locale,
                route("tax-audit"),
                route("tax-audit.id"),
                route("tax-audit.jp")
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
                            fontWeight: "800",
                            [theme.breakpoints.down("sm")]: {
                                fontSize: "1.5rem",
                            },
                            margin: 0,
                            padding: 0,
                        }}
                    >
                        {checkLang(
                            locale,
                            "Solve Tax Issues Wisely",
                            "Pelaporan Pajak",
                            "税務問題を賢く解決"
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
                                fontSize: "1.5rem",
                            },
                        }}
                    >
                        {checkLang(
                            locale,
                            "20+ Years of Experience in Tax Audits",
                            "SPT Tahunan Badan/Orang Pribadi Rapih, Cepat dan Tepat",
                            "20年以上の税務調査対応経験"
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
                            "Avoid potential financial losses for your company with Ideatax's support, from document preparation to the audit process.",
                            "Pelaporan SPT sering kali bikin pusing. hitungannya rumit, dokumennya banyak, dan kalau telat? Denda menanti! Jangan khawatir, kami siap membantu memastikan laporan pajak Anda akurat, tepat waktu, dan bebas risiko.",
                            "Ideataxのサポートを受け、書類準備から税務調査まで、貴社の財務損失のリスクを避けましょう。"
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
                            "今すぐ相談"
                        )}
                    </Button>
                </Box>
            </HeroCTA>
            {/* end of hero section */}
            {/* start of problems questioner */}
            <ProblemsQuestioner
                question={checkLang(
                    locale,
                    "If you're facing any of these situations, schedule a consultation now to prevent future problems:",
                    "Apakah Anda pernah merasakan salah satu masalah ini?",
                    "以下のような問題が発生した場合、後々のトラブルを避けるために、すぐに相談予約をしましょう。"
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
                                        fontSize: "1.4rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.3em",
                                        color: theme.palette.custom.white,
                                        textAlign: "center",
                                        fontWeight: "500",
                                        m: 0,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "0.9rem",
                                        },
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Receiving an SP2DK or Audit Notice from the tax office?",
                                        "Menerima SP2DK atau Surat Perintah Pemeriksaan dari Kantor Pajak.",
                                        "税務署からのSP2DK (税務調査通知）または調査命令書を受け取った。"
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
                                        fontSize: "1.4rem",
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
                                        "Kesulitan dalam Mengakses atau Menggunakan Sistem Perpajakan",
                                        "税務監査の指摘が出るのではないかと心配しており、どのように対応すれば良いか分からないですか？"
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
                                        fontSize: "1.4rem",
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
                                        "Kurangnya Pemahaman Terhadap Peraturan Perpajakan Terbaru",
                                        "税務調査に対する準備ができておらず、何をすべきか分からない。"
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
                                        fontSize: "1.4rem",
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
                                        "Tidak Punya Waktu dan SDM untuk Mengurus Perpajakan",
                                        "税務調査に対する準備ができておらず、何をすべきか分からない。"
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
                                    fontSize="3rem"
                                    color={theme.palette.custom.darkBlue}
                                >
                                    Kenapa{" "}
                                    <Typography
                                        fontSize="3rem"
                                        variant="span"
                                        color={theme.palette.custom.orange}
                                    >
                                        Ideatax
                                    </Typography>{" "}
                                    Menjadi Pilihan Terbaik Dalam Masalah Pajak?
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
                                                fontSize: "3rem",
                                                letterSpacing: "0.009em",
                                                lineHeight: "1.01561707em",
                                                color: theme.palette.custom
                                                    .darkBlue,
                                                fontWeight: "500",
                                                mb: 2,
                                                [theme.breakpoints.down("sm")]:
                                                    {
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
                                                fontSize: "1.5rem",
                                                letterSpacing: "0.009em",
                                                lineHeight: "1.2em",
                                                color: theme.palette.custom
                                                    .darkBlue,
                                                fontWeight: "600",
                                                mb: 2,
                                                [theme.breakpoints.down("sm")]:
                                                    {
                                                        fontSize: "1rem",
                                                    },
                                            }}
                                        >
                                            {checkLang(
                                                locale,
                                                "Over 20 Years of Experience in Managing Tax Audits",
                                                "Pengalaman 20+ Tahun Menangani Pemeriksaan Pajak",
                                                "20年以上の税務調査対応経験"
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
                                                "Ideatax partners bring over 20 years of experience in taxation. Our partners have worked with Big Four tax consulting firms and tax authorities, providing you with comprehensive solutions.",
                                                "Partner Ideatax berpengalaman lebih dari 20 tahun di bidang perpajakan. Partner Kami berpengalaman bekerja di Konsultan Pajak Big Four dan otoritas pajak sehingga memberikan solusi yang komprehensif kepada Anda.",
                                                "Ideataxのパートナーは、税務分野で20年以上の経験を持っています。私たちのパートナーは、ビッグフォーの税務コンサルタントや税務当局での勤務経験があるため、包括的なソリューションを提供できます。"
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
                                                fontSize: "3rem",
                                                letterSpacing: "0.009em",
                                                lineHeight: "1.01561707em",
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
                                                fontSize: "1.5rem",
                                                letterSpacing: "0.009em",
                                                lineHeight: "1.2em",
                                                color: theme.palette.custom
                                                    .darkBlue,
                                                fontWeight: "500",
                                                mb: 2,
                                                [theme.breakpoints.down("sm")]:
                                                    {
                                                        fontSize: "1rem",
                                                    },
                                            }}
                                        >
                                            {checkLang(
                                                locale,
                                                "Specialized for Domestic and International Investors",
                                                "Spesialisasi untuk Investor Dalam dan Luar Negeri",
                                                "国内外の投資家向けの専門知識"
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
                                                "インドネシアにおける外国および国内投資の分野での主要なコンサルタントの一つです。私たちは、外国直接投資 PMA および国内投資 PMDN の税務処理において豊富な経験を持っています。"
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
                                                fontSize: "3rem",
                                                letterSpacing: "0.009em",
                                                lineHeight: "1.01561707em",
                                                color: theme.palette.custom
                                                    .darkBlue,
                                                fontWeight: "500",
                                                mb: 2,
                                                [theme.breakpoints.down("sm")]:
                                                    {
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
                                                fontSize: "1.5rem",
                                                letterSpacing: "0.009em",
                                                lineHeight: "1.2em",
                                                color: theme.palette.custom
                                                    .darkBlue,
                                                fontWeight: "600",
                                                mb: 2,
                                                [theme.breakpoints.down("sm")]:
                                                    {
                                                        fontSize: "1rem",
                                                    },
                                            }}
                                        >
                                            {checkLang(
                                                locale,
                                                "Client-Centric Approach",
                                                "Pendekatan Kebutuhan Client",
                                                "クライアントのニーズへのアプローチ"
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
                                                "私たちは、オープンなコミュニケーションと迅速な応答が成功するコラボレーションの基本であると信じています。すべての段階で、私たちは完全にサポートする準備が整っており、プライバシーと機密性を守ることを、私たちの価値観の不可欠な部分として強くコミットしています。"
                                            )}
                                        </Typography>
                                    </Box>
                                </Box>
                            </div>
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
                                    "今すぐ相談"
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
                    backgroundImage: "linear-gradient(180, #267ddf, #70b6f4)",
                }}
            >
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12 col-md-4 px-3">
                            <Typography
                                variant="h3"
                                sx={{
                                    color: theme.palette.custom.white,
                                    fontSize: "1.675rem",
                                }}
                                className="text-center "
                            >
                                Layanan Pelaporan SPT Tahunan PPh Badan <br />
                                <Typography
                                    variant="span"
                                    sx={{
                                        background:
                                            theme.palette.custom.darkBlue,
                                        padding: "1px 7px",
                                    }}
                                >
                                    Tanpa Ribet
                                </Typography>
                            </Typography>
                            <hr />
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 2,
                                        alignItems: "center",
                                        justifyContent: "start",
                                        padding: "0 20px",
                                        svg: {
                                            color: "#45A834",
                                            fontSize: "1.8rem",
                                        },
                                    }}
                                >
                                    <FaCheckCircle />
                                    <p className="m-0 text-xl">
                                        Analisa dan Perhitungan Pajak
                                    </p>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 2,
                                        alignItems: "center",
                                        justifyContent: "start",
                                        padding: "0 20px",
                                        svg: {
                                            color: "#45A834",
                                            fontSize: "1.8rem",
                                        },
                                    }}
                                >
                                    <FaCheckCircle />
                                    <p className="m-0 text-xl">
                                        Peninjauan akun dan Penyiapan SPT
                                    </p>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 2,
                                        alignItems: "center",
                                        justifyContent: "start",
                                        padding: "0 20px",
                                        svg: {
                                            color: "#45A834",
                                            fontSize: "1.8rem",
                                        },
                                    }}
                                >
                                    <FaCheckCircle />
                                    <p className="m-0 text-xl">
                                        Pelaporan SPT Tahunan
                                    </p>
                                </Box>
                            </Box>
                        </div>
                    </div>
                </div>
            </Box>
            {/* end of tax report service details */}
        </Guest>
    );
}

export default TaxReport;
