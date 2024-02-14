"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import MechanicalInstallationCss from "./MechanicalInstallation.module.css"

const MechanicalInstallation = () => {

    const router = useRouter()

  return (
    <div className={MechanicalInstallationCss.container} id='mechanicalInstallation'>
        <div className={MechanicalInstallationCss.container} id='civil'>
            <div className={MechanicalInstallationCss.imageDiv}></div>
            <div className={MechanicalInstallationCss.text}>
                <h1 className={MechanicalInstallationCss.h1}>Mechanical Installation</h1>
                <p className={MechanicalInstallationCss.p}>
                    We are the preferred choice for clients and professionals when it comes to designing and constructing various types of buildings. Our expertise extends to residential and commercial buildings, educational and healthcare institutions, recreation centers, entertainment facilities, housing estates, infrastructures, power plants, shopping malls, and more. We work closely with our clients, starting from the initial concept discussions and reviews, all the way through to the final stages of construction
                </p>
                <h4 onClick={()=>router.push("/services/mechanicalInstallation")} className={MechanicalInstallationCss.h4}>See More</h4>
            </div>
        </div>
    </div>
  )
}

export default MechanicalInstallation;
