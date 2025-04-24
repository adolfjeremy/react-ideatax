import { Link, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useMotionValue, useTransform } from "framer-motion";
import checkLang from "@/utils/checkLang";
const MotionLink = motion(Link);

function ArticleSwipeable({ article, swipeData, setSwipeData, index, locale }) {
    const x = useMotionValue(0);
    const opacity = useTransform(x, [-150, 0, 150], [0, 3, 0]);

    const handleDragEnd = () => {
        if (Math.abs(x.get()) > 50) {
            setSwipeData((pv) => pv.filter((v) => v.id !== article.id));
        }
    };
    const theme = useTheme();

    const CARD_OFFSET = 15;
    const SCALE_FACTOR = 0.01;

    return (
        <MotionLink
            href={checkLang(
                locale,
                route("article-detail", article.slug_eng),
                route("article-detail.id", article.slug),
                route("article-detail.jp", article.slug_jpn),
                route("article-detail.ch", article.slug_eng)
            )}
            onDragEnd={handleDragEnd}
            drag="x"
            dragConstraints={{
                left: 0,
                right: 0,
            }}
            style={{ x, opacity }}
            animate={{
                bottom: index * CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: swipeData.length - index,
            }}
            sx={{
                gridRow: 1,
                gridColumn: 1,
                position: "relative",
                width: "75vw",
                height: "50vh",
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.4)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                backgroundColor: "#000", // fallback kalau image
                backgroundImage: `url(/storage/${article.thumbnail}})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "transform 0.3s ease",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                        "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))",
                }}
            />
            <Typography
                variant="subtitle1"
                sx={{
                    position: "absolute",
                    bottom: "30%",
                    left: "5%",
                    color: "white",
                    fontWeight: "bolder",
                    textAlign: "center",
                    fontSize: "1.5rem",
                    color: theme.palette.custom.white,
                }}
            >
                {checkLang(
                    locale,
                    article.title_eng,
                    article.title,
                    article.title.jp,
                    article.title.ch
                )}
            </Typography>
        </MotionLink>
    );
}

export default ArticleSwipeable;
