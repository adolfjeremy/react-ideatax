import { Box, useTheme, Typography, Link } from "@mui/material";
import { usePage } from "@inertiajs/react";
import Guest from "@/Layout/Guest";
import RichText from "@/Components/RichText";
import Pagination from "@/Components/Pagination";
import checkLang from "@/utils/checkLang";
import formatDate from "@/utils/formatDate";
import renderTitle from "@/utils/renderTitle";
import "@/Pages/Article/article.scss";

function AdvisoryDetailHero({ item, formatDate, theme }) {
    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                [theme.breakpoints.up("md")]: {
                    maxHeight: "100vh",
                    overflow: "hidden",
                },
                [theme.breakpoints.down("md")]: {
                    paddingTop: "100px",
                },
            }}
        >
            <div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {item.team?.profile_picture || item.team?.photo ? (
                            <>
                                <Box
                                    component="img"
                                    src={`/storage/${item.team.profile_picture || item.team.photo}`}
                                    className="w-100"
                                    alt={item.title}
                                    sx={{
                                        display: { xs: "none", md: "block" },
                                        objectFit: "cover",
                                        height: "80vh",
                                        objectPosition: "center top",
                                    }}
                                />
                                <Box
                                    component="img"
                                    src={`/storage/${item.team.photo || item.team.profile_picture}`}
                                    className="w-100"
                                    alt={item.title}
                                    sx={{
                                        display: { xs: "block", md: "none" },
                                        objectFit: "cover",
                                        height: "80vh",
                                        objectPosition: "left top",
                                    }}
                                />
                            </>
                        ) : (
                            <Box sx={{ width: "100%", height: "50vh" }}></Box>
                        )}
                        
                        <Box
                            sx={{
                                position: "absolute",
                                right: 0,
                                bottom: 0,
                                top: 0,
                                left: { xs: 0, md: "35vw" },
                                display: "flex",
                                flexDirection: "column",
                                alignItems: { xs: "flex-start", md: "flex-end" },
                                textAlign: { xs: "left", md: "right" },
                                justifyContent: "center",
                                paddingRight: { xs: "2rem", md: "6.25rem" },
                                paddingLeft: { xs: "2rem", md: 0 },
                                gap: "0.5rem",
                                [theme.breakpoints.down("md")]: {
                                    background: "rgba(0,0,0,0.5)",
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    color: { xs: theme.palette.custom.white, md: theme.palette.custom.black },
                                    fontSize: "4rem",
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: "1.5rem",
                                    },
                                    lineHeight: "1.01561707em",
                                    letterSpacing: "13%",
                                    fontWeight: "700",
                                }}
                                variant="h1"
                            >
                                {renderTitle(item.title)}
                            </Typography>
                            {item.team && (
                                <Link
                                    sx={{
                                        fontSize: "2rem",
                                        color: theme.palette.custom.yellow,
                                        textDecoration: "none",
                                        lineHeight: "1.1875em",
                                        letterSpacing: "2%",
                                        fontWeight: "700",
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "1rem",
                                        },
                                    }}
                                    href={route("team-detail", item.team.id)}
                                >
                                    {item.team.name}
                                </Link>
                            )}
                            <Typography
                                sx={{
                                    color: { xs: theme.palette.custom.white, md: theme.palette.custom.black },
                                    fontSize: "2rem",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "1rem",
                                    },
                                    margin: 0,
                                    padding: 0,
                                    lineHeight: "1.42498753em",
                                    letterSpacing: "0.009em",
                                }}
                            >
                                {formatDate(item.created_at)}
                            </Typography>
                        </Box>
                    </div>
                </div>
            </div>
        </Box>
    );
}


function AdvisoryDetail() {
    const { locale, item, previousAdvisory, nextAdvisory } = usePage().props;
    const theme = useTheme();

    return (
        <Guest
            en={route("advisory-detail", { slug_eng: item.slug_eng })}
            id={route("advisory-detail.id", { slug: item.slug || item.slug_eng })}
            jp={route("advisory-detail.jp", { slug_jpn: item.slug_jpn || item.slug_eng })}
            ch={route("advisory-detail.ch", { slug: item.slug || item.slug_eng })}
            description={item.meta_description}
            seo_title={item.SEO_title}
            href={checkLang(
                locale,
                route("advisory-detail", { slug_eng: item.slug_eng }),
                route("advisory-detail.id", { slug: item.slug || item.slug_eng }),
                route("advisory-detail.jp", { slug_jpn: item.slug_jpn || item.slug_eng }),
                route("advisory-detail.ch", { slug: item.slug || item.slug_eng }),
            )}
        >
            <AdvisoryDetailHero
                item={item}
                theme={theme}
                formatDate={formatDate}
                locale={locale}
                checkLang={checkLang}
            />
            <Box sx={{ px: 20, [theme.breakpoints.down("md")]: {
                        px:0
                    } }} component="article">
                <div className="container">
                    <div className="row px-md-5">
                        <Box
                            sx={{
                                ol: {
                                    listStyle: "auto",
                                },
                                ul: {
                                    listStyle: "auto",
                                },
                            }}
                            className="col-12 px-md-4 mt-5 article_body"
                        >
                            {<RichText htmlContent={item.body} />}
                        </Box>
                    </div>
                </div>
            </Box>
            <Pagination
                prev={
                    previousAdvisory
                        ? checkLang(
                              locale,
                              route("advisory-detail", { slug_eng: previousAdvisory.slug_eng }),
                              route("advisory-detail.id", { slug: previousAdvisory.slug || previousAdvisory.slug_eng }),
                              route("advisory-detail.jp", { slug_jpn: previousAdvisory.slug_jpn || previousAdvisory.slug_eng }),
                              route("advisory-detail.ch", { slug: previousAdvisory.slug || previousAdvisory.slug_eng })
                          )
                        : ""
                }
                next={
                    nextAdvisory
                        ? checkLang(
                              locale,
                              route("advisory-detail", { slug_eng: nextAdvisory.slug_eng }),
                              route("advisory-detail.id", { slug: nextAdvisory.slug || nextAdvisory.slug_eng }),
                              route("advisory-detail.jp", { slug_jpn: nextAdvisory.slug_jpn || nextAdvisory.slug_eng }),
                              route("advisory-detail.ch", { slug: nextAdvisory.slug || nextAdvisory.slug_eng })
                          )
                        : ""
                }
            />
        </Guest>
    );
}

export default AdvisoryDetail;
