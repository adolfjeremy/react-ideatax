import { Box, Typography, Button } from "@mui/material";
import OrangeButton from "@/Components/OrangeButton";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

function Hero({ heroes, t, theme, locale, compro, checkLang }) {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
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
                            src={`/storage/${item.hero}`}
                            alt={item.title_eng}
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
                            justifyContent: "start",
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
                                    alignItems: "start",
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
                                    {item.title_eng} <br />
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                        }}
                                        variant="span"
                                    >
                                        {item.subtitle_eng}
                                    </Typography>
                                </Typography>
                                <div className="flex items-center justify-start gap-2 gap-md-3 mt-2 mt-lg-3">
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
                                        target="_blank"
                                        href={`/storage/${compro.compro}`}
                                    >
                                        {t("comproButton")}
                                    </Button>
                                </div>
                            </Box>
                        </Box>
                    </Box>
                    </div>
                ))}
            </div>
        </div>
        </Box>
    );
}

export default Hero;


