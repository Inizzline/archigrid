"use client"
import React from 'react'
import Image from 'next/image'
import { oilAndGas1, pics2 } from '../../../public/images'
import Fade from 'react-reveal/Fade';
import OilAndGasPipingCss from "./OilAndGasPiping.module.css"

const OilAndGasPiping = () => {
  return (
    <div className={OilAndGasPipingCss.mainContainer} id='oilandgasPiping'>
       <div className={OilAndGasPipingCss.container}>
        <Fade up duration={2000}>
          <div className={OilAndGasPipingCss.text}>
            <h2 className={OilAndGasPipingCss.h2}>Oil And Gas Piping And Tanks</h2>
            <p className={OilAndGasPipingCss.p}>
              We possess extensive expertise in designing, constructing, repairing, and maintaining oil and gas pipes and tanks that adhere to international standards.
              <br/>
              <br/>
              Our team is well-versed in the intricacies of these industries, ensuring that our projects are executed with utmost precision and efficiency. From the initial design phase to the final construction, we prioritize quality and compliance, guaranteeing that our clients receive top-notch solutions.
              <br/>
              <br/>
              Furthermore, our commitment to excellence extends beyond the initial installation. We offer comprehensive maintenance services to ensure the longevity and optimal performance of the oil and gas infrastructure we create. Our skilled technicians are equipped with the latest tools and techniques, enabling them to promptly address any issues that may arise.
              By entrusting us with your oil and gas pipe and tank needs, you can rest assured that you are partnering with a reliable and experienced company. We are dedicated to delivering exceptional results that meet international standards.
            </p>
          </div>
        </Fade>
        <Fade down duration={2000}>
          <div className={OilAndGasPipingCss.imageDiv}>
            <Image className={OilAndGasPipingCss.img} height={500} width={500} src={oilAndGas1} alt='image1'/>
            <Image className={OilAndGasPipingCss.img} height={500} width={500} src={pics2} alt='image2'/>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default OilAndGasPiping
