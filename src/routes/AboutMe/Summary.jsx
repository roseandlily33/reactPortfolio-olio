import { AboutMeSection } from "./AboutMe.styles";
import { Link } from "react-router-dom";
import MyImage from '../../images/1F431994-4D99-4CA6-8049-1D03C3A8D143_1_105_c.jpeg';
const SummaryComponent = () => {
    return ( 
        <AboutMeSection>
            <div className="left">
            <img src={MyImage} alt="Victoria" />
            </div>
            <div className="right">
            <h2>Hi, I'm Victoria!</h2>
            <section>
                <div>
                <p> I am a MERN Full Stack Developer,
                <br />
                I'm passionate in front end development and love designing, CSS, and REACT.
                <br />
                I have been developing for 2 years, and have gained certificates from the University of New 
                Brunswick, Codecademy and Zero to Mastery. 
                <br />
                I have worked on projects for <Link to="/projects">clients, personal projects
                 </Link>, as well as developing projects with other people.
                 <br />
                 I have worked with CI/CD pipelines, testing, deployment mainly to render, 
                 desigining and creating applications with accessibility in mind.
                </p>
                </div>
                <div>
            <button id="downloadBtn" ><a className="button-content" href="VictoriaBenoitResume.pdf" download="VictoriaBenoitResume.pdf">Resume</a></button>
            </div>
                </section>


            </div>
            
        </AboutMeSection>
     );
}
 
export default SummaryComponent;