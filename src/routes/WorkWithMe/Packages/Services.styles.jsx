import styled from "styled-components";

export const ServicesSection = styled.section`
  background: var(--lightGrey);
  /* padding: 4rem 2rem 3rem 2rem; */
  padding: 5rem 2rem;
  width: 100%;
  /* min-height: 100vh; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ServicesTitle = styled.h2`
  color: var(--medGrey);
  font-family: var(--headerFont);
  font-size: 2.2rem;
  /* margin-bottom: 1.5rem; */
  margin-bottom: 0.8rem;
  letter-spacing: 0.08em;
  text-align: left;
  width: 100%;
  font-weight: 800;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  width: 100%;
  max-width: 1400px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    gap: 1.2rem;
    padding-bottom: 1rem;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }
`;

export const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px) saturate(120%);
  border-radius: 24px;
  box-shadow: 0 4px 24px rgba(241, 116, 150, 0.1);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 270px;
  max-width: 340px;
  width: 100%;
  scroll-snap-align: start;
  transition: transform 0.18s;
`;

export const ServiceIcon = styled.div`
  color: var(--darkBrown);
  font-size: 2.5rem;
  margin-bottom: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ServiceTitle = styled.h4`
  color: var(--darkPink);
  font-family: var(--headerFont);
  font-size: 1.25rem;
  margin-bottom: 0.7rem;
  text-align: center;
  font-weight: 600;
`;
