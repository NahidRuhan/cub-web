import React from 'react'
import SecondaryNav from '../shared/SecondaryNav'
import LogoNav from '../shared/LogoNav'
import TertioryNav from '../shared/TertioryNav'
import Banner from './banner'
import Message from './message'

const VCMessage = () => {
  return (
    <div>
        <SecondaryNav></SecondaryNav>
        <LogoNav></LogoNav>
        <TertioryNav></TertioryNav>
        <Banner description="Message From Vice Chancellor"></Banner>
        <Message name="Message From Name" title="Message Title" image_url="https://gallery.cub.ac.bd/var/albums/Web-Photos/CUB/Home/slide/69e088fe-4efb-4d28-8928-b9d7b012295b.jpg?m=1700887642" description="Hello"></Message>
    </div>
  )
}

export default VCMessage
