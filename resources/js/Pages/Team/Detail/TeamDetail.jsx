import { Box, Typography, useTheme, Breadcrumbs, Link } from "@mui/material";
import { usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import Guest from "@/Layout/Guest";
import ConsultationButton from "@/Components/ConsultationButton";
import checkLang from "@/utils/checkLang";
import RichText from "@/Components/RichText";

function TeamDetail() {
    const { locale, item } = usePage().props;
    const theme = useTheme();
    const { t } = useTranslation();
    return (
        <Guest
            en={route("team-detail", item.slug)}
            id={route("team-detail.id", item.slug)}
            jp={route("team-detail.jp", item.slug)}
            description={checkLang(
                locale,
                item.description_eng,
                item.description,
                item.description_jpn
            )}
            seo_title={checkLang(
                locale,
                item.SEO_title_eng,
                item.SEO_title,
                item.SEO_title_jpn
            )}
            href={checkLang(
                locale,
                route("team-detail", item.slug),
                route("team-detail.id", item.slug),
                route("team-detail.jp", item.slug)
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
                    src={`/storage/${item.profile_picture}`}
                    alt={item.name}
                    className="w-100"
                />
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
                        left: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        padding: "0 12px",
                        [theme.breakpoints.down("md")]: {
                            paddingTop: "100px",
                        },
                    }}
                >
                    <Typography
                        as="h1"
                        sx={{
                            fontSize: "2.6334rem",
                            letterSpacing: "0.009em",
                            lineHeight: "1.07812416em",
                            color: theme.palette.custom.darkBlue,
                            fontWeight: "700",
                            paddingBottom: "20px",
                            borderBottom: `2px solid ${theme.palette.custom.darkBlue}`,
                            textAlign: "center",
                            [theme.breakpoints.down("sm")]: {
                                fontSize: "0.8rem",
                            },
                        }}
                    >
                        {item.name}
                    </Typography>
                    <Typography
                        as="h1"
                        sx={{
                            fontSize: "2.1603rem",
                            letterSpacing: "0.009em",
                            lineHeight: "1.09375em",
                            color: theme.palette.custom.orange,
                            fontWeight: "400",
                            fontStyle: "italic",
                            marginTop: "15px",
                            textAlign: "center",
                            [theme.breakpoints.down("sm")]: {
                                fontSize: "0.6rem",
                            },
                        }}
                    >
                        {item.position}
                    </Typography>
                </Box>
            </Box>
            <Box className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link
                                    underline="hover"
                                    color="inherit"
                                    href={
                                        locale == "en"
                                            ? route("team")
                                            : locale == "id"
                                            ? route("team.id")
                                            : route("team.jp")
                                    }
                                    sx={{
                                        color: theme.palette.custom.darkBlue,
                                        fontSize: "1.5636rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "line-height",
                                    }}
                                >
                                    Team
                                </Link>
                                <Typography
                                    sx={{
                                        color: theme.palette.custom.orange,
                                        fontSize: "1.5636rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "line-height",
                                    }}
                                >
                                    {item.name}
                                </Typography>
                            </Breadcrumbs>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <Typography
                                as="h2"
                                sx={{
                                    color: theme.palette.custom.darkBlue,
                                    fontSize: "1.7282rem",
                                    letterSpacing: "0.009em",
                                    lineHeight: "line-height",
                                    fontWeight: "700",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                {t("teamDetailHead1")}
                            </Typography>
                        </div>
                        <Box
                            sx={{
                                p: {
                                    fontSize: "1.15215rem",
                                    lineHeight: "1.44642599em",
                                    letterSpacing: "0.009em",
                                    textAlign: "justify",
                                    color: theme.palette.custom.lightBlue,
                                    fontFamily: "OpenSauce",
                                },
                            }}
                            className="col-12"
                        >
                            {
                                <RichText
                                    htmlContent={checkLang(
                                        locale,
                                        item.biography_eng,
                                        item.biography,
                                        item.biography_jpn
                                    )}
                                />
                            }
                        </Box>
                        <div className="col-12 text-center">
                            <Typography
                                as="h2"
                                sx={{
                                    color: theme.palette.custom.darkBlue,
                                    fontSize: "1.7282rem",
                                    letterSpacing: "0.009em",
                                    lineHeight: "line-height",
                                    fontWeight: "700",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                {t("teamDetailHead2")}
                            </Typography>
                        </div>
                        <Box
                            sx={{
                                p: {
                                    fontSize: "1.15215rem",
                                    lineHeight: "1.44642599em",
                                    letterSpacing: "0.009em",
                                    textAlign: "justify",
                                    color: theme.palette.custom.lightBlue,
                                    fontFamily: "OpenSauce",
                                },
                            }}
                            className="col-12"
                        >
                            {
                                <RichText
                                    htmlContent={checkLang(
                                        locale,
                                        item.area_of_expertise_eng,
                                        item.area_of_expertise,
                                        item.area_of_expertise_jpn
                                    )}
                                />
                            }
                        </Box>
                    </div>
                </div>
                <ConsultationButton />
            </Box>
        </Guest>
    );
}

export default TeamDetail;
