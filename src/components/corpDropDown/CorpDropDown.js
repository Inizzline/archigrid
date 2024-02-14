"use client"
import CorpDropDownData from "@/utilities/corpDropDownData/CorpDropDownData";
import Link from "next/link";
import CorpDropDownCss from "./CorpDropDown.module.css"
import { useState } from "react";

const CorpDropDown = () => {
    const [ clickDropDown, setClickDropDown ] = useState(false)

    const handleDropDown = () => {
        setClickDropDown(true)
    }
  return (
    <>
      <ul className={clickDropDown ? `${CorpDropDownCss.subMenu} ${CorpDropDownCss.clicked}` : `${CorpDropDownCss.subMenu}`} onClick={handleDropDown}>
        {CorpDropDownData.map((item) => {
            return(
                <li key={item.id}>
                    <Link className={CorpDropDownCss.subMenuLinks} href={item.url} onClick={handleDropDown}>
                        {item.title}
                    </Link>
                </li>
            )
        })}
      </ul>
    </>
  )
}

export default CorpDropDown;
