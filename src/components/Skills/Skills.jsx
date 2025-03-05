import BackEnd from "./BackEnd";
import FrontEnd from "./FrontEnd";
import OtherSkills from "./OtherSkills";
import { AboutMeSkills } from "../../routes/AboutMe/AboutMe.styles";
const SkillsComponent = () => {
    return (  
        <div style={{paddingTop: '2rem'}}>
        <AboutMeSkills>
        <FrontEnd />
        <BackEnd />
        <OtherSkills />
        </AboutMeSkills>
        </div>
  );
}
 
export default SkillsComponent;