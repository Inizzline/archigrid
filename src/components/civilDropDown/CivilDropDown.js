"use client"
import { useState } from "react"
import Link from "next/link"
import CivilDropDownCss from "./CivilDropDownCss.module.css"
import CivilData from "@/utilities/civilData/CivilData"


const CivilDropDown = () => {

    const [ clickDropDown, setClickDropDown ] = useState(false)

    const handleDropDown = () => {
        setClickDropDown(true)
    }

  return (
    <>
      <ul className={clickDropDown ? `${CivilDropDownCss.subMenu} ${CivilDropDownCss.clicked}` : `${CivilDropDownCss.subMenu}`} onClick={handleDropDown}>
        {CivilData.map((item) => {
            return(
                <li key={item.id}>
                    <Link className={CivilDropDownCss.subMenuLinks} href={item.url} onClick={handleDropDown}>
                        {item.title} 
                    </Link>
                </li>
            )
        })}
      </ul>
    </>
  )
}

export default CivilDropDown;
