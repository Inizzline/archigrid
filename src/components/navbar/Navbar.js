"use client"
import Link from "next/link";
import NavbarCss from "./Navbar.module.css";
import NavbarData from "@/utilities/navbarData/NavbarData";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import { useEffect, useRef, useState } from "react";
import CorpDropDown from "../corpDropDown/CorpDropDown";
import ServDropDown from "../servDropDown/ServDropDown";
import { logo } from "../../../public/images";
import Image from "next/image";



const Navbar = () => {

    const [ clickIcon, setClickIcon ] = useState(false);
    const [ dropDownCorp, setDropDownCorp ] = useState(false);
    const [ dropDownServ, setDropDownServ ] = useState(false);

    const handleClickIcon = () => {
        setClickIcon(!clickIcon);
    }

    const handleOnMouseEnterCorp = () => {
        setDropDownCorp(true);
    }

    const handleOnMouseLeaveCorp = () => {
        setDropDownCorp(false);
    }

    const handleOnMouseEnterServ = () => {
        setDropDownServ(true);
    }

    const handleOnMouseLeaveServ = () => {
        setDropDownServ(false);
    }

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if(!menuRef.current.contains(e.target)) {
                setClickIcon(false)
            }
        }

        document.addEventListener("mousedown", handler);
        return() => {
            document.removeEventListener("mousedown", handler);
        }
    })

  return (
    <div>
        {/* <div className={NavbarCss.topSocials}>
            icon
        </div> */}
        <nav className={NavbarCss.nav} ref={menuRef}>
            <Link href="/">
                <Image width={80} height={50} className={NavbarCss.logo} src={logo} alt="archgrid logo"/>
            </Link>
            <div className={NavbarCss.menuIcon} onClick={handleClickIcon}>
                {
                    clickIcon ? <RiCloseLine className={NavbarCss.icon} size={27}/> : <RiMenu3Line className={NavbarCss.icon} size={25}/>
                }
            </div>
            <ul className={clickIcon ? `${NavbarCss.navMenu} ${NavbarCss.active}` : `${NavbarCss.navMenu}`}>
                {
                    NavbarData.map((item, index) => {
                        if( item.title === "Corperate") {
                            return(
                                <li key={index} className={NavbarCss.navList} onMouseEnter={handleOnMouseEnterCorp} onMouseLeave={handleOnMouseLeaveCorp}>
                                    <Link className={NavbarCss.navLinks} href={item.url}>{item.title}</Link>
                                    {dropDownCorp && <CorpDropDown/>}
                                </li>
                            )
                        } else if( item.title === "Services" ) {
                            return(
                                <li key={index} className={NavbarCss.navList} onMouseEnter={handleOnMouseEnterServ} onMouseLeave={handleOnMouseLeaveServ}>
                                    <Link className={NavbarCss.navLinks} href={item.url}>{item.title}</Link>
                                    {dropDownServ && <ServDropDown/>}
                                </li>
                            )
                        }
                        return(
                            <li key={index}>
                                <Link className={NavbarCss.navLinks} href={item.url}>{item.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;
