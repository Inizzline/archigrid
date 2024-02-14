"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useRouter } from 'next/navigation'
import { OilAndGasProjectData } from "@/utilities/oilAndGasProjectData/OilAndGasProjectData"
import OilAndGasProjectCss from "./OilAndGasProject.module.css"

const OilAndGasProject = () => {

    const [ currentImg, setCurrentImg ] = useState(0);

    const router = useRouter();

  return (
    <div className={OilAndGasProjectCss.carousel}>
        <div className={OilAndGasProjectCss.carouselInner}>
            <div className={OilAndGasProjectCss.left} onClick={() => {currentImg > 0 && setCurrentImg(currentImg - 1)}}>
                <MdOutlineKeyboardArrowLeft />
            </div>
            <div className={OilAndGasProjectCss.center}>
                <Image className={OilAndGasProjectCss.img} src={OilAndGasProjectData[currentImg].img} />
                <h4 className={OilAndGasProjectCss.h4}>{OilAndGasProjectData[currentImg].title}</h4>
                <h2 className={OilAndGasProjectCss.h2}>{OilAndGasProjectData[currentImg].place}</h2>
                <p className={OilAndGasProjectCss.p}>{OilAndGasProjectData[currentImg].desc}</p>
                <div className={OilAndGasProjectCss.btnDiv}>
                <button className={OilAndGasProjectCss.btn} onClick={()=>router.push("/projects")} >Back</button>
                </div>
            </div>
            <div className={OilAndGasProjectCss.right} onClick={() => {currentImg < OilAndGasProjectData.length - 1 && setCurrentImg(currentImg + 1)}}>
                <MdOutlineKeyboardArrowRight />
            </div>
        </div>
    </div>
  )
}

export default OilAndGasProject
