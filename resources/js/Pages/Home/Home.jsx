import { useState, useRef, useEffect } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import Guest from "@/Layout/Guest";
import Hero from "./parts/Hero";
import ExpertiseList from "./parts/ExpertiseList";
import StatCountUp from "./parts/StatCountUp";
import ComproModal from "./ComproModal";
import ConsultationButton from "@/Components/ConsultationButton";
import SubsModal from "./SubsModal";
import RoundedArticle from "./RoundedArticle";
import AwardIconMobile from "@/Components/AwardIconMobile";
import AwardDesktop from "@/Components/AwardDesktop";
import ValueSlick from "@/Components/ValueSlick";
import serviceBg from "../../assets/images/service-bg.png";
import teamImg from "../../assets/images/team-img.webp";
import subs from "../../assets/images/subscribe.webp";
import serviceBgMobile from "@/assets/images/pages/home/service-bg-sm.png";
import professional from "../../assets/images/1.webp";
import trustwothy from "../../assets/images/2.webp";
import creativity from "../../assets/images/3.webp";
import prudent from "../../assets/images/4.webp";
import checkLang from "@/utils/checkLang";
import formatDate from "@/utils/formatDate";
import EventItem from "@/Components/EventItem";
import EventItemMobile from "@/Components/EventItemMobile";
import ServiceAccordion from "@/Components/ServiceAccordion";
import ArticleSwipeable from "@/Components/ArticleSwipeable";
import { FaArrowRightLong } from "react-icons/fa6";

import "./home.scss";

