import styled from "styled-components";
export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-xl);
  gap: var(--spacing-xl);
  height: 100%;
  margin: 0 auto;
  /* border: 2px solid red; */
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  h4 {
    color: var(--grey-8);
    font-weight: 700;
    font-size: 2.3rem;
    text-align: center;
    width: 100%;
    /* margin-bottom: var(--spacing-xl); */
  }
`;

export const SkillsSplitLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: flex-start; */
  /* border: 2px solid red; */

  gap: var(--spacing-xxl);
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: var(--spacing-l);
  }
`;

export const SkillsTabsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
  min-width: 280px;
  background: var(--grey-3);
  border-radius: var(--borderRadius);
  box-shadow: 0 2px 12px rgba(241, 116, 150, 0.07);
  padding: var(--spacing-l) var(--spacing-m);
  @media (max-width: 900px) {
    flex-direction: row;
    min-width: unset;
    width: 100%;
    justify-content: center;
    gap: var(--spacing-m);
    padding: var(--spacing-m) var(--spacing-xs);
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
    color: var(--pink-3);
    font-size: 1.25em;
    margin-right: var(--spacing-xs);
  }
  &.activeTab,
  &:hover {
    background: var(--pink-6);
    color: var(--white);
    box-shadow: 0 4px 16px rgba(241, 116, 150, 0.13);
  }
`;

export const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  min-width: 260px;
  max-width: 1000px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  /* background: var(--lightPinkBackground); */
  background: white;
  border-radius: var(--borderRadius);
  box-shadow: 0 2px 12px rgba(40, 39, 39, 0.07);
  padding: var(--spacing-l) var(--spacing-m);
  justify-content: flex-start;
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
  flex-direction: row;
  align-items: center;
  gap: var(--spacing-m);
  background: none;
  border-radius: 8px;
  padding: var(--spacing-xs) 0;
  width: 100%;
  text-align: left;
  &:hover {
    background: var(--grey-1);
  }
  @media (max-width: 600px) {
    padding: var(--spacing-xs) 0;
  }
`;

export const SkillInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--spacing-m);
  .skill-icon {
    font-size: 1.5rem;
    color: var(--pink-5);
    display: flex;
    gap: var(--spacing-m);
    padding: 0;
  }
  .skill-name {
    font-weight: 500;
    word-break: break-word;
    font-size: 1.1rem;
    color: var(--grey-8);
  }
  @media (max-width: 600px) {
    gap: var(--spacing-xs);
    .skill-icon {
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
  margin-left: auto;
  /* border: 1px solid purple; */
  padding-top: 0;
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
