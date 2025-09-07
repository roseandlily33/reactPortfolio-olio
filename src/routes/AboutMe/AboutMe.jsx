// import photo from '../images/1F431994-4D99-4CA6-8049-1D03C3A8D143_1_105_c.jpeg';
import { AboutMeComponent } from "./AboutMe.styles";
import SummaryComponent from "./Summary";
import ImageAboutMe from "./ImageAboutMe";
import ContactMe from "./Contact";
import IDSection from "./ID";
// import BestProjects from "./Carousels/BestProjects.component";
// import BestCertificates from './Carousels/BestCertificates.component';
import Timeline from "./Timeline/Timelines";

const AboutMe = () => {
    return (
        <AboutMeComponent>
            <ImageAboutMe />
            <IDSection />
            <SummaryComponent />
            <Timeline />
            {/* <BestProjects /> */}
            {/* <BestCertificates /> */}
            <ContactMe />
        </AboutMeComponent>
        
    );
}
 
export default AboutMe;