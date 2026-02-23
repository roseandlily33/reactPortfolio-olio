import styled from "styled-components";

// Very outer container
export const AboutMeComponent = styled.main`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
`;
// Top container with the picture
export const AboutMePicture = styled.section`
  h1,
  h2 {
    position: relative;
    z-index: 1;
    top: 0;
    left: var(--spacing-m);
    margin-left: var(--spacing-l);
  }
  @keyframes rotateGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  .animate-charcter {
    position: relative;
    display: inline-block;
    color: transparent;
    font-size: 8rem;
    text-transform: uppercase;
    font-weight: bold;
    z-index: 1;
  }

  .animate-charcter::before {
    content: "Welcome";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      120deg,
      hsl(330, 100%, 99%),
      /* --pink-1 */ hsl(348, 89%, 77%),
      /* --pink-3 */ hsl(343, 67%, 63%),
      /* --pink-5 */ hsl(33, 100%, 74%),
      /* --orange-3 */ hsl(29, 100%, 56%),
      /* --orange-5 */ hsl(45, 100%, 50%),
      /* --yellow */ hsl(330, 100%, 99%) /* --pink-1 again for loop */
    );
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    animation: rotateGradient 4s linear infinite;
    z-index: 2;
    pointer-events: none;
    font-size: inherit;
    font-weight: inherit;
    text-transform: inherit;
    display: block;
  }

  @keyframes rotateGradient {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
  @media screen and (max-width: 768px) {
    h2 {
      left: 0;
    }
  }
`;

//This is the part that has my pic and info about me
export const AboutMeSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  background-color: #fff;
  /* border: 2px solid red; */
  /* padding: var(--spacing-xxl); */
  a {
    color: var(--pink-5);
    font-weight: bold;
  }
  a:hover {
    color: var(--yellow);
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
    border: 10px solid var(--grey-2);
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
    margin-bottom: var(--spacing-s);
    text-transform: capitalize;
  }
  p,
  span,
  li {
    font-size: 1rem;
    margin-bottom: var(--spacing-xs);
    padding-right: var(--spacing-xs);
  }
  .bold {
    font-weight: 700;
    color: var(--orange-5);
  }

  #downloadBtn {
    width: 100%;
  }
  #downloadBtn a {
    color: var(--grey-2);
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
      margin-top: var(--spacing-l);
    }
  }
`;

//List of skills
export const AboutMeSkills = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: var(--spacing-xl);
  /* margin-bottom: 3rem; */
`;
