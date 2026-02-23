import { keyframes } from "styled-components";
import styled from "styled-components";

const stackFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;
export const TechStackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xxxxl) var(--spacing-xs);
  width: 100%;
  /* background-color: var(--pinkBackground); */
  background: white;
  margin: 0 auto;
  /* border: 2px solid green; */
  /* height: 300px; */

  h4 {
    color: var(--grey-8);
    font-weight: 700;
    /* letter-spacing: 0.03em; */
    margin-bottom: var(--spacing-m);
    font-size: 4rem;
    text-align: left;
    width: 100%;
    /* margin-top: var(--spacing-l); */
  }
  @media screen and (max-width: 600px) {
  }
`;

export const TechLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
  /* border: 2px solid red; */
  width: 32%;
  p {
    border-right: 2px solid var(--berry);
    padding-right: var(--spacing-xxl);
  }
`;

export const TechRight = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: var(--spacing-xxl);
  gap: var(--spacing-l);
  /* border: 2px solid blue; */
  width: 30%;
  div {
    display: flex;
    /* gap: 1rem; */
    gap: var(--spacing-xs);
  }
  .techStack {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    animation: ${stackFadeIn} 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
  .techStack:nth-child(1) {
    animation-delay: 0.05s;
  }
  .techStack:nth-child(2) {
    animation-delay: 0.15s;
  }
  .techStack:nth-child(3) {
    animation-delay: 0.25s;
  }
  .techStack:nth-child(4) {
    animation-delay: 0.35s;
  }
  .letter {
    color: var(--pink-6);
    font-weight: 600;
    font-size: 1.3rem;
  }
  span {
    color: var(--pink-5);
    font-size: 1.6rem;
  }
`;
