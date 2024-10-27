import { useTheme, Box, Typography, Link } from "@mui/material";

function RoundedArticle({ img, title, category, timeStamp, detail }) {
    const theme = useTheme();
    return (
        <div className="col-12 col-md-6 ps-0 d-flex align-items-center mt-5">
            <Box
                sx={{
                    height: "110px",
                    width: "110px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    img: {
                        height: "110px",
                        width: "auto",
                        maxWidth: "none",
                    },
                }}
            >
                <img src={img} alt={title} />
            </Box>
            <Box
                sx={{ marginLeft: "10px", width: "calc(100% - 120px)" }}
                className="d-flex flex-column"
            >
                <Typography
                    sx={{
                        fontSize: "1.2rem",
                        color: theme.palette.custom.orange,
                        lineHeight: "1.4062522em",
                        letterSpacing: "0.009em",
                        fontWeight: "600",
                        [theme.breakpoints.down("sm")]: {
                            fontSize: "0.876rem",
                        },
                    }}
                >
                    {category} - {timeStamp}
                </Typography>
                <Link
                    href={detail}
                    sx={{
                        fontSize: "1.6rem",
                        color: theme.palette.custom.lightBlue,
                        lineHeight: "1.4062522em",
                        letterSpacing: "0.009em",
                        fontWeight: "400",
                        transition: "all 300ms ease-in-out",
                        "&:hover": {
                            color: theme.palette.custom.orange,
                        },
                        [theme.breakpoints.down("sm")]: {
                            fontSize: "1.06259rem",
                        },
                    }}
                    underline="none"
                >
                    {title}
                </Link>
            </Box>
        </div>
    );
}

export default RoundedArticle;
