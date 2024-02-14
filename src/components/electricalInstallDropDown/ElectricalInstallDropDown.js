"use client"
import { useState } from "react"
import Link from "next/link"
import ElectricalInstallDropDownCss from "./ElectricalInstallDropDown.module.css"
import ElectricalInstallationData from "@/utilities/electricalInstallationData/ElectricalInstallationData"

const ElectricalInstallDropDown = () => {

    const [ clickDropDown, setClickDropDown ] = useState(false)

    const handleDropDown = () => {
        setClickDropDown(true)
    }

  return (
    <>
      <ul className={clickDropDown ? `${ElectricalInstallDropDownCss.subMenu} ${ElectricalInstallDropDownCss.clicked}` : `${ElectricalInstallDropDownCss.subMenu}`} onClick={handleDropDown}>
        {ElectricalInstallationData.map((item) => {
            return(
                <li key={item.id}>
                    <Link className={ElectricalInstallDropDownCss.subMenuLinks} href={item.url} onClick={handleDropDown}>
                        {item.title}
                    </Link>
                </li>
            )
        })}
      </ul>
    </>
  )
}

export default ElectricalInstallDropDown
