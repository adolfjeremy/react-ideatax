import React, { useState, useEffect, useCallback } from 'react'; // Tambahkan import ini
import useEmblaCarousel from 'embla-carousel-react'
import {Button} from '@mui/material'
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center', loop:true }, [Autoplay()])
  
  // 1. Buat state untuk menyimpan index slide yang sedang di tengah
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  // 2. Fungsi untuk mengupdate state berdasarkan slide yang sedang dipilih Embla
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // 3. Gunakan useEffect untuk mendengarkan event 'select' dari Embla
  useEffect(() => {
    if (!emblaApi) return;
    onSelect(); // Set state awal saat komponen dimuat
    emblaApi.on('select', onSelect); // Update saat bergeser
    emblaApi.on('reInit', onSelect); // Update saat ukuran layar berubah
  }, [emblaApi, onSelect]);

  const slides = [aw, aw1, aw2, aw3, aw4, aw5, aw6, aw7, aw8, aw9, aw10, aw11];

  return (
    <>
    <div className="embla_award relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container_award">
          {slides.map((img, index) => (
            <div
              // 4. Tambahkan class dinamis 'is-center' jika index sama dengan selectedIndex
              className={`embla__slide_award ${index === selectedIndex ? 'is-center' : ''}`}
              key={index}
            >
              <img src={img} alt="Award Logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
    
    {/* Tombol navigasi Anda tetap sama */}
    <Button type="button" className="embla__prev" onClick={scrollPrev} sx={{
        position: "absolute",
        top: "50%",
        left: "-20px",
        transform: "translateY(-50%)",
        zIndex: 100,
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "0",
        "svg": {
            color: theme.palette.custom.black,
            fontSize: "36px",
            [theme.breakpoints.down("md")]: {
                fontSize: "26px",
            }
        },
        [theme.breakpoints.down("md")]: {
            left: "-15px",
        },
      }}>
        <IoIosArrowBack strokeWidth={1} />
      </Button>
      <Button type="button" className="embla__next" onClick={scrollNext} sx={{
        position: "absolute",
        top: "50%",
        right: "-20px",
        transform: "translateY(-50%)",
        zIndex: 100,
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "0",
        "svg": {
            color: theme.palette.custom.black,
            fontSize: "36px",
            [theme.breakpoints.down("md")]: {
                fontSize: "26px",
            }
        },
        [theme.breakpoints.down("md")]: {
            right: "-15px",
        },
      }}>
        <IoIosArrowForward strokeWidth={1} />
      </Button>
    </>
  )
}