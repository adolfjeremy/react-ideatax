import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, useTheme } from "@mui/material";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

import professional from "@/assets/images/1.webp";
import trustwothy from "@/assets/images/2.webp";
import creativity from "@/assets/images/3.webp";
import prudent from "@/assets/images/4.webp";

function ValueSlick() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 3000,
        cssEase: "linear",
    };
    const theme = useTheme();
    const { t } = useTranslation();
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <Box
                    className="col-12 p-0 value_item"
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
                            [theme.breakpoints.down("md")]: {
                                fontSize: "1.8rem",
                            },
                        }}
                    >
                        {t("valueOne")}
                    </Typography>
                </Box>
                <Box
                    className="col-12 p-0 value_item"
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
                            [theme.breakpoints.down("md")]: {
                                fontSize: "1.8rem",
                            },
                        }}
                    >
                        {t("valueTwo")}
                    </Typography>
                </Box>
                <Box
                    className="col-12 p-0 value_item"
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
                            [theme.breakpoints.down("md")]: {
                                fontSize: "1.8rem",
                            },
                        }}
                    >
                        {t("valueThree")}
                    </Typography>
                </Box>
                <Box
                    className="col-12 p-0 value_item"
                    sx={{ position: "relative", overflow: "hidden" }}
                >
                    <img src={prudent} alt={t("valueFour")} className="w-100" />
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
                                fontSize: "1.8rem",
                            },
                        }}
                    >
                        {t("valueFour")}
                    </Typography>
                </Box>
            </Slider>
        </div>
    );
}

export default ValueSlick;
