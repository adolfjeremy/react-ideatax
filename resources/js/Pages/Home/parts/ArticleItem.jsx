import { Box, Link, Typography, useTheme } from "@mui/material";
import formatDate from "@/utils/formatDate";

export default function ArticleItem({image, title, description, date, route, idx, type="Article"}) {
    const theme = useTheme();
    return (
        <Box sx={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "repeat(3, 1fr)",
            [theme.breakpoints.down("md")]: {
                display: idx < 1 ? "none" : "grid",
                gridTemplateColumns: "1fr",
                gridTemplateRows: "repeat(2, 1fr)",
            },
        }}>
            <Box sx={{
                display:"flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 2,
                img: {
                    width:"88px",
                    height:"63px",
                    objectFit: "cover",
                    [theme.breakpoints.down("md")]: {
                        width:"49px",
                        height:"37px",
                    },
                }
            }}>
                <img src={`/storage/${image}`} alt={title} />
                <Box>
                <Typography sx={{
                    color: theme.palette.custom.yellow,
                    fontSize:"1.125rem",
                    fontWeight: 700,
                    [theme.breakpoints.down("md")]: {
                        fontSize: "0.375rem",
                    },
                    }}>{formatDate(date)}</Typography>
                    <Typography sx={{
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    lineHeight: "147.3%",
                    letterSpacing: "5%",
                    color: theme.palette.custom.black,
                    [theme.breakpoints.down("md")]: {
                        fontSize: "0.5rem",
                    },
                }} as="h4">{title}</Typography>
                </Box>
            </Box>
            <Box>
                <Typography sx={{
                    fontWeight: 300,
                    fontSize: "1rem",
                    lineHeight: "147.3%",
                    letterSpacing: "5%",
                    color: theme.palette.custom.black,
                    [theme.breakpoints.down("md")]: {
                        fontSize: "0.625rem",
                    },
                }} variant="body2" component="p">{description}</Typography>
            </Box>
            <Box>
                <Link sx={{
                    fontSize: "1rem",
                    letterSpacing: "5%",
                    color: theme.palette.custom.yellow,
                    fontWeight: 700,
                    textDecoration:"none",
                    cursor: "pointer",
                    [theme.breakpoints.down("md")]: {
                        fontSize: "0.5rem",
                    },
                }} href={route} variant="body2" component="p">
                    Read Full {type}
                </Link>
            </Box>
        </Box>
    )
}