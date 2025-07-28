import React from "react";
import { CertificateContainer } from "../Certificates/Certificates.styles";
import YodaPic from "../../images/projects/YODA.png";
import Logo from "./bloom_and_berry/bloom_images/Logo.png";
import { TopContainer } from "./CaseStudies.styles";
import { useNavigate } from "react-router-dom";

const CaseStudies = () => {
  const navigate = useNavigate();
  const caseStudies = [
    {
      title: "Yoda Safety Services",
      link: "/CaseStudies/YodaCaseStudy",
      src: YodaPic,
    },
    {
      title: "Berry & Bloom  ",
      link: "/CaseStudies/BerryAndBloom",
      src: Logo,
    },
  ];
  return (
    <CertificateContainer>
      <TopContainer>
        <h2>Case Studies</h2>
      </TopContainer>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Add in the case studies here */}
        {caseStudies?.map((study, index) => (
          <div id="certContainer" key={index}>
            <img
              src={study?.src}
              alt={study?.title}
              style={{ width: "100%", height: "auto", cursor: "pointer" }}
              onClick={() => navigate(study.link)}
            />
            <h4>{study?.title}</h4>
            <a href={study?.link} style={{ color: "orange" }}>
              Read More
            </a>
          </div>
        ))}
      </section>
    </CertificateContainer>
  );
};

export default CaseStudies;
