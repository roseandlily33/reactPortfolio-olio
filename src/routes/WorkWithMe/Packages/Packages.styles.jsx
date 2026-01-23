import styled from "styled-components";

export const PackagesSection = styled.section`
  background-color: var(--pinkBackground);
  /* padding: 4rem 2rem 1rem 2rem; */
  padding: 5rem 2rem;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    /* margin-bottom: 2rem; */
    margin-bottom: 0.8rem;
    font-weight: 700;
    /* border: 1px solid red; */
    width: 100%;
    text-align: left;
  }
`;

export const PackagesGrid = styled.div`
  display: flex;
  gap: 2.5rem;
  width: 100%;
  overflow-x: auto;
  padding: 2rem;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  position: relative;
  /* border: 2px solid blue; */

  & > div {
    flex: 0 0 340px;
    scroll-snap-align: start;
  }

  .scroll-arrow {
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
    z-index: 10;
    background: rgba(255,255,255,0.85);
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(241,116,150,0.13);
    width: 2.3em;
    height: 2.3em;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--darkPink);
    font-size: 2rem;
    opacity: 0.85;
    pointer-events: none;
    transition: opacity 0.4s;
    user-select: none;
  }
  .scroll-arrow.hide {
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s;
  }

  @media (max-width: 900px) {
    gap: 1.5rem;
    padding: 1.2rem 0.5rem;
    .scroll-arrow {
      right: 0.2rem;
      width: 2em;
      height: 2em;
      font-size: 1.5rem;
    }
    & > div {
      flex: 0 0 80vw;
      max-width: 90vw;
    }
  }
  @media (max-width: 600px) {
    gap: 1.2rem;
    padding: 0.7rem 0.1rem;
    .scroll-arrow {
      right: 0.1rem;
      width: 1.7em;
      height: 1.7em;
      font-size: 1.1rem;
    }
    & > div {
      flex: 0 0 90vw;
      max-width: 95vw;
    }
  }
`;

export const PackageCard = styled.div`
  background: ${({ $bg }) => $bg || "rgba(255,255,255,0.35)"};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 16px;
  border: none;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 2.2rem 1.8rem 1.6rem 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 270px;
  max-width: 400px;
  width: 100%;
  transition: transform 0.18s;
  position: relative;
  padding-top: 2.05rem;
  /* 6. Subtle noise/texture overlay */
  &::after {
    content: "";
    pointer-events: none;
    position: absolute;
    inset: 0;
    border-radius: 16px;
    opacity: 0.18;
    z-index: 1;
    background-image: url("https://www.transparenttextures.com/patterns/symphony.png");
  }

  /* 5. Glass reflection overlay */
  .glass-reflection {
    position: absolute;
    left: 10%;
    top: 0;
    width: 80%;
    height: 22%;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.22) 0%,
      rgba(255, 255, 255, 0.04) 100%
    );
    border-radius: 0 0 80px 80px / 0 0 40px 40px;
    z-index: 3;
    pointer-events: none;
    opacity: 0.7;
    filter: blur(0.5px);
  }

  /* accent bar at the top (gradient from accent color to softer pink) */
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 8px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    background: ${({ $accent, $accentSoft }) =>
    `linear-gradient(90deg, ${$accent || "var(--darkPink)"}, ${$accentSoft || "rgba(241,116,150,0.12)"})`};
    z-index: 2;
    transition: background 0.5s cubic-bezier(0.77, 0, 0.18, 1);
  }
  &:hover::before {
    background: ${({ $accent }) =>
    `linear-gradient(90deg, ${$accent || "var(--darkPink)"} 0%, #fff0 100%)`};
  }
`;

export const PackageTitle = styled.h3`
  font-family: var(--headerFont);
  font-size: 1.85rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  /* text-transform: uppercase; */
  text-transform: capitalize;
  letter-spacing: 0.06em;
  color: ${({ $titleColor }) => $titleColor || "inherit"};
`;

export const PackagePrice = styled.div`
  color: var(--darkBrown);
  font-size: 1.3rem;
  font-weight: 750;
  margin-bottom: 0.7rem;
`;

export const PackageDescription = styled.p`
  /* color: var(--darkGrey); */
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

export const PackageFeatures = styled.ul`
  color: var(--darkBrown);
  font-size: 1rem;
  margin: 0;
  padding-left: 1.2rem;
  li {
    margin-bottom: 0.4rem;
    display: flex;
    align-items: center;
  }
  svg {
    font-size: 1em !important;
    min-width: 1em;
    min-height: 1em;
    vertical-align: middle;
    flex-shrink: 0;
  }
`;

export const PackageIcon = styled.div`
  font-size: 1.9rem;
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $titleColor }) => $titleColor || "inherit"};
  position: relative;
  z-index: 3;
  /* Remove icon's own circle, now handled by .circle-accent */
`;

/* Collapsible "Includes" area using native details/summary */
export const PackageDetails = styled.details`
  width: 100%;
  margin-top: 0.8rem;
  summary {
    list-style: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    color: ${({ $accent }) => $accent || "var(--darkPink)"};
    font-weight: 600;
    background: transparent;
    padding: 0.25rem 0;
    outline: none;
  }
  .chev {
    display: inline-block;
    transition:
      transform 340ms cubic-bezier(0.77, 0, 0.18, 1),
      color 180ms;
    font-size: 1.15rem;
    color: ${({ $accent }) => $accent || "var(--darkBerry)"};
    will-change: transform, color;
  }
  summary:hover .chev {
    color: ${({ $accent }) => $accent || "var(--darkPink)"};
    transform: scale(1.25) rotate(10deg);
  }
  &[open] .chev {
    transform: rotate(180deg) scale(1.15);
    color: ${({ $accent }) => $accent || "var(--darkPink)"};
  }
  .includes-content {
    max-height: 0;
    overflow: hidden;
    transition:
      max-height 360ms cubic-bezier(0.77, 0, 0.18, 1),
      padding 260ms cubic-bezier(0.77, 0, 0.18, 1);
    padding-top: 0;
  }
  &[open] .includes-content {
    max-height: 1200px; /* large enough to show the list */
    padding-top: 0.75rem;
  }
`;

export const ComesWithSection = styled.section`
  margin-top: 4rem;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 24px;
  box-shadow: 0 2px 16px rgba(241, 116, 150, 0.1);
  padding: 2.5rem 2rem;
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ComesWithTitle = styled.h4`
  color: var(--darkPink);
  font-family: var(--headerFont);
  font-size: 1.3rem;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
`;

export const ComesWithListStyled = styled.ul`
  margin: 0 0 1.5rem 0;
  padding-left: 0;
  list-style: none;
  width: 100%;
`;

export const ComesWithItem = styled.li`
  color: var(--darkBrown);
  font-size: 1.05rem;
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
`;
