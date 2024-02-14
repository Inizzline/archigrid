"use client"
import React from 'react'
import OilAndGasCss from "./OilAndGas.module.css"
import { useRouter } from 'next/navigation'

const OilAndGas = () => {

    const router = useRouter();

  return (
    <div className={OilAndGasCss.container} id='oilandgas'>
      <div className={OilAndGasCss.container}>
        <div className={OilAndGasCss.imageDiv}></div>
        <div className={OilAndGasCss.text}>
            <h1 className={OilAndGasCss.h1}>Oil & Gas </h1>
            <p className={OilAndGasCss.p}>
              We have perfected the art and science of electrical installation for domestic, commercial, and industrial development. Our team possesses modern skills and efficient manpower in various areas, including domestic and industrial wiring networks, rural electrification, urban lighting, and power generation in any form.
            </p>
            <h4 onClick={()=>router.push("/services/oilAndGas")} className={OilAndGasCss.h4}>See More</h4>
        </div>
      </div>
    </div>
  )
}

export default OilAndGas;
