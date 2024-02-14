"use client"
import { useState } from "react"
import Link from "next/link"
import MechanicalDropDownCss from "./MechanicalDropDown.module.css"
import MechanicalInstallData from "@/utilities/mechanicalInstallData/MechanicalInstallData"

const MechanicalDropDown = () => {

    const [ clickDropDown, setClickDropDown ] = useState(false)

    const handleDropDown = () => {
        setClickDropDown(true)
    }

  return (
    <>
      <ul className={clickDropDown ? `${MechanicalDropDownCss.subMenu} ${MechanicalDropDownCss.clicked}` : `${MechanicalDropDownCss.subMenu}`} onClick={handleDropDown}>
        {MechanicalInstallData.map((item) => {
            return(
                <li key={item.id}>
                    <Link className={MechanicalDropDownCss.subMenuLinks} href={item.url} onClick={handleDropDown}>
                        {item.title}
                    </Link>
                </li>
            )
        })}
      </ul>
    </>
  )
}

export default MechanicalDropDown;
