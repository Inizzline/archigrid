"use client"
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { logo } from "../../../public/images";
import FooterCss from "./Footer.module.css"
import Image from "next/image";
import Fade from 'react-reveal/Fade';

const Footer = () => {

    const date = new Date().getFullYear();
  return (
    <div className={FooterCss.footer}>
      <div className={FooterCss.container}>
        <Fade up duration={3000}>
            <div  className={FooterCss.col}>
                <Image width={80} height={65}  className={FooterCss.logo} src={logo} alt="archigridlogo"/>
                <h2 className={FooterCss.h2}>OUR LOCATIONS</h2>
                <h3 className={FooterCss.states}>Lagos-Nigeria</h3>
                <p className={FooterCss.p}>No. 7 Ijaoye Street, Jibowu Yaba Lagos</p>
                <h3 className={FooterCss.states}>Rivers state-Nigeria</h3>
                <p className={FooterCss.p}>No. 18A, Trans Amadi Industrial Layout, Beside Promise Restaurant Oginigba, Port Harcourt, Rivers State</p>
                <h4 className={FooterCss.h4}>Phone</h4>
                <p className={FooterCss.phone}>+234 704 161 1398</p>
                <p className={FooterCss.phone}>+234 803 041 9455</p>
            </div>
        </Fade>
        <Fade up duration={3000}>
            <div  className={FooterCss.col}>
                <h2 className={FooterCss.officeH2}>OFFICE</h2>
                <div className={FooterCss.h3}>General Info</div>
                    <Link className={FooterCss.link} href="mailto:info@archigridltd.com">
                        <p className={FooterCss.email}>info@archigridltd.com</p>
                    </Link>
                <div className={FooterCss.h3}>Commercial Service</div>
                    <Link className={FooterCss.link} href="mailto:commercials@archigridltd.com">
                        <p className={FooterCss.email}>commercials@archigridltd.com</p>
                    </Link>
                <div className={FooterCss.h3}>Construction</div>
                    <Link className={FooterCss.link} href="mailto:construction@archigridltd.com">
                        <p className={FooterCss.email}>construction@archigridltd.com</p>
                    </Link>
                <div className={FooterCss.h3}>Architecture</div>
                <Link className={FooterCss.link} href="mailto:architecture@archigridltd.com">
                    <p className={FooterCss.email}>architecture@archigridltd.com</p>
                </Link>
            </div>
        </Fade>
        <Fade right duration={3000}>
           <div  className={FooterCss.col}>
                <div className={FooterCss.socialIcons}>
                    <Link href="https://www.linkedin.com/company/archigrid-construction-ltd/" target="_blank" rel="noopener noreferrer" className={FooterCss.socialLink}><FaLinkedinIn size={15} className={FooterCss.icon}/></Link>
                    <Link href="https://www.twitter.com/ArchigridConst" target="_blank" rel="noopener noreferrer" className={FooterCss.socialLink}><BsTwitterX size={15} className={FooterCss.icon}/></Link>
                    {/* <Link href="" className={FooterCss.socialLink}><FaFacebook size={15} className={FooterCss.icon}/></Link>
                    <Link href="" className={FooterCss.socialLink}><FaInstagram size={15} className={FooterCss.icon}/></Link> */}
                </div>
            <div>
            <p className={FooterCss.socialIconsParagraph}>Reach us on any of our Social media handles</p>
            </div>
           </div>
           </Fade>
        </div>
        <Fade up duration={5000}><hr className={FooterCss.hr}/></Fade>
        <Fade up duration={3000}>
            <p className={FooterCss.copyright}>
                Copyright © {date} Archigrid Construction Ltd, All rights reserved
            </p>
        </Fade>
    </div>
  )
}

export default Footer;
