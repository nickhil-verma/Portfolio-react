import React from 'react'
import { IoIosMail } from "react-icons/io";

import "./Contact.css"
const Contact = () => {
  return (<>
        <h1 className='contact-heading sectionheading'>Contact</h1>
    <div id="Contact" className='contact-container'>
        
        <div className='contact-txt'>
        <h3>I have got just what you need.<br></br><span id='contact-span'>
        Lets Talk!</span></h3><IoIosMail className='icon' /><h7 className="icontxt">Vermancik75@gmaail.com</h7></div>
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