import { Box, Typography, useTheme } from "@mui/material";
import { usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import Guest from "@/Layout/Guest";
import ConsultationButton from "@/Components/ConsultationButton";
import checkLang from "@/utils/checkLang";

function ServiceDetail() {
    const { t } = useTranslation();
    const theme = useTheme();
    const { locale, item } = usePage().props;
    return (
        <Guest
            en={route("service-detail", item.slug_eng)}
            id={route("service-detail.id", item.slug)}
            jp={route("service-detail.jp", item.slug_jpn)}
            ch={route("service-detail.ch", item.slug_ch)}
            description={checkLang(
                locale,
                item.description_eng,
                item.description,
                item.description_jpn,
                item.description_ch
            )}
            seo_title={checkLang(
                locale,
                item.SEO_title_eng,
                item.SEO_title,
                item.SEO_title_jpn,
                item.SEO_title_ch
            )}
            href={checkLang(
                locale,
                route("service-detail", item.slug_eng),
                route("service-detail.id", item.slug),
                route("service-detail.jp", item.slug_jpn),
                route("service-detail.ch", item.slug_ch)
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
                <img src={`/storage/${item.image}`} alt="" className="w-100" />
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        padding: "0 12px",
                    }}
                >
                    <Typography
                        as="h1"
                        sx={{
                            fontSize: "3.95025rem",
                            letterSpacing: "0.009em",
                            lineHeight: "1.01561707em",
                            color: theme.palette.custom.darkBlue,
                            fontWeight: "700",
                            textAlign: "center",
                            [theme.breakpoints.down("sm")]: {
                                fontSize: "2rem",
                            },
                        }}
                    >
                        {checkLang(
                            locale,
                            item.title_eng,
                            item.title,
                            item.title_jpn
                        )}
                    </Typography>
                </Box>
            </Box>
            <Box className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 px-md-5 px-0 d-flex align-items-center justify-content-center">
                            <Typography
                                sx={{
                                    fontSize: "1.652rem",
                                    lineHeight: "1.9em",
                                    letterSpacing: ".009em",
                                    color: theme.palette.custom.lightBlue,
                                    textAlign: "center",
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: "1.2",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    item.description_eng,
                                    item.description,
                                    item.description_jpn
                                )}
                            </Typography>
                        </div>
                    </div>
                </div>
            </Box>
            <ConsultationButton center={true} />
        </Guest>
    );
}

export default ServiceDetail;
