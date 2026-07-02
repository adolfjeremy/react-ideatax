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
    TextField,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { usePage, useForm } from "@inertiajs/react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import dayjs from "dayjs";
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
        source: "",
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
            ch={route("contact.ch")}
            description={checkLang(
                locale,
                page.description_eng,
                page.description,
                page.description_jpn,
                page.description_ch,
            )}
            seo_title={checkLang(
                locale,
                page.SEO_title_eng,
                page.SEO_title,
                page.SEO_title_jpn,
                page.SEO_title_ch,
            )}
            href={checkLang(
                locale,
                route("contact"),
                route("contact.id"),
                route("contact.jp"),
                route("contact.ch"),
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
                                <TextField
                                    fullWidth
                                    size="small"
                                    type="text"
                                    name="name"
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
                                <TextField
                                    fullWidth
                                    size="small"
                                    type="email"
                                    name="email"
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
                                <TextField
                                    fullWidth
                                    size="small"
                                    type="tel"
                                    name="phone"
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
                                <TextField
                                    fullWidth
                                    size="small"
                                    type="text"
                                    name="company"
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
                                <TextField
                                    select
                                    fullWidth
                                    size="small"
                                    id="demo-simple-select"
                                    value={data.service_id}
                                    onChange={(e) =>
                                        setData(
                                            "service_id",
                                            e.target.value,
                                        )
                                    }
                                    SelectProps={{
                                        MenuProps: {
                                            disableScrollLock: true,
                                            sx: { zIndex: 6000 }
                                        }
                                    }}
                                >
                                        {services.map((item) => (
                                            <MenuItem
                                                key={item.id}
                                                value={item.id}
                                                sx={{color: theme.palette.custom.white, backdropFilter: "blur(20px)"}}
                                            >
                                                {checkLang(
                                                    locale,
                                                    item.title_eng,
                                                    item.title,
                                                    item.title_jpn,
                                                )}
                                            </MenuItem>
                                        ))}
                                        <MenuItem value="Tax Audit Assistance" sx={{color: theme.palette.custom.white, backdropFilter: "blur(20px)"}}>Tax Audit Assistance</MenuItem>
                                        <MenuItem value="Annual Tax Return Reporting Service For Corporations And Individuals" sx={{color: theme.palette.custom.white, backdropFilter: "blur(20px)"}}>Annual Tax Return Reporting Service For Corporations And Individuals</MenuItem>
                                        <MenuItem value="Tax Refund Assistance" sx={{color: theme.palette.custom.white, backdropFilter: "blur(20px)"}}>Tax Refund Assistance</MenuItem>
                                        <MenuItem value="SP2DK Assistance" sx={{color: theme.palette.custom.white, backdropFilter: "blur(20px)"}}>SP2DK Assistance</MenuItem>
                                        <MenuItem value="Tax Planning" sx={{color: theme.palette.custom.white, backdropFilter: "blur(20px)"}}>Tax Planning</MenuItem>
                                        <MenuItem value="Authorized Economic Operator" sx={{color: theme.palette.custom.white, backdropFilter: "blur(20px)"}}>Authorized Economic Operator</MenuItem>
                                </TextField>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="source-select"
                                    className="form-label fw-bold"
                                >
                                    {checkLang(
                                        locale,
                                        "How did you hear about Ideatax?",
                                        "Mengetahui Ideatax dari:",
                                        "Ideataxをどこで知りましたか？",
                                        "您是如何知道Ideatax的？"
                                    )}
                                </label>
                                <TextField
                                    select
                                    fullWidth
                                    size="small"
                                    id="source-select"
                                    value={data.source}
                                    onChange={(e) =>
                                        setData(
                                            "source",
                                            e.target.value,
                                        )
                                    }
                                    SelectProps={{
                                        MenuProps: {
                                            disableScrollLock: true,
                                            sx: { zIndex: 6000 }
                                        }
                                    }}
                                >
                                        <MenuItem value="Website" sx={{color: theme.palette.custom.white, backdropFilter: "blur(20px)"}}>
                                            {checkLang(locale, "Website", "Website", "ウェブサイト", "网站")}
                                        </MenuItem>
                                        <MenuItem value="Generative AI" sx={{color: theme.palette.custom.white, backdropFilter: "blur(20px)"}}>
                                            {checkLang(locale, "Generative AI (ChatGPT/Gemini/Other)", "Generative AI (ChatGPT/Gemini/Other)", "生成AI (ChatGPT/Gemini/その他)", "生成式AI (ChatGPT/Gemini/其他)")}
                                        </MenuItem>
                                        <MenuItem value="Maps" sx={{color: theme.palette.custom.white, backdropFilter: "blur(20px)"}}>
                                            {checkLang(locale, "Maps", "Maps", "マップ", "地图")}
                                        </MenuItem>
                                        <MenuItem value="Social media" sx={{color: theme.palette.custom.white, backdropFilter: "blur(20px)"}}>
                                            {checkLang(locale, "Social media", "Media Sosial", "ソーシャルメディア", "社交媒体")}
                                        </MenuItem>
                                        <MenuItem value="Reference" sx={{color: theme.palette.custom.white, backdropFilter: "blur(20px)"}}>
                                            {checkLang(locale, "Reference", "Referensi", "リファレンス", "参考")}
                                        </MenuItem>
                                </TextField>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="mb-3">
                                <label
                                    htmlFor="schedule"
                                    className="form-label fw-bold"
                                >
                                    {t("contactDate")}
                                </label>
                                <div>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DesktopDateTimePicker
                                            label={t("contactDate")}
                                            value={data.schedule ? dayjs(data.schedule) : null}
                                            onChange={(newValue) => {
                                                // Format kembali ke string YYYY-MM-DDTHH:mm agar sesuai dengan backend Anda
                                                if (newValue && newValue.isValid()) {
                                                    setData("schedule", newValue.format("YYYY-MM-DDTHH:mm"));
                                                } else {
                                                    setData("schedule", "");
                                                }
                                            }}
                                            minutesStep={30} // 👈 KUNCI UTAMA: UI hanya akan menampilkan menit 00 & 30
                                            ampm={true}     // Paksa format 24 jam (menghilangkan AM/PM jika diinginkan)
                                            minDate={dayjs().add(1, 'day')} // Menonaktifkan tanggal hari ini dan sebelumnya
                                            slotProps={{
                                                textField: {
                                                    fullWidth: true,
                                                    required: true,
                                                    size: "small",
                                                },
                                                popper: {
                                                    sx: {
                                                        zIndex: 6000,
                                                        "& .MuiMultiSectionDigitalClockSection-item.Mui-disabled": {
                                                            display: "none !important",
                                                        },
                                                    },
                                                },
                                            }}
                                        />
                                    </LocalizationProvider>
                                    {errors.schedule && <div className="text-danger small mt-1">{errors.schedule}</div>}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="description"
                                    className="form-label fw-bold"
                                >
                                    {t("contactIssue")}
                                </label>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={6}
                                    name="description"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <Button
                                id="btn-schedule-meeting"
                                sx={{
                                    backgroundColor:
                                        theme.palette.custom.yellow,
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
