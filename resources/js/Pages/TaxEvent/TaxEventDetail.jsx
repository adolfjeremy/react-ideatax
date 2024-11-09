import { usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { Box, Typography, useTheme } from "@mui/material";
import Guest from "@/Layout/Guest";
import checkLang from "@/utils/checkLang";
import formatDate from "@/utils/formatDate";
import RichText from "@/Components/RichText";
import ArticleItem from "../Article/ArticleItem";
import TruncateRichText from "@/Components/TruncateRichText";
import ConsultationButton from "@/Components/ConsultationButton";

import "@/Pages/Article/article.scss";

function TaxEventDetail() {
    const { locale, item, events, articles } = usePage().props;
    const { t } = useTranslation();
    const theme = useTheme();
    return (
        <Guest
            en={route("event-detail", item.slug_eng)}
            id={route("event-detail.id", item.slug)}
            jp={
                item.slug_jpn
                    ? route("event-detail.jp", item.slug_jpn)
                    : route("event-detail", item.slug_eng)
            }
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
                route("event-detail", item.slug_eng),
                route("event-detail.id", item.slug),
                route("event-detail.jp", item.slug_jpn)
            )}
        >
            <Box
                sx={{
                    paddingTop: "100px",
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <img
                                src={`/storage/${item.photo}`}
                                alt={checkLang(
                                    locale,
                                    item.title_eng,
                                    item.title,
                                    item.title_jpn
                                )}
                            />
                        </div>
                        <div className="d-none d-md-block col-md-4">
                            <div className="row">
                                <div className="col-12">
                                    <Typography
                                        sx={{
                                            fontSize: "1.125rem",
                                            lineHeight: "1.43749551em",
                                            fontWeight: "600",
                                            color: theme.palette.custom
                                                .darkBlue,
                                            textAlign: "start",
                                        }}
                                        as="h2"
                                    >
                                        {t("eventHead")}
                                    </Typography>
                                </div>
                                {events.map((event) => (
                                    <Box
                                        component="a"
                                        href={checkLang(
                                            locale,
                                            route(
                                                "event-detail",
                                                item.slug_eng
                                            ),
                                            route("event-detail.id", item.slug),
                                            route(
                                                "event-detail.jp",
                                                item.slug_jpn
                                            )
                                        )}
                                        className="col-12 py-3"
                                        sx={{
                                            textDecoration: "none",
                                            backgroundColor:
                                                theme.palette.custom.darkBlue,
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: "0.9375rem",
                                                lineHeight: "1.43749551em",
                                                color: theme.palette.custom
                                                    .white,
                                                textAlign: "start",
                                            }}
                                            as="h3"
                                        >
                                            {checkLang(
                                                locale,
                                                event.title_eng,
                                                event.title,
                                                event.title_jpn
                                            )}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "0.875rem",
                                                lineHeight: "1.43749551em",
                                                color: theme.palette.custom
                                                    .white,
                                                textAlign: "center",
                                                mt: 2,
                                            }}
                                            as="span"
                                        >
                                            {formatDate(event.updated_at)}
                                        </Typography>
                                    </Box>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
            <Box>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 mt-4">
                            <Typography
                                sx={{
                                    color: theme.palette.custom.darkBlue,
                                    fontSize: "1.25rem",
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: "1rem",
                                    },
                                    lineHeight: "1.01561707em",
                                    letterSpacing: "0.009em",
                                    fontWeight: "700",
                                }}
                                variant="h1"
                            >
                                {checkLang(
                                    locale,
                                    item.title_eng,
                                    item.title,
                                    item.title_jpn
                                )}
                            </Typography>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 article_body">
                            <Box
                                sx={{
                                    ol: {
                                        listStyle: "auto",
                                    },
                                    ul: {
                                        listStyle: "auto",
                                    },
                                }}
                                className="col-12 mt-5 article_body"
                            >
                                {
                                    <RichText
                                        htmlContent={checkLang(
                                            locale,
                                            item.body_eng,
                                            item.body,
                                            item.body_jpn
                                        )}
                                    />
                                }
                            </Box>
                        </div>
                    </div>
                </div>
            </Box>
            <ConsultationButton />
            <Box className="d-block d-md-none my-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Typography
                                sx={{
                                    fontSize: "1.125rem",
                                    lineHeight: "1.43749551em",
                                    fontWeight: "600",
                                    color: theme.palette.custom.darkBlue,
                                    textAlign: "start",
                                }}
                                as="h2"
                            >
                                {t("eventHead")}
                            </Typography>
                        </div>
                        {events.map((event) => (
                            <Box
                                component="a"
                                href={checkLang(
                                    locale,
                                    route("event-detail", item.slug_eng),
                                    route("event-detail.id", item.slug),
                                    route("event-detail.jp", item.slug_jpn)
                                )}
                                className="col-12 py-3"
                                sx={{
                                    textDecoration: "none",
                                    backgroundColor:
                                        theme.palette.custom.darkBlue,
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "0.9375rem",
                                        lineHeight: "1.43749551em",
                                        color: theme.palette.custom.white,
                                        textAlign: "start",
                                    }}
                                    as="h3"
                                >
                                    {checkLang(
                                        locale,
                                        event.title_eng,
                                        event.title,
                                        event.title_jpn
                                    )}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "0.875rem",
                                        lineHeight: "1.43749551em",
                                        color: theme.palette.custom.white,
                                        textAlign: "center",
                                        mt: 2,
                                    }}
                                    as="span"
                                >
                                    {formatDate(event.updated_at)}
                                </Typography>
                            </Box>
                        ))}
                    </div>
                </div>
            </Box>
            <Box>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-12">
                            <Typography
                                sx={{
                                    color: theme.palette.custom.orange,
                                    fontSize: "2.30375rem",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "1.6rem",
                                    },
                                    lineHeight: "1.17857248em",
                                    letterSpacing: "0.009em",
                                }}
                                variant="h2"
                            >
                                Latest articles
                            </Typography>
                        </div>
                    </div>
                    <div className="row">
                        {articles.map((item) => (
                            <ArticleItem
                                key={item.id}
                                title={checkLang(
                                    locale,
                                    item.title_eng,
                                    item.title,
                                    item.title_jpn
                                )}
                                image={`/storage/${item.thumbnail}`}
                                desctination={
                                    locale == "en"
                                        ? route("article-detail", item.slug_eng)
                                        : locale == "id"
                                        ? route("article-detail.id", item.slug)
                                        : route(
                                              "article-detail.jp",
                                              item.slug_jpn
                                          )
                                }
                                desc={
                                    <TruncateRichText
                                        style={{
                                            color: theme.palette.custom
                                                .lightBlue,
                                            fontSize: "0.8939rem",
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: "0.8939rem",
                                            },
                                            lineHeight: "1.17857248em",
                                            letterSpacing: "0.009em",
                                            padding: 0,
                                            margin: 0,
                                        }}
                                        htmlContent={checkLang(
                                            locale,
                                            item.body_eng,
                                            item.body,
                                            item.body_jpn
                                        )}
                                    />
                                }
                            />
                        ))}
                    </div>
                </div>
            </Box>
        </Guest>
    );
}

export default TaxEventDetail;
