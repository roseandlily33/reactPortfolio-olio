import styled from "styled-components";

// Two-column layout for services
export const ServicesLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: var(--spacing-xl);
  /* max-width: 1200px; */
  /* min-height: 340px; */
  gap: var(--spacing-xxxl);
  /* margin: var(--spacing-xl) auto 0 auto; */
  @media (max-width: 900px) {
    flex-direction: column;
    gap: var(--spacing-xl);
    min-height: 0;
  }
`;

export const ServicesListColumn = styled.div`
  /* flex: 1 1 260px; */
  /* max-width: 320px; */
  /* min-width: 200px; */
  min-width: 30%;
  max-width: 50%;
  max-height: 300px;
  /* border: 2px solid red; */
  background: var(--lightPinkBackground);
  border-radius: var(--borderRadius);
  box-shadow: 0 2px 12px rgba(241, 116, 150, 0.07);
  padding: var(--spacing-l) var(--spacing-m);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  overflow-y: auto;
  @media (max-width: 900px) {
    flex-direction: row;
    max-width: 100%;
    min-width: 0;
    padding: var(--spacing-m) var(--spacing-xs);
    overflow-x: auto;
    overflow-y: visible;
    gap: var(--spacing-xs);
  }
`;

export const ServiceListItem = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  gap: var(--spacing-m);
  background: none;
  border: none;
  border-radius: var(--borderRadius);
  font-family: var(--headerFont);
  font-size: 1.05rem;
  color: var(--pink-5);
  font-weight: 600;
  padding: var(--spacing-xs) var(--spacing-m);
  margin-bottom: 2px;
  cursor: pointer;
  transition: background 0.16s, color 0.16s;
  width: 100%;
  text-align: left;
  outline: none;
  &.active, &:hover {
    background: var(--pink-4);
    color: #fff;
  }
  @media (max-width: 900px) {
    min-width: 160px;
    font-size: 0.97rem;
    padding: var(--spacing-xs) var(--spacing-s);
    gap: var(--spacing-xs);
  }
`;

export const ServiceDetailCard = styled.div`
  /* flex: 2 1 400px; */
  background: #fff;
  border-radius: var(--borderRadius);
  box-shadow: 0 4px 24px var(--pink-2);
  padding: var(--spacing-xxl) var(--spacing-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  max-width: 70%;
  min-height: 260px;
  @media (max-width: 900px) {
    min-width: 0;
    max-width: 100%;
    padding: var(--spacing-l) var(--spacing-m);
  }
`;



export const ServicesSection = styled.section`
  /* background: var(--grey-1); */
  background: #fff;
  padding: var(--spacing-xxxxxl) var(--spacing-xxxl);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: var(--spacing-s);
  p {
    text-align: left;
    /* text-align: center; */
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
  color: var(--grey-8);
  /* font-size: 2.2rem; */
  /* margin-bottom: 1.5rem; */
  margin-bottom: var(--spacing-xs);
  /* letter-spacing: 0.05em; */
  text-align: left;
  /* text-align: center; */
  width: 100%;
  font-weight: 600;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-xxl);
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
  /* background: rgba(255, 255, 255, 0.7); */
  background: var(--lightPinkBackground);
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
