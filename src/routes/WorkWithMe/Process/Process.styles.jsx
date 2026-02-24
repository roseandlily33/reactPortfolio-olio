import styled from "styled-components";

// Timeline layout for process steps
export const TimelineWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 260px;
  padding: var(--spacing-xl) 0 var(--spacing-l) 0;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    min-height: 0;
    padding: var(--spacing-l) 0 var(--spacing-l) 0;
  }
`;

export const TimelineLine = styled.div`
  position: absolute;
  top: 23%;
  left: 7%;
  right: 7%;
  height: 6px;
  background: linear-gradient(90deg, #f17496 0%, #f7b267 50%, #b388eb 100%);
  border-radius: 3px;
  z-index: 1;
  transform: translateY(-50%);
  overflow: hidden;
  @media (max-width: 900px) {
    display: none;
  }
  /* No after, just the pink gradient base */
`;

export const TimelineLineWhite = styled.div`
  position: absolute;
  top: 23%;
  left: 7%;
  right: 7%;
  height: 6px;
  background: transparent;
  border-radius: 3px;
  z-index: 2;
  transform: translateY(-50%);
  overflow: hidden;
  pointer-events: none;
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${({ steps, activeStep }) =>
    activeStep < 0
      ? "0%"
      : steps === 1
        ? "100%"
        : `${(activeStep / (steps - 1)) * 100}%`};
    background: #fff;
    border-radius: 3px;
    transition: width 1s cubic-bezier(0.4, 1.4, 0.6, 1);
    z-index: 2;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const TimelineStep = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22%;
  min-width: 180px;
  max-width: 260px;
  margin-top: 0;
  /* border: 1px solid red; */
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    min-width: 0;
    max-width: none;
    margin: var(--spacing-xl) 0 var(--spacing-m) 0;
    /* align-items: flex-start; */
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
    gap: var(--spacing-m);
    & > div,
    & > h4,
    & > p {
      margin-bottom: var(--spacing-xs);
      margin-right: 0;
      text-align: left;
    }
  }
`;

export const TimelineGlow = styled.div`
  position: absolute;
  top: 12%;
  left: 50%;
  width: var(--spacing-xxl);
  height: var(--spacing-xxl);
  border-radius: 50%;
  filter: blur(8px);
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition:
    opacity 0.3s,
    box-shadow 0.3s;
  z-index: 2;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const TimelineNumber = styled.div`
  width: var(--spacing-xl);
  height: var(--spacing-xl);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--spacing-m);
  font-weight: 700;
  color: #fff;
  margin-bottom: 0 var(--spacing-s);
  border: 3px solid;
  background: #f17496;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  z-index: 3;
  position: relative;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const TimelineIcon = styled.div`
  font-size: 2rem;
  margin-bottom: var(--spacing-s);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  @media (max-width: 900px) {
    /* display: none; */
    border-top: 2px solid var(--berry);
    padding-top: var(--spacing-xxl);
  }
`;

export const TimelineTitle = styled.h4`
  color: var(--pink-5);
  font-family: var(--headerFont);
  font-size: 1.13rem;
  margin-bottom: var(--spacing-xs);
  text-align: center;
  font-weight: 700;
  z-index: 3;
  @media (max-width: 900px) {
    text-align: left;
  }
`;

export const TimelineDesc = styled.p`
  /* color: var(--orange-7); */
  font-size: var(--spacing-m);
  text-align: center;
  margin: 0;
  font-weight: 500;
  z-index: 3;
  @media (max-width: 900px) {
    /* text-align: left; */
    text-align: center !important;
  }
`;

export const ProcessSectionContainer = styled.section`
  background-color: #FFF;
  /* background-color: rgba(178, 58, 72, 0.1); */
  background: var(--pinkBackground);
  /* background: #f9eaea; */
  padding: var(--spacing-xxxxxl) var(--spacing-xxxl);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-m);
  h4 {
    margin-bottom: var(--spacing-xl);
    font-weight: 600;
    width: 100%;
    /* text-align: left; */
    text-align: center;
    /* font-size: 2.1rem; */
    letter-spacing: 0.03em;
    color: var(--pink-5);
    /* text-transform: capitalize; */
    color: var(--pink-5);
    font-family: var(--headerFont);
    /* font-size: 1.25rem; */
    font-weight: 600;
    margin: 0;
    text-align: center;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    padding: var(--spacing-xxxl) var(--spacing-xl);
    h3 {
      margin-bottom: var(--spacing-xxs);
    }
  }
`;

export const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-xl);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-l);
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-m);
  }
`;

export const ProcessCard = styled.div`
  background: rgba(255, 255, 255, 0.85);
  /* border-radius: 22px; */
  border-radius: var(--borderRadius);
  box-shadow: 0 4px 24px rgba(241, 116, 150, 0.1);
  padding: var(--spacing-xl) var(--spacing-l) var(--spacing-l) var(--spacing-l);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 220px;
  max-width: 320px;
  width: 100%;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s forwards;
  animation-timing-function: cubic-bezier(0.4, 1.4, 0.6, 1);
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ProcessNumber = styled.div`
  width: var(--spacing-xl);
  height: var(--spacing-xl);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: var(--spacing-m);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
`;

export const ProcessIcon = styled.div`
  font-size: 2.2rem;
  margin-bottom: var(--spacing-m);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProcessTitle = styled.h4`
  color: var(--pink-5);
  font-family: var(--headerFont);
  font-size: 1.18rem;
  margin-bottom: var(--spacing-s);
  text-align: center;
  font-weight: 700;
`;

export const ProcessDesc = styled.p`
  color: var(--orange-7);
  font-size: 1.01rem;
  text-align: center;
  margin: 0;
  font-weight: 500;
`;
