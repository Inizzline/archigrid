"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useRouter } from 'next/navigation'
import { MaintenanceProjectData } from '@/utilities/maintenanceProjectData/MaintenanceProjectData'
import MaintenanceProjectCss from "./MaintenanceProject.module.css"

const MaintenanceProject = () => {

    const [ currentImg, setCurrentImg ] = useState(0);

    const router = useRouter();

  return (
    <div className={MaintenanceProjectCss.carousel}>
      <div className={MaintenanceProjectCss.carouselInner}>
        <div className={MaintenanceProjectCss.left} onClick={() => {currentImg > 0 && setCurrentImg(currentImg - 1)}}>
          <MdOutlineKeyboardArrowLeft />
        </div>
        <div className={MaintenanceProjectCss.center}>
          <Image className={MaintenanceProjectCss.img} src={MaintenanceProjectData[currentImg].img} />
          <h4 className={MaintenanceProjectCss.h4}>{MaintenanceProjectData[currentImg].title}</h4>
          <h2 className={MaintenanceProjectCss.h2}>{MaintenanceProjectData[currentImg].place}</h2>
          <p className={MaintenanceProjectCss.p}>{MaintenanceProjectData[currentImg].desc}</p>
          <div className={MaintenanceProjectCss.btnDiv}>
            <button className={MaintenanceProjectCss.btn} onClick={()=>router.push("/projects")} >Back</button>
          </div>
        </div>
        <div className={MaintenanceProjectCss.right} onClick={() => {currentImg < MaintenanceProjectData.length - 1 && setCurrentImg(currentImg + 1)}}>
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
    </div>
  )
}

export default MaintenanceProject
