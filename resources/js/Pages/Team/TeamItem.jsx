import { Box, Typography, useTheme, Link } from "@mui/material";

function TeamItem({ image, name, position, destination }) {
    const theme = useTheme();
    return (
        <Link
            sx={{
                overflow: "hidden",
                img: {
                    transition: "700ms ease-in-out",
                },
                "&:hover": {
                    img: {
                        transform: "scale(1.1)",
                    },
                },
            }}
            href={destination}
            className="col-3 col-md-2 p-0 position-relative"
        >
            <img src={image} alt={name} className="w-100" />
            <Box
                sx={{
                    position: "absolute",
                    top: { xs: "0", sm: "14px", md: "8px" },
                    bottom: { xs: "8px", sm: "auto" },
                    left: 0,
                    right: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "start",
                    padding: "0 6px",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: theme.palette.custom.black,
                        lineHeight: "1.1em",
                        padding: 0,
                        margin: 0,
                        letterSpacing: "0.009em",
                        textAlign: "center",
                        textTransform: "capitalize",
                        [theme.breakpoints.down("md")]: {
                            fontSize: "0.5625rem",
                        },
                    }}
                >
                    {name}
                </Typography>
                <Typography
                    sx={{
                        fontSize: {
                            xs: "0.65rem",
                            sm: "0.85rem",
                            md: "1.2rem",
                            lg: "1rem",
                        },
                        color: theme.palette.custom.black,
                        fontWeight: 300,
                        lineHeight: "1.1em",
                        padding: 0,
                        margin: 0,
                        letterSpacing: "0.009em",
                        textAlign: "center",
                    }}
                >
                    {position}
                </Typography>
            </Box>
        </Link>
    );
}

export default TeamItem;
