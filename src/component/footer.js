import React from 'react'
import facebook from '../asset/facebook.png'
import insta from '../asset/insta.png'
import linkedin from '../asset/linkedin.png'
import twitter from '../asset/twitter.png'
import upArrow from '../asset/arrow-up.png'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='icon-group'>
            <div className='icon1'><img src={facebook}/></div>
            <div className='icon2'><img src={insta}/></div>
            <div className='icon3'><img src={linkedin}/></div>
            <div className='icon4'><img src={twitter}/></div>
        </div>
        <div className='copyrigths'>
            <div className='up'><img src={upArrow} className='up-icon'/></div>
            &copy; CopyRigth@Kamal/Nirmal</div>
    </div>
  )
}
