import React, { Suspense, lazy } from "react";
import { Box, useTheme, Skeleton } from "@mui/material";
import { usePage } from "@inertiajs/react";
import Guest from "@/Layout/Guest";
import DetailHero from "./parts/DetailHero";
import RichText from "@/Components/RichText";

const CommentSection = lazy(() => import("@/Components/CommentSection"));
const Pagination = lazy(() => import("@/Components/Pagination"));
import checkLang from "@/utils/checkLang";
import formatDate from "@/utils/formatDate";

import "../article.scss";

function ArticleDetail() {
    const { locale, item, previousArticle, nextArticle, comments } =
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
            description={item.meta_description}
            seo_title={item.SEO_title}
            href={checkLang(
                locale,
                route("article-detail", item.slug_eng),
                route("article-detail.id", item.slug),
                route("article-detail.jp", item.slug_jpn),
                item.slug_ch
                    ? route("article-detail.ch", item.slug_ch)
                    : route("article-detail.jp", item.slug_eng),
            )}
        >
            <DetailHero
                item={item}
                theme={theme}
                formatDate={formatDate}
                locale={locale}
                checkLang={checkLang}
            />
            <Box sx={{ px: 20, [theme.breakpoints.down("md")]: {
                        px:0
                    } }} component="article">
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
                                p: {
                                    [theme.breakpoints.down("md")]: {
                                        lineHeight: "15px !important",
                                    }
                                }
                            }}
                            className="col-12 px-md-4 mt-5 article_body"
                        >
                            {<RichText htmlContent={item.body} />}
                        </Box>
                    </div>
                </div>
            </Box>
            <Box sx={{ contentVisibility: "auto", containIntrinsicSize: "auto 400px" }}>
                <Suspense fallback={<Skeleton variant="rectangular" height={100} sx={{ mt: 5 }} />}>
                    <Pagination
                        prev={
                            previousArticle
                                ? checkLang(
                                      locale,
                                      route("article-detail", previousArticle.slug_eng),
                                      route("article-detail.id", previousArticle.slug),
                                      route(
                                          "article-detail.jp",
                                          previousArticle.slug_jpn,
                                      ),
                                  )
                                : ""
                        }
                        next={
                            nextArticle
                                ? checkLang(
                                      locale,
                                      route("article-detail", nextArticle.slug_eng),
                                      route("article-detail.id", nextArticle.slug),
                                      route("article-detail.jp", nextArticle.slug_jpn),
                                  )
                                : ""
                        }
                    />
                </Suspense>

                <Suspense fallback={<Skeleton variant="rectangular" height={400} sx={{ mt: 2 }} />}>
                    <CommentSection
                        article_id={item.id}
                        comment={comments}
                        likeCount={item.likes_count}
                        shareUrl={checkLang(
                            locale,
                            route("event-detail", item.slug_eng),
                            route("event-detail.id", item.slug),
                            route("event-detail.jp", item.slug_jpn),
                        )}
                    />
                </Suspense>
            </Box>
        </Guest>
    );
}

export default ArticleDetail;
