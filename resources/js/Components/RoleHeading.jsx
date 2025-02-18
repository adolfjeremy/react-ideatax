import React from "react";
import { usePage } from "@inertiajs/react";
import { Box, Typography, useTheme } from "@mui/material";
import checkLang from "@/utils/checkLang";

function RoleHeading() {
    const theme = useTheme();
    const { locale } = usePage().props;
    return (
        <Box className="row" mt={8}>
            <div className="col-12 col-md-5 text-start">
                {checkLang(
                    locale,
                    <Typography
                        sx={{
                            fontSize: "2rem",
                            letterSpacing: "0.009em",
                            color: theme.palette.custom.darkBlue,
                            fontWeight: "600",
                            mb: 2,
                            [theme.breakpoints.down("sm")]: {
                                fontSize: "1.25rem",
                            },
                        }}
                    >
                        How{" "}
                        <Typography
                            as="span"
                            sx={{
                                color: theme.palette.custom.orange,
                                fontSize: "2rem",
                                letterSpacing: "0.009em",
                                fontWeight: "600",
                                mb: 2,
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: "1.25rem",
                                },
                            }}
                        >
                            Ideatax
                        </Typography>{" "}
                        Serves as <br />
                        Your Tax Partner
                    </Typography>,
                    <Typography
                        sx={{
                            fontSize: "2rem",
                            letterSpacing: "0.009em",
                            color: theme.palette.custom.darkBlue,
                            fontWeight: "600",
                            mb: 2,
                            [theme.breakpoints.down("sm")]: {
                                fontSize: "1.25rem",
                            },
                        }}
                    >
                        Peran{" "}
                        <Typography
                            as="span"
                            sx={{
                                color: theme.palette.custom.orange,
                                fontSize: "2rem",
                                letterSpacing: "0.009em",
                                fontWeight: "600",
                                mb: 2,
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: "1.25rem",
                                },
                            }}
                        >
                            Ideatax
                        </Typography>{" "}
                        Sebagai <br />
                        Partner Pajak Anda
                    </Typography>,
                    <Typography
                        sx={{
                            fontSize: "2rem",
                            letterSpacing: "0.009em",
                            color: theme.palette.custom.darkBlue,
                            fontWeight: "600",
                            mb: 2,
                            [theme.breakpoints.down("sm")]: {
                                fontSize: "1.25rem",
                            },
                        }}
                    >
                        <Typography
                            as="span"
                            sx={{
                                color: theme.palette.custom.orange,
                                fontSize: "2rem",
                                letterSpacing: "0.009em",
                                fontWeight: "600",
                                mb: 2,
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: "1.25rem",
                                },
                            }}
                        >
                            Ideatax
                        </Typography>{" "}
                        の税務パートナーとしての役割
                    </Typography>
                )}
            </div>
        </Box>
    );
}

export default RoleHeading;
