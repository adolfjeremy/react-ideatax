import { Typography, Link, useTheme, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

function ExpertiseItem({ head, desc, image, route }) {
    const theme = useTheme();
    const { t } = useTranslation();
    return (
        <Box
            sx={{
                display:"flex",
                svg: {
                    fontSize: "2.5rem",
                    [theme.breakpoints.down("md")]: {
                        fontSize: "1rem",
                    },
                },
            }}
        >
            <Box sx={{
                display: "flex",
                alignItems: "start",
                mt: 1,
                fontWeight: 300,
                [theme.breakpoints.down("md")]: {
                    display:"none"
                },
            }}>
                {image}
            </Box>
            <Box sx={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gridTemplateRows:"0.8fr 3fr",
            }} className="ms-0 ms-md-3">
                <Link
                    sx={{
                        fontWeight: 700,
                        color: theme.palette.custom.black,
                        lineHeight: "39px",
                        letterSpacing: "12%",
                        fontSize: "1.5rem",
                        textDecoration:"none",
                        transition:"all 0.3s ease",
                        "&:hover":{
                            color:theme.palette.custom.yellow
                        },
                        [theme.breakpoints.down("md")]: {
                            fontSize: "1.4rem",
                        },
                    }}
                    href={route}
                >
                    {head}
                </Link>
                <Typography
                    sx={{
                        color: theme.palette.custom.black,
                        lineHeight: "35px",
                        letterSpacing: "12%",
                        fontWeight: 300,
                        fontSize: "1.25rem",
                        margin: "0",
                        [theme.breakpoints.down("md")]: {
                            fontSize: "0.9rem",
                        },
                    }}
                >
                    {desc}
                </Typography>
            </Box>
        </Box>
    );
}

export default ExpertiseItem;
