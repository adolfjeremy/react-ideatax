import { Box, Typography, useTheme, Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import { IoIosArrowRoundForward } from "react-icons/io";
import Guest from "@/Layout/Guest";
import OrangeButton from "@/Components/OrangeButton";
import ComproModal from "./ComproModal";
import ConsultationButton from "@/Components/ConsultationButton";
import SubsModal from "./SubsModal";
import RoundedArticle from "./RoundedArticle";
import hero from "../../assets/images/hero.png";
import serviceBg from "../../assets/images/service-bg.png";
import teamImg from "../../assets/images/team-img.webp";
import subs from "../../assets/images/subscribe.webp";
import aw from "../../assets/images/aw.webp";
import aw1 from "../../assets/images/aw-1.webp";
import aw2 from "../../assets/images/aw-2.webp";
import aw3 from "../../assets/images/aw-3.webp";
import aw4 from "../../assets/images/aw-4.webp";
import aw5 from "../../assets/images/aw-5.webp";
import professional from "../../assets/images/1.webp";
import trustwothy from "../../assets/images/2.webp";
import creativity from "../../assets/images/3.webp";
import prudent from "../../assets/images/4.webp";
import audit from "../../assets/images/icons/audit.svg";
import refund from "../../assets/images/icons/refund.svg";
import transfer from "../../assets/images/icons/transfer.svg";
import compliance from "../../assets/images/icons/compliance.svg";
import "./home.scss";

function Home() {
    const { t } = useTranslation();
    const theme = useTheme();
    return (
        <Guest>
            <Box
                component="section"
                sx={{
                    position: "relative",
                    [theme.breakpoints.up("md")]: {
                        maxHeight: "100vh",
                        overflow: "hidden",
                    },
                }}
            >
                <div
                    id="carouselExampleSlidesOnly"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src={hero}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={hero}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={hero}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                </div>
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        padding: "0 4rem",
                    }}
                >
                    <Box className="row">
                        <Box
                            className="col-8"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "start",
                                gap: 2,
                            }}
                        >
                            <Typography
                                sx={{
                                    color: theme.palette.custom.white,
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: "1.2em",
                                    },
                                    [theme.breakpoints.up("md")]: {
                                        fontSize: "2.822rem",
                                    },
                                    [theme.breakpoints.up("lg")]: {
                                        fontSize: "4rem",
                                    },
                                    lineHeight: "1.01019687em",
                                    letterSpacing: "-.054em",
                                    textShadow:
                                        "0 .0375em .159375em rgba(0,0,0,.325)",
                                }}
                                variant="h1"
                            >
                                {t("hero")}
                            </Typography>
                            <OrangeButton>{t("heroButton")}</OrangeButton>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box component="section" sx={{ py: "3.5rem" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex align-items-center justify-content-center">
                            <img src={aw} className="award_image" />
                            <img src={aw1} className="award_image" />
                            <img src={aw2} className="award_image" />
                            <img src={aw3} className="award_image" />
                            <img src={aw4} className="award_image" />
                            <img src={aw5} className="award_image" />
                        </div>
                    </div>
                    <div className="row about_text">
                        <div className="col-12">
                            <Typography
                                sx={{ color: theme.palette.custom.lightBlue }}
                            >
                                {t("about")}
                            </Typography>
                        </div>
                    </div>
                    <div className="row">
                        <Box
                            className="col-3"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "start",
                                flexDirection: "column",
                            }}
                        >
                            <p
                                style={{ color: theme.palette.custom.darkBlue }}
                                className="stat m-0"
                            >
                                465+
                            </p>
                            <p
                                style={{ color: theme.palette.custom.orange }}
                                className="stat_head m-0"
                            >
                                Projects
                            </p>
                        </Box>
                        <Box
                            className="col-3"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "start",
                                flexDirection: "column",
                            }}
                        >
                            <p
                                style={{ color: theme.palette.custom.darkBlue }}
                                className="stat m-0"
                            >
                                200+
                            </p>
                            <p
                                style={{ color: theme.palette.custom.orange }}
                                className="stat_head m-0"
                            >
                                Clients
                            </p>
                        </Box>
                        <Box
                            className="col-3"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "start",
                                flexDirection: "column",
                            }}
                        >
                            <p
                                style={{ color: theme.palette.custom.darkBlue }}
                                className="stat m-0"
                            >
                                20+
                            </p>
                            <p
                                style={{ color: theme.palette.custom.orange }}
                                className="stat_head m-0"
                            >
                                Years Of Partner Experience
                            </p>
                        </Box>
                        <Box
                            className="col-3"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <ComproModal buttonText={t("comproButton")} />
                        </Box>
                    </div>
                </div>
            </Box>
            <Box component="section" sx={{ py: "3.5rem" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 ">
                            <Typography
                                sx={{
                                    fontSize: "1.9375rem",
                                    lineHeight: "1.43749551em",
                                    color: theme.palette.custom.lightBlue,
                                    textAlign: "center",
                                }}
                                as="h2"
                            >
                                {t("expertise")}
                            </Typography>
                        </div>
                    </div>
                    <div className="row expertise">
                        <div className="col-12 col-md-6 mt-5">
                            <img src={audit} alt={t("serviceOneHead")} />
                            <Typography
                                className="mt-3"
                                sx={{
                                    fontWeight: 700,
                                    color: theme.palette.custom.darkBlue,
                                    lineHeight: "1.42856633em",
                                    letterSpacing: "0.009em",
                                    fontSize: "1.6875rem",
                                }}
                                as="h3"
                            >
                                {t("serviceOneHead")}
                            </Typography>
                            <Typography
                                sx={{
                                    color: theme.palette.custom.darkBlue,
                                    lineHeight: "1.42856633em",
                                    letterSpacing: "0.009em",
                                    fontSize: "1.15rem",
                                    margin: "20px 0 10px 0",
                                }}
                            >
                                {t("serviceOneDesc")}
                            </Typography>
                            <Link
                                href="#"
                                underline="none"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "starts",
                                    gap: 1,
                                    fontSize: "0.75rem",
                                    fontWeight: "600",
                                    color: theme.palette.custom.orange,
                                    transition: "all 300ms ease-in-out",
                                    svg: {
                                        color: theme.palette.custom.orange,
                                        fontSize: "1.4rem",
                                    },
                                    "&:hover": {
                                        color: theme.palette.custom.lightBlue,
                                        fontSize: "0.8rem",
                                        svg: {
                                            color: theme.palette.custom
                                                .lightBlue,
                                            fontSize: "1.5rem",
                                        },
                                    },
                                }}
                            >
                                {t("read")}
                                <IoIosArrowRoundForward />
                            </Link>
                        </div>
                        <div className="col-12 col-md-6 mt-5">
                            <img src={refund} alt={t("serviceTwoHead")} />
                            <Typography
                                className="mt-3"
                                sx={{
                                    fontWeight: 700,
                                    color: theme.palette.custom.darkBlue,
                                    lineHeight: "1.42856633em",
                                    letterSpacing: "0.009em",
                                    fontSize: "1.6875rem",
                                }}
                                as="h3"
                            >
                                {t("serviceTwoHead")}
                            </Typography>
                            <Typography
                                sx={{
                                    color: theme.palette.custom.darkBlue,
                                    lineHeight: "1.42856633em",
                                    letterSpacing: "0.009em",
                                    fontSize: "1.15rem",
                                    margin: "20px 0 10px 0",
                                }}
                            >
                                {t("serviceTwoDesc")}
                            </Typography>
                            <Link
                                href="#"
                                underline="none"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "starts",
                                    gap: 1,
                                    fontSize: "0.75rem",
                                    fontWeight: "600",
                                    color: theme.palette.custom.orange,
                                    transition: "all 300ms ease-in-out",
                                    svg: {
                                        color: theme.palette.custom.orange,
                                        fontSize: "1.4rem",
                                    },
                                    "&:hover": {
                                        color: theme.palette.custom.lightBlue,
                                        fontSize: "0.8rem",
                                        svg: {
                                            color: theme.palette.custom
                                                .lightBlue,
                                            fontSize: "1.5rem",
                                        },
                                    },
                                }}
                            >
                                {t("read")}
                                <IoIosArrowRoundForward />
                            </Link>
                        </div>
                        <div className="col-12 col-md-6 mt-5">
                            <img src={transfer} alt={t("serviceThreeHead")} />
                            <Typography
                                className="mt-3"
                                sx={{
                                    fontWeight: 700,
                                    color: theme.palette.custom.darkBlue,
                                    lineHeight: "1.42856633em",
                                    letterSpacing: "0.009em",
                                    fontSize: "1.6875rem",
                                }}
                                as="h3"
                            >
                                {t("serviceThreeHead")}
                            </Typography>
                            <Typography
                                sx={{
                                    color: theme.palette.custom.darkBlue,
                                    lineHeight: "1.42856633em",
                                    letterSpacing: "0.009em",
                                    fontSize: "1.15rem",
                                    margin: "20px 0 10px 0",
                                }}
                            >
                                {t("serviceThreeDesc")}
                            </Typography>
                            <Link
                                href="#"
                                underline="none"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "starts",
                                    gap: 1,
                                    fontSize: "0.75rem",
                                    fontWeight: "600",
                                    color: theme.palette.custom.orange,
                                    transition: "all 300ms ease-in-out",
                                    svg: {
                                        color: theme.palette.custom.orange,
                                        fontSize: "1.4rem",
                                    },
                                    "&:hover": {
                                        color: theme.palette.custom.lightBlue,
                                        fontSize: "0.8rem",
                                        svg: {
                                            color: theme.palette.custom
                                                .lightBlue,
                                            fontSize: "1.5rem",
                                        },
                                    },
                                }}
                            >
                                {t("read")}
                                <IoIosArrowRoundForward />
                            </Link>
                        </div>
                        <div className="col-12 col-md-6 mt-5">
                            <img src={compliance} alt={t("serviceFourHead")} />
                            <Typography
                                className="mt-3"
                                sx={{
                                    fontWeight: 700,
                                    color: theme.palette.custom.darkBlue,
                                    lineHeight: "1.42856633em",
                                    letterSpacing: "0.009em",
                                    fontSize: "1.6875rem",
                                }}
                                as="h3"
                            >
                                {t("serviceFourHead")}
                            </Typography>
                            <Typography
                                sx={{
                                    color: theme.palette.custom.darkBlue,
                                    lineHeight: "1.42856633em",
                                    letterSpacing: "0.009em",
                                    fontSize: "1.15rem",
                                    margin: "20px 0 10px 0",
                                }}
                            >
                                {t("serviceFourDesc")}
                            </Typography>
                            <Link
                                href="#"
                                underline="none"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "starts",
                                    gap: 1,
                                    fontSize: "0.75rem",
                                    fontWeight: "600",
                                    color: theme.palette.custom.orange,
                                    transition: "all 300ms ease-in-out",
                                    svg: {
                                        color: theme.palette.custom.orange,
                                        fontSize: "1.4rem",
                                    },
                                    "&:hover": {
                                        color: theme.palette.custom.lightBlue,
                                        fontSize: "0.8rem",
                                        svg: {
                                            color: theme.palette.custom
                                                .lightBlue,
                                            fontSize: "1.5rem",
                                        },
                                    },
                                }}
                            >
                                {t("read")}
                                <IoIosArrowRoundForward />
                            </Link>
                        </div>
                    </div>
                </div>
            </Box>
            <ConsultationButton />
            <Box component="section" sx={{ py: "3rem", overflow: "hidden" }}>
                <div className="container-fluid p-0 m-0">
                    <div className="row">
                        <div className="col-12 ">
                            <Typography
                                sx={{
                                    fontSize: "1.9375rem",
                                    lineHeight: "1.43749551em",
                                    color: theme.palette.custom.lightBlue,
                                    textAlign: "center",
                                }}
                                as="h2"
                            >
                                {t("value")}
                            </Typography>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <Box
                            className="col-3 p-0 value_item"
                            sx={{ position: "relative", overflow: "hidden" }}
                        >
                            <img
                                src={professional}
                                alt={t("valueOne")}
                                className="w-100"
                            />
                            <Typography
                                sx={{
                                    position: "absolute",
                                    color: theme.palette.custom.white,
                                    margin: 0,
                                    bottom: "20px",
                                    right: "50%",
                                    transform: "translateX(50%)",
                                    fontSize: "1.3125rem",
                                    fontWeight: "400",
                                    lineHeight: "1.42498753em",
                                    letterSpacing: ".009em",
                                }}
                            >
                                {t("valueOne")}
                            </Typography>
                        </Box>
                        <Box
                            className="col-3 p-0 value_item"
                            sx={{ position: "relative", overflow: "hidden" }}
                        >
                            <img
                                src={trustwothy}
                                alt={t("valueTwo")}
                                className="w-100"
                            />
                            <Typography
                                sx={{
                                    position: "absolute",
                                    color: theme.palette.custom.white,
                                    margin: 0,
                                    bottom: "20px",
                                    right: "50%",
                                    transform: "translateX(50%)",
                                    fontSize: "1.3125rem",
                                    fontWeight: "400",
                                    lineHeight: "1.42498753em",
                                    letterSpacing: ".009em",
                                }}
                            >
                                {t("valueTwo")}
                            </Typography>
                        </Box>
                        <Box
                            className="col-3 p-0 value_item"
                            sx={{ position: "relative", overflow: "hidden" }}
                        >
                            <img
                                src={creativity}
                                alt={t("valueThree")}
                                className="w-100"
                            />
                            <Typography
                                sx={{
                                    position: "absolute",
                                    color: theme.palette.custom.white,
                                    margin: 0,
                                    bottom: "20px",
                                    right: "50%",
                                    transform: "translateX(50%)",
                                    fontSize: "1.3125rem",
                                    fontWeight: "400",
                                    lineHeight: "1.42498753em",
                                    letterSpacing: ".009em",
                                }}
                            >
                                {t("valueThree")}
                            </Typography>
                        </Box>
                        <Box
                            className="col-3 p-0 value_item"
                            sx={{ position: "relative", overflow: "hidden" }}
                        >
                            <img
                                src={prudent}
                                alt={t("valueFour")}
                                className="w-100"
                            />
                            <Typography
                                sx={{
                                    position: "absolute",
                                    color: theme.palette.custom.white,
                                    margin: 0,
                                    bottom: "20px",
                                    right: "50%",
                                    transform: "translateX(50%)",
                                    fontSize: "1.3125rem",
                                    fontWeight: "400",
                                    lineHeight: "1.42498753em",
                                    letterSpacing: ".009em",
                                }}
                            >
                                {t("valueFour")}
                            </Typography>
                        </Box>
                    </div>
                </div>
            </Box>
            <Box
                component="section"
                sx={{
                    py: "2.5rem",
                    backgroundImage: `url(${serviceBg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "50%",
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <Typography
                                as="h2"
                                sx={{
                                    fontSize: "3.4375rem",
                                    lineHeight: "1.19642857em",
                                    letterSpacing: "0.009em",
                                    color: theme.palette.custom.orange,
                                    marginBottom: "10px",
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
                        <div className="col-12 col-md-7 services_list">
                            <Link
                                sx={{
                                    svg: {
                                        fontSize: "2rem",
                                        color: theme.palette.custom.darkBlue,
                                    },
                                }}
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
                                <IoIosArrowRoundForward />
                            </Link>
                            <Link
                                sx={{
                                    svg: {
                                        fontSize: "2rem",
                                        color: theme.palette.custom.darkBlue,
                                    },
                                }}
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
                                <IoIosArrowRoundForward />
                            </Link>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <Typography
                                sx={{
                                    color: theme.palette.custom.orange,
                                    lineHeight: "1.18641819em",
                                    fontSize: "3.5625rem",
                                    letterSpacing: "0.009em",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "2.4189rem",
                                    },
                                }}
                            >
                                {t("teamHead")}
                            </Typography>
                        </div>
                    </div>
                </div>
                <Box>
                    <img src={teamImg} alt={t("teamHead")} className="w-100" />
                </Box>
            </Box>
            <ConsultationButton />
            <Box component="section" sx={{ py: "3.5rem" }}>
                <div className="container">
                    <div className="row">
                        <RoundedArticle
                            title="Getting to Know the Automatic Exchange of Information for Tax Purposes"
                            category="PPN"
                            timeStamp="26 Aug, 2024 15:07 WIB"
                            img="https://ideatax.id/storage/article/RPQuiYd2fYkP60FxOLvCP3uYInqI9M7GQbiW3uZH.png"
                        />
                        <RoundedArticle
                            title="Getting to Know the Automatic Exchange of Information for Tax Purposes"
                            category="PPN"
                            timeStamp="26 Aug, 2024 15:07 WIB"
                            img="https://ideatax.id/storage/article/RPQuiYd2fYkP60FxOLvCP3uYInqI9M7GQbiW3uZH.png"
                        />
                        <RoundedArticle
                            title="Getting to Know the Automatic Exchange of Information for Tax Purposes"
                            category="PPN"
                            timeStamp="26 Aug, 2024 15:07 WIB"
                            img="https://ideatax.id/storage/article/RPQuiYd2fYkP60FxOLvCP3uYInqI9M7GQbiW3uZH.png"
                        />
                        <RoundedArticle
                            title="Getting to Know the Automatic Exchange of Information for Tax Purposes"
                            category="PPN"
                            timeStamp="26 Aug, 2024 15:07 WIB"
                            img="https://ideatax.id/storage/article/RPQuiYd2fYkP60FxOLvCP3uYInqI9M7GQbiW3uZH.png"
                        />
                    </div>
                </div>
            </Box>
            <Box sx={{ position: "relative" }}>
                <img
                    src={subs}
                    alt="subscribe to ideatax newsletter"
                    className="w-100"
                />
                <Box
                    className="py-5 py-md-0 d-flex flex-column align-items-center justify-content-center"
                    sx={{
                        position: "absolute",
                        bottom: "50%",
                        transform: "translateY(50%)",
                        right: "4.5rem",
                        [theme.breakpoints.down("sm")]: {
                            right: 0,
                            left: 0,
                        },
                    }}
                >
                    <Typography
                        as="h2"
                        sx={{
                            color: theme.palette.custom.white,
                            fontSize: "2.625rem",
                            lineHeight: "1.42967633em",
                            letterSpacing: "0.009em",
                            [theme.breakpoints.down("sm")]: {
                                fontSize: "1.875rem",
                            },
                        }}
                    >
                        {t("subs")}
                    </Typography>
                    <SubsModal buttonText={t("subButton")} />
                </Box>
            </Box>
            <Box component="section" sx={{ py: "3.5rem" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Typography
                                sx={{
                                    fontSize: "1.9375rem",
                                    lineHeight: "1.43749551em",
                                    color: theme.palette.custom.lightBlue,
                                    textAlign: "center",
                                }}
                                as="h2"
                            >
                                {t("eventHead")}
                            </Typography>
                        </div>
                    </div>
                    <div className="row">
                        <Link
                            underline="none"
                            href="#"
                            className="col-6 col-md-3 d-flex flex-column event_item mt-4"
                            sx={{
                                cursor: "pointer",
                                "&:hover": {
                                    h3: {
                                        color: theme.palette.custom.orange,
                                    },
                                },
                            }}
                        >
                            <img
                                src="https://ideatax.id/storage/event/Akk1n4qSxKM6TSHxN6ZFt90JewJoersmrykSm5G4.jpg"
                                alt="title"
                                className="w-100"
                            />
                            <Typography
                                sx={{
                                    fontSize: "1.48125rem",
                                    color: theme.palette.custom.darkBlue,
                                    lineHeight: "1.42967633em",
                                    letterSpacing: "0.009em",
                                    fontWeight: "600",
                                    marginTop: "10px",
                                    transition: "all 300ms  e-in-out",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "1.875rem",
                                    },
                                }}
                            >
                                Sep, 30 2024
                            </Typography>
                            <Typography
                                as="h3"
                                sx={{
                                    fontSize: "1.48125rem",
                                    color: theme.palette.custom.lightkBlue,
                                    lineHeight: "1.42967633em",
                                    letterSpacing: "0.009em",
                                    transition: "all 300ms ease-in-out",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.9rem",
                                    },
                                }}
                            >
                                Accurate Financial Statements: The Key to
                                Corporate Income Tax (PPh Badan) Filing Success
                            </Typography>
                        </Link>
                        <Link
                            underline="none"
                            href="#"
                            className="col-6 col-md-3 d-flex flex-column event_item mt-4"
                            sx={{
                                cursor: "pointer",
                                "&:hover": {
                                    h3: {
                                        color: theme.palette.custom.orange,
                                    },
                                },
                            }}
                        >
                            <img
                                src="https://ideatax.id/storage/event/Akk1n4qSxKM6TSHxN6ZFt90JewJoersmrykSm5G4.jpg"
                                alt="title"
                                className="w-100"
                            />
                            <Typography
                                sx={{
                                    fontSize: "1.48125rem",
                                    color: theme.palette.custom.darkBlue,
                                    lineHeight: "1.42967633em",
                                    letterSpacing: "0.009em",
                                    fontWeight: "600",
                                    marginTop: "10px",
                                    transition: "all 300ms ease-in-out",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "1.875rem",
                                    },
                                }}
                            >
                                Sep, 30 2024
                            </Typography>
                            <Typography
                                as="h3"
                                sx={{
                                    fontSize: "1.48125rem",
                                    color: theme.palette.custom.lightkBlue,
                                    lineHeight: "1.42967633em",
                                    letterSpacing: "0.009em",
                                    transition: "all 300ms ease-in-out",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.9rem",
                                    },
                                }}
                            >
                                Accurate Financial Statements: The Key to
                                Corporate Income Tax (PPh Badan) Filing Success
                            </Typography>
                        </Link>
                        <Link
                            underline="none"
                            href="#"
                            className="col-6 col-md-3 d-flex flex-column event_item mt-4"
                            sx={{
                                cursor: "pointer",
                                "&:hover": {
                                    h3: {
                                        color: theme.palette.custom.orange,
                                    },
                                },
                            }}
                        >
                            <img
                                src="https://ideatax.id/storage/event/Akk1n4qSxKM6TSHxN6ZFt90JewJoersmrykSm5G4.jpg"
                                alt="title"
                                className="w-100"
                            />
                            <Typography
                                sx={{
                                    fontSize: "1.48125rem",
                                    color: theme.palette.custom.darkBlue,
                                    lineHeight: "1.42967633em",
                                    letterSpacing: "0.009em",
                                    fontWeight: "600",
                                    marginTop: "10px",
                                    transition: "all 300ms ease-in-out",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "1.875rem",
                                    },
                                }}
                            >
                                Sep, 30 2024
                            </Typography>
                            <Typography
                                as="h3"
                                sx={{
                                    fontSize: "1.48125rem",
                                    color: theme.palette.custom.lightkBlue,
                                    lineHeight: "1.42967633em",
                                    letterSpacing: "0.009em",
                                    transition: "all 300ms ease-in-out",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.9rem",
                                    },
                                }}
                            >
                                Accurate Financial Statements: The Key to
                                Corporate Income Tax (PPh Badan) Filing Success
                            </Typography>
                        </Link>
                        <Link
                            underline="none"
                            href="#"
                            className="col-6 col-md-3 d-flex flex-column event_item mt-4"
                            sx={{
                                cursor: "pointer",
                                "&:hover": {
                                    h3: {
                                        color: theme.palette.custom.orange,
                                    },
                                },
                            }}
                        >
                            <img
                                src="https://ideatax.id/storage/event/Akk1n4qSxKM6TSHxN6ZFt90JewJoersmrykSm5G4.jpg"
                                alt="title"
                                className="w-100"
                            />
                            <Typography
                                sx={{
                                    fontSize: "1.48125rem",
                                    color: theme.palette.custom.darkBlue,
                                    lineHeight: "1.42967633em",
                                    letterSpacing: "0.009em",
                                    fontWeight: "600",
                                    marginTop: "10px",
                                    transition: "all 300ms ease-in-out",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "1.875rem",
                                    },
                                }}
                            >
                                Sep, 30 2024
                            </Typography>
                            <Typography
                                as="h3"
                                sx={{
                                    fontSize: "1.48125rem",
                                    color: theme.palette.custom.lightkBlue,
                                    lineHeight: "1.42967633em",
                                    letterSpacing: "0.009em",
                                    transition: "all 300ms ease-in-out",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.9rem",
                                    },
                                }}
                            >
                                Accurate Financial Statements: The Key to
                                Corporate Income Tax (PPh Badan) Filing Success
                            </Typography>
                        </Link>
                    </div>
                </div>
            </Box>
        </Guest>
    );
}

export default Home;
