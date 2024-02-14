"use client"
import React from 'react'
import { civil7 } from '../../../public/images'
import Image from 'next/image'
import CommercialBuildingCss from "./CommercialBuilding.module.css"
import Fade from 'react-reveal/Fade';

const CommercialBuilding = () => {
  return (
    <div id='residentialBuilding' className={CommercialBuildingCss.mainContainer}>
    <div className={CommercialBuildingCss.container}>
      {/* <h3 className={ResidentialBuildingCss.title}>Civil</h3> */}
      <div className={CommercialBuildingCss.content}>
        <Fade left duration={2000}>
          <div className={CommercialBuildingCss.imageDiv}>
              <Image className={CommercialBuildingCss.image} src={civil7} height={500} width={500} alt="Twin 5 bedroom duplex, Ajah Lagos"/>
          </div>
        </Fade>
        <Fade right duration={2000}>
          <div className={CommercialBuildingCss.info}>
              <h4 className={CommercialBuildingCss.infoTitle}>Commercial Buildings</h4>
              <p className={CommercialBuildingCss.desc}>
                We specialize in commercial building projects, ensuring that the agreed-upon timeline of the project is not compromised, while maintaining the high standards we set for ourselves in terms of quality and meeting the expectations of end users.
              </p>
              {/* <button className={CommercialBuildingCss.btn}>See Details</button> */}
          </div>
        </Fade>
      </div>
    </div>
  </div>
  )
}

export default CommercialBuilding;
