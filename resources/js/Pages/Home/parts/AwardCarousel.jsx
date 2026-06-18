import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
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
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import "./award.scss"

export function AwardCarousel({theme}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center', containScroll: 'trim' }, [Autoplay()])
  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <>
    <div className="embla_award relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container_award">
          <div className="embla__slide_award">
            <img src={aw} alt="" />
          </div>
          <div className="embla__slide_award">
            <img src={aw1} alt="" />
          </div>
          <div className="embla__slide_award">
            <img src={aw2} alt="" />
          </div>
          <div className="embla__slide_award">
            <img src={aw3} alt="" />
          </div>
          <div className="embla__slide_award">
            <img src={aw4} alt="" />
          </div>
          <div className="embla__slide_award">
            <img src={aw5} alt="" />
          </div>
          <div className="embla__slide_award">
            <img src={aw6} alt="" />
          </div>
          <div className="embla__slide_award">
            <img src={aw7} alt="" />
          </div>
          <div className="embla__slide_award">
            <img src={aw8} alt="" />
          </div>
          <div className="embla__slide_award">
            <img src={aw9} alt="" />
          </div>
          <div className="embla__slide_award">
            <img src={aw10} alt="" />
          </div>
          <div className="embla__slide_award">
            <img src={aw11} alt="" />
          </div>
        </div>
      </div>
    </div>
    <button className="embla__prev" onClick={scrollPrev} style={{
        position: "absolute",
        top: "50%",
        left: "-5px",
        transform: "translateY(-50%)",
        zIndex: 100,
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "0",
      }}>
        <IoIosArrowBack color={theme.palette.custom.black} size={30} />
      </button>
      <button className="embla__next" onClick={scrollNext} style={{
        position: "absolute",
        top: "50%",
        right: "-5px",
        transform: "translateY(-50%)",
        zIndex: 100,
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "0",
      }}>
        <IoIosArrowForward color={theme.palette.custom.black} size={30} />
      </button>
    </>
  )
}