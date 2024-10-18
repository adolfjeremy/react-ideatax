import { Box, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import Guest from "@/Layout/Guest";
import ConsultationButton from "@/Components/ConsultationButton";

function ServiceDetail() {
    const { t } = useTranslation();
    const theme = useTheme();
    return (
        <Guest>
            <Box className="position-relative">
                <img
                    src="https://ideatax.id/storage/service/SH2RN2RV4R6tsivPXQvTeGFxsKml4uGPn0tho46r.png"
                    alt=""
                    className="w-100"
                />
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        padding: "0 12px",
                    }}
                >
                    <Typography
                        as="h1"
                        sx={{
                            fontSize: "3.95025rem",
                            letterSpacing: "0.009em",
                            lineHeight: "1.01561707em",
                            color: theme.palette.custom.darkBlue,
                            fontWeight: "700",
                            textAlign: "center",
                            [theme.breakpoints.down("sm")]: {
                                fontSize: "0.8rem",
                            },
                        }}
                    >
                        Tax and Customs Compliances
                    </Typography>
                </Box>
            </Box>
            <Box className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 px-md-5 px-0 d-flex align-items-center justify-content-center">
                            <Typography
                                sx={{
                                    fontSize: "1.652rem",
                                    lineHeight: "1.9em",
                                    letterSpacing: ".009em",
                                    color: theme.palette.custom.lightBlue,
                                    textAlign: "center",
                                }}
                            >
                                Taxation and customs automation are a matter of
                                urgency for companies to achieve a formal and
                                material compliance towards the legislations and
                                minimum system requirements. Ideatax is ready to
                                answer your compliance needs in preventing risks
                                that could happen. Our professional talents will
                                make sure those needs are met, so you can focus
                                on running your business.
                            </Typography>
                        </div>
                    </div>
                </div>
            </Box>
            <ConsultationButton center={true} />
        </Guest>
    );
}

export default ServiceDetail;
