import styled from "styled-components";

// Very outer container
export const AboutMeComponent = styled.main`
  /* margin-inline: var(--spacing-m); */
  /* margin-top: var(--spacing-m); */
  height: 100%;
`;
// Top container with the picture
export const AboutMePicture = styled.section`
  /* border-radius: 25px; */
  /* border-radius: var(--borderRadius); */
  /* box-shadow: inset 1px 4px 5px rgba(0, 0, 0, 0.1); */
  margin-bottom: var(--spacing-xl);
  svg {
    /* border-radius: 25px; */
    /* border-radius: var(--borderRadius); */
  }
  h2 {
    position: relative;
    z-index: 1;
    top: 0;
    left: var(--spacing-m);
  }
  p {
    position: relative;
    z-index: 1;
    left: var(--spacing-m);
    color: var(--pink-2);
    font-size: 1.3rem;
    font-weight: 500;
    width: 100%;
    font-style: italic;
  }
  .animate-charcter {
    text-transform: uppercase;
    background-image: linear-gradient(
      -225deg,
      var(--pink-1) 0%,
      var(--pink-5) 29%,
      var(--orange-5) 67%,
      var(--yellow) 100%
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
    margin-bottom: var(--spacing-xl);
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
  padding: var(--spacing-xxl);
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
