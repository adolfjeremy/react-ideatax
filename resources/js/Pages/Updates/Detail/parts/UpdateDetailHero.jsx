import { Box, Typography, Link } from "@mui/material";

function UpdateDetailHero({ item, formatDate, checkLang, locale, theme }) {
    console.log(item);
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
                                paddingLeft: "3rem",
                                gap: "0.5rem",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: theme.palette.custom.darkBlue,
                                    fontSize: "4.0325rem",
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: "3rem",
                                    },
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: " 1.125rem",
                                    },
                                    lineHeight: "1.01561707em",
                                    letterSpacing: "0.009em",
                                    fontWeight: "700",
                                }}
                                variant="h1"
                            >
                                {checkLang(
                                    locale,
                                    item.title_eng,
                                    item.title,
                                    item.title_jpn
                                )}
                            </Typography>
                            <Link
                                sx={{
                                    fontSize: "1.9751rem",
                                    color: theme.palette.custom.orange,
                                    textDecoration: "none",
                                    lineHeight: "1.1875em",
                                    letterSpacing: "-0.054em",
                                    fontWeight: "700",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.8",
                                    },
                                }}
                                href="#"
                            >
                                {item.tax_update_category.title}
                            </Link>
                            <Typography
                                sx={{
                                    color: theme.palette.custom.lightBlue,
                                    fontSize: "1.4459rem",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.8rem",
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

export default UpdateDetailHero;
