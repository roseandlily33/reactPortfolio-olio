import styled from "styled-components";

export const RetainerSection = styled.section`
  background: var(--orangeBackground);
  padding: 5rem 2rem;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-top: 5px dotted var(--lightBrown); */
`;

export const RetainerTitle = styled.h2`
  color: var(--darkPink);
  font-family: var(--headerFont);
  /* font-size: 2rem; */
  margin-bottom: 0.8rem;
  letter-spacing: 0.08em;
  text-align: left;
  width: 100%;
  font-weight: 800;
`;

export const RetainerGrid = styled.div`
  display: flex;
  gap: 2.5rem;
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const RetainerCard = styled.div`
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 16px;
  border: none;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 2.2rem 1.8rem 1.6rem 1.8rem;
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
    border-radius: 16px;
    opacity: 0.18;
    z-index: 1;
    background-image: url("https://www.transparenttextures.com/patterns/symphony.png");
  }
  @media (max-width: 900px) {
    min-width: 100%;
  }
`;

export const RetainerCardTitle = styled.h2`
  color: var(--darkPink);
  font-family: var(--headerFont);
  font-size: 1.55rem;
  margin-bottom: 0.5rem;
  font-weight: 800;
  display: block;
  text-transform: uppercase;
`;

export const RetainerCardBase = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1.05rem;
  color: var(--medBrown);
  font-weight: 500;
  margin-bottom: 0.6rem;
  .base-line {
    display: inline-block;
    height: 2px;
    width: 32px;
    background: #ff8c40;
    border-radius: 2px;
    margin-left: 0.7em;
  }
`;

export const RetainerIncludes = styled.details`
  width: 100%;
  margin-top: 0.8rem;
  summary {
    list-style: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
    color: var(--medBerry);
    font-weight: 600;
    background: transparent;
    padding: 0.18rem 0;
    outline: none;
    font-size: 1.09rem;
    position: relative;
    transition: color 0.2s;
    vertical-align: middle;
  }
  .chev {
    display: inline-flex;
    align-items: center;
    margin-left: 0.1em;
    transition:
      transform 340ms cubic-bezier(0.77, 0, 0.18, 1),
      color 180ms;
    font-size: 1.25rem;
    color: var(--darkBerry);
    will-change: transform, color;
    line-height: 1;
    height: 1.25em;
  }
  summary:hover,
  summary:focus {
    color: var(--darkPink);
  }
  summary:hover .chev,
  summary:focus .chev {
    color: var(--darkPink);
    transform: scale(1.18) rotate(10deg);
  }
  &[open] .chev {
    transform: rotate(180deg) scale(1.08);
    color: var(--darkPink);
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
    padding-top: 0.75rem;
  }
`;

export const RetainerPrice = styled.div`
  color: var(--darkBrown);
  font-size: 1.15rem;
  font-weight: bold;
  margin-bottom: 0.7rem;
`;

export const RetainerDescription = styled.p`
  /* color: var(--medBrown); */
  font-size: 1.05rem;
  margin-bottom: 1rem;
`;

export const RetainerFeatures = styled.ul`
  /* color: var(--darkBrown); */
  font-size: 1rem;
  margin: 0;
  padding-left: 1.2rem;
  li {
    margin-bottom: 0.4rem;
    display: flex;
    align-items: center;
  }
`;
