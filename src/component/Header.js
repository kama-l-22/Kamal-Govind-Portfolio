import React from 'react'
import logo from '../asset/logo.png'
export default function Header() {
  return (
    <div className='header' id='#top'>
        <div className='logo'><img src={logo}/> </div>
        <nav className ='links'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div className='menu'>
            <div className='line1 lines'></div>
            <div className='line2 lines'></div>
            <div className='line3 lines'></div>
        </div>
    </div>
  )
}
