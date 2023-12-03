import React, { useState, useEffect } from 'react';
import "./Hero.css";
import TextAnimation from './TextAnimation';
import Heroimg from "../../img/heroimg.jpg";

const Hero = () => {
 
  return (
    <>
    <div className='hero-container' id='About'>
        <div className='hero-img'><img className="heroimgtag"src={Heroimg}></img></div>
        <div className='hero-text'>
            <div className='text'>
            <h1>
              
            
            <TextAnimation/>
            </h1>
            <p className='heropara'>
              Welcome to my digital space! I am a passionate tech enthusiast deeply immersed in the world of technology. My portfolio is a reflection of my unwavering curiosity and love for innovation. I thrive on challenges, actively participating in hackathons, where I transform ideas into solutions. Committed to the spirit of collaboration, I contribute to open-source projects, believing in the power of shared knowledge. Explore my journey through the realm of code and technology, where creativity meets functionality. Join me on this exciting adventure, as I continue to embrace and contribute to the ever-evolving landscape of the digital world. 
            </p>
            <div className="heo-btnholder">
                <a href='https://github.com/nickhil-verma'><button className='github'>GitHub</button></a>
                <a href='https://www.linkedin.com/in/nikhil-kumar-b9ba861b0/'><button className='linkedin'>LinkedIn</button></a>
            </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Hero