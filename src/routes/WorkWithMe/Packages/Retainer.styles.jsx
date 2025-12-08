import styled from "styled-components";

export const RetainerSection = styled.section`
  background: var(--lightGrey);
  padding: 4rem 2rem 3rem 2rem;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RetainerTitle = styled.h2`
  color: var(--darkPink);
  font-family: var(--headerFont);
  font-size: 2rem;
  margin-bottom: 4rem;
  letter-spacing: 0.08em;
  text-align: center;
  border: 2px solid red;
`;

export const RetainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const RetainerCard = styled.div`
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(8px) saturate(120%);
  border-radius: 24px;
  border: 2.5px solid var(--darkPink);
  box-shadow: 0 4px 24px rgba(241,116,150,0.10);
  padding: 2.2rem 1.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 250px;
  max-width: 350px;
  width: 100%;
  transition: transform 0.18s;
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 8px 32px rgba(241,116,150,0.18);
  }
`;

export const RetainerCardTitle = styled.h3`
  color: var(--darkPink);
  font-family: var(--headerFont);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

export const RetainerPrice = styled.div`
  color: var(--darkBrown);
  font-size: 1.15rem;
  font-weight: bold;
  margin-bottom: 0.7rem;
`;

export const RetainerDescription = styled.p`
  color: var(--medBrown);
  font-size: 1.05rem;
  margin-bottom: 1rem;
`;

export const RetainerFeatures = styled.ul`
  color: var(--darkBrown);
  font-size: 1rem;
  margin: 0;
  padding-left: 1.2rem;
  li {
    margin-bottom: 0.4rem;
    display: flex;
    align-items: center;
  }
`;