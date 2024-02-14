"use client"
import React from 'react'
import { civil1 } from '../../../public/images';
import Image from 'next/image';
import ResidentialBuildingCss from "./ResidentialBuilding.module.css";
import Fade from 'react-reveal/Fade';

const ResidentialBuilding = () => {
  return (
    <div id='residentialBuilding' className={ResidentialBuildingCss.mainContainer}>
      <div className={ResidentialBuildingCss.container}>
        {/* <h3 className={ResidentialBuildingCss.title}>Civil</h3> */}
        <div className={ResidentialBuildingCss.content}>
          <Fade left duration={2000}>
            <div className={ResidentialBuildingCss.imageDiv}>
                <Image className={ResidentialBuildingCss.image} src={civil1} height={500} width={500} alt="Twin 5 bedroom duplex, Ajah Lagos"/>
            </div>
          </Fade>
          <Fade right duration={2000}>
            <div className={ResidentialBuildingCss.info}>
                <h4 className={ResidentialBuildingCss.infoTitle}>Residential Buildings</h4>
                <p className={ResidentialBuildingCss.desc}>
                  Our expertise in residential construction is unparalleled. We believe that every home should be built to last and provide utmost comfort and functionality to its residents. Our meticulous attention to detail ensures that every aspect of construction, from foundation to finishing touches, is of the highest standard. We understand that building a home is a significant investment, and we take it upon ourselves to deliver on our promises that exceeding our clients' expectations. We provide timely completion, staying within budget, and delivering an end product that they can truly be proud of.
                </p>
                {/* <button className={ResidentialBuildingCss.btn}>See Details</button> */}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default ResidentialBuilding;
