import { Link, Typography, useTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useMotionValue, useTransform } from "framer-motion";
import checkLang from "@/utils/checkLang";
const MotionLink = motion.create(Link);

function ArticleSwipeable({ article, swipeData, setSwipeData, index, locale }) {
    const x = useMotionValue(0);
    const opacity = useTransform(x, [-150, 0, 150], [0, 3, 0]);

    const handleDragEnd = (article, x) => {
        if (Math.abs(x) > 50) {
            setSwipeData((prev) => {
                const index = prev.findIndex((v) => v.id === article.id);
                if (index === -1) return prev;
                const updated = [...prev];
                const [swipedItem] = updated.splice(index, 1);
                updated.push(swipedItem); // pindahkan ke belakang
                return updated;
            });
        }
    };

    const theme = useTheme();

    const CARD_OFFSET = 15;
    const SCALE_FACTOR = 0.01;

    return (
        <AnimatePresence>
            <MotionLink
                href={checkLang(
                    locale,
                    route("article-detail", article.slug_eng),
                    route("article-detail.id", article.slug),
                    route("article-detail.jp", article.slug_jpn),
                    route("article-detail.ch", article.slug_eng)
                )}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) =>
                    handleDragEnd(swipeData[0], info.point.x)
                }
                initial={{ opacity: 0, x: 100 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                drag="x"
                style={{ x, opacity }}
                animate={{
                    bottom: index * CARD_OFFSET,
                    scale: 1 - index * SCALE_FACTOR,
                    zIndex: swipeData.length - index,
                    opacity: 1,
                    x: 0,
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
                    backgroundImage: `url("/storage/${article.thumbnail}")`,
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
        </AnimatePresence>
    );
}

export default ArticleSwipeable;
