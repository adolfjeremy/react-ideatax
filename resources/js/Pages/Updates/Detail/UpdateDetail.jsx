import { Box, useTheme, Button } from "@mui/material";
import { usePage } from "@inertiajs/react";
import Guest from "@/Layout/Guest";
import UpdateDetailHero from "./parts/UpdateDetailHero";
import RichText from "@/Components/RichText";
import Pagination from "@/Components/Pagination";
import checkLang from "@/utils/checkLang";
import formatDate from "@/utils/formatDate";

import "../../Article/article.scss";

function UpdateDetail() {
    const { locale, item, previousArticle, nextArticle } = usePage().props;
    const theme = useTheme();

    return (
        <Guest
            en={route("update-detail", item.slug_eng)}
            id={route("update-detail.id", item.slug)}
            jp={
                item.slug_jpn
                    ? route("update-detail.jp", item.slug_jpn)
                    : route("update-detail.jp", item.slug_eng)
            }
            ch={
                item.slug_ch
                    ? route("update-detail.ch", item.slug_ch)
                    : route("update-detail.ch", item.slug_eng)
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
                    ? route("update-detail.ch", item.slug_ch)
                    : route("update-detail.jp", item.slug_eng)
            )}
            href={checkLang(
                locale,
                route("update-detail", item.slug_eng),
                route("update-detail.id", item.slug),
                route("update-detail.jp", item.slug_jpn),
                item.slug_ch
                    ? route("update-detail.ch", item.slug_ch)
                    : route("update-detail.jp", item.slug_eng)
            )}
        >
            <UpdateDetailHero
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
                    {item.pdf && (
                        <div className="row px-md-5">
                            <div className="col-12 px-md-4 mt-4">
                                <Button
                                    href={`/storage/${item.pdf}`}
                                    variant="contained"
                                >
                                    Attachment
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </Box>
            <Pagination
                prev={
                    previousArticle
                        ? checkLang(
                              locale,
                              route("update-detail", previousArticle.slug_eng),
                              route("update-detail.id", previousArticle.slug),
                              route(
                                  "update-detail.jp",
                                  previousArticle.slug_jpn
                              )
                          )
                        : ""
                }
                next={
                    nextArticle
                        ? checkLang(
                              locale,
                              route("update-detail", nextArticle.slug_eng),
                              route("update-detail.id", nextArticle.slug),
                              route("update-detail.jp", nextArticle.slug_jpn)
                          )
                        : ""
                }
            />
        </Guest>
    );
}

export default UpdateDetail;
