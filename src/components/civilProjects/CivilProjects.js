"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import CivilProjectsCss from "./CivilProjects.module.css"
import {CivilProjectsData} from '@/utilities/civilProjectsData/CivilProjectsData'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useRouter } from 'next/navigation'

const CivilProjects = () => {

  const [ currentImg, setCurrentImg ] = useState(0);

  const router = useRouter();

  return (
    <div className={CivilProjectsCss.carousel}>
      <div className={CivilProjectsCss.carouselInner}>
        <div className={CivilProjectsCss.left} onClick={() => {currentImg > 0 && setCurrentImg(currentImg - 1)}}>
          <MdOutlineKeyboardArrowLeft />
        </div>
        <div className={CivilProjectsCss.center}>
          <Image className={CivilProjectsCss.img} src={CivilProjectsData[currentImg].img} />
          <h4 className={CivilProjectsCss.h4}>{CivilProjectsData[currentImg].title}</h4>
          <h2 className={CivilProjectsCss.h2}>{CivilProjectsData[currentImg].place}</h2>
          <p className={CivilProjectsCss.p}>{CivilProjectsData[currentImg].desc}</p>
          <div className={CivilProjectsCss.btnDiv}>
            <button className={CivilProjectsCss.btn} onClick={()=>router.push("/projects")} >Back</button>
          </div>
        </div>
        <div className={CivilProjectsCss.right} onClick={() => {currentImg < CivilProjectsData.length - 1 && setCurrentImg(currentImg + 1)}}>
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
    </div>
  )
}

export default CivilProjects
