import styled from "styled-components";

export const PackagesSection = styled.section`
  /* background-color: var(--pinkBackground); */
  background: #fff;
  padding: var(--spacing-l) var(--spacing-xxxl) var(--spacing-xxxl)
    var(--spacing-xxxl);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-s);
  h2 {
    margin-bottom: var(--spacing-xs);
    font-weight: 600;
    /* border: 1px solid red; */
    width: 100%;
    text-align: left;
    /* letter-spacing: 0.05em; */
  }
  .priceP {
    /* border: 2px solid red; */
    font-weight: 500;
    margin-bottom: 1.5rem;
    text-align: center;
    border-top: 2px solid var(--grey-3);
    width: 40%;
    padding-top: var(--spacing-xl);
    padding-bottom: var(--spacing-xl);
  }
  @media screen and (max-width: 900px) {
    .priceP {
      width: 80%;
    }
  }
  @media screen and (max-width: 600px) {
    padding: var(--spacing-s) var(--spacing-l);
  }
`;

export const PackagesGrid = styled.div`
  display: flex;
  gap: var(--spacing-xxl);
  width: 100%;
  overflow-x: auto;
  padding: var(--spacing-xl);
  padding-left: var(--spacing-xxxxl);
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  position: relative;

  /* justify-content: center; */
  /* border: 2px solid blue; */

  & > div {
    flex: 0 0 380px;
    max-width: 100vw;
    scroll-snap-align: start;
    /* border: 2px solid red; */
  }

  .scroll-arrow {
    position: absolute;
    top: 50%;
    right: var(--spacing-xs);
    transform: translateY(-50%);
    z-index: 10;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(241, 116, 150, 0.13);
    width: 2.3em;
    height: 2.3em;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--pink-5);
    font-size: 2rem;
    opacity: 0.85;
    pointer-events: auto;
    transition: opacity 0.4s;
    user-select: none;
  }
  .scroll-arrow.hide {
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s;
  }

  @media (max-width: 768px) {
    gap: var(--spacing-xl);
    padding: var(--spacing-m) var(--spacing-xs);
    .scroll-arrow {
      right: var(--spacing-xxxs);
      width: var(--spacing-xl);
      height: var(--spacing-xl);
      font-size: var(--spacing-xl);
    }
    & > div {
      flex: 0 0 70vw;
      max-width: 70vw;
    }
  }
  @media (max-width: 600px) {
    gap: var(--spacing-m);
    padding: var(--spacing-m) var(--spacing-m);
    .scroll-arrow {
      right: var(--spacing-xxxs);
      width: var(--spacing-l);
      height: var(--spacing-l);
      font-size: var(--spacing-m);
    }
    & > div {
      flex: 0 0 70vw;
      max-width: 70vw;
    }
  }
`;

export const PackageCard = styled.div`
  background: ${({ $bg }) => $bg || "rgba(255,255,255,0.35)"};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  /* border-radius: 16px; */
  border-radius: var(--borderRadius);
  border: none;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 220px;
  max-width: 400px;
  width: 100%;
  transition: transform 0.18s;
  position: relative;
  padding-top: var(--spacing-xl);
  /* 6. Subtle noise/texture overlay */
  &::after {
    content: "";
    pointer-events: none;
    position: absolute;
    inset: 0;
    /* border-radius: 16px; */
    border-radius: var(--borderRadius);
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
    border-radius: 0 0 var(--borderRadius) var(--borderRadius) / 0 0
      calc(var(--borderRadius) / 2) calc(var(--borderRadius) / 2);
    z-index: 3;
    pointer-events: none;
    opacity: 0.7;
    filter: blur(0.5px);
  }

  &:hover::before {
    background: ${({ $accent }) =>
      `linear-gradient(90deg, ${$accent || "var(--pink-5)"} 0%, #fff0 100%)`};
  }

  @media (max-width: 768px) {
    min-width: 180px;
    max-width: 80vw;
    width: 80vw;
    padding: var(--spacing-m) var(--spacing-s);
    padding-top: var(--spacing-m);
  }
  @media (max-width: 600px) {
    min-width: 140px;
    max-width: 90vw;
    width: 90vw;
    padding: var(--spacing-m) var(--spacing-m);
    padding-top: var(--spacing-s);
    /* border: 2px solid red; */
    /* border: none; */
  }
