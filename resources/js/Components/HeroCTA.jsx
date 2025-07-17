import { Box, useTheme } from "@mui/material";

function HeroCTA({ image, children }) {
    const theme = useTheme();
    return (
        <Box
            sx={{
                [theme.breakpoints.down("md")]: {
                    paddingTop: "100px",
                },
            }}
            className="position-relative"
        >
            <img
                src={image}
                alt="Pemeriksaan Pajak Lancar, Perusahaan Aman"
                className="w-100"
            />
            <Box
                className="container"
                sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                <Box
                    sx={{
                        [theme.breakpoints.down("sm")]: {
                            height: "100%",
                        },
                    }}
                    className="row d-flex align-items-center justify-content-end"
                >
                    {children}
                </Box>
            </Box>
        </Box>
    );
}

export default HeroCTA;
