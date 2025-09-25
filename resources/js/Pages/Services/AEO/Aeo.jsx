import { usePage } from "@inertiajs/react";
import { useTheme, Box, useMediaQuery, Typography } from "@mui/material";
import Guest from "@/Layout/Guest";
import checkLang from "@/utils/checkLang";
import Hero from "./parts/Hero";
import What from "./parts/What";
import Benefit from "./parts/Benefit";
import Why from "./parts/Why";
import Role from "./parts/Role";
import Choose from "./parts/Choose";
import CountUp from "./parts/CountUp";
import AwardIconMobile from "@/Components/AwardIconMobile";
import AwardDesktop from "@/Components/AwardDesktop";
import Cta from "./parts/Cta";

function Aeo() {
    const { locale, stats } = usePage().props;
    const theme = useTheme();
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
    return (
        <Guest
            className="services"
            en={route("aeo")}
            id={route("aeo.id")}
            jp={route("aeo.jp")}
            ch={route("aeo.ch")}
            description={checkLang(
                locale,
                "Maximize AEO certification performance and compliance with our trusted customs services. Collaborating with relevant stakeholders, we provide precise and efficient solutions for your business growth.",
                "Meningkatkan Kinerja dan Kepatuhan untuk Sertifikasi AEO dengan Layanan Bea Cukai Tepercaya Kami. Bekerja Sama dengan Pemangku Kepentingan yang Relevan, Kami Memberikan Solusi yang Tepat dan Efisien untuk Pertumbuhan Bisnis Anda.",
                "信頼の税関サービスでAEO認証のパフォーマンスとコンプライアンスを最大化します。関連するステークホルダーと協力し、お客様のビジネス成長のために的確で効率的なソリューションを提供します。",
                "通过我们值得信赖的海关服务提高 AEO 认证的绩效和合规性。我们与相关利益相关者合作，为您的业务增长提供适当且高效的解决方案。"
            )}
            seo_title={checkLang(
                locale,
                "Customs Solutions for Authorized Economic Operator (AEO) | Service | Ideatax",
                "Solusi Bea Cukai untuk Authorized Economic Operator (AEO) | Service | Ideatax"
            )}
            href={checkLang(
                locale,
                route("aeo"),
                route("aeo.id"),
                route("aeo.jp"),
                route("aeo.ch")
            )}
        >
            <Hero locale={locale} checkLang={checkLang} theme={theme} />
            <What locale={locale} checkLang={checkLang} theme={theme} />
            <Benefit locale={locale} checkLang={checkLang} theme={theme} />
            <Why locale={locale} checkLang={checkLang} theme={theme} />
            <Role locale={locale} checkLang={checkLang} theme={theme} />
            <Choose locale={locale} checkLang={checkLang} theme={theme} />
            <CountUp
                locale={locale}
                checkLang={checkLang}
                theme={theme}
                stats={stats}
            />
            <Box>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-lg-7 text-center">
                            <Typography
                                as="h2"
                                sx={{
                                    fontSize: "2rem",
                                    letterSpacing: "0.009em",
                                    color: theme.palette.custom.darkBlue,
                                    fontWeight: "700",
                                    mt: 3,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "1.25rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Trusted Tax Consultant Recognized in Indonesia and Worldwide",
                                    "Konsultan Pajak Terpercaya Yang Diakui di Indonesia dan Dunia"
                                )}
                            </Typography>
                        </div>
                    </div>
                    <div className="row mt-5">
                        {isMobile ? <AwardIconMobile /> : <AwardDesktop />}
                    </div>
                </div>
            </Box>
            <Cta locale={locale} checkLang={checkLang} theme={theme} />
        </Guest>
    );
}

export default Aeo;
