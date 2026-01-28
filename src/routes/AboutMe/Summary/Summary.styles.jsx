import styled from "styled-components";

export const SummarySection = styled.section`
  display: flex;
  justify-content: space-evenly;
  background-color: #fff;
  padding: var(--spacing-xl);
  gap: var(--spacing-m);
  p,
  span,
  li {
    margin-bottom: var(--spacing-xs);
    padding-right: var(--spacing-xs);
  }
  .bold {
    font-weight: 700;
    color: var(--orange-6);
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: var(--spacing-m);
    padding: var(--spacing-m);
  }
`;

export const EachCard = styled.div`
  background: var(--orangeBackground);
  border-radius: var(--borderRadius);
  border: 2.5px solid var(--orange-2);
  box-shadow: 0 4px 18px 0 rgba(60, 40, 20, 0.07);
  padding: var(--spacing-m);
  flex: 1 1 320px;
  min-width: 280px;
  max-width: 420px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
  position: relative;
  @media screen and (max-width: 900px) {
    min-width: 100%;
    max-width: 100%;
    padding: var(--spacing-l) var(--spacing-m) var(--spacing-m) var(--spacing-m);
  }
`;

export const CardIcon = styled.div`
  position: absolute;
  top: 1.1rem;
  right: 1.3rem;
  font-size: 2.1rem;
  color: var(--orange-3);
  opacity: 0.85;
  pointer-events: none;
`;

export const CardTitle = styled.h4`
  color: var(--orange-6);
  margin-bottom: var(--spacing-s);
  text-transform: capitalize;
`;
