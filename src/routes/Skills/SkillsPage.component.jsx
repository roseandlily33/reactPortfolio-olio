import React from "react";
import { CertificateContainer } from "../Certificates/Certificates.styles";
// import { TopContainer } from "../CaseStudies/CaseStudies.styles";
import DevelopmentProcess from "./DevelopmentProcess/DevelopmentProcess.component";
import BackToTopButton from "../../components/BackToTop/BackToTop.button";
import TechStack from "./TechStack/TechStack.component";
import SkillsList from "./SkillList/SkillsList.component";

const SkillsPage = () => {
  return (
    <CertificateContainer >
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
          Skills
        </h1>
         <p>
          Full-stack developer focused on scalable MERN and Next.js
          applications, performance optimization, and clean UI architecture.
        </p>
      </div>
      {/* </TopContainer> */}
      <TechStack />
      <DevelopmentProcess />
      <SkillsList />
      <BackToTopButton />
    </CertificateContainer>
  );
};

export default SkillsPage;
