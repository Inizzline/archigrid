"use client"
import React from 'react'
import Image from 'next/image'
import { hvac } from '../../../public/images'
import Fade from 'react-reveal/Fade';
import HvacCss from "./Hvac.module.css"

const Hvac = () => {
  return (
    <div className={HvacCss.mainContainer} id='hvac'>
      <div className={HvacCss.container}>
        <div className={HvacCss.content}>
          <Fade left duration={2000}>
              <div className={HvacCss.imgDiv}>
                  <Image className={HvacCss.img} src={hvac} height={500} width={500} alt="A pic of cooling sysetem"/>
              </div>
          </Fade>
          <Fade right duration={2000}>
            <div className={HvacCss.textBox}>
                <h3 className={HvacCss.h3}>HVAC</h3>
                <p className={HvacCss.p}>
                    We possess expertise in designing, installing, maintaining, and repairing heating and cooling systems, guaranteeing optimal comfort and air quality for occupants. Our proficiency extends to various types of HVAC systems, catering to both residential and industrial needs while adhering to industry regulations and standards.
                </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Hvac
