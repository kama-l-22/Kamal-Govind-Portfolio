import React from 'react'
import bgvideo from "../asset/bg1.mp4"
import Header from './Header'
export default function Hero() {
  return (
    <div>
      <video src={bgvideo} autoPlay muted loop className='bgvideo'>

      </video>
      <div className='contanier'><Header /></div>
      <div className='des'>
        <div className='head'>
          H<span className='diff'>i  </span>Th<span className='diff'>er</span>e..<span className='diff2'>!</span>
        </div>
        <div className='text'>
          I'm <span className='diff2'>Govind,</span>an undergraduate engineering student in Information Technology, attending Government Engineering College, Barton Hill (GECBH)
          <div className='extra'>
          <div className='exs'>Cricket</div>
          <div className='exs'>Moives</div>
          <div className='exs'>Leadership</div>
          <div className='exs'>Tech</div>



        </div>
        </div>

      </div>
    </div>
  )
}
