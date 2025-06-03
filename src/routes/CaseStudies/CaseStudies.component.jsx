import React from "react";
import { CertificateContainer } from "../Certificates/Certificates.styles";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Yoda Safety Services",
      link: "/CaseStudies/YodaCaseStudy",
    },
  ];
  return (
    <CertificateContainer>
      <h2>Case Studies</h2>
      {/* Add in the case studies here */}
      {caseStudies.map((study, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            margin: "1rem 0",
          }}
        >
          <h4>{study.title}</h4>
          <a href={study.link} style={{ color: "orange" }}>
            Read More
          </a>
        </div>
      ))}
    </CertificateContainer>
  );
};

export default CaseStudies;
