import React, { useState, useEffect } from 'react';
import "./FloatingText.css";
import { motion } from 'framer-motion';

const FloatingText = () => {
   
  const [isEducationPopupVisible, setEducationPopupVisible] = useState(false);
  const [isBlogsPopupVisible, setBlogsPopupVisible] = useState(false);

  const handleEducationClick = () => {
    setEducationPopupVisible(true);
    // Disable background scrolling when the popup is opened
    document.body.style.overflow = 'hidden';
  };

  const handleBlogsClick = () => {
    setBlogsPopupVisible(true);
    // Disable background scrolling when the popup is opened
    document.body.style.overflow = 'hidden';
  };

  const handlePopupClose = () => {
    setEducationPopupVisible(false);
    setBlogsPopupVisible(false);
    // Enable background scrolling when the popup is closed
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    // Cleanup: Enable background scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <div className='floatingtextconatiner'>
        <div className="clickable-div blogs" onClick={handleBlogsClick}>
          BLOGS
        </div>
        {isBlogsPopupVisible && (
          <div className="popup-overlay" onClick={handlePopupClose}>
            <motion.div 
            initial={{ opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:0.1,duration:0.3}} viewport={{
                once:true,}}
                className="popup-content" onClick={(e) => e.stopPropagation()}>
              <div className='clsbtnhlder'><button className='popupclsbtn' onClick={handlePopupClose}>&times;</button></div>
              <p>Blogs popup content goes here!</p>
            </motion.div>
          </div>
        )}
      </div>

      <div className='floatingtextconatiner'>
        <div className="clickable-div edu" onClick={handleEducationClick}>
          EDUCATION
        </div>
        {isEducationPopupVisible && (
          <div className="popup-overlay" onClick={handlePopupClose}>
            <motion.div
            initial={{ opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:0.1,duration:0.3}} viewport={{
                once:true,}}
            className="popup-content" onClick={(e) => e.stopPropagation()}>
              <div className='clsbtnhlder'><button className='popupclsbtn' onClick={handlePopupClose}>&times;</button></div>
              <div className='circle'><h3>BORN 2004</h3></div>
                    <div className="timelinecontainer">
                        
                                <div className="timeline">
                                    <ul>
                                    <li>
                                        <div className="timeline-content">
                                        <h3 className="date">2019-2020</h3>
                                        <h1>CBSE 10<sup style={{backgroundColor:"transparent"}}>th </sup>Board</h1>
                                        <p>
                                            94%
                                        </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-content">
                                        <h3 className="date">2020-2022</h3>
                                        <h1>CBSE 12<sup style={{backgroundColor:"transparent"}}>th</sup>boards</h1>
                                        <p>
                                           74%
                                        </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-content">
                                        <h3 className="date">2023</h3>
                                        <h1>JEE mains and Advanced</h1>
                                        <p>
                                           94%ile in jee mains and 35k rank in JEE adv
                                        </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-content">
                                        <h3 className="date">2020-2023</h3>
                                        <h1>B.Tech </h1>
                                        <p>
                                           Electronics and communication Branch.
                                        </p>
                                        </div>
                                    </li>
                                    </ul>
                                </div>
                    </div>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
}

export default FloatingText;
