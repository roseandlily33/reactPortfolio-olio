import BackEnd from "./BackEnd";
import FrontEnd from "./FrontEnd";
import OtherSkills from "./OtherSkills";
import { AboutMeSkills } from "../../routes/AboutMe/AboutMe.styles";
const SkillsComponent = () => {
    return (  
      <>
         <aside style={{textAlign: 'center'}}>
            <h2>skills</h2>
          </aside>
        <AboutMeSkills>
        <FrontEnd />
        <BackEnd />
        <OtherSkills />
        </AboutMeSkills>
        </>
  );
}
 
export default SkillsComponent;