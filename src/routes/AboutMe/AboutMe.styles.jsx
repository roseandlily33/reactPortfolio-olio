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
    left: 1rem;
  }
  p {
    position: relative;
    z-index: 1;
    left: 1rem;
    color: ${({ theme }) => theme.colors.lightPink};
    font-size: 1.3rem;
    font-weight: 500;
    width: 100%;
    font-style: italic;
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
  display: flex;
  justify-content: space-evenly;
  background: #fff;
  padding: 3rem;
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
  .eachCard {
    background: var(--orangeBackground);
    border-radius: var(--borderRadius);
    border: 2.5px solid var(--lightBrown);
    box-shadow: 0 4px 18px 0 rgba(60, 40, 20, 0.07);
    padding: 1.6rem 1.7rem 1.3rem 1.7rem;
    flex: 1 1 320px;
    min-width: 280px;
    max-width: 420px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    position: relative;
    /* justify-content: space-between; */
  }
  .cardIcon {
    position: absolute;
    top: 1.1rem;
    right: 1.3rem;
    font-size: 2.1rem;
    color: var(--medPink);
    opacity: 0.85;
    pointer-events: none;
  }
  .cardTitle {
    color: var(--darkBrown);
    font-size: 2.2rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    margin-bottom: 0.7rem;
    text-transform: capitalize;
  }

  h3 {
    color: var(--darkBrown);
    font-size: 2.2rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    margin-bottom: 0.7rem;
    text-transform: capitalize;
  }
  p, span, li {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    padding-right: 0.5rem;
  }
  .bold {
    font-weight: 700;
    color: var(--medBrown);
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
  /* margin-bottom: 3rem; */
`;

// Contact me section
export const ContactMeSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding: 2.8rem 2rem 2.8rem 2rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(14px) saturate(120%);
  overflow: hidden;

  h3 {
    color: ${({ theme }) => theme.colors.darkPink};
    font-size: 2.2rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-align: center;
    padding-bottom: 0.5rem;
    transition: color 0.3s ease;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 600px;
    align-items: center;
  }

  label {
    color: ${({ theme }) => theme.colors.darkPink};
    font-weight: 700;
    font-size: 1.18rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-bottom: 0.3rem;
    align-self: flex-start;
  }

  input,
  select {
    border: 2.5px solid ${({ theme }) => theme.colors.medBrown};
    border-radius: 999px;
    padding: 0.7rem 1rem;
    font-size: 1rem;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    font-weight: 600;
    color: ${({ theme }) => theme.colors.darkGrey};
    box-shadow: 0 2px 12px rgba(241, 116, 150, 0.07);
    transition:
      box-shadow 0.3s,
      border-color 0.3s;
    font-family: var(--headerFont), inherit;
    &:focus {
      box-shadow: 0 0 16px ${({ theme }) => theme.colors.darkPink};
      border-color: ${({ theme }) => theme.colors.darkPink};
    }
  }

  textarea {
    border: 2.5px solid ${({ theme }) => theme.colors.medBrown};
    border-radius: 22px;
    padding: 0.7rem 1rem;
    font-size: 1rem;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    font-weight: 600;
    color: ${({ theme }) => theme.colors.darkGrey};
    box-shadow: 0 2px 12px rgba(241, 116, 150, 0.07);
    transition:
      box-shadow 0.3s,
      border-color 0.3s;
    font-family: var(--headerFont), inherit;
    resize: vertical;
    min-height: 90px;
    max-height: 220px;
    &:focus {
      box-shadow: 0 0 16px ${({ theme }) => theme.colors.darkPink};
      border-color: ${({ theme }) => theme.colors.darkPink};
    }
  }

  button {
    background-color: ${({ theme }) => theme.colors.darkPink};
    color: ${({ theme }) => theme.colors.lightCream};
    border: none;
    border-radius: 999px;
    padding: 1rem 2.2rem;
    font-size: 1.18rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    cursor: pointer;
    box-shadow: 0 2px 12px rgba(241, 116, 150, 0.1);
    transition:
      transform 0.3s,
      background-color 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.yellow};
      color: ${({ theme }) => theme.colors.darkBrown};
      transform: scale(1.06);
    }
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 120px;
    height: 120px;
    background-color: ${({ theme }) => theme.colors.lightPink};
    border-radius: 50%;
    opacity: 0.4;
    animation: float 7s infinite ease-in-out;
  }

  &::before {
    top: -40px;
    left: 18%;
    animation-delay: 0s;
  }

  &::after {
    bottom: -60px;
    right: 18%;
    animation-delay: 3.5s;
  }

  @keyframes float {
    0% {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(-50px) scale(1.5);
    }
    100% {
      transform: translateY(0) scale(1);
    }
  }

  @media screen and (max-width: 768px) {
    padding: 1.5rem 0.5rem;
    border-radius: 18px;
    h3 {
      font-size: 1.35rem;
      padding-bottom: 0.3rem;
    }
    form {
      gap: 1rem;
      max-width: 100%;
    }
    label {
      font-size: 1rem;
    }
    input,
    select {
      font-size: 1rem;
      padding: 0.6rem 0.8rem;
      border-radius: 14px;
    }
    textarea {
      font-size: 1rem;
      padding: 0.6rem 0.8rem;
      border-radius: 14px;
    }
    button {
      font-size: 1rem;
      padding: 0.7rem 1.5rem;
      border-radius: 18px;
    }
  }
`;
