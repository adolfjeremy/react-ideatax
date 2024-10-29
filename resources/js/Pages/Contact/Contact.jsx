import { Box, Typography, useTheme, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import Guest from "@/Layout/Guest";
import wall from "@/assets/images/wall.webp";

function Contact() {
    const theme = useTheme();
    const { t } = useTranslation();
    return (
        <Guest
            en={route("career")}
            id={route("career.id")}
            jp={route("career.jp")}
            description={checkLang(
                locale,
                page.description_eng,
                page.description,
                page.description_jpn
            )}
            seo_title={checkLang(
                locale,
                page.SEO_title_eng,
                page.SEO_title,
                page.SEO_title_jpn
            )}
            href={checkLang(
                locale,
                route("career"),
                route("career.id"),
                route("career.jp")
            )}
        >
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
            <Box>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-4">
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: "calc(1.325rem + .9vw)",
                                    color: theme.palette.custom.darkBlue,
                                    fontWeight: 700,
                                }}
                            >
                                {t("contactSubHead")}
                            </Typography>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="mb-3">
                                <label
                                    for="name"
                                    className="form-label fw-bold"
                                >
                                    {t("contactName")}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    for="email"
                                    className="form-label fw-bold"
                                >
                                    {t("contactEmail")}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    id="email"
                                    required
                                />
                            </div>
                            <div>
                                <label for="tel" className="form-label fw-bold">
                                    {t("contactNumber")}
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="form-control"
                                    id="tel"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="mb-3">
                                <label
                                    for="company"
                                    className="form-label fw-bold"
                                >
                                    {t("contactCompany")}
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    className="form-control"
                                    id="company"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    for="email"
                                    className="form-label fw-bold"
                                >
                                    {t("contactService")}
                                </label>
                                <select
                                    className="form-select form-select-md mb-3"
                                    name="service_id"
                                    id="need"
                                    required
                                >
                                    <option selected>
                                        {t("contactService")}
                                    </option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </div>
                            <div>
                                <label
                                    for="schedule"
                                    className="form-label fw-bold"
                                >
                                    {t("contactDate")}
                                </label>
                                <input
                                    type="datetime-local"
                                    name="schedule"
                                    className="form-control"
                                    id="schedule"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="mb-3">
                                <label
                                    for="description"
                                    className="form-label fw-bold"
                                >
                                    {t("contactIssue")}
                                </label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    name="description"
                                    rows="6"
                                    required
                                />
                            </div>
                            <Button
                                sx={{
                                    backgroundColor:
                                        theme.palette.custom.orange,
                                }}
                                variant="contained"
                            >
                                {t("contactSubmit")}
                            </Button>
                        </div>
                    </div>
                </div>
            </Box>
        </Guest>
    );
}

export default Contact;
