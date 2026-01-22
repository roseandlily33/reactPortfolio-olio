import styled from "styled-components";

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
  padding: 0.5rem 0;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
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
  /* border: 1px solid #cac7c7; */
  .skill-icon {
    color: var(--darkPink);
    display: flex;
    align-items: center;
    gap: 1rem;
    /* border: 1px solid red; */
  }
  span {
    /* color: var(--darkGrey); */
    font-style: italic;
    font-size: 0.9rem;
  }
`;

export const TechStackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid orange; */
  /* gap: 2rem; */
  width: 100%;
  background-color: var(--pinkBackground);

  h3 {
    margin-bottom: 3rem;
    animation: fadeIn 1s ease-in-out;
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
    color: var(--darkPink);
    font-size: 1.5rem;
    display: flex;
    font-weight: 500;
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
    margin-bottom: 0.5rem;
  }
  .overview p {
    font-size: 1.1rem;
    /* color: var(--darkGrey); */
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;
