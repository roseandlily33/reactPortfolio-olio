import styled from "styled-components";

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
  background: rgba(30, 30, 30, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    max-width: 92vw;
    max-height: 92vh;
    border-radius: 18px;
    box-shadow: 0 8px 32px rgba(241, 116, 150, 0.18);
    border: 3px solid var(--medPink);
    background: #fff;
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
  color: var(--grey);
  margin-bottom: 1.2rem;
  line-height: 1.6;
  transition: max-height 0.3s;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  padding: 1rem 1.2rem;
`;
