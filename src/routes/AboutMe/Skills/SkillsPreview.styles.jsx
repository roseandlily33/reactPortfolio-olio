import styled from "styled-components";

export const SkillsPreviewSection = styled.section`
  padding: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--lightYellowBackground);
  h2 {
    font-size: 2rem;
    color: var(--darkPink);
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 1.8rem;
    }
  }
`;

export const SkillsGrid = styled.div`
  display: flex;
  overflow-x: scroll;
  max-width: 100%;
  gap: 2rem;
  margin-top: 1.5rem;
  padding: 1rem;
`;

export const SkillCard = styled.div`
  background: rgba(255, 255, 255, 0.85);
  /* border-radius: 18px; */
  border-radius: var(--borderRadius);
  box-shadow: 0 2px 12px rgba(241, 116, 150, 0.1);
  padding: 1.2rem 1.5rem;
  min-width: 160px;
  max-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.18s;
  border: 2px solid var(--medPink);

  &:hover {
    transform: scale(1.06);
    box-shadow: 0 8px 32px rgba(241, 116, 150, 0.18);
    border-color: var(--darkPink);
  }
`;

export const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: var(--darkPink);
  margin-bottom: 0.7rem;
`;

export const SkillName = styled.div`
  font-size: 1.1rem;
  text-align: center;
  font-family: var(--headerFont);
  font-weight: 600;
`;

export const SeeSkillsButton = styled.button`
  background: var(--darkPink);
  color: #fff;
  border: none;
  /* border-radius: 999px; */
  border-radius: var(--borderRadius);
  padding: 0.7em 2em;
  font-size: 1.15rem;
  font-family: var(--headerFont);
  font-weight: 600;
  box-shadow: 0 2px 12px rgba(241, 116, 150, 0.12);
  cursor: pointer;
  margin-top: 1.5rem;
  transition:
    background 0.2s,
    color 0.2s,
    transform 0.18s;

  &:hover {
    background: var(--medPink);
    color: var(--darkBrown);
    transform: scale(1.05);
  }
`;
