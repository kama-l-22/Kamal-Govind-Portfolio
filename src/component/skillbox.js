import React from 'react'
import python from '../asset/python.png'
import cpp from '../asset/cpp.png'
import react from '../asset/react.png'
import angular from '../asset/angular.png'

export default function Skillbox({img,lan,width,kon}) {
  return (
    <div className='skillbox'  data-aos="fade-up">
      <div className='img-container'><img src={img}></img></div>
      <div className='lang'>{lan}</div>
      <div className='bar'>
        <div className='scorebar' style={{width:`${width}%` }}></div>
      </div>
      <div className='message'>{kon}</div>
    </div>
  )
}
