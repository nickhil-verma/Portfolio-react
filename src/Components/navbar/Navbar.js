import React, { useState } from 'react';
import "./Navbar.css";
import { motion } from 'framer-motion';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Logo from "../../img/84511.png";
import { IoIosMail } from "react-icons/io";
import { ImLinkedin } from "react-icons/im";
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
                    <motion.li initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.1,duration:0.8}}>
                        <ScrollLink  to="About" smooth={true} duration={100} offset={-150} className='navLinks-mobile' >About</ScrollLink>
                    </motion.li>
                    
                    <motion.li initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.2,duration:0.8}}>
                        <ScrollLink to="skills" smooth={true} duration={100} offset={-150} className='navLinks-mobile' >skills</ScrollLink>
                    </motion.li>
                    <motion.li initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.3,duration:0.8}}>
                        <ScrollLink  to="projects" smooth={true} duration={100} offset={-50} className='navLinks-mobile' >Projects</ScrollLink>
                    </motion.li>
                    <motion.li initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.4,duration:0.8}}>
                        <ScrollLink to="Experience" smooth={true} duration={100} offset={-150} className='navLinks-mobile' >Experience</ScrollLink>
                    </motion.li>
                    <motion.li initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.5,duration:0.8}}>
                        <ScrollLink to="Contact" smooth={true} duration={100} offset={-50} className='navLinks-mobile' >contact</ScrollLink>
                    </motion.li>
                    <motion.li initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.6,duration:0.8}}>
                      <a style={{textDecoration:"none"}} href='upi://pay?pa=vermanick75@oksbi&pn=Nikhil verma&am=1000.00&cu=INR&aid=uGICAgICnmMDKLQ'><button className='navbtn'>Buy me a coffee☕</button></a>
                   </motion.li>
                </ul>
                <div style={{backgroundColor:"transparent",display:"flex",}}>
                <a style={{textDecoration:"none",backgroundColor:"transparent"}}href="mailto:vermanick75@gmail.com? subject=Got your email from portfolio">
                <IoIosMail className='icon' style={{backgroundColor:"transparent"}} />
            </a>
            <a href="https://github.com/nickhil-verma" style={{textDecoration:"none",backgroundColor:"transparent"}}><FaGithub className='icon' /></a>
            <a href="https://www.linkedin.com/in/nikhil-kumar-b9ba861b0/" style={{textDecoration:"none",backgroundColor:"transparent"}}><ImLinkedin  className='icon' style={{Color:"red"}}  /></a>
            <a href="" style={{textDecoration:"none",backgroundColor:"transparent"}}><AiFillInstagram className='icon'/></a>
            <a href="https://wa.me/9060177870?text=Hello%2C%20I'd%20like%20to%20discuss%20about%20work%20related%20software%20development" style={{textDecoration:"none",backgroundColor:"transparent"}}><FaWhatsapp className='icon' /></a>
                </div>
                <div className='footerdiv'><p className='footertxt'>This site is subject to &#169; and maintained by @nikhilverma <a href='upi://pay?pa=vermanick75@oksbi&pn=Nikhil verma&am=1000.00&cu=INR&aid=uGICAgICnmMDKLQ' className='footerlink'>View source code</a></p></div>
      </div>
    )}
  </div>
        <div className='navbar'>
      <div className="container">
        <a href='/' style={{textDecoration:"none",backgroundColor:"transparent"}}><div style={{overflow:"hidden"}} className="logo">
          <img className='logoImg' src={Logo}></img><motion.h1 
            initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2,duration:0.8}}
          ><a className='logolink' >Nikhil Verma.</a></motion.h1>
        </div></a>
        <div className="mobile-menu-toggle" onClick={handleButtonClick}>
            ☰
            {isPopupVisible && (
        <div className="popup">
           
         
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
