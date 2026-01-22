import styled from "styled-components";

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  position: relative;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23F38CA9' fill-opacity='0.1' d='M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,240C672,256,768,256,864,240C960,224,1056,192,1152,160C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
  background-position: bottom; /* Positions the background image at the bottom */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  background-size: cover; /* Ensures the image covers the container */
  overflow: hidden;
`;

export const TimelineItem = styled.div`
  position: relative;
  padding-left: 3rem;
  border-left: 3px solid var(--darkPink);

  h4 {
    color: var(--darkPink);
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1rem;
  }
/* 
  .bubble {
    position: absolute;
    left: -1.5rem;
    top: 0;
    width: 30px;
    height: 30px;
    background-color: var(--lightPink);
    border-radius: 50%;
    animation: float 6s infinite ease-in-out;
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  } */
`;