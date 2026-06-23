import { useState, useRef, useEffect } from "react";
import { Box, Typography, useTheme, useMediaQuery, Button, Link } from "@mui/material";
import { usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import Guest from "@/Layout/Guest";
import Hero from "./parts/Hero";
import ExpertiseList from "./parts/ExpertiseList";
import StatCountUp from "./parts/StatCountUp";
import ArticleList from "./parts/ArticleList";
import UpdateList from "./parts/UpdateList";
import AdvisoryHighlight from "./parts/AdvisoryHighlight";
import AdvisoryList from "./parts/AdvisoryList";
import RegulationList from "./parts/RegulationList";
import RegulationBg from "../../assets/images/reguation-bg.png"
import { MdArrowForwardIos } from "react-icons/md";
import ComproModal from "./ComproModal";
import ConsultationButton from "@/Components/ConsultationButton";
import SubsModal from "./SubsModal";
import RoundedArticle from "./RoundedArticle";
import AwardIconMobile from "@/Components/AwardIconMobile";
import { AwardCarousel } from "./parts/AwardCarousel";
import ValueSlick from "@/Components/ValueSlick";
import serviceBg from "../../assets/images/service-bg.png";
import teamImg from "../../assets/images/ideatax-team.png";
import subs from "../../assets/images/subscribe.webp";
import professional from "../../assets/images/profesional.png";
import trustwothy from "../../assets/images/trustworthy.png";
import creativity from "../../assets/images/creativity.png";
import prudent from "../../assets/images/prudent.png";
import checkLang from "@/utils/checkLang";
import formatDate from "@/utils/formatDate";
import EventItem from "@/Components/EventItem";
import EventItemMobile from "@/Components/EventItemMobile";
import ServiceAccordion from "@/Components/ServiceAccordion";
import ArticleSwipeable from "@/Components/ArticleSwipeable";
import { FaArrowRightLong } from "react-icons/fa6";
import OurTeamSlider from "./parts/OurTeamSlider";

import "./home.scss";

function Home() {
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
        articles,
        updates,
        departments,
        advisories,
        regulations,
        events,
    } = usePage().props;

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
                    padding: "3rem 6rem",
                    [theme.breakpoints.down("md")]: {
                        padding: "2rem 0",
                    },
                    [theme.breakpoints.down("sm")]: {
                        padding: "0.625rem 0",
                    },
                }}
            >
                <div className="container">
                    <div className="row px-3 px-md-0">
                        <div className="col-12 col-md-7 py-4 py-md-0 d-flex flex-column align-items-center justify-content-center">
                            <div className="row mb-md-4">
                                <StatCountUp
                                stats={stats}
                                theme={theme}
                                locale={locale}
                                checkLang={checkLang}
                                isMobile={isMobile}
                            />
                            </div>
                            <div className="row w-100 pe-lg-5 ps-lg-1 py-2">
                                <div className="col-12">
                                    <hr style={{backgroundColor: theme.palette.custom.gray, height: "2px"}} />
                                </div>
                            </div>
                            <div className="row mt-md-4 pe-lg-5 pb">
                                <div className="col-12 relative">
                                    <AwardCarousel theme={theme}/> 
                                </div>
                            </div>
                        </div>
                        <Box sx={{
                            background: theme.palette.custom.gray,
                            py: "26px",
                            px: "42px",
                            borderRadius:"19px",
                            [theme.breakpoints.down("md")]: {
                                py: "16px",
                                px: "24px",
                            }}} className="col-12 col-md-5">
                            <Typography
                                as="h2"
                                sx={{
                                    color: theme.palette.custom.black,
                                    textAlign: "start",
                                    fontSize: "3rem",
                                    fontWeight: "300",
                                    lineHeight: "107.3%",
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: "1.5rem",
                                    }
                                }}
                            >
                                Indonesian<br />Tax Expertise,
                                <br />
                                <Typography sx={{
                                    color: theme.palette.custom.black,
                                    textAlign: "start",
                                    fontSize: "3rem",
                                    fontWeight: "700",
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: "1.5rem",
                                    }
                                }}>
                                    Worldwide Trust.
                                </Typography>
                            </Typography>
                            <Typography
                                sx={{
                                    color: theme.palette.custom.black,
                                    textAlign: "start",
                                    fontWeight: 300,
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: "0,6875rem",
                                    }
                                }}
                            >
                                {t("about")}
                            </Typography>
                        </Box>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center mt-5">
                            <Typography
                                sx={{
                                    color: theme.palette.custom.black,
                                    textAlign: "start",
                                    fontSize: "3rem",
                                    fontWeight: "700",
                                    lineHeight: "107.3%",
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: "1.5rem",
                                    }
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
                        theme={theme}
                    />
                    <div className="row mt-4">
                        <div className="col-12 text-center">
                            <Button
                                as="a"
                                href="/service"
                                sx={{
                                    backgroundColor: "transparent",
                                    letterSpacing: "2%",
                                    lineHeight: "100%",
                                    color: theme.palette.custom.black,
                                    fontWeight: 700,
                                    border: `1px solid ${theme.palette.custom.black}`,
                                    borderRadius: "16px",
                                    textTransform: "capitalize",
                                    textDecoration: "none",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                    backgroundColor: theme.palette.custom.yellow,
                                    color: theme.palette.custom.white,
                                    border: `1px solid ${theme.palette.custom.yellow}`,
                                    },
                                        [theme.breakpoints.down("md")]: {
                                            fontSize: "0.625rem",
                                            padding: "0.35rem 0.65rem",
                                        },
                                        [theme.breakpoints.up("md")]: {
                                            fontSize: "1rem",
                                            padding: "0.6875rem 1.5625rem",
                                        },
                                        [theme.breakpoints.up("lg")]: {
                                            fontSize: "1.2rem",
                                        },
                                }}>
                                Our Solutions
                            </Button>
                        </div>
                    </div>
                </div>
            </Box>
            <Box sx= {{
                backgroundColor:theme.palette.custom.gray,
                py: "2rem",
                mt: 1
            }}>
                <div className="container">
                    <div className="row mb-5">
                            <div className="col-12">
                                <Typography
                                    sx={{
                                    color: theme.palette.custom.black,
                                    lineHeight: "1.18641819em",
                                    fontSize: "3rem",
                                    fontWeight: "700",
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: "1.5rem",
                                    },
                                }}
                                as="h2"
                            >
                                {t("teamHead")}
                            </Typography>
                        </div>
                    </div>
                    <div className="row">
                        <Box
                            sx={{
                                px: "3rem"}} 
                            className="col-12 position-relative"
                        >
                            <OurTeamSlider 
                                checkLang={checkLang}
                                theme={theme} 
                                locale={locale}
                                departments={departments}
                            />
                        </Box>
                    </div>
                </div>
            </Box>
            <Box component="section" sx={{ py: "3rem", overflow: "hidden", }}>
                <div className="container-fluid p-0 m-0">
                    <div className="row">
                        <div className="col-12 ">
                            <Typography
                                sx={{
                                    fontSize: "3rem",
                                    lineHeight: "1.43749551em",
                                    fontWeight: "700",
                                    color: theme.palette.custom.black,
                                    textAlign: "center",
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: "1.5rem",
                                    },
                                }}
                                as="h2"
                            >
                                {t("value")}
                            </Typography>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <Box className="col-6 col-lg-3 p-0 value_item"
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
                                    fontSize: "2rem",
                                    fontWeight: "400",
                                    lineHeight: "1.42498753em",
                                    letterSpacing: ".009em",
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: "1.5rem",
                                    },
                                }}
                            >
                                {t("valueOne")}
                            </Typography>
                        </Box>
                        <Box className="col-6 col-lg-3 p-0 value_item"
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
                                    fontSize: "2rem",
                                    fontWeight: "400",
                                    lineHeight: "1.42498753em",
                                    letterSpacing: ".009em",
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: "1.5rem",
                                    },
                                }}
                            >
                                {t("valueTwo")}
                            </Typography>
                        </Box>
                        <Box className="col-6 col-lg-3 p-0 value_item"
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
                                    fontSize: "2rem",
                                    fontWeight: "400",
                                    lineHeight: "1.42498753em",
                                    letterSpacing: ".009em",
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: "1.5rem",
                                    },
                                }}
                            >
                                {t("valueThree")}
                            </Typography>
                        </Box>
                        <Box className="col-6 col-lg-3 p-0 value_item"
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
                                    fontSize: "2rem",
                                    fontWeight: "400",
                                    lineHeight: "1.42498753em",
                                    letterSpacing: ".009em",
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: "1.5rem",
                                    },
                                }}
                            >
                                {t("valueFour")}
                            </Typography>
                        </Box>
                    </div>
                </div>
            </Box>
            <Box>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12">
                             <Typography
                                sx={{
                                    color: theme.palette.custom.black,
                                    textAlign: "start",
                                    fontSize: "3rem",
                                    fontWeight: "700",
                                    lineHeight: "107.3%",
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: "1.5rem",
                                    }
                                }}
                                as="h2"
                            >
                                Publication
                            </Typography>
                        </div>
                    </div>
                    <ArticleList t={t} data={articles} locale={locale} />
                    <div className="row">
                        <div className="col-12">
                            <hr />
                        </div>
                    </div>
                    <UpdateList t={t} data={updates} locale={locale} />
                </div>
            </Box>
            <Box sx={{ 
                    backgroundColor: theme.palette.custom.gray, 
                    py: 10, 
                    [theme.breakpoints.down("md")]: {
                        py:6,
                        mt: 6
                    },}}>
                <div className="container">
                    {advisories.map((advisory, idx) => (
                        <AdvisoryHighlight key={advisory.id} advisory={advisory} idx={idx} />
                    ))}
                    <div className="row">
                        <div className="col-12 mt-4 position-relative">
                            <AdvisoryList advisories={advisories} />
                        </div>
                    </div>
                </div>
            </Box>
            <Box sx={{ 
                    backgroundImage: `url(${RegulationBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                    py: 8, 
                    [theme.breakpoints.down("md")]: {
                        py:4,
                        mt: 6
                    },}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 ">
                            <Typography
                                sx={{
                                    fontSize: "3rem",
                                    lineHeight: "1.43749551em",
                                    fontWeight: "700",
                                    color: theme.palette.custom.white,
                                    textAlign: "start",
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: "1.5rem",
                                    },
                                }}
                                as="h2"
                            >
                                Library
                            </Typography>
                        </div>
                    </div>
                    <RegulationList regulations={regulations} />
                    <div className="row">
                        <div className="col-12 d-flex align-items-center justify-content-start">
                            <Link href="" sx={{
                                color: theme.palette.custom.yellow,
                                fontSize: "1.5rem",
                                fontWeight: "700",
                                lineHeight: "1.42498753em",
                                letterSpacing: ".009em",
                                textDecoration: "none",
                                display:"flex",
                                alignItems:"center",
                                gap:"10px",
                                [theme.breakpoints.down("md")]: {
                                    fontSize: "0.5rem",
                                },
                            }}>More Regulations <MdArrowForwardIos size={15} /></Link>
                        </div>
                    </div>
                </div>
            </Box>
            <Box component="section" sx={{ py: "3.5rem" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Typography
                                sx={{
                                    fontSize: "3rem",
                                    lineHeight: "1.43749551em",
                                    color: theme.palette.custom.black,
                                    textAlign: "start",
                                    fontWeight: 700,
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: "1.5rem",
                                    }
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
