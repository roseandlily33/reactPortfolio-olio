import styled from "styled-components";

// Take layout and main from here
export const ArielLayout = styled.div`
  display: flex;
  /* align-items: flex-start; */
  width: 100%;
  min-height: 100%;
  gap: var(--spacing-m);
  /* max-width: 1600px; */
  margin: 0 auto;
  padding: var(--spacing-m);
  box-sizing: border-box;
`;

export const ArielMain = styled.main`
  /* width: 100%; */
  /* max-width: 1000px; */
  width: 85%;
  box-sizing: border-box;
  padding: var(--spacing-xxl) var(--spacing-xl);
  background: var(--pink-2);
  /* border-radius: 25px; */
  border-radius: var(--borderRadius);
  box-shadow: 0 8px 48px rgba(241, 116, 150, 0.13);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  align-items: center;
  min-height: 100vh;
  @media screen and (max-width: 950px) {
    width: 100%;
    padding: var(--spacing-xl) var(--spacing-m);
    gap: var(--spacing-m);
    height: 100%;
  }
`;

export const Section = styled.section`
  width: 100%;
  margin-bottom: var(--spacing-xl);
  padding: var(--spacing-xxl) var(--spacing-xl);
  background: rgba(255, 255, 255, 0.92);
  /* border-radius: 25px; */
  border-radius: var(--borderRadius);
  box-shadow: 0 2px 24px rgba(241, 116, 150, 0.1);
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 8px 32px rgba(241, 116, 150, 0.18);
  }
`;

export const PaletteCarousel = styled.div`
  display: flex;
  gap: var(--spacing-xl);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: var(--spacing-l);
  margin-top: var(--spacing-xl);
  & > div {
    flex: 0 0 340px;
    scroll-snap-align: start;
    background: rgba(255, 255, 255, 0.97);
    /* border-radius: 18px; */
    border-radius: var(--borderRadius);
    box-shadow: 0 2px 12px rgba(241, 116, 150, 0.1);
    padding: var(--spacing-m);
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 250px;
    max-width: 340px;
    transition: transform 0.18s;
    &:hover {
      transform: scale(1.04);
      box-shadow: 0 8px 32px rgba(241, 116, 150, 0.18);
    }
  }

  img {
    width: 100%;
    max-width: 260px;
    /* border-radius: 12px; */
    border-radius: var(--borderRadius);
    margin-bottom: var(--spacing-m);
    box-shadow: 0 2px 8px rgba(241, 116, 150, 0.1);
    object-fit: cover;
  }

  @media (max-width: 900px) {
    gap: var(--spacing-m);
    & > div {
      min-width: 80vw;
      max-width: 90vw;
      padding: var(--spacing-s);
    }
    img {
      max-width: 80vw;
    }
  }
`;

export const PaletteCaption = styled.p`
  /* font-size: 1rem; */
  color: var(grey-6);
  text-align: center;
  margin-top: var(--spacing-xs);
  font-style: italic;
`;

export const PhaseCarousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-l);
  margin-bottom: var(--spacing-xl);
  margin-top: var(--spacing-l);

  & > div {
    background: rgba(255, 255, 255, 0.97);
    /* border-radius: 18px; */
    border-radius: var(--borderRadius);
    box-shadow: 0 2px 12px rgba(241, 116, 150, 0.1);
    padding: var(--spacing-m);
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 500px;
    max-width: 500px;
    transition: transform 0.18s;
    &:hover {
      transform: scale(1.04);
      box-shadow: 0 8px 32px rgba(241, 116, 150, 0.18);
    }
  }

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    max-height: 400px;
    /* border-radius: 12px; */
    border-radius: var(--borderRadius);
    margin-bottom: var(--spacing-m);
    box-shadow: 0 2px 8px rgba(241, 116, 150, 0.1);
    object-fit: cover;
    cursor: pointer;
    border: 2px solid var(--pink-2);
  }

  @media (max-width: 900px) {
    & > div {
      min-width: 60vw;
      max-width: 60vw;
      padding: var(--spacing-s);
    }
    img {
      max-width: 60vw;
    }
  }
`;

export const PhaseCaption = styled.p`
  /* font-size: 1rem; */
  color: var(--grey-6);
  text-align: center;
  margin-top: var(--spacing-xs);
  font-style: italic;
`;

export const CarouselNav = styled.button`
  background: none;
  border: none;
  font-size: 2.2rem;
  color: var(--pink-5);
  cursor: pointer;
  align-self: center;
  padding: 0 var(--spacing-m);
  transition: color 0.2s;
  &:hover {
    color: var(--yellow);
  }
`;

export const CarouselImageModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  width: 100vw;
  height: 100vh;
  background: rgba(30, 30, 30, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    max-width: 90vw;
    max-height: 90vh;
    /* border-radius: 18px; */
    border-radius: var(--borderRadius);
    box-shadow: 0 8px 32px rgba(241, 116, 150, 0.18);
    border: 3px solid var(--pink-3);
  }
`;

export const ExpandButton = styled.button`
  background: none;
  border: none;
  color: var(--pink-5);
  font-weight: 500;
  margin-left: var(--spacing-xs);
  cursor: pointer;
  font-size: var(--spacing-m);
  text-decoration: underline;
  transition: color 0.2s;
  &:hover {
    color: var(--yellow);
  }
`;

export const CollapsibleText = styled.p`
  /* font-size: 1.08rem; */
  color: var(--grey-6);
  margin-bottom: var(--spacing-m);
  line-height: 1.6;
  transition: max-height 0.3s;
`;

export const TestimonialSection = styled.section`
  width: 100%;
  background: linear-gradient(
    90deg,
    var(--pink-2) 0%,
    var(--pink-3) 100%
  );
  /* border-radius: 24px; */
  border-radius: var(--borderRadius);
  box-shadow: 0 2px 16px rgba(241, 116, 150, 0.1);
  padding: var(--spacing-xl) var(--spacing-xxl);
  margin: var(--spacing-xl) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-style: italic;
  color: var(--pink-5);
  font-size: 1.25rem;
`;

export const CTASection = styled.section`
  width: 100%;
  background: linear-gradient(90deg, var(--pink-2) 0%, var(--pink-3) 100%);
  /* border-radius: 24px; */
  border-radius: var(--borderRadius);
  box-shadow: 0 2px 16px rgba(241, 116, 150, 0.1);
  padding: var(--spacing-xl);
  margin: var(--spacing-xl) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--white);
  font-size: 1.3rem;

  button {
    background: var(--pink-5);
    color: #fff;
    border: none;
    /* border-radius: 999px; */
    border-radius: var(--borderRadius);
    padding: var(--spacing-s) var(--spacing-xl);
    font-size: 1.15rem;
    font-family: var(--headerFont);
    font-weight: 600;
    box-shadow: 0 2px 12px rgba(241, 116, 150, 0.12);
    cursor: pointer;
    margin-top: var(--spacing-l);
    transition:
      background 0.2s,
      color 0.2s,
      transform 0.18s;

    &:hover {
      background: var(--pink-4);
      color: var(--orange-7);
      transform: scale(1.05);
    }
  }
`;
