import styled from "styled-components";

export const RetainerSection = styled.section`
  background: var(--orangeBackground);
  padding: var(--spacing-xxxl) var(--spacing-xl);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RetainerTitle = styled.h2`
  color: var(--pink-5);
  font-family: var(--headerFont);
  margin-bottom: var(--spacing-s);
  letter-spacing: 0.08em;
  text-align: left;
  width: 100%;
  font-weight: 800;
`;

export const RetainerGrid = styled.div`
  display: flex;
  gap: var(--spacing-xxl);
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: var(--spacing-xl);
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
  min-width: 250px;
  max-width: 350px;
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
  }
`;

export const RetainerCardTitle = styled.h2`
  color: var(--pink-5);
  font-family: var(--headerFont);
  font-size: 1.55rem;
  margin-bottom: var(--spacing-xs);
  font-weight: 800;
  display: block;
  text-transform: uppercase;
`;

export const RetainerCardBase = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-s);
  font-size: var(--spacing-m);
  color: var(--orange-5);
  font-weight: 500;
  margin-bottom: var(--spacing-s);
  .base-line {
    display: inline-block;
    height: 2px;
    width: 32px;
    background: #ff8c40;
    border-radius: 2px;
    margin-left: var(--spacing-s);
  }
`;

export const RetainerIncludes = styled.details`
  width: 100%;
  margin-top: var(--spacing-s);
  summary {
    list-style: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-xs);
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
    display: inline-flex;
    align-items: center;
    margin-left: var(--spacing-xxxs);
    transition:
      transform 340ms cubic-bezier(0.77, 0, 0.18, 1),
      color 180ms;
    font-size: 1.25rem;
    color: var(--darkBerry);
    will-change: transform, color;
    line-height: 1;
    height: var(--spacing-m);
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
`;

export const RetainerPrice = styled.div`
  color: var(--orange-7);
  font-size: 1.15rem;
  font-weight: bold;
  margin-bottom: var(--spacing-s);
`;

export const RetainerDescription = styled.p`
  font-size: var(--spacing-m);
  margin-bottom: var(--spacing-m);
`;

export const RetainerFeatures = styled.ul`
  font-size: var(--spacing-m);
  margin: 0;
  padding-left: var(--spacing-m);
  li {
    margin-bottom: var(--spacing-xs);
    display: flex;
    align-items: center;
  }
`;
