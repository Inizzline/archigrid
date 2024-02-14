"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import {ElectricalInstallationProjectData} from '@/utilities/electricalInstallationProjectData/ElectricalInstallationProjectData'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useRouter } from 'next/navigation'
import ElectricalInstallationProjectCss from "./ElectricalInstallationProject.module.css"

const ElectricalInstallationProject = () => {

    const [ currentImg, setCurrentImg ] = useState(0);

    const router = useRouter();

  return (
    <div className={ElectricalInstallationProjectCss.carousel}>
      <div className={ElectricalInstallationProjectCss.carouselInner}>
        <div className={ElectricalInstallationProjectCss.left} onClick={() => {currentImg > 0 && setCurrentImg(currentImg - 1)}}>
          <MdOutlineKeyboardArrowLeft />
        </div>
        <div className={ElectricalInstallationProjectCss.center}>
          <Image className={ElectricalInstallationProjectCss.img} src={ElectricalInstallationProjectData[currentImg].img} />
          <h4 className={ElectricalInstallationProjectCss.h4}>{ElectricalInstallationProjectData[currentImg].title}</h4>
          <h2 className={ElectricalInstallationProjectCss.h2}>{ElectricalInstallationProjectData[currentImg].place}</h2>
          <p className={ElectricalInstallationProjectCss.p}>{ElectricalInstallationProjectData[currentImg].desc}</p>
          <div className={ElectricalInstallationProjectCss.btnDiv}>
            <button className={ElectricalInstallationProjectCss.btn} onClick={()=>router.push("/projects")} >Back</button>
          </div>
        </div>
        <div className={ElectricalInstallationProjectCss.right} onClick={() => {currentImg < ElectricalInstallationProjectData.length - 1 && setCurrentImg(currentImg + 1)}}>
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
    </div>
  )
}

export default ElectricalInstallationProject;
