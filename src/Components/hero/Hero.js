import React, { useState, useEffect } from 'react';
import "./Hero.css";
import TextAnimation from './TextAnimation';
import Heroimg from "../../img/heroimg.jpg";
import { motion } from 'framer-motion';

const Hero = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#efebe4",
      mixBlendMode: "difference"
    },
    button: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: "transparent",
      borderColor:"white",
      borderStyle: "solid",
      borderWidth: 1,
      mixBlendMode: "add"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

 
    
  

  const buttonEnter = () => setCursorVariant("button");
  const buttonLeave = () => setCursorVariant("default");
  return (
    <>
    <div className='hero-container' id='About'>
        <div className='hero-img'><img className="heroimgtag"src={Heroimg}></img></div>
        <div className='hero-text'>
            <div className='text'>
            <h1>
              
            
            <TextAnimation/>
            </h1>
            <p onMouseEnter={textEnter} onMouseLeave={textLeave} style={{color:"white"}} className='heropara'>
            Welcome to my digital space! 🌐 I am a passionate tech enthusiast deeply immersed in the world of technology. My portfolio is a reflection of my unwavering curiosity and love for innovation. I thrive on challenges, actively participating in hackathons, where I transform ideas into solutions. Committed to the spirit of collaboration, I contribute to open-source projects, believing in the power of shared knowledge. Explore my journey through the realm of code and technology, where creativity meets functionality. Join me on this exciting adventure, as I continue to embrace and contribute to the ever-evolving landscape of the digital world. 🚀

            </p>
            <div className="heo-btnholder">
                <a href='https://github.com/nickhil-verma'><motion.button 
                initial={{x:-100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.3,duration:0.8}} viewport={{
                once:true,
              }}
                className='github'onMouseEnter={buttonEnter} onMouseLeave={buttonLeave}  >GitHub</motion.button></a>
                <a href='https://www.linkedin.com/in/nikhil-kumar-b9ba861b0/'><motion.button 
                initial={{x:100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.3,duration:0.8}} viewport={{
                once:true,
              }}className='linkedin' onMouseEnter={buttonEnter} onMouseLeave={buttonLeave}  >LinkedIn</motion.button></a>
            </div>
            </div>
            <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      />
        </div>
    </div>
    
    </>
  )
}

export default Hero