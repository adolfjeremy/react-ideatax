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
    console.log(item);
    return (
        <Guest
            en={route("team-detail", item.slug)}
            id={route("team-detail.id", item.slug)}
            jp={route("team-detail.jp", item.slug)}
            ch={route("team-detail.ch", item.slug)}
            description={checkLang(
                locale,
                item.description_eng,
                item.description,
                item.description_jpn,
                item.description_ch,
            )}
            seo_title={checkLang(
                locale,
                item.SEO_title_eng,
                item.SEO_title,
                item.SEO_title_jpn,
                item.SEO_title_ch,
            )}
            href={checkLang(
                locale,
                route("team-detail", item.slug),
                route("team-detail.id", item.slug),
                route("team-detail.jp", item.slug),
                route("team-detail.ch", item.slug),
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
                        alignItems: "start",
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
                            fontSize: "4rem",
                            letterSpacing: "5%",
                            lineHeight: "1.07812416em",
                            color: theme.palette.custom.black,
                            fontWeight: "700",
                            paddingBottom: "20px",
                            textAlign: "center",
                            textTransform: "capitalize",
                            [theme.breakpoints.down("sm")]: {
                                fontSize: "1.5rem",
                            },
                        }}
                    >
                        {item.name}
                    </Typography>
                    <Typography
                        as="h1"
                        sx={{
                            fontSize: "2rem",
                            letterSpacing: "5%",
                            lineHeight: "1.09375em",
                            color: theme.palette.custom.yellow,
                            fontWeight: "300",
                            marginTop: "15px",
                            textAlign: "start",
                            [theme.breakpoints.down("md")]: {
                                fontSize: "0.75rem",
                            },
                        }}
                    >
                        {checkLang(
                            locale,
                            item.position.name_eng,
                            item.position.name,
                            item.position.name_jpn,
                            item.position.name_ch,
                        )}
                    </Typography>
                </Box>
            </Box>
            <Box className="py-3">
                <div className="container">
                    <div className="row mt-2">
                        <Box
                            sx={{
                                ul: {
                                    listStyleType: "disc",
                                },
                                p: {
                                    fontSize: "1.5rem",
                                    lineHeight: "1.44642599em",
                                    letterSpacing: "7%",
                                    textAlign: "left",
                                    fontWeight: 300,
                                    color: theme.palette.custom.black,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.625rem",
                                    },
                                },
                            }}
                            className="col-12 col-md-8"
                        >
                            {
                                <RichText
                                    htmlContent={item.biography}
                                />
                            }
                        </Box>
                        <Box sx={{
                                ul: {
                                    listStyleType: "disc",
                                },
                                p: {
                                    fontSize: "1.5rem",
                                    lineHeight: "1.44642599em",
                                    letterSpacing: "7%",
                                    textAlign: "left",
                                    fontWeight: 300,
                                    color: theme.palette.custom.black,
                                    fontFamily: "Lato",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.625rem",
                                    },
                                },
                            }} className="col-12 col-md-4 d-flex flex-column gap-3">
                                {
                                <>
                                    <Typography
                                    sx={{
                                        fontSize: "1.5rem",
                                        lineHeight: "1.44642599em",
                                        letterSpacing: "7%",
                                        textAlign: "left",
                                        fontWeight: 700,
                                        color: theme.palette.custom.black,
                                        fontFamily: "Lato",
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "0.625rem",
                                        },
                                    }}
                                    >
                                        Capabilities
                                    </Typography>
                                    <RichText
                                    htmlContent={item.capabilities}
                                    />
                                    <Typography
                                    sx={{
                                        fontSize: "1.5rem",
                                        lineHeight: "1.44642599em",
                                        letterSpacing: "7%",
                                        textAlign: "left",
                                        fontWeight: 700,
                                        color: theme.palette.custom.black,
                                        fontFamily: "Lato",
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "0.625rem",
                                        },
                                    }}
                                    >
                                        Credentials
                                    </Typography>
                                    <RichText
                                        htmlContent={item.credentials}
                                    />
                                    <Typography
                                    sx={{
                                        fontSize: "1.5rem",
                                        lineHeight: "1.44642599em",
                                        letterSpacing: "7%",
                                        textAlign: "left",
                                        fontWeight: 700,
                                        color: theme.palette.custom.black,
                                        fontFamily: "Lato",
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "0.625rem",
                                        },
                                    }}
                                    >
                                        Education
                                    </Typography>
                                    <RichText
                                        htmlContent={item.education}
                                    />
                                </>
                            }
                        </Box>
                    </div>
                    {item.awards?.length > 0 && (
                        <div className="row mt-5">
                            <div className="col-12 text-center ">
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
                                    Awards
                                </Typography>
                            </div>
                            <div className="row d-flex justify-content-center align0item">
                                {item.awards?.map((award) => (
                                    <div className="col-1" key={award.id}>
                                        <img
                                            src={award.image_url}
                                            alt={award.title}
                                            title={`${award.title} - ${award.year}`}
                                            className="w-100"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </Box>
        </Guest>
    );
}

export default TeamDetail;
