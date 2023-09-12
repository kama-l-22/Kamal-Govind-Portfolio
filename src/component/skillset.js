import React from 'react'
import Skillbox from './skillbox'
import python from '../asset/python.png'
import cpp from '../asset/cpp.png'
import react from '../asset/react.png'
import angular from '../asset/angular.png'

export default function Skillset() {
  return (
    <div className='skillset'>
      <div className='skillset-sub'>
        <Skillbox img ={python} lan = {'Python'} width={75}/>
        <Skillbox img={cpp} lan ={'C++'} width ={50}/>
        <Skillbox img={react}lan = {'React'} width ={80}/>
        <Skillbox img={angular} lan ={'Angular'} width={30}/> 
      </div>
      <div className='float-down'>
      <div className='skill-mes'>These are the languages where i worked and got knowledge </div>
      <div className='buton-box'> <button>Hire Me!</button></div>
      </div>
    </div>
  )
}
