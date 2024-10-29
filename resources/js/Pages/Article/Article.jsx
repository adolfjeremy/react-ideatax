import { Box, Typography, useTheme } from "@mui/material";
import { usePage } from "@inertiajs/react";
import Guest from "@/Layout/Guest";
import ReadMoreButton from "./ReadMoreButton";
import ArticleItem from "./ArticleItem";
import checkLang from "@/utils/checkLang";
import TruncateRichText from "@/Components/TruncateRichText";
import Pagination from "@/Components/Pagination";

function Article() {
    const { locale, page, latest, articles } = usePage().props;
    const theme = useTheme();
    return (
        <Guest
            en={route("articles")}
            id={route("articles.id")}
            jp={route("articles.jp")}
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
                route("articles"),
                route("articles.id"),
                route("articles.jp")
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
                }}
            >
                <div
                    id="carouselExampleSlidesOnly"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        {latest.map((item, i) => (
                            <div
                                key={item.id}
                                className={`carousel-item ${
                                    i === 0 ? "active" : ""
                                }`}
                            >
                                <img
                                    src={`/storage/${item.photo}`}
                                    className="d-block w-100"
                                    alt="title"
                                />
                                <Box
                                    sx={{
                                        position: "absolute",
                                        left: 0,
                                        bottom: 0,
                                        top: 0,
                                        right: "35vw",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        justifyContent: "center",
                                        paddingLeft: "10%",
                                        gap: "0.5rem",
                                        [theme.breakpoints.down("sm")]: {
                                            inset: 0,
                                        },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: theme.palette.custom
                                                .darkBlue,
                                            fontSize: "3.0861rem",
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: "1rem",
                                            },
                                            lineHeight: "1.0999978em",
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
                                    <TruncateRichText
                                        style={{
                                            color: theme.palette.custom
                                                .darkBlue,
                                            fontSize: "1.15215rem",
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: "0.8rem",
                                            },
                                            margin: 0,
                                            padding: 0,
                                            lineHeight: "1.49999732em",
                                            letterSpacing: "0.009em",
                                        }}
                                        htmlContent={checkLang(
                                            locale,
                                            item.body_eng,
                                            item.body,
                                            item.body_jpn
                                        )}
                                    />
                                    <ReadMoreButton
                                        desctination={
                                            locale == "en"
                                                ? route(
                                                      "article-detail",
                                                      item.slug_eng
                                                  )
                                                : locale == "id"
                                                ? route(
                                                      "article-detail.id",
                                                      item.slug
                                                  )
                                                : route(
                                                      "article-detail.jp",
                                                      item.slug_jpn
                                                  )
                                        }
                                    />
                                </Box>
                            </div>
                        ))}
                    </div>
                </div>
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
                                Latest articles
                            </Typography>
                        </div>
                    </div>
                    <div className="row">
                        {articles.data.map((item) => (
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
