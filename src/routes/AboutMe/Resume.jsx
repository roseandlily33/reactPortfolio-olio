import { ResumeSection } from "./AboutMe.styles";

const Resume = () => {
    return (
        <ResumeSection>
        <h3>Download my resume:</h3>
        <button id="downloadBtn" ><a  className="button-content" href="VictoriaBenoitResume.pdf" download="VictoriaBenoitResume.pdf">Resume</a></button>
        </ResumeSection> 
     ) ;
}
 
export default Resume;