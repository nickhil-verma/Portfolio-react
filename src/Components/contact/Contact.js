import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import "./Contact.css"
const Contact = () => {
  return (<>
        <h1 className='contact-heading sectionheading'>Contact</h1>
    <div id="Contact" className='contact-container'>
        
        <div className='contact-txt'>
        <h3>I have got just what you need.<br></br><span id='contact-span'>
        Lets Talk!</span></h3>
            <a style={{textDecoration:"none"}}href="mailto:vermanick75@gmail.com? subject=Got your email from portfolio">
                <IoIosMail className='icon'  />
            </a>
            <a href="https://github.com/nickhil-verma" style={{textDecoration:"none"}}><FaGithub className='icon' /></a>
            <a href="https://www.linkedin.com/in/nikhil-kumar-b9ba861b0/" style={{textDecoration:"none"}}><FaLinkedin className='icon' style={{backgroundColor:"transparent"}} /></a>
            <a href="" style={{textDecoration:"none"}}><AiFillInstagram className='icon'  /></a>
            <a href="https://wa.me/9060177870?text=Hello%2C%20I'd%20like%20to%20discuss%20about%20work%20related%20software%20development" style={{textDecoration:"none"}}><FaWhatsapp className='icon' /></a>
        </div>
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
    <div><p className='footertxt'>This site is subject to &#169; and maintained by @nikhilverma <a href='upi://pay?pa=vermanick75@okhdfcbank&pn=NikhilVerma&cu=INR' className='footerlink'>View source code</a></p></div>
    </>
  )
}

export default Contact