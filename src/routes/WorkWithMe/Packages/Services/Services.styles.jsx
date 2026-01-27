import styled from "styled-components";

export const ServicesSection = styled.section`
  background: var(--lightGrey);
  padding: 5rem 2rem;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 1rem;
  p {
    text-align: left;
    /* border: 1px solid red; */
    width: 100%;
  }
  @media (max-width: 900px) {
    padding: 2rem 1rem;
    &::before, &::after {
      display: none !important;
    }
    p {
      /* text-align: center !important; */
    }
  }
`;

export const ServicesTitle = styled.h2`
  color: var(--medGrey);
  font-family: var(--headerFont);
  /* font-size: 2.2rem; */
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
      display: flex;
      flex-direction: row;
      overflow-x: auto;
      gap: 1.1rem;
      padding-bottom: 1.2rem;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      justify-content: flex-start;
    }
    @media (max-width: 600px) {
      gap: 0.7rem;
      padding-bottom: 1.1rem;
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
    min-width: 220px;
    max-width: 270px;
  width: 100%;
  scroll-snap-align: start;
  transition: transform 0.18s;
    @media (max-width: 900px) {
      min-width: 210px;
      max-width: 240px;
      padding: 1.2rem 0.7rem 1rem 0.7rem;
      font-size: 0.97rem;
      box-shadow: 0 2px 12px rgba(241, 116, 150, 0.08);
    }
    @media (max-width: 600px) {
      min-width: 170px;
      max-width: 200px;
      padding: 0.9rem 0.4rem 0.7rem 0.4rem;
      font-size: 0.93rem;
    }
`;

export const ServiceIcon = styled.div`
  color: var(--darkBrown);
    font-size: 2.1rem;
    margin-bottom: 0.7rem;
    @media (max-width: 900px) {
      font-size: 1.7rem;
      margin-bottom: 0.5rem;
    }
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ServiceTitle = styled.h4`
  color: var(--darkPink);
  font-family: var(--headerFont);
    font-size: 1.08rem;
    margin-bottom: 0.5rem;
    @media (max-width: 900px) {
      font-size: 0.97rem;
      margin-bottom: 0.3rem;
    }
  text-align: center;
  font-weight: 600;
`;
