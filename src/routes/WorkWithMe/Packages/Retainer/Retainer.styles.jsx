import styled from "styled-components";

export const RetainerSection = styled.section`
  /* background: var(--orangeBackground); */
  background: #fff;
  padding: var(--spacing-xxxxxl) var(--spacing-xxxl);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-s);
  @media screen and (max-width: 600px) {
    padding: var(--spacing-l) var(--spacing-xs);
  }
`;

export const RetainerTitle = styled.h2`
  /* color: var(--pink-5); */
  color: var(--grey-8);
  font-family: var(--headerFont);
  margin-bottom: var(--spacing-xxxs);
  text-align: left;
  /* text-align: center; */
  width: 100%;
  font-weight: 600;
`;

export const RetainerGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-xxl);
  width: 100%;
  /* padding: var(--spacing-xl); */
  /* border: 2px solid red; */
  @media (max-width: 900px) {
    flex-direction: column;
    gap: var(--spacing-m);
  }
  @media (max-width: 600px) {
    gap: var(--spacing-s);
    padding: 0;
  }
`;

export const RetainerCard = styled.div`
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  /* border-radius: 16px; */
  border-radius: var(--borderRadius);
  border: none;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: var(--spacing-xl) var(--spacing-l);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 220px;
  max-width: 100%;
  width: 100%;
  transition:
    transform 0.18s,
    box-shadow 0.18s;
  position: relative;
  /* Subtle noise/texture overlay */
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
  @media (max-width: 900px) {
    min-width: 100%;
    max-width: 100%;
  }
  @media (max-width: 600px) {
    padding: var(--spacing-s) var(--spacing-xxs);
    min-width: 100%;
    max-width: 100%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  }
`;

export const RetainerCardTitle = styled.h5`
  color: var(--pink-5);
  font-family: var(--headerFont);
  /* font-size: 1.55rem; */
  margin-bottom: var(--spacing-xxs);
  font-weight: 800;
  display: block;
  text-transform: uppercase;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const RetainerCardBase = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-s);
  font-size: var(--spacing-m);
  color: var(--orange-6);
  font-weight: 500;
  margin-bottom: var(--spacing-s);
  .base-line {
    display: inline-block;
    height: 2px;
    width: 32px;
    background: var(--orange-7);
    border-radius: 2px;
    margin-left: var(--spacing-s);
  }
  @media (max-width: 600px) {
    font-size: 0.95rem;
    gap: var(--spacing-xs);
    .base-line {
      width: 24px;
    }
  }
`;

export const RetainerIncludes = styled.details`
  width: 100%;
  margin-top: var(--spacing-s);
  summary {
    list-style: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: var(--medBerry);
    font-weight: 600;
    background: transparent;
    padding: var(--spacing-xxxs) 0;
    outline: none;
    font-size: 1.09rem;
    position: relative;
    transition: color 0.2s;
    vertical-align: middle;
  }
  .chev {
    transition:
      transform 340ms cubic-bezier(0.77, 0, 0.18, 1),
      color 180ms;
    font-size: 1.25rem;
    color: var(--darkBerry);
    will-change: transform, color;
    line-height: 1;
    height: var(--spacing-m);
    margin-left: auto;
    @media (max-width: 600px) {
      font-size: 1.1rem;
      height: var(--spacing-l);
    }
  }
  summary:hover,
  summary:focus {
    color: var(--pink-4);
  }
  summary:hover .chev,
  summary:focus .chev {
    color: var(--pink-5);
    transform: scale(1.18) rotate(10deg);
  }
  &[open] .chev {
    transform: rotate(180deg) scale(1.08);
    color: var(--pink-5);
  }
  .chev:not(:hover):not(:focus) {
    /* Reset transform and color if not hovered/focused/open */
    /* This ensures the arrow returns to normal when not active */
    /* No extra styles needed, just ensures specificity */
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
    max-height: 480px;
    padding-top: var(--spacing-s);
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    summary {
      font-size: 1rem;
      padding: var(--spacing-xxxs) 0;
    }
    .includes-content {
      padding-top: var(--spacing-xs);
    }
  }
`;

export const RetainerPrice = styled.div`
  color: var(--orange-7);
  font-size: 1.05rem;
  font-weight: bold;
  margin-bottom: var(--spacing-s);
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: var(--spacing-xs);
  }
`;

export const RetainerDescription = styled.p`
  font-size: 0.98rem;
  margin-bottom: var(--spacing-s);
  @media (max-width: 600px) {
    font-size: 0.95rem;
    margin-bottom: var(--spacing-xs);
  }
`;

export const RetainerFeatures = styled.ul`
  font-size: 0.98rem;
  margin: 0;
  padding-left: var(--spacing-m);
  li {
    margin-bottom: var(--spacing-xxs);
    display: flex;
    align-items: center;
  }
  @media (max-width: 600px) {
    font-size: 0.95rem;
    padding-left: var(--spacing-xs);
    li {
      margin-bottom: var(--spacing-xxxs);
    }
  }
`;
