import React from "react";
import { CertificateContainer } from "../Certificates/Certificates.styles";
import DevelopmentProcess from "./DevelopmentProcess/DevelopmentProcess.component";
import BackToTopButton from "../../components/BackToTop/BackToTop.button";
import TechStack from "./TechStack/TechStack.component";
import SkillsList from "./SkillList/SkillsList.component";

const SkillsPage = () => {
  return (
    <CertificateContainer >
      <div
        style={{
          // background: "white",
          textAlign: "center",
          paddingTop: "var(--spacing-xxxl)",
          // backgroundColor: "#fff",
        }}
      >
        <h1
          style={{
            color: "var(--pink-6)",
            marginBottom: 'var(--spacing-l)',
          }}
        >
          Skills
        </h1>
         <p style={{padding: "0 var(--spacing-l)", maxWidth: "600px", margin: "0 auto"}}>
          Full-stack developer focused on scalable MERN and Next.js
          applications, performance optimization, and clean UI architecture.
        </p>
      </div>
      <TechStack />
      <DevelopmentProcess />
      <SkillsList />
      <BackToTopButton />
    </CertificateContainer>
  );
};

export default SkillsPage;
