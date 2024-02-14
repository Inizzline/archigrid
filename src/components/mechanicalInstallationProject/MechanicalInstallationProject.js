"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useRouter } from 'next/navigation'
import { MechanicalInstallationProjectData } from '@/utilities/MechanicalInstallationProjectData/MechanicalInstallationProjectData';
import MechanicalInstallationProjectCss from "./MechanicalInstallationProject.module.css"

const MechanicalInstallationProject = () => {

    const [ currentImg, setCurrentImg ] = useState(0);

    const router = useRouter();
    
  return (
    <div className={MechanicalInstallationProjectCss.carousel}>
        <div className={MechanicalInstallationProjectCss.carouselInner}>
            <div className={MechanicalInstallationProjectCss.left} onClick={() => {currentImg > 0 && setCurrentImg(currentImg - 1)}}>
                <MdOutlineKeyboardArrowLeft />
            </div>
            <div className={MechanicalInstallationProjectCss.center}>
                <Image className={MechanicalInstallationProjectCss.img} src={MechanicalInstallationProjectData[currentImg].img} />
                <h4 className={MechanicalInstallationProjectCss.h4}>{MechanicalInstallationProjectData[currentImg].title}</h4>
                <h2 className={MechanicalInstallationProjectCss.h2}>{MechanicalInstallationProjectData[currentImg].place}</h2>
                <p className={MechanicalInstallationProjectCss.p}>{MechanicalInstallationProjectData[currentImg].desc}</p>
                <div className={MechanicalInstallationProjectCss.btnDiv}>
                <button className={MechanicalInstallationProjectCss.btn} onClick={()=>router.push("/projects")} >Back</button>
                </div>
            </div>
            <div className={MechanicalInstallationProjectCss.right} onClick={() => {currentImg < MechanicalInstallationProjectData.length - 1 && setCurrentImg(currentImg + 1)}}>
                <MdOutlineKeyboardArrowRight />
            </div>
        </div>
    </div>
  )
}

export default MechanicalInstallationProject
