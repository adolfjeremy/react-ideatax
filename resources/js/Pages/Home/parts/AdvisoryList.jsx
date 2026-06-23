import AdvisoryItem from "./AdvisoryItem";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import { Button, useTheme } from '@mui/material';
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

import "./advisory.scss"

export default function AdvisoryList ({advisories}){
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        delay: 3000, 
        align: 'center',
        breakpoints: {
            '(max-width: 480px)': { align: 'start' }
        }
    }, [Autoplay()])
    const goToPrev = () => emblaApi?.scrollPrev()
    const goToNext = () => emblaApi?.scrollNext()
    const theme = useTheme()

    return (
        <>
            <div className="embla position-relative mt-4">
                <div className="embla__viewport_advisory" ref={emblaRef}>
                <div className="embla__container_advisory">
                    {
                        advisories.map(advisory => (
                            <div className="embla__slide_advisory" key={advisory.id}>
                                <AdvisoryItem key={advisory.id} image={advisory?.team?.profile_picture} position={advisory?.team?.position.name_eng} name={advisory?.team?.name} highlight={advisory.highlight} title={advisory.title} />
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
            <Button sx={{
                    position: "absolute",
                    top: "50%",
                    left: "-45px",
                    transform: "translateY(-50%)",
                    "svg": {
                        color: theme.palette.custom.black
                    }
                }} onClick={goToPrev}><IoIosArrowDropleft size={36} /></Button>
                <Button sx={{
                    position: "absolute",
                    top: "50%",
                    right: "-45px",
                    transform: "translateY(-50%)",
                    "svg": {
                        color: theme.palette.custom.black
                    }
                }} onClick={goToNext}><IoIosArrowDropright size={36} /></Button>
        </>
    )
}