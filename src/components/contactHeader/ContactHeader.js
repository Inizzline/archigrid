import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactHeaderCss from "./ContactHeader.module.css"

const ContactHeader = () => {
  return (
    <div className={ContactHeaderCss.container}>
        <div className={ContactHeaderCss.textContainer}>
            <div className={ContactHeaderCss.text}>
                <h2 className={ContactHeaderCss.h2}>Contact</h2>
            </div>
            <div className={ContactHeaderCss.iconDiv}>
                <MdAlternateEmail size={25} className={ContactHeaderCss.icon}/>
                <BsFillTelephoneFill size={25} className={ContactHeaderCss.icon}/>
                <FaMapMarkerAlt size={25} className={ContactHeaderCss.icon}/>
                <IoMdMail size={25} className={ContactHeaderCss.icon}/>
            </div>
        </div>
        <div className={`${ContactHeaderCss.line} ${ContactHeaderCss.line1}`}>
            <div className={`${ContactHeaderCss.wave} ${ContactHeaderCss.wave1}`} style={{backgroundImage: "url(images/img/wave1.png)"}}></div>
        </div>
        <div className={`${ContactHeaderCss.line} ${ContactHeaderCss.line2}`}>
            <div className={`${ContactHeaderCss.wave} ${ContactHeaderCss.wave2}`} style={{backgroundImage: "url(images/img/wave2.png)"}}></div>
        </div>
        <div className={`${ContactHeaderCss.line} ${ContactHeaderCss.line3}`}>
            <div className={`${ContactHeaderCss.wave} ${ContactHeaderCss.wave3}`} style={{backgroundImage: "url(images/img/wave3.png)"}}></div>
        </div>
    </div>
  )
}

export default ContactHeader
