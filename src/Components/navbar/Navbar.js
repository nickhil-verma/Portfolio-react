import React, { useState } from 'react';
import "./Navbar.css";
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
          <img className='logoImg' src={Logo}></img>
        </div>
        <div className="mobile-menu-toggle" onClick={handleButtonClick}>
            ☰
            {isPopupVisible && (
        <div className="popup">
            <div className='btnholder'> <button className="closebtn"onClick={handleButtonClick}>X</button></div>
           <ul className='mobul'>    
                    <li>
                        <a className='navLinks-mobile' href=''>About</a>
                    </li>
                    
                    <li>
                        <a className='navLinks-mobile' href=''>skills</a>
                    </li>
                    <li>
                        <a className='navLinks-mobile' href=''>Projects</a>
                    </li>
                    <li>
                        <a className='navLinks-mobile' href=''>Experience</a>
                    </li>
                    <li>
                        <a className='navLinks-mobile' href=''>contact</a>
                    </li>
                </ul>
         
        </div>
      )}
          </div>
            <div className="menu">
            
                <ul>    
                    <li>
                        <a className='navLinks' href=''>About</a>
                    </li>
                    
                    <li>
                        <a className='navLinks' href=''>skills</a>
                    </li>
                    <li>
                        <a className='navLinks' href=''>Projects</a>
                    </li>
                    <li>
                        <a className='navLinks' href=''>Experience</a>
                    </li>
                    <li>
                        <a className='navLinks' href=''>contact</a>
                    </li>
                </ul>
            </div>
      </div>
    </nav>
  );
};

export default Navbar;
