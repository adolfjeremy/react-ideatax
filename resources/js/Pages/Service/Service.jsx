import { Box, Typography, useTheme } from "@mui/material";
// import EastIcon from "@mui/icons-material/East";
import serviceBg from "../../assets/images/service-bg.png";
import { useTranslation } from "react-i18next";
import Guest from "@/Layout/Guest";

import "./service.scss";

function Service() {
    const { t } = useTranslation();
    const theme = useTheme();
    return (
        <Guest>
            <Box
                className="py-5"
                component="section"
                sx={{
                    py: "2.5rem",
                    backgroundImage: `url(${serviceBg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "50%",
                    minHeight: "100vh",
                }}
            >
                <div className="container">
                    <div className="row mt-5 align-items-center justify-content-center">
                        <div className="col-12 col-md-10 mt-5">
                            <Typography
                                as="h2"
                                sx={{
                                    fontSize: "3.4375rem",
                                    lineHeight: "1.19642857em",
                                    letterSpacing: "0.009em",
                                    color: theme.palette.custom.orange,
                                    marginBottom: "10px",
                                    textAlign: "center",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "2.4189rem",
                                    },
                                }}
                            >
                                {t("serviceHead")}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "1.15rem",
                                    lineHeight: "1.64061987em",
                                    letterSpacing: "0.009em",
                                    color: theme.palette.custom.lightBlue,
                                    textAlign: "center",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.9rem",
                                    },
                                    [theme.breakpoints.down("lg")]: {
                                        fontSize: "1.0366rem",
                                    },
                                }}
                            >
                                {t("serviceDesc")}
                            </Typography>
                        </div>
                        <div className="col-12 col-md-8 services_list mt-5">
                            <a
                                href="#"
                                className="col-12 service_item d-flex align-items-center justify-content-between p-2"
                            >
                                <Typography
                                    sx={{
                                        fontSize: "1.3125rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.2em",
                                        color: theme.palette.custom.blue,
                                    }}
                                >
                                    Tax and Customs Compliances
                                </Typography>
                                {/* <EastIcon /> */}
                            </a>
                            <a
                                href="#"
                                className="col-12 service_item d-flex align-items-center justify-content-between p-2"
                            >
                                <Typography
                                    sx={{
                                        fontSize: "1.3125rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "1.2em",
                                        color: theme.palette.custom.blue,
                                    }}
                                >
                                    Tax and Customs Compliances
                                </Typography>
                                {/* <EastIcon /> */}
                            </a>
                        </div>
                    </div>
                </div>
            </Box>
        </Guest>
    );
}

export default Service;
