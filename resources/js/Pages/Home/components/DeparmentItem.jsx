import { Box, Typography } from "@mui/material";

export default function DepartmentItem({image, name, desc, theme}) {
    return (
        <Box sx={{
            display:"grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            [theme.breakpoints.down("md")]: {
                gridTemplateColumns: "1fr",
                gap: "1.625rem"
            },
        }} >
            <Box sx={{
                img:{
                    borderRadius: "44px"
                }
            }}>
                <img src={`/storage/${image}`} alt={`department ${name}`} />
            </Box>
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                gap:2,
                justifyContent: "center",
                alignItems: "start"
            }}>
                <Typography sx={{
                    color: theme.palette.custom.black,
                    lineHeight: "1.18641819em",
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    letterSpacing: "7%", 
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "1.25rem",
                    },
                }} as="h3">
                    {name}
                </Typography>
                <Typography sx={{
                    color: theme.palette.custom.black,
                    lineHeight: "35px",
                    letterSpacing: "7%",
                    fontSize: "2rem",
                    fontWeight: "300",
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "1.25rem",
                    },
                }} as="h3">
                    {desc}
                </Typography>
            </Box>
        </Box>
    )
}