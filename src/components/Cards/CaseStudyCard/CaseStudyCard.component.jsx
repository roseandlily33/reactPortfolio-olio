import React from "react";
import {
  ProjectCardContainer,
  ProjectTitle,
} from "../ProjectCard/ProjectCard.styles";
import styled from "styled-components";
import SecondaryButton from "../../Buttons/SecondaryButton/SecondaryButton";

const CaseStudyImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  object-position: top;
  border-radius: 10px;
  margin-bottom: 0.7rem;
`;

const CaseStudyTitle = styled(ProjectTitle)`
  margin-bottom: 0.5rem;
`;

const CaseStudyCard = ({ index, study }) => {
  const handleClick = () => {
    if (study?.link) window.location.href = study.link;
  };
  return (
    <ProjectCardContainer key={index}>
      {study?.src ? (
        <CaseStudyImage
          src={study?.src}
          alt={study?.title}
          onClick={handleClick}
        />
      ) : (
        <CaseStudyImage
          src="https://via.placeholder.com/300x180/FFD6E0/3D4249?text=No+Image"
          alt="No image available"
          onClick={handleClick}
        />
      )}
      <CaseStudyTitle>{study?.title}</CaseStudyTitle>
      <SecondaryButton onClick={handleClick} span="Read More" />
    </ProjectCardContainer>
  );
};

export default CaseStudyCard;
