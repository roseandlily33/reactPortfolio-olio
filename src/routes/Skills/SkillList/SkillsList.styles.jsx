import styled from "styled-components";
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
  padding-bottom: var(--spacing-xxxxl);
  /* background-color: var(--pinkBackground); */
  background: white;
  h4 {
    color: var(--pink-7);
    font-weight: 700;
    /* letter-spacing: 0.03em; */
    font-size: 2rem;
    text-align: left;
    width: 100%;
    text-align: center;
  }
`;
export const SkillsTabsLegendCard = styled.div`
  /* border: 2px solid blue; */
  margin-bottom: var(--spacing-xl);
  @media (max-width: 900px) {
    padding: var(--spacing-m) var(--spacing-xs);
    gap: var(--spacing-m);
    /* border: 2px solid red; */
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
  /* border-radius: 16px; */
  width: 100%;
  margin: 0 auto;
  display: flex;
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
  color: var(--pink-6);
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
    color: var(--pink-6);
    font-size: 1.25em;
    margin-right: var(--spacing-xs);
  }
  &.activeTab,
  &:hover {
    background: var(--pink-2);
    color: var(--pink-7);
    box-shadow: 0 4px 16px rgba(241, 116, 150, 0.13);
  }
`;

// export const SkillsHeaderRow = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: flex-start;
//   gap: var(--spacing-xl);
//   flex-wrap: wrap;
//   width: 100%;
//   border: 1px solid red;
//   @media (max-width: 700px) {
//     flex-direction: column;
//     gap: var(--spacing-m);
//     align-items: stretch;
//   }
// `;

export const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  /* border: 1px solid red; */
  width: 100%;
  min-width: 260px;
  max-width: 800px;
  position: relative;
  display: flex;
  gap: var(--spacing-l);
  flex-wrap: wrap;
  justify-content: center;
  transition:
    opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  &.fade-exit {
    opacity: 0;
    transform: translateY(24px) scale(0.98);
    pointer-events: none;
  }
  &.fade-enter {
    opacity: 0;
    transform: translateY(-24px) scale(0.98);
  }
  &.fade-enter-active {
    opacity: 1;
    transform: translateY(0) scale(1);
    transition:
      opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &.fade-exit-active {
    opacity: 0;
    transform: translateY(24px) scale(0.98);
    transition:
      opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const SkillItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: var(--spacing-m);
  /* width: 100%; */
  /* align-items: center; */
  /* justify-content: space-between; */
  /* padding: var(--spacing-xs) 0; */
  /* border: 2px solid blue; */
  width: 200px;
  text-align: center;
  /* height: 300px; */
  &:hover {
    background: var(--grey-1);
  }
  @media (max-width: 600px) {
    /* flex-direction: column; */
    padding: var(--spacing-s) 0;
  }
`;

export const SkillInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-m);

  .skill-icon {
    padding-top: var(--spacing-l);
    font-size: 1.5rem;
    color: var(--pink-5);
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
    color: var(--pink-5);
    /* border: 1px solid red; */
  }
`;

export const StarLegendContainer = styled.div`
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  gap: var(--spacing-xl);
  width: 100%;
  margin-top: var(--spacing-l);

  .skill-icon {
    color: var(--pink-5);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-xxs);
  }
  span {
    font-style: italic;
    font-size: 0.9rem;
    color: var(--grey-7);
  }
`;
