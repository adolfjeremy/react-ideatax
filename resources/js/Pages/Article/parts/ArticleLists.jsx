import React from "react";
import ArticleItem from "../ArticleItem";
import TruncateRichText from "@/Components/TruncateRichText";
import checkLang from "@/utils/checkLang";

function ArticleLists({ articles, locale, theme }) {
    return (
        <>
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
                    destination={checkLang(
                        locale,
                        item.slug_eng,
                        item.slug,
                        item.slug_jpn,
                        item.slug_eng
                    )}
                    locale={locale}
                    desc={
                        <TruncateRichText
                            style={{
                                color: theme.palette.custom.lightBlue,
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
        </>
    );
}

export default ArticleLists;
