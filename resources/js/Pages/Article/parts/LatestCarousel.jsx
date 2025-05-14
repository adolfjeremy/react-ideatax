import { Box, Typography } from "@mui/material";
import ReadMoreButton from "../ReadMoreButton";
import checkLang from "@/utils/checkLang";
import TruncateRichText from "@/Components/TruncateRichText";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

function LatestCarousel({ data, theme, locale }) {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {data.map((item) => (
                    <div
                        className="embla__slide position-relative"
                        key={item.id}
                    >
                        <img
                            src={`/storage/${item.photo}`}
                            alt={item.title}
                            loading="lazy"
                            className="w-100"
                        />
                        <Box
                            sx={{
                                position: "absolute",
                                left: 0,
                                bottom: 0,
                                top: 0,
                                right: "35vw",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "center",
                                paddingLeft: "10%",
                                gap: "0.5rem",
                                [theme.breakpoints.down("sm")]: {
                                    inset: 0,
                                },

                                [theme.breakpoints.up("lg")]: {
                                    bottom: "20%",
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    color: theme.palette.custom.darkBlue,
                                    fontSize: "3.0861rem",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "1rem",
                                    },
                                    lineHeight: "1.0999978em",
                                    letterSpacing: "0.009em",
                                    fontWeight: "700",
                                }}
                                variant="h1"
                            >
                                {checkLang(
                                    locale,
                                    item.title_eng,
                                    item.title,
                                    item.title_jpn
                                )}
                            </Typography>
                            <TruncateRichText
                                style={{
                                    color: theme.palette.custom.darkBlue,
                                    fontSize: "1.15215rem",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.8rem",
                                    },
                                    margin: 0,
                                    padding: 0,
                                    lineHeight: "1.49999732em",
                                    letterSpacing: "0.009em",
                                }}
                                htmlContent={checkLang(
                                    locale,
                                    item.body_eng,
                                    item.body,
                                    item.body_jpn
                                )}
                            />
                            <ReadMoreButton
                                desctination={
                                    locale == "en"
                                        ? route("article-detail", item.slug_eng)
                                        : locale == "id"
                                        ? route("article-detail.id", item.slug)
                                        : route(
                                              "article-detail.jp",
                                              item.slug_jpn
                                          )
                                }
                            />
                        </Box>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LatestCarousel;
