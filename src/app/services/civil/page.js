import CivilPage from '@/components/civilPage/CivilPage';
import CommercialBuilding from '@/components/commercialBuilding/CommercialBuilding';
import ResidentialBuilding from '@/components/residentialBuilding/ResidentialBuilding';
import React from 'react'

const page = () => {
  return (
    <div>
      <ResidentialBuilding/>
      <CommercialBuilding/>
    </div>
  )
}

export default page;
