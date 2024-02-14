import Civil from '@/components/civil/Civil'
import ElectricalInstallation from '@/components/electricalInstallation/ElectricalInstallation'
import MechanicalInstallation from '@/components/mechanicalInstallation/MechanicalInstallation'
import OilAndGas from '@/components/oilandgas/OilAndGas'
import React from 'react'

const page = () => {
  return (
    <div>
        <Civil/>
        <ElectricalInstallation/>
        <MechanicalInstallation/>
        <OilAndGas/>
    </div>
  )
}

export default page
