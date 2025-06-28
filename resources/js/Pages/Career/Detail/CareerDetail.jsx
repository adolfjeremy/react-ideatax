import { useContext } from "react";
import { Box, Typography, useTheme, Button, TextField } from "@mui/material";
import { usePage, useForm } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import Guest from "@/Layout/Guest";
import RichText from "@/Components/RichText";
import checkLang from "@/utils/checkLang";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";
import "../career.scss";

function CareerDetail() {
    const { locale, item } = usePage().props;
    const theme = useTheme();
    const { t } = useTranslation();

    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        coverLetter: "",
        career_id: item.id,
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(
            route("career-apply", item.slug_eng),
            {
                onStart: () => {
                    toggleSpinner(true);
                },
                onSuccess: () => {
                    reset();
                    toggleSpinner(false);
                    toggleAlert(true);
                },
                onError: (error) => {
                    console.log(error);
                    toggleSpinner(false);
                },
            },
            { forceFormData: true }
        );
    };
    return (
        <Guest
            en={route("career-detail", item.slug_eng)}
            id={route("career-detail.id", item.slug)}
            jp={route("career-detail.jp", item.slug_jpn)}
            description={checkLang(
                locale,
                item.description_eng,
                item.description,
                item.description_jpn
            )}
            seo_title={checkLang(
                locale,
                item.SEO_title_eng,
                item.SEO_title,
                item.SEO_title_jpn
            )}
            href={checkLang(
                locale,
                route("career-detail", item.slug_eng),
                route("career-detail.id", item.slug),
                route("career-detail.jp", item.slug_jpn)
            )}
        >
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
                                            margin: "0 0 15px 0",
                                            padding: "10px 0 0 0",
                                            color: theme.palette.custom
                                                .darkBlue,
                                        }}
                                    >
                                        {t("careerJobDesc")}
                                    </Typography>
                                </div>
                            )}
                            <Box className="col-12">
                                <RichText
                                    className="career_desc"
                                    htmlContent={checkLang(
                                        locale,
                                        item.jobdesc_eng,
                                        item.jobdesc,
                                        item.jobdesc_jpn
                                    )}
                                />
                            </Box>
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
                            <Box className="col-12">
                                <RichText
                                    className="career_desc"
                                    htmlContent={checkLang(
                                        locale,
                                        item.qualification_eng,
                                        item.qualification,
                                        item.qualification_jpn
                                    )}
                                />
                            </Box>
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
                            <Box className="col-12">
                                <RichText
                                    className="career_desc"
                                    htmlContent={checkLang(
                                        locale,
                                        item.skill_eng,
                                        item.skill,
                                        item.skill_jpn
                                    )}
                                />
                            </Box>
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
                            <form
                                onSubmit={onHandleSubmit}
                                className="col-12 px-lg-4 d-flex flex-column align-items-end justify-content-center gap-2"
                            >
                                <TextField
                                    id="name"
                                    label={t("formName")}
                                    variant="outlined"
                                    sx={{ width: "100%" }}
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                <TextField
                                    id="email"
                                    label={t("formEmail")}
                                    variant="outlined"
                                    sx={{ width: "100%" }}
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                <TextField
                                    id="phone"
                                    label={t("formPhone")}
                                    variant="outlined"
                                    sx={{ width: "100%" }}
                                    value={data.phone}
                                    onChange={(e) =>
                                        setData("phone", e.target.value)
                                    }
                                />
                                <TextField
                                    id="coverLetter"
                                    name="coverLetter"
                                    label={t("formLetter")}
                                    multiline
                                    rows={4}
                                    defaultValue=""
                                    sx={{ width: "100%" }}
                                    value={data.coverLetter}
                                    onChange={(e) =>
                                        setData("coverLetter", e.target.value)
                                    }
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
                                        htmlFor="resume"
                                        className="form-label"
                                    >
                                        {t("formResume")}
                                    </Typography>
                                    <TextField
                                        id="resume"
                                        name="resume"
                                        type="file"
                                        variant="outlined"
                                        sx={{ width: "100%" }}
                                        onChange={(e) =>
                                            setData("resume", e.target.files[0])
                                        }
                                    />
                                    <small
                                        style={{ color: "rgb(153, 153, 153)" }}
                                    >
                                        allowed type: pdf,doc,docx
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
                                    type="submit"
                                    disabled={processing}
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
