import styled from "styled-components";

export const PaletteCarousel = styled.div`
  display: flex;
  gap: var(--spacing-xl);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: var(--spacing-m);
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
    margin-bottom: 1rem;
    box-shadow: 0 2px 8px rgba(241, 116, 150, 0.1);
    object-fit: cover;
    cursor: pointer;
    border: 2px solid var(--pink-3);
    transition: box-shadow 0.18s, border 0.18s;
    &:hover {
      box-shadow: 0 8px 32px rgba(241, 116, 150, 0.18);
      border: 2px solid var(--pink-5);
    }
  }

  @media (max-width: 900px) {
    gap: var(--spacing-m);
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    & > div {
      min-width: 80vw;
      max-width: 90vw;
      padding: var(--spacing-s);
      scroll-snap-align: start;
      /* Add a little margin for swipe affordance */
      margin-right: var(--spacing-xs);
    }
    img {
      max-width: 80vw;
    }
    /* Show a subtle scrollbar on mobile */
    &::-webkit-scrollbar {
      height: 6px;
      background: rgba(241,116,150,0.08);
      border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--pink-4);
      border-radius: 4px;
    }
  }
`;

export const PaletteCaption = styled.p`
  font-size: var(--spacing-m);
  color: var(--grey-7);
  text-align: center;
  margin-top: var(--spacing-xs);
  font-style: italic;
`;
