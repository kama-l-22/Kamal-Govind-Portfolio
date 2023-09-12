import React from 'react'
import Contactform from './contactform'
import MapLoction from './MapLocation'
export default function Contact() {
  return (
    <div className='contact' data-aos="fade-right">
      <div className='contact-head'>Contact Me..!</div>
      <div className='floater'>
        <Contactform/>
        
        <div className='map-contaier'>
          <MapLoction/>
        </div>
      </div>
    </div>
  )
}
