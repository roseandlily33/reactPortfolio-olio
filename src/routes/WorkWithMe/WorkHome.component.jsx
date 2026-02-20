import React from "react";
import ContactMe from "../AboutMe/ContactForm/Contact";
import PackagesComponent from "./Packages/PackagesInfo/Packages.component";
import ServicesComponent from "./Packages/Services/Services.component";
import RetainerComponent from "./Packages/Retainer/Retainer.component";
import { AboutMeComponent } from "../AboutMe/AboutMe.styles";
import ProcessSection from "./Process/Process.component";
import NotSure from "./NotSure/NotSure.component";
// import { TopContainer } from "../CaseStudies/CaseStudies.styles";

const WorkHome = () => {
  return (
    <AboutMeComponent>
      {/* <TopContainer> */}
      <div
        style={{
          background: "white",
          textAlign: "center",
          paddingTop: "var(--spacing-xxxl)",
          backgroundColor: "#fff",
        }}
      >
        <h1
          style={{
            color: "var(--pink-6)",
            // color: "var(--pink-6)",
          }}
        >
          Work With Me
        </h1>
        <p>Thoughtful design and development for growing businesses</p>
      </div>
      {/* </TopContainer> */}
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
