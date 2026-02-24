import styled from "styled-components";

export const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: var(--spacing-xxl) 0;
  /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23F38CA9' fill-opacity='0.1' d='M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,240C672,256,768,256,864,240C960,224,1056,192,1152,160C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E"); */
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: var(--pink-5);
    opacity: 0.18;
    z-index: 0;
  }
  @media (max-width: 900px) {
    padding: var(--spacing-l) 0;
    &::before {
      display: none;
    }
  }
`;

export const TimelineItem = styled.div`
  @keyframes fadeInSlideLeft {
    0% {
      opacity: 0;
      transform: translateY(40px) translateX(-40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0) translateX(0);
    }
  }

  @keyframes fadeInSlideRight {
    0% {
      opacity: 0;
      transform: translateY(40px) translateX(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0) translateX(0);
    }
  }
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align === "left" ? "flex-end" : "flex-start")};
  margin: 0;
  padding: 2.5rem 2.5rem 2.5rem 2.5rem;
  z-index: 1;
  margin-left: ${({ align }) => (align === "left" ? "0" : "50%")};
  margin-right: ${({ align }) => (align === "left" ? "50%" : "0")};

  &.fade-in-left {
    animation: fadeInSlideLeft 0.7s cubic-bezier(0.4, 2, 0.6, 1) forwards;
  }
  &.fade-in-right {
    animation: fadeInSlideRight 0.7s cubic-bezier(0.4, 2, 0.6, 1) forwards;
  }
  &.hidden {
    opacity: 0;
  }

  .bubble {
    position: absolute;
    top: 2.5rem;
    ${({ align }) => (align === "left" ? "right: -18px;" : "left: -18px;")}
    width: 18px;
    height: 18px;
    background: var(--pink-5);
    border-radius: 50%;
    border: 3px solid #fff;
    box-shadow: 0 2px 8px rgba(241, 116, 150, 0.13);
    z-index: 2;
  }
  h4 {
    color: var(--pink-5);
    margin-bottom: var(--spacing-xs);
    font-size: 1.22rem;
    font-weight: 700;
    text-align: ${({ align }) => (align === "left" ? "right" : "left")};
  }
  p {
    color: var(--grey-7);
    font-size: 1.08rem;
    text-align: ${({ align }) => (align === "left" ? "right" : "left")};
    margin: 0;
    max-width: 340px;
  }

  @media (max-width: 900px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    align-items: flex-start;
    .bubble {
      left: -18px;
      right: auto;
    }
    h4,
    p {
      text-align: left;
    }
  }
  @media (max-width: 768px) {
    padding: var(--spacing-s) var(--spacing-l);
  }
`;
