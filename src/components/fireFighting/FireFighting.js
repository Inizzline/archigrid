import React from 'react'
import FireFightingCss from "./FireFighting.module.css"
import Image from 'next/image';
import { firefighting } from '../../../public/images';

const FireFighting = () => {
  return (
    <div className={FireFightingCss.mainContainer} id='fireFighting'>
      <div className={FireFightingCss.container}>
        <div className={FireFightingCss.imageDiv}>
          <Image className={FireFightingCss.img} src={firefighting} height={500} width={500} alt='A picture'/>
        </div>
        <div className={FireFightingCss.text}>
          <h2 className={FireFightingCss.h2}>Fire Fighting And Protection System</h2>
          <p className={FireFightingCss.p}>
            We specialize in the design and construction of fire protection systems, which encompass fire suppression systems, fire sprinklers, alarm systems, and extinguishers that fully comply with safety regulations. Our team is dedicated to ensuring the utmost safety and security for your premises.
          </p>
        </div>
      </div>
      {/* <div className={FireFightingCss.btnDiv}>
        <button className={FireFightingCss.btn}>See More</button>
      </div> */}
    </div>
  )
}

export default FireFighting;
