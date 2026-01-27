import styled from "styled-components";
export const SkillsTabsLegendCard = styled.div`
  background: var(--lightCream);
  /* border-radius: 22px; */
  border-radius: var(--borderRadius);
  box-shadow: 0 6px 32px rgba(241, 116, 150, 0.13);
  padding: 2.2em 2.5em 2.5em 2.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.2rem;
  margin-bottom: 2.5rem;
  width: 100%;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  // Faded category icon background wrapper
  /* .category - bg - wrapper {
  position: relative;
  width: 100 %;
  min - height: 320px;
}
.category - bg - icon {
  position: absolute;
  top: 50 %;
  left: 50 %;
  transform: translate(-50 %, -50 %);
  font - size: 10rem;
  color: var(--lightPinkBackground);
  opacity: 0.25;
  pointer - events: none;
  z - index: 0;
  user - select: none;
}
.category - bg - wrapper ul {
  position: relative;
  z - index: 1;
} */
  @media (max-width: 900px) {
    padding: 1.2em 0.5em 1.5em 0.5em;
    gap: 1.2rem;
  }
`;

export const TabsPillRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 1.5rem;
  @media (max-width: 900px) {
    gap: 0.7rem;
    margin-bottom: 1rem;
  }
`;
export const StarLegendCard = styled.div`
  background: #fff;
  /* border-radius: 16px; */
  border-radius: var(--borderRadius);
  box-shadow: 0 2px 12px rgba(241, 116, 150, 0.09);
  padding: 1.5em 2em;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  @media (max-width: 900px) {
    padding: 1em 0.7em;
    max-width: 100%;
  }
`;

export const PillTab = styled.button`
  display: inline-flex;
  align-items: center;
  background: #fff;
  color: var(--medPink);
  border: none;
  border-radius: 999px;
  padding: 0.6em 1.7em;
  font-size: 1.13rem;
  font-family: var(--headerFont);
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(241, 116, 150, 0.07);
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s,
    box-shadow 0.2s;
  outline: none;
  svg {
    color: var(--lightPink);
    font-size: 1.25em;
    margin-right: 0.4em;
  }
  &.activeTab,
  &:hover {
    background: var(--lightPinkBackground);
    color: var(--darkPink);
    box-shadow: 0 4px 16px rgba(241, 116, 150, 0.13);
  }
`;

export const SkillsHeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1.2rem;
    align-items: stretch;
  }
`;

export const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  /* border: 1px solid red; */
  width: 100%;
`;

export const SkillItem = styled.li`
  display: flex;
  border-bottom: 1px solid #cac7c7;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;

  @media (max-width: 600px) {
    /* flex-direction: column; */
    padding: 0.7rem 0;
  }
`;

export const SkillInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .skill-icon {
    padding-top: 1.5rem;
    font-size: 1.5rem;
    color: var(--darkPink);
    display: flex;
    gap: 1rem;
  }

  .skill-name {
    font-weight: 500;
    /* color: var(--darkGrey); */
    word-break: break-word;
    font-size: 1.1rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3rem;

    .skill-icon {
      padding-top: 0.5rem;
      font-size: 1.2rem;
      gap: 0.5rem;
    }
    .skill-name {
      font-size: 1rem;
    }
  }
`;

export const SkillRating = styled.p`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  /* border: 1px solid purple; */
  padding-top: 1.5rem;

  svg {
    font-size: 1.5rem;
    color: var(--darkPink);
    /* border: 1px solid red; */
  }
`;

export const StarLegendContainer = styled.div`
  .skill-icon {
    color: var(--darkPink);
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  span {
    font-style: italic;
    font-size: 0.9rem;
  }
`;
export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  /* margin: 2rem auto; */
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  /* border: 2px solid orange; */
  gap: 2rem;
  height: 100%;
  padding: 2rem;
  background-color: var(--pinkBackground);
`;

export const TechStackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0.5rem 2.5rem 0.5rem;
  width: 100%;
  background-color: var(--pinkBackground);

  .accent-heading {
    color: var(--darkPink);
    font-weight: 700;
    letter-spacing: 0.04em;
    margin-bottom: 1.2rem;
    font-size: 2rem;
    text-align: left;
    width: 100%;
  }

  .section-card {
    background: #fff;
    /* border-radius: 18px; */
    border-radius: var(--borderRadius);
    box-shadow: 0 2px 12px rgba(241, 116, 150, 0.09);
    padding: 1.5em 2em;
    margin-bottom: 2.2rem;
    width: 100%;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
    position: relative;
  }

  .title-stack {
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 0.3rem;
    width: 100%;
  }
  .animated-icon {
    transition:
      transform 0.18s,
      color 0.18s;
    will-change: transform, color;
  }
  .animated-icon:hover {
    transform: scale(1.25) rotate(-8deg);
    color: var(--darkPink);
  }

  .tools-platforms {
    background: var(--lightPinkBackground);
    border: 1.5px solid var(--lightPink);
    box-shadow: 0 2px 12px rgba(241, 116, 150, 0.07);
    align-items: center;
    padding: 1.2em 1.5em;
  }
  .tools-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7em;
    width: 100%;
    justify-content: flex-start;
    margin-top: 0.2em;
  }
  .tool-pill {
    display: inline-flex;
    align-items: center;
    background: #fff;
    color: var(--darkPink);
    border-radius: 999px;
    border: 1.2px solid var(--lightPink);
    padding: 0.35em 1.1em;
    font-size: 1.01rem;
    font-family: var(--headerFont);
    font-weight: 600;
    box-shadow: 0 1px 6px rgba(241, 116, 150, 0.07);
    cursor: default;
    transition:
      background 0.2s,
      color 0.2s,
      box-shadow 0.2s;
    min-width: 0;
    white-space: nowrap;
    margin-bottom: 0.2em;
    gap: 0.5em;
  }
  .tool-icon {
    font-size: 1.15em;
    margin-right: 0.3em;
  }

  .overview {
    width: 100%;
  }
  .overview p {
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  .back-to-top {
    position: fixed;
    bottom: 2.2rem;
    right: 2.2rem;
    background: var(--darkPink);
    color: #fff;
    border: none;
    border-radius: 999px;
    padding: 0.7em 1.7em;
    font-size: 1.1rem;
    font-family: var(--headerFont);
    font-weight: 700;
    box-shadow: 0 2px 12px rgba(241, 116, 150, 0.13);
    cursor: pointer;
    z-index: 100;
    transition:
      background 0.2s,
      color 0.2s,
      box-shadow 0.2s;
    opacity: 0.92;
  }
  .back-to-top:hover {
    background: var(--lightPink);
    color: var(--darkPink);
    opacity: 1;
  }

  @media screen and (max-width: 600px) {
    .section-card {
      padding: 1em 0.5em;
      margin-bottom: 1.2rem;
    }
    .overview p {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
    .accent-heading {
      font-size: 1.3rem;
    }
    .back-to-top {
      bottom: 1.1rem;
      right: 1.1rem;
      font-size: 0.98rem;
      padding: 0.5em 1.1em;
    }
  }
`;
