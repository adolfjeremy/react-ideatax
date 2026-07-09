import { useState, useEffect, lazy, Suspense } from "react";
import { Box, Typography, useTheme, useMediaQuery, Button, Link, Skeleton } from "@mui/material";
import { usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import Guest from "@/Layout/Guest";
import Hero from "./parts/Hero";
const ExpertiseList = lazy(() => import("./parts/ExpertiseList"));
const StatCountUp = lazy(() => import("./parts/StatCountUp"));
const ArticleList = lazy(() => import("./parts/ArticleList"));
const UpdateList = lazy(() => import("./parts/UpdateList"));
const AdvisoryHighlight = lazy(() => import("./parts/AdvisoryHighlight"));
const AdvisoryList = lazy(() => import("./parts/AdvisoryList"));
const RegulationList = lazy(() => import("./parts/RegulationList"));
import RegulationBg from "../../assets/images/reguation-bg.png"
import { MdArrowForwardIos } from "react-icons/md";
const AwardCarousel = lazy(() => import("./parts/AwardCarousel").then(module => ({ default: module.AwardCarousel || module.default })));
import professional from "../../assets/images/profesional.png";
import trustwothy from "../../assets/images/trustworthy.png";
import creativity from "../../assets/images/creativity.png";
import prudent from "../../assets/images/prudent.png";
import checkLang from "@/utils/checkLang";
import formatDate from "@/utils/formatDate";
const EventItem = lazy(() => import("@/Components/EventItem"));
const EventItemMobile = lazy(() => import("@/Components/EventItemMobile"));
const OurTeamSlider = lazy(() => import("./parts/OurTeamSlider"));

import "./home.scss";

function Home() {
    const [visible, setIsVisible] = useState(false);

    const isMobileQuery = useMediaQuery((theme) => theme.breakpoints.down("md"));
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(isMobileQuery);
    }, [isMobileQuery]);

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
        compro
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
                compro={compro}
                checkLang={checkLang}
            />
            <Box
                component="section"
                sx={{
                    contentVisibility: "auto",
                    containIntrinsicSize: "0 1000px",
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
                    <div className="row px-3 px-md-0 d-flex align-items-center justify-content-between">
                        <div className="col-12 col-md-6 py-4 py-md-0 d-flex flex-column align-items-center justify-content-center">
                            <div className="row mb-md-4">
                                <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={100} />}>
                                <StatCountUp
                                stats={stats}
                                theme={theme}
                                locale={locale}
                                checkLang={checkLang}
                                isMobile={isMobile}
                            />
                                </Suspense>
                            </div>
                            <div className="row w-100 py-2">
                                <div className="col-12">
                                    <hr style={{backgroundColor: theme.palette.custom.gray, height: "2px"}} />
                                </div>
                            </div>
                            <div className="row mt-md-4">
                                <Box sx={{
                                    width: "100%",
                                    [theme.breakpoints.down("md")]: {
                                        px:2,
                                    }
                                }} className="col-12 relative">
                                <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={100} />}><AwardCarousel theme={theme}/></Suspense> 
                                </Box>
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
                                        fontSize: "0.6875rem",
                                    }
                                }}
                            >
                                {t("about")}
                            </Typography>
                        </Box>
                    </div>
                    <div className="row m-1 mx-md-0">
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
                    <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={400} />}>
                    <ExpertiseList
                        checkLang={checkLang}
                        locale={locale}
                        t={t}
                        theme={theme}
                    />
                    </Suspense>
                    <div className="row pb-3">
                        <div className="col-12 text-center mt-3">
                            <Button
                                as="a"
                                href={checkLang(
                                    locale,
                                    route("service"),
                                    route("service.id"),
                                    route("service.jp"),
                                    route("service.ch")
                                )}
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
                contentVisibility: "auto",
                containIntrinsicSize: "0 800px",
                backgroundColor:theme.palette.custom.gray,
                pt: "2rem",
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
                                px: "3rem",
                            }} 
                            className="col-12 position-relative"
                        >
                            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={400} />}>
                            <OurTeamSlider 
                                checkLang={checkLang}
                                theme={theme} 
                                locale={locale}
                                departments={departments}
                            />
                            </Suspense>
                        </Box>
                    </div>
                </div>
            </Box>
            <Box className="pt-5" component="section" sx={{ contentVisibility: "auto", containIntrinsicSize: "0 500px", backgroundColor: theme.palette.custom.gray, overflow: "hidden", }}>
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
            <Box sx={{contentVisibility: "auto", containIntrinsicSize: "0 800px", mx: 1, [theme.breakpoints.up("md")]: {mx: 0,}}}>
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
                                Publications
                            </Typography>
                        </div>
                    </div>
                    <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}><ArticleList t={t} data={articles} locale={locale} /></Suspense>
                    <div className="row">
                        <div className="col-12">
                            <hr />
                        </div>
                    </div>
                    <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}><UpdateList t={t} data={updates} locale={locale} /></Suspense>
                </div>
            </Box>
            {
                advisories.length > 0 && (
                    <Box sx={{ 
                                contentVisibility: "auto",
                                containIntrinsicSize: "0 800px",
                                backgroundColor: theme.palette.custom.gray, 
                                py: 10, 
                                [theme.breakpoints.down("md")]: {
                                    py:6,
                                    mt: 6
                                },}}>
                                <div className="container">
                                    {advisories.map((advisory, idx) => (
                                        <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={200} />} key={advisory.id}><AdvisoryHighlight advisory={advisory} idx={idx} /></Suspense>
                                    ))}
                                    <div className="row">
                                        <Box sx={{
                                            [theme.breakpoints.down("md")]: {
                                                px: 4
                                            }
                                        }} className="col-12 mt-4 position-relative">
                                            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}><AdvisoryList advisories={advisories} /></Suspense>
                                        </Box>
                                    </div>
                                </div>
                            </Box>
                        )
                    }
                    {
                        regulations.length > 0 && (
                            <Box sx={{ 
                            contentVisibility: "auto",
                            containIntrinsicSize: "0 600px",
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
                            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={400} />}><RegulationList regulations={regulations} /></Suspense>
                            <div className="row">
                                <div className="col-12 d-flex align-items-center justify-content-start">
                                    <Link href={checkLang(
                                                locale,
                                                route("publications"),
                                                route("publications.id"),
                                                route("publications.jp"),
                                                route("publications.ch")
                                            )} sx={{
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
                )
            }
            <Box component="section" sx={{ contentVisibility: "auto", containIntrinsicSize: "0 600px", py: "3.5rem" }}>
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
                            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}><EventItemMobile events={events} locale={locale} /></Suspense>
                        ) : (
                            events.map((item) => (
                                <Suspense key={item.id} fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                                <EventItem
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
                                </Suspense>
                            ))
                        )}
                    </div>
                </div>
            </Box>
        </Guest>
    );
}

export default Home;
