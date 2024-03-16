"use client"
import React from 'react'
import Image from 'next/image'
import { electInstrumentation } from '../../../public/images'
import Fade from 'react-reveal/Fade';
import { useRouter } from 'next/navigation'
import ElectricalInstrumantationCss from "./ElectricalInstrumentation.module.css"

const ElectricalInstrumantation = () => {

  const router = useRouter();

  return (
    <div  className={ElectricalInstrumantationCss.mainContainer} id='electricalInstrumentation'>
      <div className={ElectricalInstrumantationCss.container}>
        <Fade down duration={2000}>
          <div className={ElectricalInstrumantationCss.text}>
            <h2 className={ElectricalInstrumantationCss.h2}>Electrical Instrumentation</h2>
            <p className={ElectricalInstrumantationCss.p}>
              We have a competent team that specializes in electrical and mechanical instrumentation that provide excellent value for money without compromising on quality.
            </p>
          </div>
        </Fade>
        <Fade up duration={2000}>
          <div className={ElectricalInstrumantationCss.imageDiv}>
            <Image className={ElectricalInstrumantationCss.img} src={electInstrumentation} height={500} width={500} alt='Electrical Instrumentation'/>
          </div>
        </Fade>
      </div>
      <button className={ElectricalInstrumantationCss.btn} onClick={()=>router.push("/services#electricalInstallation")} >Back</button>
    </div>
  )
}

export default ElectricalInstrumantation;
