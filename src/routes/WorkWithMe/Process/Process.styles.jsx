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
  padding: 2.5rem 0 1.5rem 0;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    min-height: 0;
    padding: 1.5rem 0 1.5rem 0;
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
    left: 50%;
    right: auto;
    top: 7%;
    bottom: 7%;
    width: 6px;
    height: calc(100% - 14%);
    background: linear-gradient(180deg, #f17496 0%, #f7b267 50%, #b388eb 100%);
    transform: translateX(-50%);
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
    left: 50%;
    right: auto;
    top: 7%;
    bottom: 7%;
    width: 6px;
    height: calc(100% - 14%);
    background: transparent;
    transform: translateX(-50%);
    &::after {
      width: 100%;
      height: ${({ steps, activeStep }) =>
        activeStep < 0
          ? "0%"
          : steps === 1
            ? "100%"
            : `${(activeStep / (steps - 1)) * 100}%`};
      left: 0;
      top: 0;
      background: #fff;
      transition: height 1s cubic-bezier(0.4, 1.4, 0.6, 1);
    }
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
    flex-direction: row;
    width: 100%;
    min-width: 0;
    max-width: none;
    margin: 2.5rem 0;
    align-items: flex-start;
  }
`;

export const TimelineGlow = styled.div`
  position: absolute;
  top: 12%;
  left: 50%;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  filter: blur(8px);
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition:
    opacity 0.3s,
    box-shadow 0.3s;
  z-index: 2;
`;

export const TimelineNumber = styled.div`
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.7rem;
  border: 3px solid;
  background: #f17496;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  z-index: 3;
  position: relative;
  @media (max-width: 900px) {
    margin-bottom: 0;
    margin-right: 1.1rem;
  }
`;

export const TimelineIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  @media (max-width: 900px) {
    margin-bottom: 0;
    margin-right: 1.1rem;
  }
`;

export const TimelineTitle = styled.h4`
  color: var(--darkPink);
  font-family: var(--headerFont);
  font-size: 1.13rem;
  margin-bottom: 0.4rem;
  text-align: center;
  font-weight: 700;
  z-index: 3;
  @media (max-width: 900px) {
    text-align: left;
  }
`;

export const TimelineDesc = styled.p`
  color: var(--medBrown);
  font-size: 0.98rem;
  text-align: center;
  margin: 0;
  font-weight: 500;
  z-index: 3;
  @media (max-width: 900px) {
    text-align: left;
  }
`;

export const ProcessSectionContainer = styled.section`
  background-color: var(--pinkBackground);
  padding: 5rem 2rem;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin-bottom: 2.2rem;
    font-weight: 800;
    width: 100%;
    text-align: left;
    font-size: 2.1rem;
    letter-spacing: 0.04em;
    color: var(--darkPink);
    text-transform: capitalize;
  }
`;

export const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

export const ProcessCard = styled.div`
  background: rgba(255, 255, 255, 0.85);
  border-radius: 22px;
  box-shadow: 0 4px 24px rgba(241, 116, 150, 0.1);
  padding: 2.2rem 1.5rem 1.5rem 1.5rem;
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
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
`;

export const ProcessIcon = styled.div`
  font-size: 2.2rem;
  margin-bottom: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProcessTitle = styled.h4`
  color: var(--darkPink);
  font-family: var(--headerFont);
  font-size: 1.18rem;
  margin-bottom: 0.6rem;
  text-align: center;
  font-weight: 700;
`;

export const ProcessDesc = styled.p`
  color: var(--medBrown);
  font-size: 1.01rem;
  text-align: center;
  margin: 0;
  font-weight: 500;
`;
