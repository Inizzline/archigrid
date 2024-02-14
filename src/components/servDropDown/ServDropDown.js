"use client"
import ServDropDownData from "@/utilities/servDropDownData/ServDropDownData";
import Link from "next/link";
import ServDropDownCss from "./ServDropDown.module.css"

import { useState } from "react";
import CivilDropDown from "../civilDropDown/CivilDropDown";
import ElectricalInstallDropDown from "../electricalInstallDropDown/ElectricalInstallDropDown";
import MechanicalDropDown from "../mechanicalDropDown/MechanicalDropDown";
import OilandGasDropDown from "../oilandgasDropDown/OilandGasDropDown";
import { IoIosArrowForward } from "react-icons/io";


const ServDropDown = () => {
    const [ clickDropDown, setClickDropDown ] = useState(false)
    const [ dropDownCivil, setDropDownCivil ] = useState(false);
    const [ dropDownElectricalInstall, setDropDownElectricalInstall ] = useState(false);
    const [ dropDownMechanicalInstall, setDropDownMechanicalInstall ] = useState(false);
    const [ dropDownOilandGas, setDropDownOilandGas ] = useState(false);

    const handleDropDown = () => {
        setClickDropDown(true)
    }

    const handleOnMouseEnterCivil = () => {
      setDropDownCivil(true);
    }

    const handleOnMouseLeaveCivil = () => {
        setDropDownCivil(false);
    }

    const handleOnMouseEnterElectInstall = () => {
      setDropDownElectricalInstall(true);
    }

    const handleOnMouseLeaveElectInstall = () => {
      setDropDownElectricalInstall(false);
    }

    const handleOnMouseEnterMechInstall = () => {
      setDropDownMechanicalInstall(true);
    }

    const handleOnMouseLeaveMechInstall = () => {
      setDropDownMechanicalInstall(false);
    }

    const handleOnMouseEnterOilandGas = () => {
      setDropDownOilandGas(true);
    }

    const handleOnMouseLeaveOilandGas = () => {
      setDropDownOilandGas(false);
    }

  return (
    <>
      <ul className={clickDropDown ? `${ServDropDownCss.subMenu} ${ServDropDownCss.clicked}` : `${ServDropDownCss.subMenu}`} onClick={handleDropDown}>
        {ServDropDownData.map((item, index) => {
          if(item.title === "Civil") {
            return(
              <li key={index} onMouseEnter={handleOnMouseEnterCivil} onMouseLeave={handleOnMouseLeaveCivil}>
                  <Link className={ServDropDownCss.subMenuLinkers} href={item.url}>{item.title} <IoIosArrowForward className={ServDropDownCss.forwardIcon}/></Link>
                  {dropDownCivil && <CivilDropDown/>}
              </li>
            )
          } else if (item.title === "Electrical Installation") {
            return (
              <li key={index} onMouseEnter={handleOnMouseEnterElectInstall} onMouseLeave={handleOnMouseLeaveElectInstall}>
                  <Link className={ServDropDownCss.subMenuLinkers} href={item.url}>{item.title} <IoIosArrowForward className={ServDropDownCss.forwardIcon}/></Link>
                  {dropDownElectricalInstall && <ElectricalInstallDropDown/>}
              </li>
            )
          } else if (item.title === "Mechanical Installation") {
            return (
              <li key={index} onMouseEnter={handleOnMouseEnterMechInstall} onMouseLeave={handleOnMouseLeaveMechInstall}>
                  <Link className={ServDropDownCss.subMenuLinkers} href={item.url}>{item.title} <IoIosArrowForward className={ServDropDownCss.forwardIcon}/></Link>
                  {dropDownMechanicalInstall && <MechanicalDropDown/>}
              </li>
            )
          } else if (item.title === "Oil & Gas") {
            return (
              <li key={index} onMouseEnter={handleOnMouseEnterOilandGas} onMouseLeave={handleOnMouseLeaveOilandGas}>
                  <Link className={ServDropDownCss.subMenuLinkers} href={item.url}>{item.title} <IoIosArrowForward className={ServDropDownCss.forwardIcon}/></Link>
                  {dropDownOilandGas && <OilandGasDropDown/>}
              </li>
            )
          }
            return(
                <li key={item.id}>
                    <Link className={ServDropDownCss.subMenuLinks} href={item.url} onClick={handleDropDown}>
                        {item.title}
                    </Link>
                </li>
            )
        })}
      </ul>
    </>
  )
}

export default ServDropDown;
