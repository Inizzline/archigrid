import CorperatePage from '@/components/corperatePage/CorperatePage'
import Hse from '@/components/hse/Hse'
import Qms from '@/components/qms/Qms'
import SolutionProvider from '@/components/solutionProvider/SolutionProvider'
import React from 'react'

const page = () => {
  return (
    <>
      {/* <CorperatePage/> */}
      <SolutionProvider/>
      <Hse/>
      <Qms/>
    </>
  )
}

export default page


