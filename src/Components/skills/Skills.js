import React from 'react';
import "./Skills.css";
import HTML from "../../img/html.png";
import DOCKER from "../../img/docker.png";
import JS from "../../img/js.png";
import NODE from "../../img/node.png";
import REACT from "../../img/react.png";
import GIT from "../../img/git.png";
import CSS from "../../img/css.png";
import C from "../../img/c.png";
import CPP from "../../img/c++.png";
import MONGODB from "../../img/Mongodb.png";
import PHOTOSHOP from "../../img/photoshop.png";
import MUI from "../../img/materialui.png";
import BOOTSTRAP from "../../img/Bootstrap.png";
import GITLAB from "../../img/gitlab.png";
import OBS from "../../img/obs.jpeg";
import AUDITION from "../../img/audition.png";
import PREMEIRE from "../../img/premeire.png";
import PYTHON from "../../img/python.jpeg";

import VSCODE from "../../img/vscode.png";

const Skills = () => {
  return (
    <div className='skills-section' id='skills'>
        <h1 className='skillsheading sectionheading'>SKILLS</h1>
        <p className='subheading-skills'>To be Noted this was updated last in Dec 2023</p>
        <div className='imgholder'>
           <div className='imgcontainer'><img  id='skills-logo' src={HTML}></img><h3>Html</h3><p>90%</p><div className='barholder'><div className='progressbar html'></div></div></div>
            <div className='imgcontainer'><img  id='skills-logo' src={CSS}></img><h3>CSS</h3><p>85%</p><div className='barholder'><div className='progressbar css'></div></div></div>
            <div className='imgcontainer'><img  id='skills-logo' src={JS}></img><h3>JS</h3><p>50%</p><div className='barholder'><div className='progressbar js'></div></div></div>
            <div className='imgcontainer'><img  id='skills-logo' src={DOCKER}></img><h3>Docker</h3><p>30%</p><div className='barholder'><div className='progressbar docker'></div></div></div>
            <div className='imgcontainer'><img  id='skills-logo' src={NODE}></img><h3>Nodejs</h3><p>30%</p><div className='barholder'><div className='progressbar node'></div></div></div>
        </div>
        <div className='imgholder'>
            <div className='imgcontainer'><img  id='skills-logo' src={GIT}></img><h3>Git</h3><p>90%</p><div className='barholder'><div className='progressbar git'></div></div></div>
            <div className='imgcontainer'><img  id='skills-logo' src={REACT}></img><h3>ReactJS</h3><p>80%</p><div className='barholder'><div className='progressbar react'></div></div></div>
            <div className='imgcontainer'><img  id='skills-logo' src={PREMEIRE}></img><h3>ADPP</h3><p>70%</p><div className='barholder'><div className='progressbar pr'></div></div></div>
            <div className='imgcontainer'><img  id='skills-logo' src={PHOTOSHOP}></img><h3>Photoshop</h3><p>85%</p><div className='barholder'><div className='progressbar html'></div></div></div>
            <div className='imgcontainer'><img  id='skills-logo' src={MUI}></img><h3>MUI</h3><p>90%</p><div className='barholder'><div className='progressbar html'></div></div></div>
        </div>
        <div className='imgholder'>
            <div className='imgcontainer'><img  id='skills-logo' src={C}></img><h3>C</h3><p>95%</p><div className='barholder'><div className='progressbar html'></div></div></div>
            <div className='imgcontainer'><img  id='skills-logo' src={BOOTSTRAP}></img><h3>Bootstrap</h3><p>95%</p><div className='barholder'><div className='progressbar html'></div></div></div>
            <div className='imgcontainer'><img  id='skills-logo' src={GITLAB}></img><h3>Gitlab</h3><p>90%</p><div className='barholder'><div className='progressbar html'></div></div></div>
            <div className='imgcontainer'><img  id='skills-logo' src={OBS}></img><h3>OBS</h3><p>85%</p><div className='barholder'><div className='progressbar html'></div></div></div>
            <div className='imgcontainer'><img  id='skills-logo' src={AUDITION}></img><h3>AA</h3><p>50%</p><div className='barholder'><div className='progressbar html'></div></div></div>
        </div>
        <div className='imgholder'>
            <div className='imgcontainer'><img  id='skills-logo' src={PYTHON}></img><h3>Python</h3><p>60%</p><div className='barholder'><div className='progressbar python'></div></div></div>
            <div className='imgcontainer'><img  id='skills-logo' src={VSCODE}></img><h3>VS Code</h3><p>90%</p><div className='barholder'><div className='progressbar html'></div></div></div>
            <div className='imgcontainer'><img  id='skills-logo' src={CPP}></img><h3>C++</h3><p>90%</p><div className='barholder'><div className='progressbar html'></div></div></div>
            <div className='imgcontainer'><img  id='skills-logo' src={MONGODB}></img><h3>Mongo DB</h3><p>10%</p><div className='barholder'><div className='progressbar mongodb'></div></div></div>
            
            
        </div>
    </div>
  )
}

export default Skills