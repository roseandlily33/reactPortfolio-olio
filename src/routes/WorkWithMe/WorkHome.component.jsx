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
          paddingTop: "var(--spacing-xl)",
        }}
      >
        <div style={{ position: "relative", display: "inline-block", width: "100%" }}>
          {/* Pen watermark background */}
          <svg
            viewBox="0 0 180 180"
            width="180"
            height="180"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.13,
              zIndex: 0,
              pointerEvents: "none",
            }}
            aria-hidden="true"
          >
            <g>
              <rect x="80" y="30" width="20" height="90" rx="8" fill="var(--pink-2)"/>
              <polygon points="90,120 100,120 95,150" fill="var(--pink-2)"/>
              <ellipse cx="90" cy="35" rx="10" ry="6" fill="var(--pink-2)"/>
            </g>
          </svg>
          <div style={{ position: "relative", zIndex: 1 }}>
            <h1
              style={{
                color: "var(--pink-6)",
              }}
            >
              Work <br />
              With Me
            </h1>
            <p>Thoughtful design and development for growing businesses</p>
          </div>
        </div>
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

