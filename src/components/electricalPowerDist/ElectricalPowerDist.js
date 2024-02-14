import React from 'react'
import ElectricalPowerDistCss from "./ElectricalPowerDist.module.css"

const ElectricalPowerDist = () => {
  return (
    <div className={ElectricalPowerDistCss.mainContainer} id='electricalPowerDist'>
      <div className={ElectricalPowerDistCss.container}>
        <div className={ElectricalPowerDistCss.inner}>
          <h2 className={ElectricalPowerDistCss.h2}>Power Generation And Distribution</h2>
          <p className={ElectricalPowerDistCss.p}>
            We provide power distribution and transmission, offering modern technology solutions that revolutionize power distribution and transmission, ensuring seamless operations and uninterrupted power supply.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ElectricalPowerDist
