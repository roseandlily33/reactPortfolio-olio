import styled from "styled-components";

export const BerryAndBloomMain = styled.main`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column; /* Ensures elements stack vertically */
  align-items: center; /* Centers elements horizontally */
`;

export const BerryLogo = styled.aside`
  margin-top: 5rem; /* Adds spacing below the navbar */
  width: 300px;
  height: 300px;
  clip-path: polygon(50%);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: flowerAnimation 2s ease-in-out infinite;
  transition: transform 0.5s ease, opacity 0.5s ease;

  img {
    width: 90%;
    height: auto;
    border-radius: 50%;
  }

  /* Swirl animations behind the logo */
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba(240, 128, 160, 0.3) 30%,
      transparent 70%
    );
    border-radius: 50%;
    animation: swirlAnimation 10s infinite ease-in-out;
    z-index: -1; /* Ensures the swirls are behind the logo */
  }

  &::before {
    top: -50px;
    left: -50px;
    animation-delay: 0s;
  }

  &::after {
    bottom: -50px;
    right: -50px;
    animation-delay: 2s;
  }

  @keyframes flowerAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes swirlAnimation {
    0% {
      transform: rotate(0deg) scale(1);
      opacity: 0.5;
    }
    50% {
      transform: rotate(180deg) scale(1.1);
      opacity: 0.7;
    }
    100% {
      transform: rotate(360deg) scale(1);
      opacity: 0.5;
    }
  }
`;

export const BerryAboutUs = styled.section`
  margin-top: 2rem;
  padding: 2rem;
  width: 80%;
  text-align: center;
  background-color: #fdfaf6;
  /* border-radius: 20px; */
  border-radius: var(--borderRadius);
  padding-block: 4rem;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  .scallop {
    position: relative;
    background: var(--medPink);
    padding: 50px;
  }
  .scallop p {
    position: relative;
    text-align: center;
    color: white;
    text-transform: uppercase;
    font-family: "PT Sans Narrow", sans-serif;
    line-height: 50px;
  }
  .scallop::after {
    position: absolute;
    bottom: -50px;
    left: 0px;
    width: 100%;
    content: " ";
    background: radial-gradient(
      circle at 50% 0%,
      var(--medPink) 25%,
      #fdfaf6 26%,
      #fdfaf6 40%
    );
    background-color: #fdfaf6;
    background-size: 50px 100px;
    height: 50px;
    background-repeat: repeat-x;
  }
  .after-scallop {
    background: #fdfaf6;
    padding: 50px;
    margin-bottom: 50px;
  }
  /* 
.after-scallop p{
  color:#9089C0;
  font-size:25px;
  text-transform:none;
  font-family: 'PT Sans Narrow', sans-serif;
  text-align:center;
  margin-top:30px;
  font-weight: bold;
} */
  h2 {
    color: var(--yellow);
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

export const BerryOurJuices = styled.section`
  margin-top: 2rem;
  padding: 2rem;
  width: 80%;
  text-align: center;
  background-color: #fdfaf6;
  /* border-radius: 10px; */
  border-radius: var(--borderRadius);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  .juice {
    margin-bottom: 1.5rem;
    padding: 1rem;
    background-color: #fff;
    /* border-radius: 10px; */
    border-radius: var(--borderRadius);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

    h4 {
      color: #f38ca9;
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    p {
      color: #333;
      font-size: 1rem;
      line-height: 1.6;
    }
  }
`;
