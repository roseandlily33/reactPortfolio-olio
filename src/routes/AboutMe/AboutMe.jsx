import { AboutMeComponent } from "./AboutMe.styles";
import SummaryComponent from "./Summary";
import ImageAboutMe from "./ImageAboutMe";
import IDSection from "./ID";
import Timeline from "./Timeline/Timelines";
import CertificatesPreview from "./Certificates/CertificatesPreview.component";
import SkillsPreview from "./Skills/SkillsPreview.component";

const AboutMe = () => {
  return (
    <AboutMeComponent>
      <ImageAboutMe /> 
      <IDSection />
      <SummaryComponent />
      <SkillsPreview />
      <CertificatesPreview />
      <Timeline />
    </AboutMeComponent>
  );
};

export default AboutMe;
