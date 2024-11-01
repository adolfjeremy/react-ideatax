import { Box, Typography, useTheme, Button } from "@mui/material";
import { usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import Guest from "@/Layout/Guest";
import checkLang from "@/utils/checkLang";
import hero from "./hero.webp";
import icon1 from "./icon1.webp";
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

function TaxAudit() {
    const { t } = useTranslation();
    const theme = useTheme();
    const { locale, page } = usePage().props;
    return (
        <Guest
            en={route("tax-audit")}
            id={route("tax-audit.id")}
            jp={route("tax-audit.jp")}
            description={checkLang(
                locale,
                page.description_eng,
                page.description,
                page.description_jpn
            )}
            seo_title={checkLang(
                locale,
                page.SEO_title_eng,
                page.SEO_title,
                page.SEO_title_jpn
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
                        <div className="col-12 col-md-7 text-end d-flex flex-column align-items-end justify-content-center gap-1 gap-md-5">
                            <Typography
                                as="h1"
                                sx={{
                                    fontSize: "2.5rem",
                                    letterSpacing: "0.009em",
                                    lineHeight: "1.5em",
                                    color: theme.palette.custom.darkBlue,
                                    fontWeight: "600",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.7rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Tax Audits Sleek, Business Security Peak",
                                    "Pemeriksaan Pajak Lancar, Perusahaan Aman",
                                    "税務調査が順調なら、企業も安全"
                                )}
                            </Typography>
                            <Typography
                                sx={{
                                    color: theme.palette.custom.lightBlue,
                                    fontSize: "1.4459rem",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.8rem",
                                    },
                                    margin: 0,
                                    padding: 0,
                                    lineHeight: "1.42498753em",
                                    letterSpacing: "0.009em",

                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.7rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Readiness is the key to a successful tax audit. Ideatax is here to support you. From document preparation to the audit process, we help you minimize potential risks along the way.",
                                    "Kesiapan adalah kunci menghadapi pemeriksaan pajak. Ideatax siap mendampingi Anda dalam persiapan dokumen hingga proses pemeriksaan, membantu meminimalkan risiko yang mungkin muncul.",
                                    "準備が税務調査に立ち向かう鍵です。Ideatax は、書類準備から調査プロセスまでサポートし、発生し得るリスクを最小限に抑えるお手伝いをいたします。"
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
                                    lineHeight: "1.01561707em",
                                    color: theme.palette.custom.darkBlue,
                                    fontWeight: "400",
                                    mb: 2,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.8rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Are you experiencing any of the following conditions?",
                                    "Apakah Anda merasakan salah satu  kondisi dibawah ini?",
                                    "次のいずれかの状況を感じていますか？"
                                )}
                            </Typography>
                        </div>
                    </div>
                </div>
            </Box>
            <Box className="container" mt={5}>
                <div className="row">
                    <Box
                        sx={{ backgroundColor: "rgb(35, 90, 134)" }}
                        className="col-12 col-md-4 d-flex flex-column align-items-start justify-content-center py-4 px-5 gap-4"
                    >
                        <Box
                            sx={{
                                backgroundColor: theme.palette.custom.white,
                                width: "56px",
                                height: "56px",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                img: {
                                    width: "22px",
                                    height: "29px",
                                },
                            }}
                        >
                            <img
                                src={icon1}
                                alt="Surat Perintah Pemeriksaan dari Kantor Pajak."
                            />
                        </Box>
                        <Typography
                            sx={{
                                fontSize: "1.2rem",
                                letterSpacing: "0.009em",
                                lineHeight: "1.3em",
                                color: theme.palette.custom.white,
                                textAlign: "start",
                                fontWeight: "400",
                                mb: 2,
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: "0.8rem",
                                },
                            }}
                        >
                            {checkLang(
                                locale,
                                "Receiving an SP2DK or Audit Notice from the tax office?",
                                "Menerima SP2DK atau Surat Perintah Pemeriksaan dari Kantor Pajak.",
                                "税務署からのSP2DK（税務調査通知）または調査命令書を受け取った。"
                            )}
                        </Typography>
                    </Box>
                    <Box
                        sx={{ backgroundColor: "rgb(3, 57, 108)" }}
                        className="col-12 col-md-4 d-flex flex-column align-items-start justify-content-center py-4 px-5 gap-4"
                    >
                        <Box
                            sx={{
                                backgroundColor: theme.palette.custom.white,
                                width: "56px",
                                height: "56px",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                img: {
                                    width: "22px",
                                    height: "29px",
                                },
                            }}
                        >
                            <img
                                src={icon2}
                                alt="temuan audit pajak dan tidak tau cara untuk menanggapinya?"
                            />
                        </Box>
                        <Typography
                            sx={{
                                fontSize: "1.2rem",
                                letterSpacing: "0.009em",
                                lineHeight: "1.3em",
                                textAlign: "start",
                                color: theme.palette.custom.white,
                                fontWeight: "400",
                                mb: 2,
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: "0.8rem",
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
                    <Box
                        sx={{ backgroundColor: "rgb(255, 132, 79)" }}
                        className="col-12 col-md-4 d-flex flex-column align-items-start justify-content-center py-4 px-5 gap-4"
                    >
                        <Box
                            sx={{
                                backgroundColor: theme.palette.custom.white,
                                width: "56px",
                                height: "56px",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                img: {
                                    width: "22px",
                                    height: "29px",
                                },
                            }}
                        >
                            <img
                                src={icon3}
                                alt="temuan audit pajak dan tidak tau cara untuk menanggapinya?"
                            />
                        </Box>
                        <Typography
                            sx={{
                                fontSize: "1.2rem",
                                letterSpacing: "0.009em",
                                lineHeight: "1.01561707em",
                                textAlign: "start",
                                color: theme.palette.custom.white,
                                fontWeight: "400",
                                mb: 2,
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: "0.8rem",
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
                </div>
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
                                    lineHeight: "1.3em",
                                    color: theme.palette.custom.darkBlue,
                                    fontWeight: "400",
                                    mb: 2,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.8rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "We understand what you're going through.",
                                    "Kami sangat paham apa yang Anda hadapi.",
                                    "私たちは、あなたが直面している状況をよく理解しています。"
                                )}
                            </Typography>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <Typography
                                sx={{
                                    fontSize: "1.1rem",
                                    letterSpacing: "0.009em",
                                    lineHeight: "1.2em",
                                    color: theme.palette.custom.darkBlue,
                                    fontWeight: "400",
                                    textAlign: "justify",
                                    mb: 2,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.8rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "We can assist you through every phase of the audit process, from initially reviewing your financial and tax records to resolving any issues that may arise. We ensure full compliance with Indonesian tax regulations, provide strategic advice to mitigate risks, take a technical approach to potential tax matters, and prepare comprehensive responses to any inquiries.",
                                    "Kami dapat membantu Anda melalui setiap fase audit, mulai dari tinjauan awal catatan keuangan dan pajak hingga menyelesaikan masalah apa pun yang mungkin timbul. Kami akan memastikan kepatuhan penuh terhadap peraturan perpajakan Indonesia, memberikan saran strategis untuk memitigasi risiko, pendekatan teknis terhadap potensi pajak dan menyiapkan tanggapan menyeluruh terhadap setiap pertanyaan.",
                                    "私たちは、初期の財務および税務記録のレビューから、発生する可能性のある問題の解決まで、監査の各段階であなたをサポートできます。インドネシアの税法に完全に準拠していることを確保し、リスクを軽減するための戦略的なアドバイスを提供し、潜在的な税金に対する技術的なアプローチを行い、あらゆる質問に対する包括的な応答を準備します。"
                                )}
                            </Typography>
                        </div>
                    </div>
                </div>
            </Box>
            <Box mt={8}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <Typography
                                as="h2"
                                sx={{
                                    fontSize: "1.8rem",
                                    letterSpacing: "0.009em",
                                    lineHeight: "1.01561707em",
                                    color: theme.palette.custom.darkBlue,
                                    fontWeight: "400",
                                    mb: 2,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.8rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Our Strengths",
                                    "Keunggulan Kami",
                                    "私たちの強み"
                                )}
                            </Typography>
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
                                            fontWeight: "400",
                                            mb: 2,
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: "0.8rem",
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
                                            fontWeight: "500",
                                            mb: 2,
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: "0.8rem",
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
                                                .darkBlue,
                                            fontWeight: "400",
                                            mb: 2,
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: "0.8rem",
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
                                            fontWeight: "400",
                                            mb: 2,
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: "0.8rem",
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
                                            fontWeight: "500",
                                            mb: 2,
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: "0.8rem",
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
                                                .darkBlue,
                                            fontWeight: "400",
                                            mb: 2,
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: "0.8rem",
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
                                            fontWeight: "400",
                                            mb: 2,
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: "0.8rem",
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
                                            fontWeight: "500",
                                            mb: 2,
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: "0.8rem",
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
                                                .darkBlue,
                                            fontWeight: "400",
                                            mb: 2,
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: "0.8rem",
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
                        <Box
                            sx={{
                                img: {
                                    width: "85%",
                                },
                            }}
                            className="col-12 col-md-6 mt-4 mt-md-0 d-flex flex-column justify-content-center align-items-center p-5 gap-5"
                        >
                            <img src={ken} alt="Ken Dwijugiasteadi" />
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
                        </Box>
                    </div>
                </div>
            </Box>
            <Box mt={8}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-start">
                            <Typography
                                as="h2"
                                sx={{
                                    fontSize: "1.8rem",
                                    letterSpacing: "0.009em",
                                    lineHeight: "1.01561707em",
                                    color: theme.palette.custom.darkBlue,
                                    fontWeight: "400",
                                    mb: 2,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.8rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Tax Audit Services Include:",
                                    "Jasa Pemeriksaan Pajak Meliputi:",
                                    "税務調査サービスには以下が含まれます："
                                )}
                            </Typography>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-4">
                            <Box className="position-relative">
                                <img src={review} />
                                <Box
                                    sx={{
                                        position: "absolute",
                                        inset: 0,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        p: 2,
                                    }}
                                >
                                    <Typography
                                        as="h3"
                                        sx={{
                                            fontSize: "1.8rem",
                                            letterSpacing: "0.009em",
                                            lineHeight: "1.01561707em",
                                            color: theme.palette.custom.white,
                                            textAlign: "center",
                                            fontWeight: "400",
                                            mb: 2,
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: "0.8rem",
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Document Review",
                                            "Review Dokumen",
                                            "文書レビュー"
                                        )}
                                    </Typography>
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    borderLeft: "1px solid grey",
                                    paddingLeft: 3,
                                    mt: 4,
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "1rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.5em",
                                        color: theme.palette.custom.lightBlue,
                                        fontWeight: "400",
                                        mb: 2,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "0.8rem",
                                        },
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Reviewing and analyzing audit documents to be submitted to the auditor.",
                                        "Meninjau dan menganalisa dokumen pemeriksaan untuk diserahkan ke pemeriksa",
                                        "調査のために検査官に提出する文書をレビューおよび分析します。"
                                    )}
                                </Typography>
                            </Box>
                        </div>
                        <div className="col-12 col-md-4">
                            <Box className="position-relative">
                                <img src={persiapan} />
                                <Box
                                    sx={{
                                        position: "absolute",
                                        inset: 0,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        p: 2,
                                    }}
                                >
                                    <Typography
                                        as="h3"
                                        sx={{
                                            fontSize: "1.8rem",
                                            letterSpacing: "0.009em",
                                            lineHeight: "1.01561707em",
                                            textAlign: "center",
                                            color: theme.palette.custom.white,
                                            fontWeight: "400",
                                            mb: 2,
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: "0.8rem",
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Preparation of Formal Responses",
                                            "Persiapan Tanggapan Formal",
                                            "正式な応答の準備"
                                        )}
                                    </Typography>
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    borderLeft: "1px solid grey",
                                    paddingLeft: 3,
                                    mt: 4,
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "1rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.5em",
                                        color: theme.palette.custom.lightBlue,
                                        fontWeight: "400",
                                        mb: 2,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "0.8rem",
                                        },
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Assisting in the preparation or review of formal responses to initial findings from the tax office until the Notification of Tax Audit Result (SPHP) is issued.",
                                        "Membantu mempersiapkan atau meninjau tanggapan formal atas temuan awal kantor pajak hingga surat pemberitahuan hasil pemeriksaan (SPHP) dikeluarkan",
                                        "税務署の初期発見に対する正式な応答を準備またはレビューし、調査結果通知書 SPHP が発行されるまでサポートします。"
                                    )}
                                </Typography>
                            </Box>
                        </div>
                        <div className="col-12 col-md-4">
                            <Box className="position-relative">
                                <img src={pendampingan} />
                                <Box
                                    sx={{
                                        position: "absolute",
                                        inset: 0,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        p: 2,
                                    }}
                                >
                                    <Typography
                                        as="h3"
                                        sx={{
                                            fontSize: "1.8rem",
                                            letterSpacing: "0.009em",
                                            lineHeight: "1.01561707em",
                                            textAlign: "center",
                                            color: theme.palette.custom.white,
                                            fontWeight: "400",
                                            mb: 2,
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: "0.8rem",
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Audit Assistance",
                                            "Pendampingan Selama Pemeriksaan ",
                                            "調査中のサポート"
                                        )}
                                    </Typography>
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    borderLeft: "1px solid grey",
                                    paddingLeft: 3,
                                    mt: 4,
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "1rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.5em",
                                        color: theme.palette.custom.lightBlue,
                                        fontWeight: "400",
                                        mb: 2,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "0.8rem",
                                        },
                                    }}
                                >
                                    {checkLang(
                                        locale,
                                        "Accompanying, attending, and/or representing you at every call to the tax office.",
                                        "Mendampingin, menghadiri, dan/atau mewakilkan pada setiap panggilan ke Kantor Pajak ",
                                        "税務署へのすべての呼び出しにおいて、サポート、出席、および/または代理を行います。"
                                    )}
                                </Typography>
                            </Box>
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
            <Box mt={10}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <Typography
                                as="h2"
                                sx={{
                                    fontSize: "2rem",
                                    letterSpacing: "0.009em",
                                    lineHeight: "1.01561707em",
                                    color: theme.palette.custom.darkBlue,
                                    fontWeight: "400",
                                    mb: 2,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.8rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Awards",
                                    "Awards",
                                    "受賞歴"
                                )}
                            </Typography>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 d-flex align-items-center justify-content-center">
                            <img src={aw} className="award_image" />
                            <img src={aw1} className="award_image" />
                            <img src={aw2} className="award_image" />
                            <img src={aw3} className="award_image" />
                            <img src={aw4} className="award_image" />
                            <img src={aw5} className="award_image" />
                        </div>
                    </div>
                </div>
            </Box>
            <Box mt={10}>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-12 col-md-10">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <img
                                        src={timer}
                                        alt="consultation now"
                                        className="w-100"
                                    />
                                </div>
                                <div className="col-12 col-md-6 d-flex flex-column align-items-start justify-content-start gap-5 ps-5">
                                    <Typography
                                        as="h2"
                                        sx={{
                                            fontSize: "2rem",
                                            letterSpacing: "0.009em",
                                            lineHeight: "1.01561707em",
                                            color: theme.palette.custom
                                                .darkBlue,
                                            fontWeight: "400",
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: "0.8rem",
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Claim Your Free Consultation Now!",
                                            "Klaim Konsultasi Gratis Sekarang!",
                                            "今すぐ無料相談を申し込む！"
                                        )}
                                    </Typography>
                                    <CountdownTimer />
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
                    </div>
                </div>
            </Box>
        </Guest>
    );
}

export default TaxAudit;
