import { Box, useTheme } from "@mui/material";
import { usePage } from "@inertiajs/react";
import Guest from "@/Layout/Guest";
import DetailHero from "./parts/DetailHero";
import RichText from "@/Components/RichText";
import CommentSection from "@/Components/CommentSection";
import Pagination from "@/Components/Pagination";
import checkLang from "@/utils/checkLang";
import formatDate from "@/utils/formatDate";

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
            <DetailHero
                item={item}
                theme={theme}
                formatDate={formatDate}
                locale={locale}
                checkLang={checkLang}
            />
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
