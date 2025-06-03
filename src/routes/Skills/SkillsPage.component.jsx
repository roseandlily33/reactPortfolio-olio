import React from "react";
import { CertificateContainer } from '../Certificates/Certificates.styles';
import {
  TopContainer,
  EachCaseStudyContainer,
} from "../CaseStudies/CaseStudies.styles";

const SkillsPage = () => {
  return (
    <CertificateContainer>
      <TopContainer>
        <h2>Skills</h2>
      </TopContainer>
      <EachCaseStudyContainer></EachCaseStudyContainer>
    </CertificateContainer>
  );
};

export default SkillsPage;