function Home() {
    const containerRef = useRef(null);
    const [visible, setIsVisible] = useState(false);

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const callbackFunction = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
    };
    const { t } = useTranslation();
    const theme = useTheme();
    const {
        locale,
        page,
        heroes,
        stats,
        catogorizedservices,
        unCatogorizedservices,
        articles,
        events,
    } = usePage().props;
    const [swipeData, setSwipeData] = useState(articles);

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);
        if (containerRef.current) observer.observe(containerRef.current);
        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        };
    }, [containerRef, options]);
    return (
        <Guest
            en={route("home")}
            id={route("home.id")}
            jp={route("home.jp")}
            ch={route("home.ch")}
            description={checkLang(
                locale,
                page.description_eng,
                page.description,
                page.description_jpn,
                page.description_ch
            )}
            seo_title={checkLang(
                locale,
                page.SEO_title_eng,
                page.SEO_title,
                page.SEO_title_jpn,
                page.SEO_title_ch
            )}
            href={checkLang(
                locale,
                route("home"),
                route("home.id"),
                route("home.jp"),
                route("home.ch")
            )}
        >
            <Hero
                heroes={heroes}
                t={t}
                theme={theme}
                locale={locale}
                checkLang={checkLang}
            />
            <Box
                component="section"
                sx={{
                    padding: "2rem 0 1rem 0",
                    [theme.breakpoints.down("md")]: {
                        backgroundImage: `url(${serviceBgMobile})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    },
                }}
            >
                <div className="container">
                    <div className="row">
                        {isMobile ? <AwardIconMobile /> : <AwardDesktop />}
                    </div>
                    <div className="row about_text mt-3">
                        <div className="col-12">
                            <Typography
                                sx={{
                                    color: theme.palette.custom.lightBlue,
                                    textAlign: "center",
                                }}
                            >
                                {t("about")}
                            </Typography>
                        </div>
                    </div>
                    <div ref={containerRef} className="row">
                        <StatCountUp
                            stats={stats}
                            theme={theme}
                            locale={locale}
                            checkLang={checkLang}
                            isMobile={isMobile}
                        />
                        <Box
                            className="col-12 col-md-3 mt-3 mt-md-0"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <ComproModal buttonText={t("comproButton")} />
                        </Box>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center mt-5">
                            <Typography
                                sx={{
                                    fontSize: "1.9375rem",
                                    lineHeight: "1.43749551em",
                                    color: theme.palette.custom.darkBlue,
                                }}
                                as="h2"
                            >
                                {t("expertise")}
                            </Typography>
                        </div>
                    </div>
                    <ExpertiseList
                        checkLang={checkLang}
                        locale={locale}
                        t={t}
                    />
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
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: "0.5",
                                    },
                                }}
                                as="h2"
                            >
                                {t("value")}
                            </Typography>
                        </div>
                    </div>
                    {isMobile ? (
                        <div className="row">
                            <ValueSlick />
                        </div>
                    ) : (
                        <div className="row mt-4">
                            <Box
                                className="col-3 p-0 value_item"
                                sx={{
                                    position: "relative",
                                    overflow: "hidden",
                                }}
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
                                        [theme.breakpoints.down("md")]: {
                                            fontSize: "0.8rem",
                                        },
                                    }}
                                >
                                    {t("valueOne")}
                                </Typography>
                            </Box>
                            <Box
                                className="col-3 p-0 value_item"
                                sx={{
                                    position: "relative",
                                    overflow: "hidden",
                                }}
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
                                        [theme.breakpoints.down("md")]: {
                                            fontSize: "0.8rem",
                                        },
                                    }}
                                >
                                    {t("valueTwo")}
                                </Typography>
                            </Box>
                            <Box
                                className="col-3 p-0 value_item"
                                sx={{
                                    position: "relative",
                                    overflow: "hidden",
                                }}
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
                                        [theme.breakpoints.down("md")]: {
                                            fontSize: "0.8rem",
                                        },
                                    }}
                                >
                                    {t("valueThree")}
                                </Typography>
                            </Box>
                            <Box
                                className="col-3 p-0 value_item"
                                sx={{
                                    position: "relative",
                                    overflow: "hidden",
                                }}
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
                                        [theme.breakpoints.down("md")]: {
                                            fontSize: "0.8rem",
                                        },
                                    }}
                                >
                                    {t("valueFour")}
                                </Typography>
                            </Box>
                        </div>
                    )}
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
                        <div className="col-12 col-md-6">
                            <Typography
                                as="h2"
                                sx={{
                                    fontSize: "3.4375rem",
                                    lineHeight: "1.19642857em",
                                    letterSpacing: "0.009em",
                                    color: theme.palette.custom.orange,
                                    marginBottom: "10px",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "1.8rem",
                                        textAlign: "center",
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
                                        textAlign: "center",
                                    },
                                    [theme.breakpoints.down("lg")]: {
                                        fontSize: "1.0366rem",
                                    },
                                }}
                            >
                                {t("serviceDesc")}
                            </Typography>
                        </div>
                        <Box className="col-12 col-md-6 mt-5 mt-md-0 services_list">
                            <ServiceAccordion
                                locale={locale}
                                categorized={catogorizedservices}
                                unCategorized={unCatogorizedservices}
                            />
                        </Box>
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
                </div>
                <Box>
                    <img src={teamImg} alt={t("teamHead")} className="w-100" />
                </Box>
            </Box>
            <ConsultationButton />
            <Box component="section" sx={{ py: "3.5rem" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <Typography
                                sx={{
                                    fontSize: "1.9375rem",
                                    lineHeight: "1.43749551em",
                                    color: theme.palette.custom.lightBlue,
                                    textAlign: "center",
                                }}
                                as="h2"
                            >
                                {t("articleHead")}
                            </Typography>
                        </div>
                    </div>
                    <div className="row">
                        {isMobile && (
                            <Box
                                sx={{
                                    placeItems: "center",
                                    overflow: "hidden",
                                    height: "100%",
                                }}
                                className="col-12 d-grid px-5, pt-5 mt-3"
                            >
                                {swipeData.map((article, index) => (
                                    <ArticleSwipeable
                                        article={article}
                                        swipeData={swipeData}
                                        setSwipeData={setSwipeData}
                                        index={index}
                                        key={article.id}
                                        locale={locale}
                                    />
                                ))}
                            </Box>
                        )}
                        {isMobile && (
                            <div className="col-12">
                                <Typography
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: 1,
                                        fontSize: "0.9rem",
                                        svg: {
                                            fontSize: "1.1rem",
                                        },
                                    }}
                                >
                                    Swipe
                                    <FaArrowRightLong />
                                </Typography>
                            </div>
                        )}
                        {!isMobile &&
                            articles.map((article) => (
                                <RoundedArticle
                                    key={article.id}
                                    title={checkLang(
                                        locale,
                                        article.title_eng,
                                        article.title,
                                        article.title_jpn
                                    )}
                                    category="PPN"
                                    timeStamp={formatDate(article.created_at)}
                                    img={`/storage/${article.thumbnail}`}
                                    detail={checkLang(
                                        locale,
                                        route(
                                            "article-detail",
                                            article.slug_eng
                                        ),
                                        route(
                                            "article-detail.id",
                                            article.slug
                                        ),
                                        route(
                                            "article-detail.jp",
                                            article.slug_jpn
                                        ),
                                        route(
                                            "article-detail.ch",
                                            article.slug_eng
                                        )
                                    )}
                                />
                            ))}
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
                        [theme.breakpoints.down("md")]: {
                            right: 8,
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
                                fontSize: ".9rem",
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
                        {isMobile ? (
                            <EventItemMobile events={events} locale={locale} />
                        ) : (
                            events.map((item) => (
                                <EventItem
                                    key={item.id}
                                    route={checkLang(
                                        locale,
                                        route("event-detail", item.slug_eng),
                                        route("event-detail.id", item.slug),
                                        route("event-detail.jp", item.slug_jpn)
                                    )}
                                    image={item.photo}
                                    title={checkLang(
                                        locale,
                                        item.title_eng,
                                        item.title,
                                        item.title_jpn
                                    )}
                                    date={formatDate(item.created_at, true)}
                                />
                            ))
                        )}
                    </div>
                </div>
            </Box>
        </Guest>
    );
}

export default Home;
