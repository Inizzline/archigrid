import React from 'react'
import Image from 'next/image'
import { electInstrumentation } from '../../../public/images'
import ElectricalInstrumantationCss from "./ElectricalInstrumentation.module.css"

const ElectricalInstrumantation = () => {
  return (
    <div  className={ElectricalInstrumantationCss.mainContainer} id='electricalInstrumentation'>
      <div className={ElectricalInstrumantationCss.container}>
        <div className={ElectricalInstrumantationCss.text}>
          <h2 className={ElectricalInstrumantationCss.h2}>Electrical Instrumentation</h2>
          <p className={ElectricalInstrumantationCss.p}>
            We have a competent team that specializes in electrical and mechanical instrumentation that provide excellent value for money without compromising on quality.
          </p>
        </div>
        <div className={ElectricalInstrumantationCss.imageDiv}>
          <Image className={ElectricalInstrumantationCss.img} src={electInstrumentation} height={500} width={500} alt='Electrical Instrumentation'/>
        </div>
      </div>
    </div>
  )
}

export default ElectricalInstrumantation;
