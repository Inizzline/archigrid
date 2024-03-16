"use client"
import React from 'react'
import Fade from 'react-reveal/Fade';
import ElectricalPowerDistCss from "./ElectricalPowerDist.module.css"

const ElectricalPowerDist = () => {
  return (
    <div className={ElectricalPowerDistCss.mainContainer} id='electricalPowerDist'>
      <Fade down duration={2000}>
        <div className={ElectricalPowerDistCss.container}>
          <div className={ElectricalPowerDistCss.inner}>
            <h2 className={ElectricalPowerDistCss.h2}>Power Generation And Distribution</h2>
            <p className={ElectricalPowerDistCss.p}>
              We provide power distribution and transmission, offering modern technology solutions that revolutionize power distribution and transmission, ensuring seamless operations and uninterrupted power supply.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default ElectricalPowerDist
