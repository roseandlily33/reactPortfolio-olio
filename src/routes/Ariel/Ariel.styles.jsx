import styled from "styled-components";

export const ArielMain = styled.main`
  width: 90vw;
  /* max-width: 1400px; */
  margin: 3rem auto 3rem auto;
  padding: 3rem 2rem;
  background: linear-gradient(
    120deg,
    var(--lightPink) 0%,
    var(--lightCream) 100%
  );
  border-radius: 40px;
  box-shadow: 0 8px 48px rgba(241, 116, 150, 0.13);
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
  margin-bottom: 2.5rem;
  padding: 2.5rem 2rem;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 28px;
  box-shadow: 0 2px 24px rgba(241, 116, 150, 0.1);
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 8px 32px rgba(241, 116, 150, 0.18);
  }
`;

export const PaletteCarousel = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 1rem;
  margin-top: 2rem;

  & > div {
    flex: 0 0 340px;
    scroll-snap-align: start;
    background: rgba(255, 255, 255, 0.97);
    border-radius: 18px;
    box-shadow: 0 2px 12px rgba(241, 116, 150, 0.1);
    padding: 1.2rem;
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
    border-radius: 12px;
    margin-bottom: 1rem;
    box-shadow: 0 2px 8px rgba(241, 116, 150, 0.1);
    object-fit: cover;
  }

  @media (max-width: 900px) {
    gap: 1rem;
    & > div {
      min-width: 80vw;
      max-width: 90vw;
      padding: 0.7rem;
    }
    img {
      max-width: 80vw;
    }
  }
`;

export const PaletteCaption = styled.p`
  font-size: 1rem;
  color: var(--medGrey);
  text-align: center;
  margin-top: 0.5rem;
  font-style: italic;
`;

export const PhaseCarousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  margin-top: 1.5rem;

  & > div {
    background: rgba(255, 255, 255, 0.97);
    border-radius: 18px;
    box-shadow: 0 2px 12px rgba(241, 116, 150, 0.1);
    padding: 1.2rem;
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
    border-radius: 12px;
    margin-bottom: 1rem;
    box-shadow: 0 2px 8px rgba(241, 116, 150, 0.1);
    object-fit: cover;
    cursor: pointer;
    border: 2px solid var(--lightPink);
  }

  @media (max-width: 900px) {
    & > div {
      min-width: 90vw;
      max-width: 95vw;
      padding: 0.7rem;
    }
    img {
      max-width: 90vw;
    }
  }
`;

export const PhaseCaption = styled.p`
  font-size: 1rem;
  color: var(--medGrey);
  text-align: center;
  margin-top: 0.5rem;
  font-style: italic;
`;

export const CarouselNav = styled.button`
  background: none;
  border: none;
  font-size: 2.2rem;
  color: var(--darkPink);
  cursor: pointer;
  align-self: center;
  padding: 0 1rem;
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
    border-radius: 18px;
    box-shadow: 0 8px 32px rgba(241, 116, 150, 0.18);
    border: 3px solid var(--medPink);
  }
`;

export const ExpandButton = styled.button`
  background: none;
  border: none;
  color: var(--darkPink);
  font-weight: 500;
  margin-left: 0.5em;
  cursor: pointer;
  font-size: 1em;
  text-decoration: underline;
  transition: color 0.2s;
  &:hover {
    color: var(--yellow);
  }
`;

export const CollapsibleText = styled.p`
  font-size: 1.08rem;
  color: var(--medBrown);
  margin-bottom: 1.2rem;
  line-height: 1.6;
  transition: max-height 0.3s;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  padding: 1rem 1.2rem;
`;

export const TestimonialSection = styled.section`
  width: 100%;
  background: linear-gradient(
    90deg,
    var(--lightPink) 0%,
    var(--lightestPink) 100%
  );
  border-radius: 24px;
  box-shadow: 0 2px 16px rgba(241, 116, 150, 0.1);
  padding: 2rem 2.5rem;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-style: italic;
  color: var(--darkPink);
  font-size: 1.25rem;
`;

export const CTASection = styled.section`
  width: 100%;
  background: linear-gradient(90deg, var(--medPink) 0%, var(--lightPink) 100%);
  border-radius: 24px;
  box-shadow: 0 2px 16px rgba(241, 116, 150, 0.1);
  padding: 2.5rem 2.5rem;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--white);
  font-size: 1.3rem;

  button {
    background: var(--darkPink);
    color: #fff;
    border: none;
    border-radius: 999px;
    padding: 0.7em 2em;
    font-size: 1.15rem;
    font-family: var(--headerFont);
    font-weight: 600;
    box-shadow: 0 2px 12px rgba(241, 116, 150, 0.12);
    cursor: pointer;
    margin-top: 1.5rem;
    transition: background 0.2s, color 0.2s, transform 0.18s;

    &:hover {
      background: var(--medPink);
      color: var(--darkBrown);
      transform: scale(1.05);
    }
  }
`;
