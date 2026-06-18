import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import DepartmentItem from '../components/DeparmentItem'
import Autoplay from "embla-carousel-autoplay";
import { Button } from '@mui/material';
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

function OurTeamSlider({theme,checkLang, locale, departments}) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, delay: 3000 }, [Autoplay()])
    const goToPrev = () => emblaApi?.scrollPrev()
    const goToNext = () => emblaApi?.scrollNext()

  return (
    <>
    <div className="embla position-relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
            {
                departments.map(item => (
                    <div className="embla__slide" key={item.id}>
                        <DepartmentItem 
                            image={item.image}
                            name={checkLang(locale, item.name_eng, item.name, item.name_jp, item.name_ch)} 
                            desc={checkLang(locale, item.description_eng, item.description, item.description_jp, item.description_ch)}
                            theme={theme}
                        />
                    </div>
                ))
            }
        </div>
      </div>
    </div>
    <Button sx={{
        position: "absolute",
        top: "50%",
        left: "0",
        transform: "translateY(-50%)",
        "svg": {
            color: theme.palette.custom.black
        }
    }} onClick={goToPrev}><IoIosArrowDropleft size={36} /></Button>
    <Button sx={{
        position: "absolute",
        top: "50%",
        right: "0",
        transform: "translateY(-50%)",
        "svg": {
            color: theme.palette.custom.black
        }
    }} onClick={goToNext}><IoIosArrowDropright size={36} /></Button>
    </>
  )
}

export default OurTeamSlider