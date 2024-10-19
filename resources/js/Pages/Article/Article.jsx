import { Box, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import Guest from "@/Layout/Guest";
import ReadMoreButton from "./ReadMoreButton";
import ArticleItem from "./ArticleItem";

function Article() {
    const { t } = useTranslation();
    const theme = useTheme();
    return (
        <Guest>
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
                        <div className="carousel-item active">
                            <img
                                src="https://ideatax.id/storage/article/WYSAb70JXlFvUHHmMPSLkOnxxsjdgQNACFWyEVCc.png"
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
                                        color: theme.palette.custom.darkBlue,
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
                                    Keeping Cash Flow Fair with Accelerated
                                    Restitution
                                </Typography>
                                <Typography
                                    sx={{
                                        color: theme.palette.custom.darkBlue,
                                        fontSize: "1.15215rem",
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "0.8rem",
                                        },
                                        margin: 0,
                                        padding: 0,
                                        lineHeight: "1.49999732em",
                                        letterSpacing: "0.009em",
                                    }}
                                >
                                    The government officially launched the
                                    Golden Visa at the end of July 2024.
                                    According to President Joko Widodo, the visa
                                    launch for super travelers aims to attract
                                    foreign investment from individuals and
                                    corporations. Furthermore, the president
                                    revealed that Indonesia...
                                </Typography>
                                <ReadMoreButton />
                            </Box>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://ideatax.id/storage/article/WYSAb70JXlFvUHHmMPSLkOnxxsjdgQNACFWyEVCc.png"
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
                                        color: theme.palette.custom.darkBlue,
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
                                    Keeping Cash Flow Fair with Accelerated
                                    Restitution
                                </Typography>
                                <Typography
                                    sx={{
                                        color: theme.palette.custom.darkBlue,
                                        fontSize: "1.15215rem",
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "0.8rem",
                                        },
                                        margin: 0,
                                        padding: 0,
                                        lineHeight: "1.49999732em",
                                        letterSpacing: "0.009em",
                                    }}
                                >
                                    The government officially launched the
                                    Golden Visa at the end of July 2024.
                                    According to President Joko Widodo, the visa
                                    launch for super travelers aims to attract
                                    foreign investment from individuals and
                                    corporations. Furthermore, the president
                                    revealed that Indonesia...
                                </Typography>
                                <ReadMoreButton />
                            </Box>
                        </div>
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
                        <ArticleItem />
                        <ArticleItem />
                        <ArticleItem />
                    </div>
                </div>
            </Box>
        </Guest>
    );
}

export default Article;
