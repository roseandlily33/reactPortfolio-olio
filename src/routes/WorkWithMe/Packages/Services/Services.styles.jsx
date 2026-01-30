import styled from "styled-components";

// Responsive tab bar for services
export const ServicesTabs = styled.div`
  display: flex;
  gap: var(--spacing-m);
  margin-bottom: var(--spacing-xl);
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  padding-bottom: 2px;
  &::-webkit-scrollbar {
    display: none;
  }
  button {
    background: #fff;
    color: var(--pink-5);
    border: 1.5px solid var(--pink-5);
    border-radius: 999px;
    font-weight: 700;
    font-family: var(--headerFont);
    font-size: 1.05rem;
    padding: var(--spacing-xs) var(--spacing-l);
    cursor: pointer;
    box-shadow: none;
    transition: all 0.18s;
    white-space: nowrap;
    scroll-snap-align: start;
    min-width: 120px;
    margin-right: 0;
  }
  button.active {
    background: var(--pink-4);
    color: #fff;
    box-shadow: 0 2px 12px rgba(241, 116, 150, 0.1);
  }
  @media (max-width: 600px) {
    gap: var(--spacing-s);
    button {
      font-size: 0.97rem;
      padding: var(--spacing-xs) var(--spacing-m);
      min-width: 100px;
    }
  }
`;

export const ServicesSection = styled.section`
  background: var(--lightGrey);
  padding: var(--spacing-xxxl) var(--spacing-xl);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: var(--spacing-m);
  p {
    text-align: left;
    /* border: 1px solid red; */
    width: 100%;
  }
  @media (max-width: 900px) {
    padding: var(--spacing-xl) var(--spacing-m);
    &::before,
    &::after {
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
  margin-bottom: var(--spacing-s);
  letter-spacing: 0.08em;
  text-align: left;
  width: 100%;
  font-weight: 800;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-xl);
  width: 100%;
  max-width: 1400px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-xl);
  }
  @media (max-width: 900px) {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    gap: var(--spacing-m);
    padding-bottom: var(--spacing-m);
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    justify-content: flex-start;
  }
  @media (max-width: 600px) {
    gap: var(--spacing-s);
    padding-bottom: var(--spacing-m);
  }
`;

export const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px) saturate(120%);
  /* border-radius: 24px; */
  border-radius: var(--borderRadius);
  box-shadow: 0 4px 24px rgba(241, 116, 150, 0.1);
  padding: var(--spacing-xl) var(--spacing-l) var(--spacing-l) var(--spacing-l);
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
    padding: var(--spacing-m) var(--spacing-s);
    font-size: 0.97rem;
    box-shadow: 0 2px 12px rgba(241, 116, 150, 0.08);
  }
  @media (max-width: 600px) {
    min-width: 170px;
    max-width: 200px;
    padding: var(--spacing-m) var(--spacing-xs);
    font-size: var(--spacing-m);
  }
`;

export const ServiceIcon = styled.div`
  color: var(--orange-7);
  font-size: 2.1rem;
  margin-bottom: var(--spacing-s);
  @media (max-width: 900px) {
    font-size: 1.7rem;
    margin-bottom: var(--spacing-xs);
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ServiceTitle = styled.h4`
  color: var(--pink-5);
  font-family: var(--headerFont);
  font-size: 1.08rem;
  margin-bottom: var(--spacing-xs);
  @media (max-width: 900px) {
    font-size: 0.97rem;
    margin-bottom: var(--spacing-xxs);
  }
  text-align: center;
  font-weight: 600;
`;
