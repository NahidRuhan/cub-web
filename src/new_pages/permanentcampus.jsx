import React from 'react'
import SecondaryNav from '../shared/SecondaryNav'
import LogoNav from '../shared/LogoNav'
import TertioryNav from '../shared/TertioryNav'
import Campus from '../pages/home/Campus'

const PermanentCampus = () => {
  return (
    <div>
        <SecondaryNav></SecondaryNav>
        <LogoNav></LogoNav>
        <TertioryNav></TertioryNav>
        <Campus></Campus>
    </div>
  )
}

export default PermanentCampus
