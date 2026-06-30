import { Box, Typography, Link } from "@mui/material";

function UpdateDetailHero({ item, formatDate, checkLang, locale, theme }) {
    return (
        <Box
            component="section"
            sx={{
                height: "70svh",
                [theme.breakpoints.up("md")]: {
                    height: "100svh",
                },
                overflow: "hidden",
                position: "relative",
            }}
        >
            <img
                src={`/storage/${item.photo}`}
                alt={item.title || "title"}
                fetchPriority="high"
                loading="eager"
                className="w-100 h-100 object-fit-cover"
            />
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    padding: "0 6rem",
                    zIndex: 100,
                    [theme.breakpoints.down("md")]: {
                        padding: "0 2rem",
                    },
                    gap: "0.5rem",
                }}
            >
                <Typography
                    sx={{
                        color: theme.palette.custom.black,
                        fontSize: "4rem",
                        [theme.breakpoints.down("md")]: {
                            fontSize: "1.5rem",
                        },
                        lineHeight: "1.01561707em",
                        letterSpacing: "13%",
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
                        fontSize: "2rem",
                        color: theme.palette.custom.yellow,
                        textDecoration: "none",
                        lineHeight: "1.1875em",
                        letterSpacing: "2%",
                        fontWeight: "700",
                        [theme.breakpoints.down("sm")]: {
                            fontSize: "0.625rem",
                        },
                    }}
                    href="#"
                >
                    {item.tax_update_category?.title || ""}
                </Link>
                <Typography
                    sx={{
                        color: theme.palette.custom.black,
                        fontSize: "2rem",
                        [theme.breakpoints.down("sm")]: {
                            fontSize: "0.625rem",
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
        </Box>
    );
}

export default UpdateDetailHero;
