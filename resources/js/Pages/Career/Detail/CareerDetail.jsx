import { Box, Typography, useTheme, Button, TextField } from "@mui/material";
import { usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import Guest from "@/Layout/Guest";
import TruncateRichText from "@/Components/TruncateRichText";
import checkLang from "@/utils/checkLang";

function CareerDetail() {
    const { locale, item } = usePage().props;
    const theme = useTheme();
    const { t } = useTranslation();
    return (
        <Guest>
            <Box sx={{ paddingTop: "120px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: "calc(1.375rem + 1.5vw)",
                                    fontWeight: "700",
                                    letterSpacing: "0.009em",
                                    textAlign: "center",
                                    color: theme.palette.custom.darkBlue,
                                }}
                            >
                                {checkLang(
                                    locale,
                                    item.title_eng,
                                    item.title,
                                    item.title_jpn
                                )}
                            </Typography>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-lg-7 mt-5">
                            {item.jobdesc_eng && (
                                <div className="col-12">
                                    <Typography
                                        variant="h2"
                                        sx={{
                                            fontSize: "30px",
                                            fontWeight: "700",
                                            lineHeight: "38px",
                                            margin: "0 0 23px 0",
                                            padding: "10px 0 0 0",
                                            color: theme.palette.custom
                                                .darkBlue,
                                        }}
                                    >
                                        {t("careerJobDesc")}
                                    </Typography>
                                </div>
                            )}
                            <div className="col-12 career_desc">
                                <TruncateRichText
                                    style={{
                                        color: theme.palette.custom.lightBlue,
                                        fontSize: "0.8939rem",
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "0.8939rem",
                                        },
                                        lineHeight: "1.17857248em",
                                        letterSpacing: "0.009em",
                                        padding: 0,
                                        margin: 0,
                                    }}
                                    htmlContent={checkLang(
                                        locale,
                                        item.jobdesc_eng,
                                        item.jobdesc,
                                        item.jobdesc_jpn
                                    )}
                                />
                            </div>
                            <div className="col-12">
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontSize: "30px",
                                        fontWeight: "700",
                                        lineHeight: "38px",
                                        margin: "0 0 23px 0",
                                        padding: "10px 0 0 0",
                                        color: theme.palette.custom.darkBlue,
                                    }}
                                >
                                    {t("careerQual")}
                                </Typography>
                            </div>
                            <div className="col-12 career_desc"></div>
                            <div className="col-12">
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontSize: "30px",
                                        fontWeight: "700",
                                        lineHeight: "38px",
                                        margin: "0 0 23px 0",
                                        padding: "10px 0 0 0",
                                        color: theme.palette.custom.darkBlue,
                                    }}
                                >
                                    {t("careerSkill")}
                                </Typography>
                            </div>
                            <div className="col-12 career_desc"></div>
                        </div>
                        <div className="col-12 col-lg-5 mt-md-4">
                            <div className="col-12">
                                <Typography
                                    sx={{
                                        fontSize: "30px",
                                        fontWeight: "700",
                                        lineHeight: "38px",
                                        margin: "0 0 23px 0",
                                        padding: "10px 0 0 0",
                                        color: theme.palette.custom.darkBlue,
                                        textAlign: "center",
                                    }}
                                >
                                    {t("careerApply")}
                                </Typography>
                            </div>
                            <form className="col-12 px-lg-4 d-flex flex-column align-items-end justify-content-center gap-2">
                                <TextField
                                    id="name"
                                    label={t("formName")}
                                    variant="outlined"
                                    sx={{ width: "100%" }}
                                />
                                <TextField
                                    id="email"
                                    label={t("formEmail")}
                                    variant="outlined"
                                    sx={{ width: "100%" }}
                                />
                                <TextField
                                    id="phone"
                                    label={t("formPhone")}
                                    variant="outlined"
                                    sx={{ width: "100%" }}
                                />
                                <TextField
                                    id="letter"
                                    label={t("formLetter")}
                                    multiline
                                    rows={4}
                                    defaultValue=""
                                    sx={{ width: "100%" }}
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        gap: "5px",
                                        width: "100%",
                                    }}
                                >
                                    <Typography
                                        variant="label"
                                        sx={{
                                            color: "rgb(153, 153, 153)",
                                            margin: 0,
                                        }}
                                        for="resume"
                                        className="form-label"
                                    >
                                        {t("formResume")}
                                    </Typography>
                                    <TextField
                                        id="resume"
                                        type="file"
                                        variant="outlined"
                                        sx={{ width: "100%" }}
                                    />
                                    <small
                                        style={{ color: "rgb(153, 153, 153)" }}
                                    >
                                        allowed type: pdf
                                    </small>
                                    <small
                                        style={{ color: "rgb(153, 153, 153)" }}
                                    >
                                        max size: 2Mb
                                    </small>
                                </Box>
                                <Button
                                    variant="contained"
                                    size="medium"
                                    sx={{
                                        backgroundColor:
                                            theme.palette.custom.orange,
                                    }}
                                >
                                    Apply
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </Box>
        </Guest>
    );
}

export default CareerDetail;
