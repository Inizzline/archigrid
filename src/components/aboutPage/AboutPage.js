
import AboutCss from "./AboutPage.module.css";
import AboutHeader from "@/utilities/aboutHeader/AboutHeader";
import AboutText from "@/utilities/aboutText/AboutText";
import Statements from "@/utilities/statements/Statements";
import CompProfile from "../compProfile/CompProfile";

const AboutPage = () => {
  return (
    <div className={AboutCss.mainContainer}>
        {/* <AboutHeader/> */}
        <AboutText/>
        <Statements/>
        <CompProfile/>
    </div>
  )
}

export default AboutPage
