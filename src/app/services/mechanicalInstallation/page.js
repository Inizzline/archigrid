import FireFighting from '@/components/fireFighting/FireFighting';
import Hvac from '@/components/hvac/Hvac';
import PlumbingSystem from '@/components/plumbingSystem/PlumbingSystem';
import React from 'react'

const page = () => {
  return (
    <div>
      <Hvac/>
      <PlumbingSystem/>
      <FireFighting/>
    </div>
  )
}

export default page;
