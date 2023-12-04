import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
const Contact = () => {

    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_xxomne7",
          "template_h4sh03m",
          form.current,
          "i6Aaq5I0OEyQLqAPi"
        )
        .then((result) => {
          console.log('Email sent successfully:', result.text)
          form.current.reset();
          setDone(true);
          console.log('email sent sucessfully');  
        })
        .catch((error) => {
          console.error('Email not sent:', error);
        });
    };
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
        <div className='contact-form' >
            <form ref={form} onSubmit={sendEmail}>
                <div className='input holder'><motion.input
                 initial={{x:-100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.4,duration:0.8}} viewport={{
                once:true,
              }}
                required className='forminput' name="user_name" type='text' placeholder='Name'></motion.input>
                <motion.input 
                 initial={{x:100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.4,duration:0.8}} viewport={{
                once:true,
              }}
                 required className='forminput' name="user_email" type='email' placeholder='Email@example.com'></motion.input></div>
                <motion.input 
                initial={{y:100, opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.6,duration:0.8}} viewport={{
                    once:true,
                  }}
                  className='forminput'type='text' name="mobno" placeholder='Subject'></motion.input>
                <motion.textarea initial={{y:100, opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.7,duration:0.8}} viewport={{
                    once:true,
                  }}  required type='text' name="message" placeholder='Your Message'></motion.textarea>
                  <span className="submit-msg">{done && "Message Sent. Confirmation is sent to your mail"}</span>
                <motion.button initial={{ opacity:0}} whileInView={{opacity:1}} transition={{delay:0.8,duration:0.8}} viewport={{
                    once:true,
                  }}className='submitbtn' value="Send">Submit</motion.button>
            </form>
        </div>
    </div>
    <div><p className='footertxt'>This site is subject to &#169;2023 and maintained by @nikhilverma <a href='upi://pay?pa=vermanick75@oksbi&pn=Nikhil verma&am=1000.00&cu=INR&aid=uGICAgICnmMDKLQ' className='footerlink'>View source code</a>
</p></div>
    </>
  )
}

export default Contact