import React from "react";
import { CertificateContainer } from "../Certificates/Certificates.styles";
import YodaPic from "../../images/projects/YODA.png";
import Logo from "./bloom_and_berry/bloom_images/Logo.png";
import Ariel from "../Ariel/ArielImages/TrainingCapture.png";
import {
  TopContainer,
  CaseStudiesGrid,
  CaseStudyCard,
  CaseStudyImage,
  CaseStudyTitle,
  CaseStudyButton,
} from "./CaseStudies.styles";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "../../components/Buttons/SecondaryButton/SecondaryButton";

const CaseStudies = () => {
  const navigate = useNavigate();
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
      <CaseStudiesGrid>
        {caseStudies?.map((study, index) => (
          <CaseStudyCard key={index}>
            {study?.src ? (
              <CaseStudyImage
                src={study?.src}
                alt={study?.title}
                onClick={() => navigate(study?.link)}
              />
            ) : (
              <CaseStudyImage
                src="https://via.placeholder.com/300x180/FFD6E0/3D4249?text=No+Image"
                alt="No image available"
                onClick={() => navigate(study?.link)}
              />
            )}
            <CaseStudyTitle>{study?.title}</CaseStudyTitle>
            <SecondaryButton
              onClick={() => navigate(study?.link)}
              span={"View Case Study"}
            />
          </CaseStudyCard>
        ))}
      </CaseStudiesGrid>
    </CertificateContainer>
  );
};

export default CaseStudies;
