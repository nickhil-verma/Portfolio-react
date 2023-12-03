import React from 'react'
import "./Hero.css";
import Heroimg from "../../img/heroimg.jpg";

const Hero = () => {
  return (
    <>
    <div className='hero-container' id='About'>
        <div className='hero-img'><img className="heroimgtag"src={Heroimg}></img></div>
        <div className='hero-text'>
            <div className='text'>
            <h1>
                Hy! welcome to my Portfolio
            </h1>
            <p> welcom! to my website so delight full to see u here hjsfdhjsdf sdahsfdhjsdf sfdjhsfdjsfd oijfjlkf fjkfjkfsjk sfdhjsfd fhjsfdjkfd fdhjhjjkf
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