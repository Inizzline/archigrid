import React from 'react'
import WasteManagementCss from "./WasteManagement.module.css"

const WasteManagement = () => {
  return (
    <div className={WasteManagementCss.mainContainer} id='wasteManagement'>
      <div className={WasteManagementCss.container}>
        <div className={WasteManagementCss.inner}>
          <h2 className={WasteManagementCss.h2}>Waste Management Syetem</h2>
          <p className={WasteManagementCss.p}>
            We specialize in providing efficient and sustainable waste management solutions tailored to meet the diverse needs of our clients. Our waste management services encompass a wide range of areas, ensuring that all aspects of waste disposal and recycling are effectively addressed. These areas include, but are not limited to:
            <br/>
            <br/>
            <span className={WasteManagementCss.spanText}>Commercial Waste Management:</span> For businesses of all sizes, we provide comprehensive waste management solutions. Our services include waste collection, recycling programs, and the implementation of sustainable practices. By partnering with us, businesses can reduce their environmental impact while maintaining a clean and organized workspace.
            <br/>
            <br/>
            <span className={WasteManagementCss.spanText}>Industrial Waste Management:</span> Industries often generate large volumes of waste that require specialized handling. Our team possesses the expertise and equipment necessary to manage industrial waste safely and efficiently. We ensure compliance with all relevant regulations, minimizing the environmental impact of industrial waste disposal.
            <br/>
            <br/>
            <span className={WasteManagementCss.spanText}>Hazardous Waste Management:</span> The proper handling and disposal of hazardous waste is of utmost importance to protect both human health and the environment. Our organization is equipped to handle hazardous waste in accordance with strict safety protocols and legal requirements. We work closely with clients to develop customized solutions that ensure the safe and responsible management of hazardous materials.
          </p>
          {/* <div className={WasteManagementCss.btnDiv}>
            <button className={WasteManagementCss.btn}>See More</button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default WasteManagement;
