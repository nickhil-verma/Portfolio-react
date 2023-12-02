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
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Hero