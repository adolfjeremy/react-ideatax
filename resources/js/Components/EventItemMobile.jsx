import React from "react";
import { Link } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import checkLang from "@/utils/checkLang";

import Slider from "react-slick";

function EventItemMobile({ events, locale }) {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: false,
        centerMode: true,
        centerPadding: "100px",
    };
    return (
        <div className="slider-container mt-3">
            <Slider {...settings}>
                {events.map((event) => (
                    <Link
                        href={checkLang(
                            locale,
                            route("event-detail", event.slug_eng),
                            route("event-detail.id", event.slug),
                            route("event-detail.jp", event.slug_jpn)
                        )}
                        className="col-4 px-1"
                        key={event.id}
                    >
                        <img
                            src={`/storage/${event.photo}`}
                            alt={event.title}
                            className="w-100"
                        />
                    </Link>
                ))}
            </Slider>
        </div>
    );
}

export default EventItemMobile;
