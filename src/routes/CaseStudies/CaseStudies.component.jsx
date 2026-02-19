import React from "react";
import { CertificateContainer } from "../Certificates/Certificates.styles";
import YodaPic from "../../images/projects/YODA.png";
import Logo from "./bloom_and_berry/bloom_images/Logo.png";
import Ariel from "../Ariel/ArielImages/TrainingCapture.png";
import { TopContainer } from "./CaseStudies.styles";
import { CardsBackground } from "../../components/Cards/CardsBackground.styles";
import CaseStudyCard from "../../components/Cards/CaseStudyCard/CaseStudyCard.component";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Yoda Safety Services",
      link: "/CaseStudies/YodaCaseStudy",
      src: YodaPic,
    },
    {
      title: "Berry & Bloom",
      link: "/CaseStudies/BerryAndBloom",
      src: Logo,
    },
    {
      title: "Ariel Boesener Performance Horses",
      link: "/CaseStudies/Ariel",
      src: Ariel,
    },
  ];
  return (
    <CertificateContainer>
      <TopContainer>
        <h2>Case Studies</h2>
      </TopContainer>
      <CardsBackground>
        {caseStudies?.map((study, index) => (
          <CaseStudyCard study={study} key={index} />
        ))}
      </CardsBackground>
    </CertificateContainer>
  );
};

export default CaseStudies;
