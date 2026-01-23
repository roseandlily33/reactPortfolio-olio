import styled from "styled-components";
export const SkillsTabsLegendCard = styled.div`
  background: var(--lightCream);
  border-radius: 22px;
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
  border-radius: 16px;
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
  /* border: 1px solid orange; */
  /* gap: 2rem; */
  padding: 1rem;
  width: 100%;
  background-color: var(--pinkBackground);

  h3 {
    margin-bottom: 3rem;
    text-align: left;
    width: 100%;
    font-weight: 600;
    color: var(--darkPink);
    /* animation: fadeIn 1s ease-in-out; */
  }
  .title-stack {
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 0.3rem;
    /* border: 1px solid red; */
    padding: 0;
    margin: 0;
    width: 100%;
  }
  div {
    /* border: 1px solid green; */
    /* width: 10%; */
    width: auto;
  }
  p {
    /* border: 1px solid orange; */
    font-size: 1.5rem;
    display: flex;
  }
  svg {
    color: var(--lightPink);
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
    /* border: 1px solid red; */
  }
  .overview {
  }
  h4 {
    font-size: 1.2rem;
    color: var(--darkBrown);
    font-weight: 500;
    margin-block: 1rem;
  }
  .overview p {
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 600px) {
    .overview p {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      margin-bottom: 1rem;
    }
  }
`;
