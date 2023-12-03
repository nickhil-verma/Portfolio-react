import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (<>
        <h1 className='contact-heading'>Contact</h1>
    <div id="Contact" className='contact-container'>
        
        <div className='contact-txt'>
        <h3>I have got just what you need.<br></br>
        Lets Talk</h3></div>
        <div className='contact-form'>
            <form>
                <div className='input holder'><input className='forminput' type='text' placeholder='Name'></input>
                <input className='forminput' type='email' placeholder='Email@web.com'></input></div>
                <input  className='forminput'type='text' placeholder='Subject'></input>
                <textarea type='text' placeholder='Your Message'></textarea>
                <button className='submitbtn'>Submit</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact