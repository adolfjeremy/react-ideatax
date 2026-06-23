import {Typography, useTheme, Box} from "@mui/material"
import ArticleItem from "./ArticleItem"
import checkLang from "@/utils/checkLang";

export default function UpdateList({data, t, locale}) {
    const theme = useTheme();
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <Typography
                        sx={{
                            color: theme.palette.custom.black,
                            fontSize: "2.25rem",
                            fontWeight: "700",
                            lineHeight: "107.3%",
                            textAlign: "center",
                            mt:7,
                            [theme.breakpoints.down("md")]: {
                                fontSize: "1rem",
                            }
                        }}
                        as="h3"
                    >
                        {t('updates')}
                    </Typography>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <Box sx={{
                        display:"grid",
                        gridTemplateColumns:"repeat(3,1fr)",
                        gap: "2rem",
                        [theme.breakpoints.down("md")]: {
                            gridTemplateColumns: "repeat(2,1fr)",
                        }
                    }}>
                        {
                        data.map((item, idx) => (
                            <ArticleItem key={item.id} image={item.thumbnail} title={item.title} description={item.body} date={item.updated_at} idx={idx} type="Updates" route={checkLang(
                        locale,
                        route("update-detail", item.slug_eng),
                        route("update-detail.id", item.slug),
                        route("update-detail.jp", item.slug_jpn),
                        route("update-detail.ch", item.slug_ch? item.slug_ch : item.slug_eng),
                    )}/>
                        ))
                    }
                    </Box>
                </div>
            </div>
        </>
    )
}