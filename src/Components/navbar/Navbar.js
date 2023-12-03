import React, { useState } from 'react';
import "./Navbar.css";
import { motion } from 'framer-motion';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Logo from "../../img/84511.png";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Navbar = () => {
  
    // const [isPopupVisible, setPopupVisible] = useState(false);

    // const handleButtonClick = () => {
    //   setPopupVisible(!isPopupVisible);
    // };
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleButtonClick = () => {
      setPopupVisible(true);
    };
  
    const closePopup = () => {
      setPopupVisible(false);
    };
  return (
    <nav> <div>
    

    {isPopupVisible && (
      <div className="popup">
        <span className="closebtn" onClick={closePopup}>&times;</span>
        <ul className='mobul'>    
                    <li>
                        <ScrollLink  to="About" smooth={true} duration={100} offset={-150} className='navLinks-mobile' >About</ScrollLink>
                    </li>
                    
                    <li>
                        <ScrollLink to="skills" smooth={true} duration={100} offset={-150} className='navLinks-mobile' >skills</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink  to="projects" smooth={true} duration={100} offset={-50} className='navLinks-mobile' >Projects</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="Experience" smooth={true} duration={100} offset={-150} className='navLinks-mobile' >Experience</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="Contact" smooth={true} duration={100} offset={-50} className='navLinks-mobile' >contact</ScrollLink>
                    </li>
                    <li>
                      <a style={{textDecoration:"none"}} href='upi://pay?pa=vermanick75@okhdfcbank&pn=NikhilVerma&mc=1000&cu=INR'><button className='navbtn'>Buy me a coffee☕</button></a>
                   </li>
                </ul>
                <div style={{backgroundColor:"transparent",display:"flex",}}>
                <a style={{textDecoration:"none",backgroundColor:"transparent"}}href="mailto:vermanick75@gmail.com? subject=Got your email from portfolio">
                <IoIosMail className='icon'  />
            </a>
            <a href="https://github.com/nickhil-verma" style={{textDecoration:"none",backgroundColor:"transparent"}}><FaGithub className='icon' /></a>
            <a href="https://www.linkedin.com/in/nikhil-kumar-b9ba861b0/" style={{textDecoration:"none"}}><FaLinkedin className='icon'  /></a>
            <a href="" style={{textDecoration:"none",backgroundColor:"transparent"}}><AiFillInstagram className='icon'  /></a>
            <a href="https://wa.me/9060177870?text=Hello%2C%20I'd%20like%20to%20discuss%20about%20work%20related%20software%20development" style={{textDecoration:"none",backgroundColor:"transparent"}}><FaWhatsapp className='icon' /></a>
                </div>
                <div className='footerdiv'><p className='footertxt'>This site is subject to &#169; and maintained by @nikhilverma <a href='upi://pay?pa=vermanick75@okhdfcbank&pn=NikhilVerma&cu=INR' className='footerlink'>View source code</a></p></div>
      </div>
    )}
  </div>
        <div className='navbar'>
      <div className="container">
        <a href='/' style={{textDecoration:"none",backgroundColor:"transparent"}}><div style={{overflow:"hidden"}} className="logo">
          <img className='logoImg' src={Logo}></img><motion.h1 
            initial={{y:-250}} animate={{y:0}} transition={{delay:0.2,duration:0.8}}
          ><a className='logolink' >Nikhil Verma.</a></motion.h1>
        </div></a>
        <div className="mobile-menu-toggle" onClick={handleButtonClick}>
            ☰
            {isPopupVisible && (
        <div className="popup">
            <div className='btnholder'> <button className="closebtn"onClick={handleButtonClick}>X</button></div>
           
         
        </div>
      )}
          </div>
            <div className="menu">
            
                <ul>    
                    <li>
                        <ScrollLink   className='navLinks' to="About" smooth={true} duration={100} offset={-150}>About</ScrollLink>
                    </li>
                    
                    <li>
                        <ScrollLink to="skills" smooth={true} duration={100} offset={-150} className='navLinks' >skills</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink className='navLinks' to="projects" smooth={true} duration={100} offset={-150} >Projects</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="Experience" smooth={true} duration={100} offset={-150} className='navLinks' >Experience</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="Contact" smooth={true} duration={100} offset={-50} className='navLinks' >contact</ScrollLink>
                    </li>
                    <li>
                      <a style={{textDecoration:"none"}} href='upi://pay?pa=vermanick75@okhdfcbank&pn=NikhilVerma&mc=1000&cu=INR'><button className='navbtn'>Buy me a coffee☕</button></a>
                   </li>
                </ul>
            </div>
      </div>
      <div className='divider'> </div>
      </div>
    </nav>
  );
};

export default Navbar;
