import styled from "styled-components";

export const PackagesSection = styled.section`
  background: var(--lightGrey);
  padding: 4rem 2rem 3rem 2rem;
  width: 100%;
  min-height: 70vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid red;
  h2 {
    margin-bottom: 4rem;
  }
`;

export const PackagesGrid = styled.div`
  display: flex;
  gap: 2.5rem;
  width: 100%;
  overflow-x: auto;
  padding: 2rem;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  /* border: 2px solid blue; */

  & > div {
    flex: 0 0 340px;
    scroll-snap-align: start;
  }

  @media (max-width: 600px) {
    gap: 1.2rem;
    & > div {
      flex: 0 0 90vw;
      max-width: 95vw;
    }
  }
`;

export const PackageCard = styled.div`
  background: ${({ $bg }) => $bg || "rgba(255,255,255,0.7)"};
  backdrop-filter: blur(8px) saturate(120%);
  border-radius: 24px;
  border: 2.5px solid ${({ $border }) => $border || "var(--darkPink)"};
  box-shadow: 0 4px 24px rgba(241, 116, 150, 0.10);
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
  font-family: var(--headerFont);
  font-size: 1.7rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
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
    display: flex;
    align-items: center;
  }
`;

export const PackageIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ComesWithSection = styled.section`
  margin-top: 4rem;
  background: rgba(255,255,255,0.85);
  border-radius: 24px;
  box-shadow: 0 2px 16px rgba(241,116,150,0.10);
  padding: 2.5rem 2rem;
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ComesWithTitle = styled.h4`
  color: var(--darkPink);
  font-family: var(--headerFont);
  font-size: 1.3rem;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
`;

export const ComesWithListStyled = styled.ul`
  margin: 0 0 1.5rem 0;
  padding-left: 0;
  list-style: none;
  width: 100%;
`;

export const ComesWithItem = styled.li`
  color: var(--darkBrown);
  font-size: 1.05rem;
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
`;
