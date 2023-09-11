import React from 'react'
import Contactform from './contactform'
import MapLoction from './MapLocation'
export default function Contact() {
  return (
    <div className='contact'>
      <div className='contact-head'>Contact With Me..!</div>
      <div className='floater'>
        <Contactform/>
        
        <div className='map-contaier'>
          <MapLoction/>
        </div>
      </div>
    </div>
  )
}
