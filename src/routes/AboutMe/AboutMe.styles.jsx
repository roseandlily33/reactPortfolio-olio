import styled from "styled-components";

// Very outer container
export const AboutMeComponent = styled.main`
  margin-inline: 1rem;
  margin-top: 1rem;
  height: 100%;
`;
// Top container with the picture
export const AboutMePicture = styled.section`
  /* border-radius: 25px; */
  border-radius: var(--borderRadius);
  /* box-shadow: inset 1px 4px 5px rgba(0, 0, 0, 0.1); */
  margin-bottom: 2rem;
  svg {
    /* border-radius: 25px; */
    border-radius: var(--borderRadius);
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
  @media screen and (max-width: 768px) {
    h2 {
      left:0;
    }
    p {
      font-size: 1rem;
    }
  }
`;
//This is the part that has my pic and info about me
export const AboutMeSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  background-color: #fff;
  /* border: 2px solid red; */
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
    /* border-radius: 25px; */
    border-radius: var(--borderRadius);
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
  h3 {
    color: var(--darkBrown);
    font-size: 2.2rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    margin-bottom: 0.7rem;
    text-transform: capitalize;
  }
  p,
  span,
  li {
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
