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

function AwardIconMobile() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        variableWidth: true,
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <Box
                    sx={{
                        width: "115px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 15px",
                        img: {
                            width: "100px",
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
                        margin: "0 15px",
                        img: {
                            width: "70px",
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
                        margin: "0 15px",
                        img: {
                            width: "70px",
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
                        margin: "0 15px",
                        img: {
                            width: "90px",
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
                        margin: "0 15px",
                        img: {
                            width: "90px",
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
                        margin: "0 15px",
                        img: {
                            width: "90px",
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
                        margin: "0 15px",
                        img: {
                            width: "90px",
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
                        margin: "0 15px",
                        img: {
                            width: "90px",
                        },
                    }}
                >
                    <img src={aw7} alt="award" />
                </Box>
            </Slider>
        </div>
    );
}

export default AwardIconMobile;
