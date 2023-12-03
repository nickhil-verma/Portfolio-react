import React from 'react';
import './Experience.css';
import WEB from "../../img/web.jpeg"
import Github from "../../img/osc.png"
const Experience = () => {
  return (
    <>
    <h1 className='Expheading' >Experience</h1>
    <div id="Experience"className='expcontainer'>
    <div className='Experience-holder'>
        <div className='experience-card'>
            <img src={WEB} className='explogo'>

            </img>
            <h3>
                Experience As web developer
                
            </h3>
            <ul className='explist'>
                  <li>
                    ⚪ worked as  freelancer 
                  </li>
                  <li>
                    ⚪ Contributes for JS repos
                  </li>
            </ul>
        </div>
        
    </div>    
    <div className='Experience-holder'>
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
        
    </div>    
    </div>
    </>
  )
}

export default Experience