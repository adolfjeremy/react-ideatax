import React from "react";
import { Box, Typography, Link, useTheme } from "@mui/material";

const LanguageOption = ({ locale, currentLocale, href, label, flag }) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                gap: 1,
                img: {
                    width: "20px",
                },
            }}
        >
            {currentLocale ? (
                <>
                    <Typography
                        sx={{
                            fontSize: "0.8rem",
                            color: theme.palette.custom.white,
                            letterSpacing: ".009em",
                            textTransform: "capitalize",
                            textDecoration: "none",
                            padding: "0.5rem 0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                            "&:hover": {
                                color: theme.palette.custom.orange,
                            },
                        }}
                    >
                        {label}
                    </Typography>
                    <img src={flag} alt={`${label} flag`} />
                </>
            ) : (
                <Link
                    href={href}
                    sx={{
                        fontSize: "0.8rem",
                        color: theme.palette.custom.white,
                        letterSpacing: ".009em",
                        textTransform: "capitalize",
                        textDecoration: "none",
                        padding: "0.5rem 0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        gap: 1,
                        "&:hover": {
                            color: theme.palette.custom.orange,
                        },
                    }}
                >
                    {label}
                    <img src={flag} alt={`${label} flag`} />
                </Link>
            )}
        </Box>
    );
};

export default LanguageOption;
