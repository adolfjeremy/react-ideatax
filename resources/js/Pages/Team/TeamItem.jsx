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
            className="col-4 p-0 position-relative"
        >
            <img src={image} alt={name} className="w-100" />
            <Box
                sx={{
                    position: "absolute",
                    top: { xs: "auto", sm: "14px", md: "20px" },
                    bottom: { xs: "8px", sm: "auto" },
                    left: 0,
                    right: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 6px",
                }}
            >
                <Typography
                    sx={{
                        fontSize: {
                            xs: "0.75rem",
                            sm: "1rem",
                            md: "1.35rem",
                            lg: "1.704rem",
                        },
                        fontWeight: "700",
                        color: theme.palette.custom.yellow,
                        lineHeight: "1.1em",
                        padding: 0,
                        margin: 0,
                        letterSpacing: "0.009em",
                        textAlign: "center",
                        textTransform: "capitalize",
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
                            lg: "1.704rem",
                        },
                        color: theme.palette.custom.yellow,
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
