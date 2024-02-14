import React from 'react'
import Image from 'next/image';
import { greenEnergy } from '../../../public/images';
import GreenEnergyCss from "./GreenEnergy.module.css";

const GreenEnergy = () => {
  return (
    <div  className={GreenEnergyCss.mainContainer} id='greenEnergy'>
      <div className={GreenEnergyCss.container}>
        <div className={GreenEnergyCss.imageDiv}>
          <Image className={GreenEnergyCss.img} src={greenEnergy} height={500} width={500} alt='lightbulb on field'/>
        </div>
        <div className={GreenEnergyCss.text}>
          <h2 className={GreenEnergyCss.h2}>Green Energy</h2>
          <p className={GreenEnergyCss.p}>
            We are committed to promoting sustainable waste management practices, and recycling plays a crucial role in achieving this goal. Our organization offers comprehensive recycling programs that cover a wide range of materials, including paper, plastic, glass, and metal. We help our clients reduce waste sent to landfills and contribute to a more sustainable future.
          </p>
        </div>
      </div>
    </div>
  )
}

export default GreenEnergy
