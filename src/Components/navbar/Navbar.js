import React, { useState } from 'react';
import "./Navbar.css";
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
        <a href='/' style={{textDecoration:"none",backgroundColor:"transparent"}}><div className="logo">
          <img className='logoImg' src={Logo}></img><h1><a className='logolink' >Nikhil Verma.</a></h1>
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
                </ul>
            </div>
      </div>
      <div className='divider'> </div>
      </div>
    </nav>
  );
};

export default Navbar;
