import styled from "styled-components";

export const SummarySection = styled.section`
  display: flex;
  justify-content: space-evenly;
  background-color: #fff;
  padding: 3rem;
  p,
  span,
  li {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    padding-right: 0.5rem;
  }
   .bold {
    font-weight: 700;
    color: var(--medBrown);
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }
`;

export const EachCard = styled.div`
  background: var(--orangeBackground);
  border-radius: var(--borderRadius);
  border: 2.5px solid var(--lightBrown);
  box-shadow: 0 4px 18px 0 rgba(60, 40, 20, 0.07);
  padding: 1.6rem 1.7rem 1.3rem 1.7rem;
  flex: 1 1 320px;
  min-width: 280px;
  max-width: 420px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: relative;
  @media screen and (max-width: 768px) {
    min-width: 100%;
    max-width: 100%;
    padding: 1.4rem 1.2rem 1rem 1.2rem;
  }
`;

export const CardIcon = styled.div`
  position: absolute;
  top: 1.1rem;
  right: 1.3rem;
  font-size: 2.1rem;
  color: var(--medPink);
  opacity: 0.85;
  pointer-events: none;
`;

export const CardTitle = styled.h3`
  color: var(--darkBrown);
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  margin-bottom: 0.7rem;
  text-transform: capitalize;
  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;
