import React from 'react'
import SecondaryNav from '../shared/SecondaryNav'
import LogoNav from '../shared/LogoNav'
import TertioryNav from '../shared/TertioryNav'

const Awards = () => {
  return (
    <>
    <SecondaryNav></SecondaryNav>
        <LogoNav></LogoNav>
        <TertioryNav></TertioryNav>
    <div className='h-[500px]'>
      <h1 className='text-center justify-center pt-40 text-7xl font-extrabold'>Awards & Achievements</h1>
    </div>
    </>
    
  )
}

export default Awards