`;

export const PackageTitle = styled.h3`
  font-family: var(--headerFont);
  font-size: 1.85rem;
  font-weight: 700;
  margin-bottom: var(--spacing-s);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  /* text-transform: uppercase; */
  text-transform: capitalize;
  letter-spacing: 0.03em;
  color: ${({ $titleColor }) => $titleColor || "inherit"};
`;

export const PackagePrice = styled.div`
  /* color: var(--); */
  color: var(--pink-7);
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: var(--spacing-xs);
`;

export const PackageDescription = styled.p`
  /* color: var(--darkGrey); */
  font-size: 1.1rem;
  margin-bottom: var(--spacing-m);
`;

export const PackageFeatures = styled.ul`
  color: var(--orange-6);
  font-size: var(--spacing-m);
  margin: 0;
  padding-left: var(--spacing-m);
  li {
    margin-bottom: var(--spacing-xs);
    display: flex;
    align-items: center;
  }
  svg {
    font-size: var(--spacing-m) !important;
    min-width: var(--spacing-m);
    min-height: var(--spacing-m);
    vertical-align: middle;
    flex-shrink: 0;
  }
`;

export const PackageIcon = styled.div`
  font-size: 1.9rem;
  margin-bottom: var(--spacing-m);
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
  margin-top: var(--spacing-s);
  summary {
    list-style: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--spacing-m);
    color: var(--pink-7);
    font-weight: 600;
    background: transparent;
    padding: var(--spacing-xxs) 0;
    outline: none;
  }
  .chev {
    display: inline-block;
    transition:
      transform 340ms cubic-bezier(0.77, 0, 0.18, 1),
      color 180ms;
    font-size: var(--spacing-m);
    color: ${({ $accent }) => $accent || "var(--pink-7)"};
    will-change: transform, color;
  }
  summary:hover .chev {
    color: ${({ $accent }) => $accent || "var(--pink-5)"};
    transform: scale(1.25) rotate(10deg);
  }
  &[open] .chev {
    transform: rotate(180deg) scale(1.15);
    color: ${({ $accent }) => $accent || "var(--pink-5)"};
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
    padding-top: var(--spacing-s);
  }
`;

export const ComesWithSection = styled.section`
  margin-top: var(--spacing-xxxl);
  background: rgba(255, 255, 255, 0.85);
  /* border-radius: 24px; */
  border-radius: var(--borderRadius);
  box-shadow: 0 2px 16px rgba(241, 116, 150, 0.1);
  padding: var(--spacing-xl);
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ComesWithTitle = styled.h4`
  color: var(--pink-5);
  font-family: var(--headerFont);
  font-size: 1.3rem;
  margin-bottom: var(--spacing-m);
  display: flex;
  align-items: center;
`;

export const ComesWithListStyled = styled.ul`
  margin: 0 0 var(--spacing-l) 0;
  padding-left: 0;
  list-style: none;
  width: 100%;
`;

export const ComesWithItem = styled.li`
  color: var(--orange-6);
  font-size: 1.05rem;
  margin-bottom: var(--spacing-s);
  display: flex;
  align-items: center;
`;
export const TimelineBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  background: ${({ $bg }) => $bg || "var(--pink-2)"};
  color: ${({ $color }) => $color || "var(--pink-5)"};
  font-size: var(--spacing-m);
  font-weight: 600;
  border-radius: 999px;
  padding: var(--spacing-xs) var(--spacing-s);
  margin-bottom: var(--spacing-s);
  box-shadow: 0 1px 6px rgba(241, 116, 150, 0.1);
  letter-spacing: 0.01em;
  position: relative;
  z-index: 2;
  svg {
    font-size: var(--spacing-m);
    margin-right: var(--spacing-xs);
    vertical-align: middle;
  }
`;
