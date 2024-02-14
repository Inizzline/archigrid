"use client"
import { BsCloudDownloadFill } from 'react-icons/bs';
import CompProfileCss from "./CompProfile.module.css"
import Fade from 'react-reveal/Fade';

const PDF_FILE = "images/samplePDF.pdf"

const CompProfile = () => {

    const downloadFile = (file) => {
        const fileName = file.split("/").pop()
        const aTag = document.createElement("a");
        aTag.href = file;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();

    }

  return (
    <Fade up duration={2000}>
      <div className={CompProfileCss.container}>
        <h3 className={CompProfileCss.h3}>Company Profile</h3>
        <button className={CompProfileCss.btn} onClick={() => {downloadFile(PDF_FILE)}}>Download <BsCloudDownloadFill/></button>
      </div>
    </Fade>
  )
}

export default CompProfile;
