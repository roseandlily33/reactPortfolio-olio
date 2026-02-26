import { AboutMeComponent } from "./AboutMe.styles";
import SummaryComponent from "./Summary/Summary.component";
import ImageAboutMe from "./ImageAboutMe";
import IDSection from "./ID/ID.component";
import Timeline from "./Timeline/Timelines.info";
import ProjectsPreview from "./Projects/ProjectsPreview.component";
import CTA from "./CTA/CTA.component";

const AboutMe = () => {
  return (
    <AboutMeComponent>
      <ImageAboutMe />
      <IDSection />
      <SummaryComponent />
      <ProjectsPreview />
      <Timeline />
      <CTA />
    </AboutMeComponent>
  );
};

export default AboutMe;
