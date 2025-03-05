// import photo from '../images/1F431994-4D99-4CA6-8049-1D03C3A8D143_1_105_c.jpeg';
import { AboutMeComponent } from "./AboutMe.styles";
import SummaryComponent from "./Summary";
import ImageAboutMe from "./ImageAboutMe";
import ContactMe from "./Contact";
import SkillsComponent from "../../components/Skills/Skills";

const AboutMe = () => {
    return (
        <AboutMeComponent>
            <ImageAboutMe />
            <SummaryComponent />
            <SkillsComponent />
            <ContactMe />
        </AboutMeComponent>
        
    );
}
 
export default AboutMe;