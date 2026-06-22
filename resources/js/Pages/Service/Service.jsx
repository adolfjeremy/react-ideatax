import { Box, Typography, useTheme, Button } from "@mui/material";
import { usePage } from "@inertiajs/react";
import ServiceAccordion from "@/Components/ServiceAccordion";
import OrangeButton from "@/Components/OrangeButton";
// import serviceBg from "../../assets/images/service-bg.png";
import { useTranslation } from "react-i18next";
import Guest from "@/Layout/Guest";
import checkLang from "@/utils/checkLang";
import serviceBg from "../../assets/images/hero_services.png"
import ContactForm from "@/Components/ContactForm";

import "./service.scss";

function Service() {
    const { t } = useTranslation();
    const { locale, page, compro, catogorizedservices } =
        usePage().props;
    const theme = useTheme();
    return (
        <Guest
            en={route("service")}
            id={route("service.id")}
            jp={route("service.jp")}
            ch={route("service.ch")}
            description={checkLang(
                locale,
                page.description_eng,
                page.description,
                page.description_jpn,
                page.description_ch
            )}
            seo_title={checkLang(
                locale,
                page.SEO_title_eng,
                page.SEO_title,
                page.SEO_title_jpn,
                page.SEO_title_ch
            )}
            href={checkLang(
                locale,
                route("service"),
                route("service.id"),
                route("service.jp"),
                route("service.ch")
            )}
        >
            <Box sx={{
                height: "70svh",
                [theme.breakpoints.up("md")]: {
                    height: "100svh",
                },
                overflow: "hidden",
                position:"relative"
            }}>
                <img
                    src={serviceBg}
                    alt={page.title_eng}
                    sx={{
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                    loading="lazy"
                    className="w-100 h-100 object-fit-cover"
                />
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        flexDirection:"column",
                        alignItems: "start",
                        justifyContent: "center",
                        padding: "0 6rem",
                        zIndex: 100,
                        [theme.breakpoints.down("md")]: {
                            padding: "0 2rem",
                        },
                    }}
            >
                    <Typography
                        sx={{
                            color: theme.palette.custom.white,
                            fontWeight: 300,
                            fontSize: "4rem",
                            lineHeight: "100%",
                            letterSpacing: "2px",
                            mb: 4,
                            [theme.breakpoints.down("md")]: {
                                fontSize: "1.5rem",
                                mb: 0   
                            },
                        }}
                    >
                        Turning tax complexity <br /><strong> into strategic opportunities.</strong>
                    </Typography>
                    <div className="flex items-center justify-start gap-3 mt-4 mt-lg-3">
                       <OrangeButton
                            href={checkLang(
                                locale,
                                route("contact"),
                                route("contact.id"),
                                route("contact.jp"),
                                route("contact.ch")
                            )}
                        >
                            {t("contactHead")}
                        </OrangeButton>
                        <Button
                            as="a"
                            variant="outlined"
                            sx={{
                                backgroundColor: "transparent",
                                letterSpacing: "2%",
                                lineHeight: "100%",
                                color: theme.palette.custom.white,
                                fontWeight: 700,
                                border: `1px solid ${theme.palette.custom.white}`,
                                borderRadius: "16px",
                                textTransform: "capitalize",
                                textDecoration: "none",
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: "0.625rem",
                                        padding: "0.35rem 0.65rem",
                                    },
                                    [theme.breakpoints.up("md")]: {
                                        fontSize: "1rem",
                                        padding: "0.6875rem 1.5625rem",
                                    },
                                    [theme.breakpoints.up("lg")]: {
                                        fontSize: "1.2rem",
                                    },
                            }}
                            target="_blank"
                            href={`/storage/${compro.compro}`}
                        >
                            {t("comproButton")}
                        </Button>
                    </div>
                </Box>
            </Box>
            <Box
                className="py-5"
                component="section"
            >
                <div className="container">
                    <div className="row mt-5 align-items-start justify-content-center">
                        <div className="col-12 col-md-6">
                            <Typography
                                as="h2"
                                sx={{
                                    fontSize: "3rem",
                                    lineHeight: "1.19642857em",
                                    letterSpacing: "4%",
                                    color: theme.palette.custom.yellow,
                                    marginBottom: "10px",
                                    textAlign: "start",
                                    fontWeight: 700,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "1.5rem",
                                        textAlign: "center",
                                    },
                                }}
                            >
                                {t("serviceHead")}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "1.5rem",
                                    lineHeight: "30px",
                                    letterSpacing: "12%",
                                    color: theme.palette.custom.black,
                                    textAlign: "start",
                                    fontWeight: 300,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.9rem",
                                        textAlign: "center",
                                    },
                                    [theme.breakpoints.down("lg")]: {
                                        fontSize: "1.0366rem",
                                    },
                                }}
                            >
                                {t("serviceDesc")}
                            </Typography>
                        </div>
                        <Box className="col-12 col-md-6 mt-5 mt-md-0 services_list">
                            <ServiceAccordion
                                locale={locale}
                                categorized={catogorizedservices}
                            />
                        </Box>
                    </div>
                </div>
            </Box>
        </Guest>
    );
}

export default Service;
