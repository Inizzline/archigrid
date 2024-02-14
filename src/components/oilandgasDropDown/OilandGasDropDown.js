"use client"
import { useState } from "react"
import Link from "next/link"
import OilandGasDropDownCss from "./OilandGasDropDown.module.css"
import OilandGasData from "@/utilities/oilandgas/OilandGasData"

const OilandGasDropDown = () => {

    const [ clickDropDown, setClickDropDown ] = useState(false)

    const handleDropDown = () => {
        setClickDropDown(true)
    }

  return (
    <>
      <ul className={clickDropDown ? `${OilandGasDropDownCss.subMenu} ${OilandGasDropDownCss.clicked}` : `${OilandGasDropDownCss.subMenu}`} onClick={handleDropDown}>
        {OilandGasData.map((item) => {
            return(
                <li key={item.id}>
                    <Link className={OilandGasDropDownCss.subMenuLinks} href={item.url} onClick={handleDropDown}>
                        {item.title}
                    </Link>
                </li>
            )
        })}
      </ul>
    </>
  )
}

export default OilandGasDropDown;
