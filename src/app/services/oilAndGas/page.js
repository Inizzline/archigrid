import OilAndGasPiping from '@/components/oilandgaspiping/OilAndGasPiping';
import RecycleProgram from '@/components/recyclePrograms/RecycleProgram';
import WasteManagement from '@/components/wasteManagement/WasteManagement';
import React from 'react'

const page = () => {
  return (
    <div>
      <OilAndGasPiping/>
      <WasteManagement/>
      <RecycleProgram/>
    </div>
  )
}

export default page;
