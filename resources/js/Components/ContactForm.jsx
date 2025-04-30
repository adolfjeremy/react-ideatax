import React, { useContext } from "react";
import {
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    useTheme,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { usePage, useForm } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";
import checkLang from "@/utils/checkLang";

function ContactForm() {
    const { locale, services } = usePage().props;

    const theme = useTheme();
    const { t } = useTranslation();

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

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
        <form onSubmit={onHandleSubmit} className="row mt-4 p-2 p-md-3">
            <div className="col-12 text-center mb-4">
                <Typography
                    sx={{
                        fontSize: "1.6rem",
                        color: theme.palette.custom.orange,
                    }}
                >
                    {t("contactSubHead")}
                </Typography>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold">
                        {t("contactName")}
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />
                </div>
                {!isMobile && (
                    <>
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
                    </>
                )}
            </div>
            {isMobile && (
                <div className="col-12 d-flex align-items-center justify-content-center">
                    <div>
                        <label htmlFor="email" className="form-label fw-bold">
                            {t("contactEmail")}
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="form-label fw-bold">
                            {t("contactNumber")}
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            className="form-control"
                            id="phone"
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                            required
                        />
                    </div>
                </div>
            )}
            <div className="col-12 col-md-6 col-lg-4">
                <div className="mb-3">
                    <label htmlFor="company" className="form-label fw-bold">
                        {t("contactCompany")}
                    </label>
                    <input
                        type="text"
                        name="company"
                        className="form-control"
                        id="company"
                        value={data.company}
                        onChange={(e) => setData("company", e.target.value)}
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
                                setData("service_id", e.target.value)
                            }
                        >
                            {services.map((item) => (
                                <MenuItem key={item.id} value={item.id}>
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
                    <label htmlFor="schedule" className="form-label fw-bold">
                        {t("contactDate")}
                    </label>
                    <input
                        type="datetime-local"
                        name="schedule"
                        className="form-control"
                        id="schedule"
                        value={data.schedule}
                        onChange={(e) => setData("schedule", e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="col-12 col-lg-4">
                <div className="mb-3">
                    <label htmlFor="description" className="form-label fw-bold">
                        {t("contactIssue")}
                    </label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        rows="6"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        required
                    />
                </div>
                <Button
                    sx={{
                        backgroundColor: theme.palette.custom.orange,
                        textTransform: "none",
                    }}
                    variant="contained"
                    type="submit"
                >
                    {t("contactSubmit")}
                </Button>
            </div>
        </form>
    );
}

export default ContactForm;
