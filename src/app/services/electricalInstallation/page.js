import ElectricalInstrumantation from '@/components/electricalInstrumwntation/ElectricalInstrumantation'
import ElectricalPowerDist from '@/components/electricalPowerDist/ElectricalPowerDist'
import Elv from '@/components/elv/Elv'
import GreenEnergy from '@/components/greenEnergy/GreenEnergy'
import React from 'react'

const page = () => {
  return (
    <div>
      <GreenEnergy/>
      <Elv/>
      <ElectricalPowerDist/>
      <ElectricalInstrumantation/>
    </div>
  )
}

export default page
