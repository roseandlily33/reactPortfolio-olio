import React from "react";
import ContactMe from "../AboutMe/Contact";
import PackagesComponent from "./Packages/Packages.component";
import ServicesComponent from "./Packages/Services.component";
import RetainerComponent from "./Packages/Retainer.component";
import { AboutMeComponent } from "../AboutMe/AboutMe.styles";
import ProcessSection from "./Process/Process.component";
import NotSure from "./NotSure/NotSure.component";
import { TopContainer } from "../CaseStudies/CaseStudies.styles";

const WorkHome = () => {
  return (
    <AboutMeComponent>
      <TopContainer>
        <h2>Work With Me</h2>
        <p>Thoughtful design and development for growing businesses</p>
      </TopContainer>
      <PackagesComponent />
      <NotSure />
      <RetainerComponent />
      <ProcessSection />
      <ServicesComponent />
      <ContactMe />
    </AboutMeComponent>
  );
};
export default WorkHome;
