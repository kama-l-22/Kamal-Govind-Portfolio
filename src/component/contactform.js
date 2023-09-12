import React from 'react'

export default function Contactform() {
  return (
    <div className='contact-form'  >
      <form>
        <input type='text' className='name' placeholder='Name' required/>
        <input type='email' className='email' placeholder='Email' required/>
        <textarea className='textbox' placeholder='Message...'></textarea>
        <div className='but-cont'>
        <input type='submit' className='button-submit' value='Submit'/>
        <input type="reset" className='button-reset' value='Reset'/></div>
      </form>
    </div>
  )
}
