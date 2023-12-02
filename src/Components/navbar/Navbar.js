import React, { useState } from 'react';
import "./Navbar.css";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Logo from "../../img/84511.png";


const Navbar = () => {
  
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleButtonClick = () => {
      setPopupVisible(!isPopupVisible);
    };
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img className='logoImg' src={Logo}></img><h1><a className='logolink' >Nikhil Verma.</a></h1>
        </div>
        <div className="mobile-menu-toggle" onClick={handleButtonClick}>
            ☰
            {isPopupVisible && (
        <div className="popup">
            <div className='btnholder'> <button className="closebtn"onClick={handleButtonClick}>X</button></div>
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
                        <ScrollLink to="about" smooth={true} duration={100} offset={-50} className='navLinks-mobile' >Experience</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="about" smooth={true} duration={100} offset={-50} className='navLinks-mobile' >contact</ScrollLink>
                    </li>
                </ul>
         
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
                        <ScrollLink to="about" smooth={true} duration={100} offset={-50} className='navLinks' >Experience</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="about" smooth={true} duration={100} offset={-50} className='navLinks' >contact</ScrollLink>
                    </li>
                </ul>
            </div>
      </div>
      <div className='divider'> </div>
     
    </nav>
  );
};

export default Navbar;
