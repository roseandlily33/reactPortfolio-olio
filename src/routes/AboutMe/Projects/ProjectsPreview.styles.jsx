import styled from "styled-components";
export const ProjectsPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  /* background: #fbede5; */
  background: var(--lightPinkBackground);
  padding: var(--spacing-xxxxl) var(--spacing-xxxl);
  h3 {
    font-weight: 620;
  }
`;

export const ProjectsGrid = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 1.5rem;
  /* border: 2px solid red; */
`;

export const ProjectCard = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  padding: var(--spacing-m) var(--spacing-l);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  transition: box-shadow 0.18s;
  min-width: 350px;
  gap: 0.8rem;
  /* border: 2px solid blue; */
  &:hover {
    box-shadow: 0 4px 24px rgba(243, 140, 169, 0.13);
    transform: translateY(-2px) scale(1.02);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  object-position: top;
  border-radius: 10px;
  margin-bottom: 0.7rem;
`;

export const ProjectTitle = styled.div`
  font-weight: 700;
  font-size: 1.18rem;
  color: var(--orange-7);
  margin-bottom: 0.2rem;
`;

export const ProjectDescription = styled.p`
  font-size: 0.98rem;
  color: var(--pink-7);
  margin-bottom: 0.2rem;
  line-height: 1.4;
`;

export const ProjectMeta = styled.div`
  display: flex;
  gap: 0.7rem;
  font-size: 0.93rem;
  color: var(--orange-6);
  margin-bottom: 0.1rem;
`;
