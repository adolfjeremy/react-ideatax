import { Box, Typography, useTheme, Link } from "@mui/material";
import { usePage } from "@inertiajs/react";
import ServiceAccordion from "@/Components/ServiceAccordion";
import serviceBg from "../../assets/images/service-bg.png";
import { useTranslation } from "react-i18next";
import Guest from "@/Layout/Guest";
import checkLang from "@/utils/checkLang";
import ContactForm from "@/Components/ContactForm";

import "./service.scss";

function Service() {
    const { t } = useTranslation();
    const { locale, page, unCatogorizedservices, catogorizedservices } =
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
            <Box
                className="py-5"
                component="section"
                sx={{
                    py: "2.5rem",
                    backgroundImage: `url(${serviceBg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "50%",
                    minHeight: "100vh",
                }}
            >
                <div className="container">
                    <div className="row mt-5 pt-md-5 align-items-center justify-content-center">
                        <div className="col-12 col-md-6 mt-5">
                            <Typography
                                as="h2"
                                sx={{
                                    fontSize: "3.4375rem",
                                    lineHeight: "1.19642857em",
                                    letterSpacing: "0.009em",
                                    color: theme.palette.custom.orange,
                                    marginBottom: "10px",
                                    textAlign: "start",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "2.4189rem",
                                        textAlign: "center",
                                    },
                                }}
                            >
                                {t("serviceHead")}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "1.15rem",
                                    lineHeight: "1.64061987em",
                                    letterSpacing: "0.009em",
                                    color: theme.palette.custom.lightBlue,
                                    textAlign: "start",
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
                                unCategorized={unCatogorizedservices}
                            />
                        </Box>
                    </div>
                </div>
            </Box>
            <Box>
                <ContactForm />
            </Box>
        </Guest>
    );
}

export default Service;
