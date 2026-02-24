import styled, { keyframes } from "styled-components";

export const DevProcessContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-xxxl) var(--spacing-xs);
  width: 100%;
  margin: 0 auto;
  /* border: 2px solid green; */
  h4 {
    color: var(--grey-8);
    font-weight: 700;
    /* letter-spacing: 0.03em; */
    margin-bottom: var(--spacing-xxxl);
    font-size: 2.6rem;
    /* text-align: left; */
    width: 100%;
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    padding: var(--spacing-xxl) var(--spacing-l);
    h4 {
      text-align: left;
      font-size: 2.2rem;
    }
  }
`;

export const DevProcessCircleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-xxxl);
  justify-content: center;
  align-items: center;
  width: 100%;
  /* border: 2px solid red; */
  @media (max-width: 900px) {
    flex-direction: column;
    gap: var(--spacing-l);
  }
`;

// Animation keyframes
const fadeSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const DevProcessCircle = styled.div`
  background: none;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  /* justify-content: flex-start; */
  width: 380px;
  min-height: 180px;
  /* padding: var(--spacing-m) var(--spacing-xl); */
  opacity: 0;
  transform: translateY(40px);
  
  /* border: 2px solid red; */
  transition:
    opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  &.visible {
    opacity: 1;
    transform: translateY(0);
    animation: ${fadeSlideIn} 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 340px;
    min-height: unset;
    padding: var(--spacing-m) var(--spacing-m);
  }
`;

export const DevProcessNumber = styled.div`
  font-weight: 900;
  line-height: 1;
  /* margin-right: -0.5em; */
  margin-top: -0.3em;
  /* margin-left: -0.3em; */
  flex-shrink: 0;
  z-index: 1;
  /* min-width: 120px; */
  text-align: right;
  filter: drop-shadow(0 2px 8px rgba(255, 0, 128, 0.08));
  background: ${({ $gradient }) => $gradient || "none"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  position: relative;
  @media (max-width: 900px) {
    margin-right: 0;
    margin-bottom: -1.5rem;
    min-width: unset;
    text-align: left;
    align-self: flex-start;
  }
  /* border: 2px solid rebeccapurple; */
`;
