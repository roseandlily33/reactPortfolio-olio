import { useState } from "react";
import BackEnd from "../components/Skills/BackEnd";
import FrontEnd from '../components/Skills/FrontEnd';
import Skills from '../components/Skills/Skills';

const Resume = () => {
    const [skillState, setSkillState] = useState(FrontEnd);
    return (
        <div className="resume">
        <div className="resumeNavbar">
            <h3 onClick={() => setSkillState(FrontEnd)}>Front End</h3>
            <h3 onClick={() => setSkillState(BackEnd)}>Back End</h3>
            <h3 onClick={() => setSkillState(Skills)}>Other Skills</h3>
       
         </div>
         {skillState}
        <div>
            </div>
            <div className="download">
        <h2 className="animate__animated animate__shakeX" >Download my resume:</h2>
        <button id="downloadBtn" ><a href="VictoriaBenoitResume.pdf" download="VictoriaBenoitResume.pdf">Resume</a></button>
        </div>
    </div> );
}
 
export default Resume;