import { useContext } from "react";
import {
    Box,
    Typography,
    useTheme,
    Button,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { usePage, useForm } from "@inertiajs/react";
import Guest from "@/Layout/Guest";
import wall from "@/assets/images/wall.webp";
import checkLang from "@/utils/checkLang";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";

function Contact() {
    const { locale, page, services } = usePage().props;
    const theme = useTheme();
    const { t } = useTranslation();
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        schedule: "",
        description: "",
        service_id: "",
    });
    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(route("contact-store"), {
            onStart: () => {
                toggleSpinner(true);
            },
            onSuccess: () => {
                reset();
                toggleSpinner(false);
                toggleAlert(true);
            },
            onError: (error) => {
                toggleSpinner(false);
                console.log(error);
            },
        });
    };
    return (
        <Guest
            en={route("contact")}
            id={route("contact.id")}
            jp={route("contact.jp")}
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
                route("contact"),
                route("contact.id"),
                route("contact.jp")
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
                    <form onSubmit={onHandleSubmit} className="row mt-4">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="mb-3">
                                <label
                                    htmlFor="name"
                                    className="form-label fw-bold"
                                >
                                    {t("contactName")}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="email"
                                    className="form-label fw-bold"
                                >
                                    {t("contactEmail")}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    id="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="form-label fw-bold"
                                >
                                    {t("contactNumber")}
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="form-control"
                                    id="phone"
                                    value={data.phone}
                                    onChange={(e) =>
                                        setData("phone", e.target.value)
                                    }
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="mb-3">
                                <label
                                    htmlFor="company"
                                    className="form-label fw-bold"
                                >
                                    {t("contactCompany")}
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    className="form-control"
                                    id="company"
                                    value={data.company}
                                    onChange={(e) =>
                                        setData("company", e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="demo-simple-select"
                                    className="form-label fw-bold"
                                >
                                    Services
                                </label>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        {t("contactService")}
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={data.service_id}
                                        label="Services"
                                        onChange={(e) =>
                                            setData(
                                                "service_id",
                                                e.target.value
                                            )
                                        }
                                    >
                                        {services.map((item) => (
                                            <MenuItem
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {checkLang(
                                                    locale,
                                                    item.title_eng,
                                                    item.title,
                                                    item.title_jpn
                                                )}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                            <div>
                                <label
                                    htmlFor="schedule"
                                    className="form-label fw-bold"
                                >
                                    {t("contactDate")}
                                </label>
                                <input
                                    type="datetime-local"
                                    name="schedule"
                                    className="form-control"
                                    id="schedule"
                                    value={data.schedule}
                                    onChange={(e) =>
                                        setData("schedule", e.target.value)
                                    }
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="mb-3">
                                <label
                                    htmlFor="description"
                                    className="form-label fw-bold"
                                >
                                    {t("contactIssue")}
                                </label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    name="description"
                                    rows="6"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <Button
                                sx={{
                                    backgroundColor:
                                        theme.palette.custom.orange,
                                    textTransform: "none",
                                }}
                                variant="contained"
                                type="submit"
                            >
                                {t("contactSubmit")}
                            </Button>
                        </div>
                    </form>
                </div>
            </Box>
        </Guest>
    );
}

export default Contact;
