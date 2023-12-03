import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { motion } from 'framer-motion';
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
            <a href="https://wa.me/9060177870?text=Hyy!%20Nikhil." style={{textDecoration:"none"}}><FaWhatsapp className='icon' /></a>
        </div>
        <div className='contact-form'>
            <form>
                <div className='input holder'><motion.input
                 initial={{x:-100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.4,duration:0.8}} viewport={{
                once:true,
              }}
                required className='forminput' type='text' placeholder='Name'></motion.input>
                <motion.input 
                 initial={{x:100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.4,duration:0.8}} viewport={{
                once:true,
              }}
                 required className='forminput' type='email' placeholder='Email@example.com'></motion.input></div>
                <motion.input 
                initial={{y:100, opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.6,duration:0.8}} viewport={{
                    once:true,
                  }}
                  className='forminput'type='text' placeholder='Subject'></motion.input>
                <motion.textarea initial={{y:100, opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.7,duration:0.8}} viewport={{
                    once:true,
                  }}  required type='text' placeholder='Your Message'></motion.textarea>
                <motion.button initial={{ opacity:0}} whileInView={{opacity:1}} transition={{delay:0.8,duration:0.8}} viewport={{
                    once:true,
                  }}className='submitbtn'>Submit</motion.button>
            </form>
        </div>
    </div>
    <div><p className='footertxt'>This site is subject to &#169; and maintained by @nikhilverma <a href='upi://pay?pa=vermanick75@okhdfcbank&pn=NikhilVerma&mc=1000&cu=INR' className='footerlink'>View source code</a>
</p></div>
    </>
  )
}

export default Contact