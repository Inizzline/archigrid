"use client"
import React from 'react'
import { civil7 } from '../../../public/images'
import Image from 'next/image'
import CommercialBuildingCss from "./CommercialBuilding.module.css"
import Fade from 'react-reveal/Fade';
import { useRouter } from 'next/navigation'

const CommercialBuilding = () => {

  const router = useRouter();

  return (
    <div id='residentialBuilding' className={CommercialBuildingCss.mainContainer}>
    <div className={CommercialBuildingCss.container}>
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
          </div>
        </Fade>
      </div>
      <button className={CommercialBuildingCss.btn} onClick={()=>router.push("/services#civil")} >Back</button>
    </div>
  </div>
  )
}

export default CommercialBuilding;
