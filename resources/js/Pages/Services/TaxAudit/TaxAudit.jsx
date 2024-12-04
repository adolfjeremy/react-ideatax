import { Box, Typography, useTheme, Button } from "@mui/material";
import { usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import Guest from "@/Layout/Guest";
import checkLang from "@/utils/checkLang";
import hero from "./hero.webp";
import audit1 from "@/assets/images/tax-audit/audit1.webp";
import audit2 from "@/assets/images/tax-audit/audit2.webp";
import audit3 from "@/assets/images/tax-audit/audit3.webp";
import audit4 from "@/assets/images/tax-audit/audit4.webp";
import icon2 from "./icon2.webp";
import icon3 from "./icon3.webp";
import ken from "./ken.webp";
import review from "./review.webp";
import persiapan from "./persiapan.webp";
import pendampingan from "./pendampingan.webp";
import aw from "@/assets/images/aw.webp";
import aw1 from "@/assets/images/aw-1.webp";
import aw2 from "@/assets/images/aw-2.webp";
import aw3 from "@/assets/images/aw-3.webp";
import aw4 from "@/assets/images/aw-4.webp";
import aw5 from "@/assets/images/aw-5.webp";
import timer from "./timer.webp";
import CountdownTimer from "./CountdownTimer";
import CounterLg from "@/Components/CounterLg";

function TaxAudit() {
    const { t } = useTranslation();
    const theme = useTheme();
    const { locale, stats } = usePage().props;
    return (
        <Guest
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
                    <div className="row d-flex align-items-center justify-content-end">
                        <Box
                            sx={{
                                [theme.breakpoints.down("md")]: {
                                    paddingTop: "100px",
                                },
                            }}
                            className="col-9 col-md-7 text-end d-flex flex-column align-items-end justify-content-center gap-2"
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
                                    "Solve Tax Issues Wisely",
                                    "Selesaikan Masalah Pajak Dengan Bijak",
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
                                    "20+ Tahun Menangani Pemeriksaan Pajak",
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
                                    "Hindari  potensi kerugian keuangan perusahaan Anda dengan dampingan Ideatax dalam persiapan dokumen hingga proses pemeriksaan",
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
                                    "今すぐ相談"
                                )}
                            </Button>
                            <Box className="d-flex align-items-center justify-content-end mt-2">
                                <img src={aw} className="award_image-2" />
                                <img src={aw1} className="award_image-2" />
                                <img src={aw2} className="award_image-2" />
                                <img src={aw3} className="award_image-2" />
                                <img src={aw4} className="award_image-2" />
                                <img src={aw5} className="award_image-2" />
                            </Box>
                        </Box>
                    </div>
                </Box>
            </Box>
            <Box mt={8}>
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
                                    "以下のような問題が発生した場合、後々のトラブルを避けるために、すぐに相談予約をしましょう。"
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
                                    "税務署からのSP2DK (税務調査通知）または調査命令書を受け取った。"
                                )}
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="col-12 col-md-4">
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
                                    "税務監査の指摘が出るのではないかと心配しており、どのように対応すれば良いか分からないですか？"
                                )}
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="col-12 col-md-4">
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
                                    "税務調査に対する準備ができておらず、何をすべきか分からない。"
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
                                </Typography>
                            )}
                        </div>
                    </div>
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
                                    "Document Review",
                                    "Review Dokumen",
                                    "書類レビュー"
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
                                    "税務調査に提出する書類を確認し、分析します。"
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
                                    "Preparation of Formal Responses",
                                    "Persiapan Tanggapan Formal",
                                    "正式な回答準備"
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
                                    "税務調査の初期発見からSPHP発行までの正式な回答を準備します。"
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
                                    "Audit Assistance",
                                    "Pendampingan Selama Pemeriksaan",
                                    "調査中のサポート"
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
                                    "税務署への呼び出しに同席、代理、または出席します。"
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
                                    "Audit Assistance",
                                    "Pendampingan Selama Pemeriksaan",
                                    "調査中のサポート"
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
                                    "Stress-Free Tax Solutions",
                                    "Bebas Stress!",
                                    "ストレスフリー！"
                                )}
                            </Typography>
                        </div>
                    </div>
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
                                            "2015年から2017年まで、インドネシア財務省総局長 (Dirjen Kemenkeu RI) を務めた人物。"
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
                                            "のシニアアドバイザー。"
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
                                            "20年以上の税務調査対応経験"
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
                                            "国内外の投資家向けの専門知識"
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
                                            "クライアントのニーズへのアプローチ"
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
                                            "私たちは、オープンなコミュニケーションと迅速な応答が成功するコラボレーションの基本であると信じています。すべての段階で、私たちは完全にサポートする準備が整っており、プライバシーと機密性を守ることを、私たちの価値観の不可欠な部分として強くコミットしています。"
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
                                    "今すぐ相談"
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
                                    " はさまざまな業界の税務問題解決に信頼されています。"
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
                                    "Trusted by Diverse Industries for Tax Solutions",
                                    "Dari Berbagai Industri",
                                    "さまざまな業界から"
                                )}
                            </Typography>
                        </Box>
                    </div>
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
                                    "さまざまな業界から"
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
                                    "Manufacturing",
                                    "Manufaktur",
                                    "製造業"
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
                                    "商業活動"
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
                                    "農業、林業、漁業"
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
                                    "電気・ガス業"
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
                                    "宿泊業・飲食提供業"
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
                                    "法律業"
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
                                    "建設業"
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
                                    "金融業・保険業"
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
                                    "運輸・倉庫業"
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
                                    "情報・通信業"
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
                                    "卸売業・小売業、車両・バイクの修理"
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
                                    "個人"
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
                                    "その他のサービス業"
                                )}
                            </Typography>
                        </div>
                    </div>
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
                        <div className="col-12 col-md-6 py-md-4">
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
                                        "無料相談 "
                                    )}
                                </Typography>
                                {checkLang(
                                    locale,
                                    "Agar Anda Bisa Fokus ke Bisnis!",
                                    "Focus on Your Destination!",
                                    "ジネスに集中するための!"
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
                                    "今すぐ相談"
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
