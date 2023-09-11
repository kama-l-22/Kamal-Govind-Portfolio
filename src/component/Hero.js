import React from 'react'
import bgvideo from "../asset/bg1.mp4"
export default function Hero() {
  return (
    <div>
      <video src={bgvideo} autoPlay muted loop className='bgvideo'></video>
    </div>
  )
}
