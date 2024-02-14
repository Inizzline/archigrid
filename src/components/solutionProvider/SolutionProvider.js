"use client"
import React, { useState } from 'react'
import SolutionsProviderCss from "./SolutionProvider.module.css"
import Fade from 'react-reveal/Fade';
import Integrity from '@/utilities/coreValuesComponents/integrity/Integrity'
import Quality from '@/utilities/coreValuesComponents/quality/Quality'
import Safety from '@/utilities/coreValuesComponents/safety/Safety'
import Proactiveness from '@/utilities/coreValuesComponents/procativeness/Proactiveness'
import Innovation from '@/utilities/coreValuesComponents/innovation/Innovation'

// const coreValuesData = [
//     {
//       title: "Integrity",
//       paragraph: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,"
//     },
//     {
//       title: "Proactiveness",
//       paragraph: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,"
//     },
//     {
//       title: "Orderliness",
//       paragraph: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,"
//     },
//     {
//       title: "Business",
//       paragraph: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,"
//     },
//     {
//       title: "Thinker",
//       paragraph: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,"
//     },
// ]

const coreValuesData = [
  "Integrity",
  "Quality",
  "Safety",
  "Innovation",
  "Proactiveness"
]

const SolutionProvider = () => {

  // const [coreValues, setCoreValues] = useState("Integrity");

  // const [colorChange, setColourChange] = useState(false)
  
  return (
    <div>
    <h1 className={SolutionsProviderCss.h1}>Our Core Values</h1>
      <div className={SolutionsProviderCss.mainContainer}>
        <Fade left duration={2000}>
          <div className={SolutionsProviderCss.container}>
            <h3 className={SolutionsProviderCss.h3}>Integrity</h3>
            <p className={SolutionsProviderCss.p}>
              Our Integrity encompasses honesty, transparency, and ethical behavior. It means conducting business with the utmost professionalism, adhering to legal and regulatory requirements, and treating clients, employees, and stakeholders with respect and fairness.
            </p>
          </div>
        </Fade>
        <Fade right duration={2000}>
          <div className={SolutionsProviderCss.container}>
            <h3 className={SolutionsProviderCss.h3}>Quality</h3>
            <p className={SolutionsProviderCss.p}>
              Our Quality encompasses the use of superior materials, adherence to industry standards, meticulous craftsmanship, and attention to detail.
            </p>
          </div>
        </Fade>
        <Fade left duration={2000}>
          <div className={SolutionsProviderCss.container}>
            <h3 className={SolutionsProviderCss.h3}>Safety</h3>
            <p className={SolutionsProviderCss.p}>
              Our safety prioritizes the well-being and security of all individuals involved in construction projects, including workers, clients, and the general public.
            </p>
          </div>
        </Fade>
        <Fade right duration={2000}>
          <div className={SolutionsProviderCss.container}>
            <h3 className={SolutionsProviderCss.h3}>Innovation</h3>
            <p className={SolutionsProviderCss.p}>
              Our innovation is embracing new technologies, materials, and methodologies that increased efficiency, productivity, and cost-effectiveness that meet the evolving needs of its clients and stay ahead of the competition.
            </p>
          </div>
        </Fade>
        <Fade up duration={2000}>
          <div className={SolutionsProviderCss.container}>
            <h3 className={SolutionsProviderCss.h3}>Proactiveness</h3>
            <p className={SolutionsProviderCss.p}>
              Anticipating potential issues and communicate and collaboration with clients, suppliers, and other stakeholders and taking preventive measures that mitigate risks, minimize delays, and maximize team satisfaction.
            </p>
          </div>
        </Fade>
      {/* <h2 className={SolutionsProviderCss.header}>Our Core Values</h2>
        <div className={SolutionsProviderCss.container}>
          <div className={SolutionsProviderCss.leftSide}>
            <ul className={SolutionsProviderCss.ul}>
              {coreValuesData.map((item, i) =>(
                <li className={SolutionsProviderCss.li} key={i} onClick={() => setCoreValues(item)}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={SolutionsProviderCss.rightSide}>
              {
                coreValues === "Integrity" ? (<Integrity/>) : 
                coreValues === "Quality" ? (<Quality/>) :
                coreValues === "Safety" ? (<Safety/>) :
                coreValues === "Innovation" ? (<Innovation/>) : (<Proactiveness/>)
              }
          </div>
        </div> */}
      </div>
      </div>
    // <div className={SolutionsProviderCss.container}>
    //   <h3 className={SolutionsProviderCss.h3}>Our Core Values</h3>
    //   <div className={SolutionsProviderCss.content}>
    //     <div className={SolutionsProviderCss.list}>
    //       {
    //         coreValuesData.map((item, i) => {
    //           return(
    //             <ul className={SolutionsProviderCss.ul} key={i}>
    //               <li className={SolutionsProviderCss.li}>{item.title}</li>
    //             </ul>
    //           )
    //         })
    //       }
    //     </div>
    //     <div className={SolutionsProviderCss.text}>
    //       <p>{coreValuesData.paragraph}</p>
    //     </div>
    //   </div>
    // </div>
  )
}

export default SolutionProvider
