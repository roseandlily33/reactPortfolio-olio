import styled from "styled-components";
export const SkillsTabsLegendCard = styled.div`
  background: var(--lightCream);
  /* border-radius: 22px; */
  border-radius: var(--borderRadius);
  box-shadow: 0 6px 32px rgba(241, 116, 150, 0.13);
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
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
    padding: var(--spacing-m) var(--spacing-xs);
    gap: var(--spacing-m);
  }
`;

export const TabsPillRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-m);
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: var(--spacing-l);
  @media (max-width: 900px) {
    gap: var(--spacing-s);
    margin-bottom: var(--spacing-m);
  }
`;
export const StarLegendCard = styled.div`
  background: #fff;
  /* border-radius: 16px; */
  border-radius: var(--borderRadius);
  box-shadow: 0 2px 12px rgba(241, 116, 150, 0.09);
  padding: var(--spacing-l) var(--spacing-xl);
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-m);
  @media (max-width: 900px) {
    padding: var(--spacing-m) var(--spacing-s);
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
  padding: var(--spacing-s) var(--spacing-l);
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
    margin-right: var(--spacing-xs);
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
  gap: var(--spacing-xl);
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: var(--spacing-m);
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
  padding: var(--spacing-xs) 0;

  @media (max-width: 600px) {
    /* flex-direction: column; */
    padding: var(--spacing-s) 0;
  }
`;

export const SkillInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-m);

  .skill-icon {
    padding-top: var(--spacing-l);
    font-size: 1.5rem;
    color: var(--darkPink);
    display: flex;
    gap: var(--spacing-m);
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
    gap: var(--spacing-xxs);

    .skill-icon {
      padding-top: var(--spacing-xs);
      font-size: 1.2rem;
      gap: var(--spacing-xs);
    }
    .skill-name {
      font-size: var(--spacing-m);
    }
  }
`;

export const SkillRating = styled.p`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-xs);
  /* border: 1px solid purple; */
  padding-top: var(--spacing-l);

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
    gap: var(--spacing-m);
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
  padding: var(--spacing-xl);
  /* margin: 2rem auto; */
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  /* border: 2px solid orange; */
  gap: var(--spacing-xl);
  height: 100%;
  padding: var(--spacing-xl);
  background-color: var(--pinkBackground);
`;

export const TechStackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-l) var(--spacing-xs) var(--spacing-xl)
    var(--spacing-xs);
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
    padding: var(--spacing-l) var(--spacing-xl);
    margin-bottom: var(--spacing-xl);
    width: 100%;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-m);
    position: relative;
  }

  .title-stack {
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: var(--spacing-xxs);
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
    padding: var(--spacing-m) var(--spacing-l);
  }
  .tools-row {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-s);
    width: 100%;
    justify-content: flex-start;
    margin-top: var(--spacing-xxs);
  }
  .tool-pill {
    display: inline-flex;
    align-items: center;
    background: #fff;
    color: var(--darkPink);
    border-radius: 999px;
    border: 1.2px solid var(--lightPink);
    padding: var(--spacing-xs) var(--spacing-m);
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
    margin-bottom: var(--spacing-xxs);
    gap: var(--spacing-xs);
  }
  .tool-icon {
    font-size: 1.15em;
    margin-right: var(--spacing-xxs);
  }

  .overview {
    width: 100%;
  }
  .overview p {
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: var(--spacing-m);
  }

  .back-to-top {
    position: fixed;
    bottom: var(--spacing-xl);
    right: var(--spacing-xl);
    background: var(--darkPink);
    color: #fff;
    border: none;
    border-radius: 999px;
    padding: var(--spacing-s) var(--spacing-l);
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
      padding: var(--spacing-m) var(--spacing-xs);
      margin-bottom: var(--spacing-l);
    }
    .overview p {
      font-size: 1rem;
      margin-bottom: var(--spacing-m);
    }
    .accent-heading {
      font-size: 1.3rem;
    }
    .back-to-top {
      bottom: var(--spacing-m);
      right: var(--spacing-m);
      font-size: 0.98rem;
      padding: var(--spacing-xs) var(--spacing-m);
    }
  }
`;
