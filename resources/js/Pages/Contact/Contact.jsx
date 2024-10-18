import { Box, Typography, useTheme, Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import Guest from "@/Layout/Guest";
import wall from "@/assets/images/wall.webp";

function Contact() {
    const theme = useTheme();
    const { t } = useTranslation();
    return (
        <Guest>
            <Box
                sx={{
                    backgroundImage: `url(${wall})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    marginTop: "120px",
                    height: "20vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "rgba(39,46,69,.75)",
                    }}
                ></Box>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: "calc(1.375rem + 1.5vw)",
                                    color: theme.palette.custom.white,
                                    fontWeight: "700",
                                    letterSpacing: "-0.009em",
                                    position: "relative",
                                }}
                            >
                                {t("contactHead")}
                            </Typography>
                        </div>
                    </div>
                </div>
            </Box>
        </Guest>
    );
}

export default Contact;
