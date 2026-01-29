import styled from "styled-components";

export const SkillsPreviewSection = styled.section`
  padding: var(--spacing-xl);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--lightYellowBackground);
  h4 {
    color: var(--pink-5);
  }
`;

export const SkillsGrid = styled.div`
  display: flex;
  overflow-x: scroll;
  max-width: 100%;
  gap: var(--spacing-l);
  margin-top: var(--spacing-m);
  padding: var(--spacing-m);
`;

export const SkillCard = styled.div`
  background: rgba(255, 255, 255, 0.85);
  /* border-radius: 18px; */
  border-radius: var(--borderRadius);
  box-shadow: 0 2px 12px rgba(241, 116, 150, 0.1);
  padding: var(--spacing-m) var(--spacing-l);
  min-width: 160px;
  max-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.18s;
  border: 2px solid var(--pink-4);

  &:hover {
    transform: scale(1.06);
    box-shadow: 0 8px 32px rgba(241, 116, 150, 0.18);
    border-color: var(--pink-2);
  }
`;

export const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: var(--pink-5);
  margin-bottom: var(--spacing-s);
`;

export const SkillName = styled.p`
  text-align: center;
  font-weight: 600;
`;
