import React from 'react';
import './Experience.css';
import { motion } from "framer-motion";
import WEB from "../../img/web.jpeg"
import Github from "../../img/osc.png"
const Experience = () => {
  return (
    <>
    <h1 className='Expheading sectionheading' >Experience</h1>
    <div id="Experience"className='expcontainer'>
    <motion.div
     initial={{x:-100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.4,duration:0.8}} viewport={{
      once:true,
    }}
     className='Experience-holder'>
        <div className='experience-card'>
            <img src={WEB} className='explogo'>

            </img>
            <h3>
                Experience As web developer
                
            </h3>
            <ul className='explist'>
                  <li>
                    ⚪ workes as  freelancer 
                  </li>
                  <li>
                    ⚪ Contributes for JS repos
                  </li>
            </ul>
        </div>
        
    </motion.div>    
    <motion.div
      initial={{x:100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.4,duration:0.8}} viewport={{
        once:true,
      }}
    className='Experience-holder'>
        <div className='experience-card'>
            <img src={Github} className='explogo'>

            </img>
            <h3>
                Experience As Open Source Contributor
            </h3>
            <ul className='explist'>
                  <li>
                  ⚪ worked For cal.com
                  </li>
                  <li>
                  ⚪ Contributing currently for CloudCV
                  </li>
                  <li>
                  ⚪ Contributing currently for CircuitVerse
                  </li>
            </ul>
        </div>
        
    </motion.div>    
    </div>
    </>
  )
}

export default Experience