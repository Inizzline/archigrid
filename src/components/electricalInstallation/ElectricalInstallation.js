"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import ElectricalInstallationCss from "./ElectricalInstallation.module.css"

const ElectricalInstallation = () => {

  const router = useRouter()

  return (
    <div className={ElectricalInstallationCss.container} id='electricalInstallation'>
      <div className={ElectricalInstallationCss.container} id='civil'>
        <div className={ElectricalInstallationCss.imageDiv}></div>
        <div className={ElectricalInstallationCss.text}>
            <h1 className={ElectricalInstallationCss.h1}>Electrical Installation</h1>
            <p className={ElectricalInstallationCss.p}>
              We have perfected the art and science of electrical installation for domestic, commercial, and industrial development. Our team possesses modern skills and efficient manpower in various areas, including domestic and industrial wiring networks, rural electrification, urban lighting, and power generation in any form.
            </p>
            <h4 onClick={()=>router.push("/services/electricalInstallation")} className={ElectricalInstallationCss.h4}>See More</h4>
        </div>
      </div>
    </div>
  )
}

export default ElectricalInstallation
