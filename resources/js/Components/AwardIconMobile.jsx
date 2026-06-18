import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { Box } from "@mui/material";
import aw from "@/assets/images/award/aw.webp";
import aw1 from "@/assets/images/award/aw-2025-2.png";
import aw2 from "@/assets/images/award/aw-2025.png";
import aw3 from "@/assets/images/award/aw-3.webp";
import aw4 from "@/assets/images/award/aw-4.webp";
import aw5 from "@/assets/images/award/aw-5.webp";
import aw6 from "@/assets/images/award/aw-6.webp";
import aw7 from "@/assets/images/award/aw-7.webp";
import aw8 from "@/assets/images/award/aw-2025-3.jpg";
import aw9 from "@/assets/images/award/aw-2025-4.jpg";
import aw10 from "@/assets/images/award/aw-2025-5.jpg";
import aw11 from "@/assets/images/award/aw-2025-6.jpg";

function AwardIconMobile() {
    const settings = {
        centerMode: true,
        dots: false,
        infinite: true,
        slidesToShow: 5,
        centerPadding: "60px",
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: false,
        swipeToSlide: true,
    };
    return (
        <Box
            sx={{
                "& .slick-slide": {
                transition: "transform 0.3s ease",
                },
                "& .slick-slide img": {
                transition: "transform 0.3s ease",
                transform: "scale(0.85)", // default lebih kecil
                },
                "& .slick-center img": {
                width: "125px", // center lebih besar
                },
            }}
            className="slider-container award_icon_mobile"
            >
            <Slider {...settings}>
                <Box
                    sx={{
                        width: "115px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        img: {
                            width: "120px",
                        },
                    }}
                >
                    <img src={aw} alt="award" />
                </Box>
                <Box
                    sx={{
                        width: "70px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        img: {
                            width: "100px",
                        },
                    }}
                >
                    <img src={aw1} alt="award" />
                </Box>
                <Box
                    sx={{
                        width: "70px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        img: {
                            width: "100px",
                        },
                    }}
                >
                    <img src={aw2} alt="award" />
                </Box>
                <Box
                    sx={{
                        width: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        img: {
                            width: "100px",
                        },
                    }}
                >
                    <img src={aw3} alt="award" />
                </Box>
                <Box
                    sx={{
                        width: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        img: {
                            width: "100px",
                        },
                    }}
                >
                    <img src={aw4} alt="award" />
                </Box>
                <Box
                    sx={{
                        width: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        img: {
                            width: "100px",
                        },
                    }}
                >
                    <img src={aw5} alt="award" />
                </Box>

                <Box
                    sx={{
                        width: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        img: {
                            width: "100px",
                        },
                    }}
                >
                    <img src={aw6} alt="award" />
                </Box>

                <Box
                    sx={{
                        width: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        img: {
                            width: "100px",
                        },
                    }}
                >
                    <img src={aw7} alt="award" />
                </Box>
                <Box
                    sx={{
                        width: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        img: {
                            width: "100px",
                        },
                    }}
                >
                    <img src={aw8} alt="award" />
                </Box>
                <Box
                    sx={{
                        width: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        img: {
                            width: "100px",
                        },
                    }}
                >
                    <img src={aw9} alt="award" />
                </Box>
                <Box
                    sx={{
                        width: "100px",
                        display: "flex !important",
                        alignItems: "center",
                        justifyContent: "center",
                        img: {
                            width: "100px",
                        },
                    }}
                >
                    <img src={aw10} alt="award" />
                </Box>
                <Box
                    sx={{
                        width: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 15px",
                        img: {
                            width: "100px",
                        },
                    }}
                >
                    <img src={aw11} alt="award" />
                </Box>
            </Slider>
        </Box>
    );
}

export default AwardIconMobile;
