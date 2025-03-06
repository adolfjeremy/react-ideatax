import { useState } from "react";
import { Box, Typography, useTheme, Link } from "@mui/material";
import { usePage } from "@inertiajs/react";
import Guest from "@/Layout/Guest";
import checkLang from "@/utils/checkLang";
import RichText from "@/Components/RichText";
import formatDate from "@/utils/formatDate";
import CommentSection from "@/Components/CommentSection";
import Pagination from "@/Components/Pagination";

import "../article.scss";

function ArticleDetail() {
    const { locale, item, previousArticle, nextArticle, comment } =
        usePage().props;
    const theme = useTheme();

    return (
        <Guest
            en={route("article-detail", item.slug_eng)}
            id={route("article-detail.id", item.slug)}
            jp={
                item.slug_jpn
                    ? route("article-detail.jp", item.slug_jpn)
                    : route("article-detail.jp", item.slug_eng)
            }
            ch={
                item.slug_ch
                    ? route("article-detail.ch", item.slug_ch)
                    : route("article-detail.ch", item.slug_eng)
            }
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
                item.slug_ch
                    ? route("article-detail.ch", item.slug_ch)
                    : route("article-detail.jp", item.slug_eng)
            )}
            href={checkLang(
                locale,
                route("article-detail", item.slug_eng),
                route("article-detail.id", item.slug),
                route("article-detail.jp", item.slug_jpn),
                item.slug_ch
                    ? route("article-detail.ch", item.slug_ch)
                    : route("article-detail.jp", item.slug_eng)
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
                <div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
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
                                    paddingLeft: "3rem",
                                    gap: "0.5rem",
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: theme.palette.custom.darkBlue,
                                        fontSize: "4.0325rem",
                                        [theme.breakpoints.down("md")]: {
                                            fontSize: "3rem",
                                        },
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: " 1.125rem",
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
                                <Link
                                    sx={{
                                        fontSize: "1.9751rem",
                                        color: theme.palette.custom.orange,
                                        textDecoration: "none",
                                        lineHeight: "1.1875em",
                                        letterSpacing: "-0.054em",
                                        fontWeight: "700",
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "0.8",
                                        },
                                    }}
                                    href="#"
                                >
                                    {item.article_category.title}
                                </Link>
                                <Typography
                                    sx={{
                                        color: theme.palette.custom.lightBlue,
                                        fontSize: "1.4459rem",
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "0.8rem",
                                        },
                                        margin: 0,
                                        padding: 0,
                                        lineHeight: "1.42498753em",
                                        letterSpacing: "0.009em",
                                    }}
                                >
                                    {formatDate(item.created_at)}
                                </Typography>
                            </Box>
                        </div>
                    </div>
                </div>
            </Box>
            <Box component="article">
                <div className="container">
                    <div className="row px-md-5">
                        <Box
                            sx={{
                                ol: {
                                    listStyle: "auto",
                                },
                                ul: {
                                    listStyle: "auto",
                                },
                            }}
                            className="col-12 px-md-4 mt-5 article_body"
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
            </Box>
            {/* <ConsultationButton /> */}
            <Pagination
                prev={
                    previousArticle
                        ? checkLang(
                              locale,
                              route("article-detail", previousArticle.slug_eng),
                              route("article-detail.id", previousArticle.slug),
                              route(
                                  "article-detail.jp",
                                  previousArticle.slug_jpn
                              )
                          )
                        : ""
                }
                next={
                    nextArticle
                        ? checkLang(
                              locale,
                              route("article-detail", nextArticle.slug_eng),
                              route("article-detail.id", nextArticle.slug),
                              route("article-detail.jp", nextArticle.slug_jpn)
                          )
                        : ""
                }
            />
            <CommentSection
                article_id={item.id}
                comment={comment}
                likeCount={item.likes_count}
                shareUrl={checkLang(
                    locale,
                    route("event-detail", item.slug_eng),
                    route("event-detail.id", item.slug),
                    route("event-detail.jp", item.slug_jpn)
                )}
            />
        </Guest>
    );
}

export default ArticleDetail;
