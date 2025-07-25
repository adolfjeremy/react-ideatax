import { useTheme, Box, useMediaQuery, Link, Typography } from "@mui/material";
import { usePage } from "@inertiajs/react";
import Guest from "@/Layout/Guest";
import CustomBreadcrumb from "@/Components/CustomBreadcrumb";
import Hero from "./parts/Hero";
import What from "./parts/What";
import Advantage from "./parts/Advantage";
import Role from "./parts/Role";
import Why from "./parts/Why";
import checkLang from "@/utils/checkLang";
import TeamList from "./parts/TeamList";
import CountUp from "./parts/CountUp";
import AwardIconMobile from "@/Components/AwardIconMobile";
import AwardDesktop from "@/Components/AwardDesktop";

function TaxPlanning() {
    const theme = useTheme();
    const { locale, stats } = usePage().props;
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
    return (
        <Guest
            className="services"
            en={route("tax-planning")}
            id={route("tax-planning.id")}
            jp={route("tax-planning.jp")}
            ch={route("tax-planning.ch")}
            description={checkLang(
                locale,
                "Tax planning is a strategic process of minimizing tax liability by ensuring that taxes paid do not exceed the amount actually due. This tax management practice is conducted through legal and compliant methods under prevailing tax regulations.",
                "Perencanaan pajak adalah proses strategis untuk meminimalkan kewajiban pajak dengan memastikan bahwa pajak yang dibayar tidak melebihi jumlah yang sebenarnya terutang. Praktik manajemen pajak ini dilakukan melalui metode yang sah dan sesuai dengan peraturan perpajakan yang berlaku."
            )}
            seo_title={checkLang(
                locale,
                "Tax Planning | Service | Ideatax",
                "Perencanaan Pajak | Service | Ideatax"
            )}
            href={checkLang(
                locale,
                route("sp2dk"),
                route("sp2dk.id"),
                route("sp2dk.jp"),
                route("sp2dk.ch")
            )}
        >
            {isMobile && (
                <Box
                    as="section"
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
                                        "Tax Planning",
                                        "Perencanaan Pajak"
                                    )}
                                </Typography>
                            </CustomBreadcrumb>
                        </div>
                    </div>
                </Box>
            )}
            <Hero locale={locale} checkLang={checkLang} theme={theme} />
            <What locale={locale} checkLang={checkLang} theme={theme} />
            <Advantage locale={locale} checkLang={checkLang} theme={theme} />
            <Role locale={locale} checkLang={checkLang} theme={theme} />
            <Why locale={locale} checkLang={checkLang} theme={theme} />
            <TeamList
                locale={locale}
                checkLang={checkLang}
                theme={theme}
                isMobile={isMobile}
            />
            <CountUp
                locale={locale}
                checkLang={checkLang}
                theme={theme}
                stats={stats}
            />
            <Box>
                <div className="container">
                    <div className="row mt-5">
                        {isMobile ? <AwardIconMobile /> : <AwardDesktop />}
                    </div>
                </div>
            </Box>
        </Guest>
    );
}

export default TaxPlanning;
