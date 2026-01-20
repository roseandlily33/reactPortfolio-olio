import styled from "styled-components";

// Very outer container
export const AboutMeComponent = styled.main`
  margin-inline: 1rem;
  margin-top: 1rem;
  height: 100%;
`;
// Top container with the picture
export const AboutMePicture = styled.section`
  border-radius: 25px;
  box-shadow: inset 1px 4px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  svg {
    border-radius: 25px;
  }
  h2 {
    position: relative;
    z-index: 1;
    top: 0;
    left: 0;
  }
  .animate-charcter {
    text-transform: uppercase;
    background-image: linear-gradient(
      -225deg,
      ${({ theme }) => theme.colors.lightPink} 0%,
      ${({ theme }) => theme.colors.darkPink} 29%,
      ${({ theme }) => theme.colors.medBrown} 67%,
      ${({ theme }) => theme.colors.yellow} 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 100% auto;
    color: #fff;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;
    font-size: 8rem;
    margin-bottom: 2rem;
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`;
//This is the part that has my pic and info about me
export const AboutMeSection = styled.section`
  /* border-radius: 25px; */
  /* background-color: ${({ theme }) => theme.colors.lightGrey}; */
  padding: 1rem;
  display: flex;
  gap: 2rem;
  /* box-shadow: inset 1px 4px 5px rgba(0, 0, 0, 0.1); */

  h2 {
    color: ${({ theme }) => theme.colors.darkPink};
    border-bottom: 5px solid ${({ theme }) => theme.colors.darkPink};
    margin-bottom: 1rem;
  }
  a {
    color: ${({ theme }) => theme.colors.darkPink};
    font-weight: bold;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }
  .left {
    width: 50%;
    display: flex;
    justify-content: center;
  }
  img {
    height: 100%;
    width: 80%;
    border-radius: 25px;
    border: 10px solid ${({ theme }) => theme.colors.lightGrey};
  }
  .right {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    /* border: 1px solid green; */
  }
  #downloadBtn {
    width: 100%;
  }
  #downloadBtn a {
    color: ${({ theme }) => theme.colors.lightGrey};
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    .right {
      width: 100%;
    }
    .left {
      display: none;
    }
    #downloadBtn {
      margin-top: 2rem;
    }
  }
`;

//List of skills
export const AboutMeSkills = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;
`;

// Contact me section
export const ContactMeSection = styled.section`
  position: relative; /* Allows bubbles to float within the section */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  overflow: hidden; /* Ensures bubbles stay within the section */

  h3 {
    color: ${({ theme }) => theme.colors.darkPink};
    font-size: 2rem;
    margin-bottom: 1rem;
    transition: color 0.3s ease; /* Adds a smooth transition to the text color */
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 600px;
  }

  input,
  textarea {
    border: 2px solid ${({ theme }) => theme.colors.medBrown};
    border-radius: 10px;
    padding: 1rem;
    font-size: 1rem;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    transition: box-shadow 0.3s ease; /* Adds a smooth shadow transition */
    &:focus {
      box-shadow: 0 0 10px ${({ theme }) => theme.colors.darkPink};
    }
  }

  button {
    background-color: ${({ theme }) => theme.colors.darkPink};
    color: ${({ theme }) => theme.colors.lightCream};
    border: none;
    border-radius: 10px;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition:
      transform 0.3s ease,
      background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.yellow};
      transform: scale(1.05); /* Adds a hover scaling effect */
    }
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.lightPink};
    border-radius: 50%;
    opacity: 0.5;
    animation: float 6s infinite ease-in-out;
  }

  &::before {
    top: -30px;
    left: 20%;
    animation-delay: 0s;
  }

  &::after {
    bottom: -50px;
    right: 20%;
    animation-delay: 3s;
  }

  @keyframes float {
    0% {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(-40px) scale(1.5);
    }
    100% {
      transform: translateY(0) scale(1);
    }
  }
`;
