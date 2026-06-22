import { Box, Typography, Link } from "@mui/material";
import renderTitle from "../../../../utils/renderTitle";

function DetailHero({ item, formatDate, checkLang, locale, theme }) {
    return (
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
                                paddingLeft: "6.25rem",
                                gap: "0.5rem",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: theme.palette.custom.black,
                                    fontSize: "4rem",
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: "1.5  rem",
                                    },
                                    lineHeight: "1.01561707em",
                                    letterSpacing: "13%",
                                    fontWeight: "700",
                                }}
                                variant="h1"
                            >
                                {renderTitle(item.title)}
                            </Typography>
                            <Link
                                sx={{
                                    fontSize: "2rem",
                                    color: theme.palette.custom.yellow,
                                    textDecoration: "none",
                                    lineHeight: "1.1875em",
                                    letterSpacing: "2%",
                                    fontWeight: "700",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.625",
                                    },
                                }}
                                href="#"
                            >
                                {item.article_category.title}
                            </Link>
                            <Typography
                                sx={{
                                    color: theme.palette.custom.black,
                                    fontSize: "2rem",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.625",
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
    );
}

export default DetailHero;
