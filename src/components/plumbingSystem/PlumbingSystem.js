"use client"
import React from 'react'
import Image from 'next/image'
import PlumbingSystemCss from "./PlumbingSysytem.module.css"
import { plumbing1, plumbing2 } from '../../../public/images'
import Fade from 'react-reveal/Fade';

const PlumbingSystem = () => {
  return (
    <div className={PlumbingSystemCss.mainContainer} id='plumbingSystem'>
      <div className={PlumbingSystemCss.container}>
        <Fade up duration={2000}>
          <div className={PlumbingSystemCss.text}>
            <h2 className={PlumbingSystemCss.h2}>Plumbing System</h2>
            <p className={PlumbingSystemCss.p}>
              Our expertise lies in the comprehensive management of plumbing systems, including the design, installation, repair, and maintenance of plumbing systems, sewage lines, gas lines, water treatment plants, and sewage treatment plants.

              From the initial design phase to the final installation, we prioritize quality and precision in every aspect of our work. Our experienced technicians are equipped with the latest tools and techniques to handle any plumbing challenge, guaranteeing optimal performance and longevity of your systems.
              <br/>
              <br/>
              Moreover, we understand the importance of regular maintenance to prevent potential issues and extend the lifespan of your plumbing infrastructure. Our team is readily available to conduct routine inspections, identify and address any problems, and provide timely repairs to keep your systems running smoothly.

              Whether you require assistance with residential, commercial, or industrial plumbing projects, we have the knowledge and expertise to meet your needs. Our commitment to professionalism and customer satisfaction sets us apart as a trusted partner in the plumbing industry.
            </p>
          </div>
        </Fade>
        <Fade down duration={2000}>
          <div className={PlumbingSystemCss.imageDiv}>   
            <Image className={PlumbingSystemCss.img} height={500} width={500} src={plumbing1} alt='image1'/>
            <Image className={PlumbingSystemCss.img} height={500} width={500} src={plumbing2} alt='image2'/>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default PlumbingSystem
