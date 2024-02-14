"use client"
import Image from "next/image"
import { AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import SliderCss from "./Slider.module.css"
import SliderData from "@/utilities/sliderData/SliderData"
import { useEffect, useState } from "react"

const Slider = () => {

    const [ currentSlide, setCurrentSlide ] = useState(0);

    const slideLength = SliderData.length;
    const autoScroll = true;
    let slideInterval;
    const intervalTime = 5000

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide -1)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
    }

    useEffect(() => {
        setCurrentSlide(0)
    }, []);

    useEffect(() => {
        if(autoScroll) {
            const auto = () => {
                slideInterval = setInterval(nextSlide, intervalTime)
            }
            auto()
        }
        return () => clearInterval(slideInterval)
    }, [currentSlide, intervalTime, autoScroll]);

  return (
    <div className={SliderCss.slider}>
     <AiOutlineArrowLeft className={`${SliderCss.arrow} ${SliderCss.prev}`} onClick={prevSlide}/>
     <AiOutlineArrowRight className={`${SliderCss.arrow} ${SliderCss.next}`} onClick={nextSlide}/>
     {SliderData.map((item, index) => {
        return(
            <div key={index} className={index === currentSlide ? `${SliderCss.slide} ${SliderCss.current}` : `${SliderCss.slide}`}>
                {index === currentSlide && (
                    <>
                        <Image className={SliderCss.img} src={item.image} height={500} width={500} alt="bgImages"/>
                        <div className={SliderCss.content}>
                            <span className={SliderCss.span1}></span>
                            <span className={SliderCss.span2}></span>
                            <span className={SliderCss.span3}></span>
                            <span className={SliderCss.span4}></span>
                            <h2 className={SliderCss.h2}>{item.heading}</h2>
                            <hr className={SliderCss.hr}/>
                            <p className={SliderCss.desc}>{item.desc}</p>
                        </div>
                    </>
                )}
            </div>
        )
     })}
    </div>
  )
}

export default Slider;
