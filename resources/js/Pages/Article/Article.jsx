import { Box, Typography, useTheme } from "@mui/material";
import { usePage } from "@inertiajs/react";
import Guest from "@/Layout/Guest";
import LatestCarousel from "./parts/LatestCarousel";
import ArticleLists from "./parts/ArticleLists";
import checkLang from "@/utils/checkLang";
import Pagination from "@/Components/Pagination";
import { useTranslation } from "react-i18next";

function Article() {
    const { locale, page, latest, articles } = usePage().props;
    const theme = useTheme();
    const { t } = useTranslation();
    return (
        <Guest
            en={route("articles")}
            id={route("articles.id")}
            jp={route("articles.jp")}
            ch={route("articles.ch")}
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
                route("articles"),
                route("articles.id"),
                route("articles.jp"),
                route("articles.ch")
            )}
        >
            <Box
                component="section"
                sx={{
                    position: "relative",
                    [theme.breakpoints.up("md")]: {
                        maxHeight: "100vh",
                        overflow: "hidden",
                    },
                    [theme.breakpoints.down("md")]: {
                        paddingTop: "100px",
                    },
                }}
            >
                <LatestCarousel data={latest} locale={locale} theme={theme} />
            </Box>
            <Box className="py-3">
                <div className="container">
                    <div className="row">
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
                                {t("latestArticle")}
                            </Typography>
                        </div>
                    </div>
                    <div className="row">
                        <ArticleLists
                            articles={articles}
                            locale={locale}
                            theme={theme}
                        />
                    </div>
                    <div className="row mt-5">
                        <Pagination
                            prev={articles.prev_page_url}
                            next={articles.next_page_url}
                        />
                    </div>
                </div>
            </Box>
        </Guest>
    );
}

export default Article;
