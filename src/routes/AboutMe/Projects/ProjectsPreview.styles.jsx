import styled from "styled-components";
export const ProjectsPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  /* background: #fbede5; */
  /* background: var(--lightPinkBackground); */
  background: var(--pinkBackground);
  padding: var(--spacing-xxxxl) var(--spacing-xxxl);
  h3 {
    font-weight: 600;
  }
  @media screen and (max-width: 768px) {
    padding: var(--spacing-xxl) var(--spacing-l);
  }
`;

export const ProjectsGrid = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 1.5rem;
  padding: var(--spacing-m) 0;
  @media screen and (max-width: 768px) {
    gap: 1rem;
    padding: var(--spacing-xs) 0;
  }
  /* border: 2px solid red; */
`;

export const ProjectCard = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  padding: var(--spacing-xl) var(--spacing-l);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  transition: box-shadow 0.18s;
  min-width: 350px;
  gap: 0.8rem;
  position: relative;
  overflow: hidden;
  /* border: 2px solid blue; */

  /* Shine sweep effect */
  &::after {
    content: "";
    position: absolute;
    top: -60%;
    left: -60%;
    width: 120%;
    height: 120%;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 60%,
      rgba(255, 255, 255, 0.45) 70%,
      rgba(255, 255, 255, 0) 80%
    );
    transform: translateX(-100%) rotate(25deg);
    pointer-events: none;
    z-index: 3;
    transition: transform 0.7s cubic-bezier(0.4, 2, 0.6, 1);
  }

  &:hover {
    box-shadow: 0 4px 24px rgba(243, 140, 169, 0.13);
    transform: translateY(-2px) scale(1.02);
    border: 2px solid var(--pink-4);
  }
  &:hover::after {
    transform: translateX(80%) rotate(25deg);
    transition: transform 0.7s cubic-bezier(0.4, 2, 0.6, 1);
  }

  @media screen and (max-width: 900px) {
    min-width: 260px;
    padding: var(--spacing-l) var(--spacing-s);
    gap: 0.6rem;
  }
  @media screen and (max-width: 600px) {
    min-width: 180px;
    max-width: 80vw;
    width: 80vw;
    padding: var(--spacing-m) var(--spacing-s);
    gap: 0.5rem;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  object-position: top;
  border-radius: 10px;
  margin-bottom: 0.7rem;
  @media screen and (max-width: 900px) {
    height: 110px;
  }
  @media screen and (max-width: 600px) {
    height: 80px;
  }
`;

export const ProjectTitle = styled.h6`
  font-weight: 700;
  color: var(--darkBerry);
  margin-bottom: 0.2rem;
`;

export const ProjectDescription = styled.p`
  font-size: 0.98rem;
  color: var(--darkBerry);
  margin-bottom: 0.2rem;
  line-height: 1.4;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const ProjectMeta = styled.div`
  display: flex;
  gap: 0.7rem;
  font-size: 0.93rem;
  /* color: var(--orange-6); */
  margin-bottom: 0.1rem;
  flex-wrap: wrap;
`;
