// import ArticleItem from "../ArticleItem";
import TruncateRichText from "@/Components/TruncateRichText";
import checkLang from "@/utils/checkLang";
import ArticleItem from "../../Home/parts/ArticleItem"

function UpdateList({ updates, locale, theme }) {
    return (
        <>
            {updates.data.map((item) => (
                <div className="col-12 mt-4">
                    <ArticleItem
                    key={item.id}
                    title={item.title}
                    image={item.thumbnail}
                    description={item.body}
                    date={item.created_at}
                    route={checkLang(
                        locale,
                        route("update-detail", item.slug_eng),
                        route("update-detail.id", item.slug),
                        route("update-detail.jp", item.slug_jpn),
                        route("update-detail.ch", item.slug_ch? item.slug_ch : item.slug_eng),
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
                            htmlContent={item.body}
                        />
                    }
                />
                </div>
            ))}
        </>
    );
}

export default UpdateList;
