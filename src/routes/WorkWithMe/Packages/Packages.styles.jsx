import styled from "styled-components";

export const PackagesSection = styled.section`
  background: var(--darkPink);
  padding: 4rem 2rem 3rem 2rem;
  width: 100%;
  min-height: 70vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.5rem;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const PackageCard = styled.div`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px) saturate(120%);
  border-radius: 24px;
  box-shadow: 0 4px 24px rgba(241, 116, 150, 0.1);
  padding: 2.5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 270px;
  max-width: 400px;
  width: 100%;
  transition: transform 0.18s;
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 8px 32px rgba(241, 116, 150, 0.18);
  }
`;

export const PackageTitle = styled.h3`
  color: var(--darkPink);
  font-family: var(--headerFont);
  font-size: 1.7rem;
  margin-bottom: 0.5rem;
`;

export const PackagePrice = styled.div`
  color: var(--darkBrown);
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.7rem;
`;

export const PackageDescription = styled.p`
  color: var(--medBrown);
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

export const PackageFeatures = styled.ul`
  color: var(--darkBrown);
  font-size: 1rem;
  margin: 0;
  padding-left: 1.2rem;
  li {
    margin-bottom: 0.4rem;
  }
`;

export const PackageIcon = styled.div`
  color: var(--darkBrown);
  font-size: 2.5rem;
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
