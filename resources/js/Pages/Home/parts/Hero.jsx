import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography, Button } from "@mui/material";
import OrangeButton from "@/Components/OrangeButton";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";

function Hero({ heroes, t, theme, locale, compro, checkLang }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, );
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    const getSplitText = (item, locale) => {
        let text = "";
        if (item.article) {
            text = checkLang(locale, item.article.title_eng, item.article.title, item.article.title_jpn, item.article.title);
        } else if (item.advisory) {
            text = checkLang(locale, item.advisory.title_eng, item.advisory.title, item.advisory.title_jpn, item.advisory.title);
        }
        
        if (!text) return { title: "", subtitle: "" };
        const words = text.split(" ");
        if (words.length <= 2) return { title: words[0] || "", subtitle: words[1] || "" };
        
        const mid = Math.ceil(words.length / 2);
        return {
            title: words.slice(0, mid).join(" "),
            subtitle: words.slice(mid).join(" ")
        };
    };

    const goToPrev = () => emblaApi?.scrollPrev()
    const goToNext = () => emblaApi?.scrollNext()
    return (
        <Box sx={{ position: "relative", height: "70svh", [theme.breakpoints.up("md")]: {
                            height: "100svh",
                        }}}>
            <div className="embla h-100" ref={emblaRef}>
                <div className="embla__container h-100">
                    {heroes.map((item, index) => (
                        <div
                            className="embla__slide position-relative h-100"
                            key={item.id}
                        >
                            <Box sx={{height: "100%", overflow: "hidden"}}>
                                <img
                                src={
                                    item.article 
                                        ? `/storage/${item.article.photo || item.article.thumbnail}` 
                                        : (item.advisory && item.advisory.team 
                                            ? `/storage/${item.advisory.team.profile_picture}` 
                                            : `/storage/${item.hero}`)
                                }
                                alt={item.title_eng || (item.article && item.article.title_eng) || (item.advisory && item.advisory.title_eng) || "Hero Image"}
                                fetchPriority={index === 0 ? "high" : "auto"}
                                loading={index === 0 ? "eager" : "lazy"}
                                className="w-100 h-100 object-fit-cover"
                            />
                            </Box>
                            <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: item.advisory ? "end" : "start",
                                padding: "0 6rem",
                                zIndex: 100,
                                [theme.breakpoints.down("md")]: {
                                    padding: "0 2rem",
                                },
                            }}
                        >
                            <Box className="row">
                                <Box
                                    className="col-12"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: item.advisory ? "end" : "start",
                                        textAlign: item.advisory ? "right" : "left",
                                        gap: 3,
                                        [theme.breakpoints.down("md")]: {
                                            gap: 2,
                                        },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: theme.palette.custom.white,
                                            fontWeight: 300,
                                            transition: 'color 0.3s ease',
                                            "&:hover": {
                                                color: theme.palette.custom.yellow
                                            },
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "1.5rem",
                                                mt: 7,
                                            },
                                            [theme.breakpoints.up("md")]: {
                                                fontSize: "2.5rem",
                                            },
                                            [theme.breakpoints.up("lg")]: {
                                                fontSize: "4rem",
                                            },
                                            lineHeight: "100%",
                                            letterSpacing: "2px",
                                        }}
                                        variant="h1"
                                    >
                                        {item.title_eng || getSplitText(item, locale).title} <br />
                                        <Typography
                                            sx={{
                                                fontWeight: 700,
                                            }}
                                            variant="span"
                                        >
                                            {item.subtitle_eng || getSplitText(item, locale).subtitle}
                                        </Typography>
                                    </Typography>
                                    <div className={`flex items-center justify-${item.advisory ? "end" : "start"} gap-2 gap-md-3 mt-2 mt-lg-3`}>
                                    {(!item.advisory && !item.article) && (
                                        <OrangeButton
                                            href={checkLang(
                                                locale,
                                                route("contact"),
                                                route("contact.id"),
                                                route("contact.jp"),
                                                route("contact.ch")
                                            )}
                                        >
                                            {t("consult")}
                                        </OrangeButton>
                                    )}
                                    {item.advisory && (
                                        <OrangeButton
                                            href={checkLang(
                                                locale,
                                                route("advisory-detail", item.advisory.slug_eng || item.advisory.slug || ""),
                                                route("advisory-detail.id", item.advisory.slug || ""),
                                                route("advisory-detail.jp", item.advisory.slug_jpn || item.advisory.slug || ""),
                                                route("advisory-detail.ch", item.advisory.slug || "")
                                            )}
                                        >
                                            {t("readAdvisory", { defaultValue: "Read Advisory" })}
                                        </OrangeButton>
                                    )}
                                    {item.article && (
                                        <OrangeButton
                                            href={checkLang(
                                                locale,
                                                route("article-detail", item.article.slug_eng || item.article.slug || ""),
                                                route("article-detail.id", item.article.slug || ""),
                                                route("article-detail.jp", item.article.slug_jpn || item.article.slug || ""),
                                                route("article-detail.ch", item.article.slug || "")
                                            )}
                                        >
                                            {t("readArticle", { defaultValue: "Read Article" })}
                                        </OrangeButton>
                                    )}
                                    <Button
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: "transparent",
                                                letterSpacing: "2%",
                                                lineHeight: "100%",
                                                color: theme.palette.custom.white,
                                                fontWeight: 700,
                                                border: `0.7px solid ${theme.palette.custom.white}`,
                                                borderRadius: "16px",
                                                textTransform: "capitalize",
                                                transition: "all 0.3s ease",
                                                "&:hover": {
                                                    backgroundColor: theme.palette.custom.white,
                                                    color: theme.palette.custom.black,
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
                                                        fontSize: "1.5rem",
                                                    },
                                            }}
                                            target={(!item.advisory && !item.article) ? "_blank" : undefined}
                                            href={
                                                (!item.advisory && !item.article) 
                                                    ? `/storage/${compro.compro}` 
                                                    : checkLang(
                                                        locale,
                                                        route("contact"),
                                                        route("contact.id"),
                                                        route("contact.jp"),
                                                        route("contact.ch")
                                                    )
                                            }
                                        >
                                            {(!item.advisory && !item.article) ? t("comproButton") : t("consult")}
                                        </Button>
                                    </div>
                                </Box>
                            </Box>
                        </Box>
                        </div>
                    ))}
                </div>
            </div>
            {heroes && heroes.length > 1 && (
                        <Box sx={{
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            gap:2,
                            position: "absolute",
                            bottom: "10%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            zIndex: 2,
                            minWidth: 0,
                            "svg": {
                                color: theme.palette.custom.white,
                                fontSize: "36px",
                                [theme.breakpoints.down("md")]: {
                                    fontSize: "26px",
                                }
                            }
                        }}>
                        <Button sx={{
                            minWidth: 0,
                            "svg": {
                                color: theme.palette.custom.white,
                                fontSize: "36px",
                                [theme.breakpoints.down("md")]: {
                                    fontSize: "26px",
                                }
                            }
                        }} onClick={goToPrev}><FiArrowLeftCircle strokeWidth={0.7} /></Button>
                        <div className="embla__dots" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                            {heroes && heroes.length > 1 && heroes.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => emblaApi?.scrollTo(index)}
                                style={{
                                    width: selectedIndex === index ? "16px" : "12px",
                                    height: "3px",
                                    borderRadius: "12px",
                                    border: "none",
                                    backgroundColor: selectedIndex === index ? theme.palette.custom.yellow : theme.palette.custom.white,
                                    opacity: selectedIndex === index ? 1 : 0.5,
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    padding: 0
                                }}
                            />
                            ))}
                        </div>
                        <Button sx={{
                            minWidth: 0,
                            "svg": {
                                color: theme.palette.custom.white,
                                fontSize: "36px",
                                [theme.breakpoints.down("md")]: {
                                    fontSize: "26px",
                                }
                            }
                        }} onClick={goToNext}><FiArrowRightCircle strokeWidth={0.7} /></Button>
                        </Box>
                    )}
        </Box>
    );
}

export default Hero;


