import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import DepartmentItem from '../components/DeparmentItem'
import Autoplay from "embla-carousel-autoplay";
import { Button } from '@mui/material';
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";

function OurTeamSlider({theme,checkLang, locale, departments}) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, delay: 3000 })
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
    {
        departments.length > 1 && (
            <>
            <Button sx={{
                position: "absolute",
                top: "50%",
                left: "-25px",
                transform: "translateY(-50%)",
                "svg": {
                    color: theme.palette.custom.black
                }
            }} onClick={goToPrev}><FiArrowLeftCircle strokeWidth={1} size={36} /></Button>
            <Button sx={{
                position: "absolute",
                top: "50%",
                right: "-25px",
                transform: "translateY(-50%)",
                "svg": {
                    color: theme.palette.custom.black
                }
            }} onClick={goToNext}><FiArrowRightCircle strokeWidth={1} size={36} /></Button>
            </>
        )
    }
    </>
  )}


export default OurTeamSlider