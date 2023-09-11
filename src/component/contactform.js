import React from 'react'

export default function Contactform() {
  return (
    <div className='contact-form'>
      <form>
        <input type='text' className='name' placeholder='Your Name' required/>
        <input type='email' className='email' placeholder='Your Email Address' required/>
        <input type='text' className='let1' placeholder='Let' required/>
        <input type='text' className='let2' placeholder='Let' required/>
        <input type='submit' className='button-submit' value='Submit'/>
        <input type="reset" className='button-reset' value='Reset'/>
      </form>
    </div>
  )
}
