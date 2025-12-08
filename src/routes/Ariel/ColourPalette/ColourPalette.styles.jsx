import styled from "styled-components";

export const PaletteSection = styled.section`
  width: 100%;
  margin-bottom: 2.5rem;
  padding: 2.5rem 2rem;
  background: #fff;
  border-radius: 28px;
  box-shadow: 0 2px 24px rgba(241, 116, 150, 0.08);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-size: 2.488rem;
    font-family: var(--headerFont);
    font-weight: 400;
    text-transform: uppercase;
    color: var(--darkPink);
    margin-bottom: 0.5rem;
    letter-spacing: 0.04em;
  }

  ul {
    margin-bottom: 2rem;
    padding-left: 1.2rem;
    color: var(--darkGrey);
    font-size: 1.08rem;
    line-height: 1.7;
    li {
      margin-bottom: 0.7rem;
    }
    strong {
      color: var(--darkPink);
    }
  }

  p {
    font-size: 1.08rem;
    color: var(--darkGrey);
    margin-top: 1.5rem;
    line-height: 1.6;
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
    cursor: pointer;
    border: 2px solid var(--lightPink);
    transition: box-shadow 0.18s, border 0.18s;
    &:hover {
      box-shadow: 0 8px 32px rgba(241, 116, 150, 0.18);
      border: 2px solid var(--darkPink);
    }
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
