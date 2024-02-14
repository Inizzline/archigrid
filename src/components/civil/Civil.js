"use client"
import React from 'react'
import CivilCss from "./Civil.module.css"
import { useRouter } from 'next/navigation'



const Civil = () => {

    const router = useRouter();
   
  return (
    <div className={CivilCss.container} id='civil'>
        <div className={CivilCss.imageDiv}></div>
        <div className={CivilCss.text}>
            <h1 className={CivilCss.h1}>Civil</h1>
            <p className={CivilCss.p}>
              We are the preferred choice for clients and professionals when it comes to designing and constructing various types of buildings. Our expertise extends to residential and commercial buildings, educational and healthcare institutions, recreation centers, entertainment facilities, housing estates, infrastructures, power plants, shopping malls, and more. We work closely with our clients, starting from the initial concept discussions and reviews, all the way through to the final stages of construction
            </p>
            <h4 onClick={()=>router.push("/services/civil")} className={CivilCss.h4}>See More</h4>
        </div>
    </div>
  )
}

export default Civil
