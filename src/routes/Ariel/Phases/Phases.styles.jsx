import styled from "styled-components";

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
    transition: max-width 0.2s;
  }

  @media (max-width: 600px) {
    img {
      max-width: 260px;
      max-height: 220px;
    }
     & > div {
      min-width: 50vw;
      max-width: 50vw;
      /* border: 2px solid red; */
      padding: var(--spacing-s);
    }
  }
`;

export const PhaseCaption = styled.p`
  font-size: var(--spacing-m);
  color: var(--grey-7);
  text-align: center;
  margin-top: var(--spacing-xs);
  font-style: italic;
`;

export const CarouselNav = styled.button`
  background: none;
  border: none;
  font-size: var(--spacing-xl);
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
  background: rgba(30, 30, 30, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    max-width: 92vw;
    max-height: 92vh;
    /* border-radius: 18px; */
    border-radius: var(--borderRadius);
    box-shadow: 0 8px 32px rgba(241, 116, 150, 0.18);
    border: 3px solid var(--pink-2);
    background: #fff;
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
  font-size: var(--spacing-m);
  color: var(--grey-7);
  margin-bottom: var(--spacing-m);
  line-height: 1.6;
  transition: max-height 0.3s;
  background: rgba(255, 255, 255, 0.7);
  /* border-radius: 12px; */
  border-radius: var(--borderRadius);
  padding: var(--spacing-m) var(--spacing-l);
`;
