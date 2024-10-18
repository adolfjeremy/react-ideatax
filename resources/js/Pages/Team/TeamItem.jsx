import { Box, Typography, useTheme, Link } from "@mui/material";

function TeamItem({
    image = "https://ideatax.id/storage/team/tffMxYM6DF2Uu8THJgUPfPBRP05mQca5UqA8F2UZ.png",
    name = "Jonathan Nainggolan",
    position = "Partner",
    i,
}) {
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
            href="#"
            className="col-4 p-0 position-relative"
        >
            <img src={image} alt={name} className="w-100" />
            <Box
                sx={{
                    position: "absolute",
                    top: "20px",
                    left: 0,
                    right: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "1.704rem",
                        fontWeight: "700",
                        color: theme.palette.custom.orange,
                        lineHeight: "1.08664337em",
                        padding: 0,
                        margin: 0,
                        letterSpacing: "0.009em",
                    }}
                >
                    {name}
                </Typography>
                <Typography
                    sx={{
                        fontSize: "1.704rem",
                        color: theme.palette.custom.orange,
                        lineHeight: "1.08664337em",
                        padding: 0,
                        margin: 0,
                        letterSpacing: "0.009em",
                    }}
                >
                    {position}
                </Typography>
            </Box>
        </Link>
    );
}

export default TeamItem;
