import { Box, Typography, Divider } from "@mui/material";

function TeamItem({ theme, name, role, desc, image, index }) {
    return (
        <Box
            sx={{
                flex: "0 0 25%", // default: untuk xs (mobile)
                maxWidth: "25%",
                [theme.breakpoints.up("sm")]: {
                    flex: "0 0 12%",
                    maxWidth: "12%",
                },
            }}
            className="col-3 col-md-1 px-lg-2 px-1 py-1"
        >
            <Box
                sx={{
                    backgroundColor: theme.palette.custom.darkBlue,
                    borderRadius: "46px",
                    display: "flex",
                    flexDirection:
                        index % 2 === 0 ? "column" : "column-reverse",
                    alignItems: "center",
                    justifyContent: "between",
                    overflow: "hidden",
                    padding: 0,
                    mx: "1px",
                    [theme.breakpoints.down("md")]: {
                        borderRadius: "16px",
                    },
                }}
            >
                <Box sx={{ p: 1, mt: "1rem" }}>
                    <Typography
                        sx={{
                            color: theme.palette.custom.white,
                            fontSize: "0.8125rem",
                            lineHeight: "1",
                            fontWeight: "700",
                            textAlign: "center",
                            textTransform: "uppercase",
                            [theme.breakpoints.down("md")]: {
                                fontSize: "0.625rem",
                            },
                        }}
                    >
                        {name}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "0.8125rem",
                            fontWeight: "700",
                            textAlign: "center",
                            color: theme.palette.custom.orange,
                            mt: "2px",
                            [theme.breakpoints.down("md")]: {
                                fontSize: "0.625rem",
                            },
                        }}
                    >
                        {role}
                    </Typography>

                    <Divider
                        sx={{
                            borderColor: "#ffffff",
                            borderWidth: "0.7px",
                            opacity: 1,
                            my: "8px",
                        }}
                    />
                    <Typography
                        sx={{
                            color: theme.palette.custom.white,
                            fontSize: "0.6rem",
                            fontWeight: "700",
                            textAlign: "center",
                            my: "10px",
                        }}
                    >
                        {desc}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        img: {
                            borderRadius: "46px",
                            [theme.breakpoints.down("md")]: {
                                borderRadius: "16px",
                            },
                        },
                    }}
                >
                    <img src={image} alt={name} className="w-100" />
                </Box>
            </Box>
        </Box>
    );
}

export default TeamItem;
