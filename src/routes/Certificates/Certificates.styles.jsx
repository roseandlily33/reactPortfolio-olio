import styled from "styled-components";

export const CertificateContainer = styled.main`
  margin: 0 auto;
  width: 98%;
  height: 100%;
  /* border: 2px solid red; */
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 2rem;
    height: 100%;
    padding-top: 3rem;
    background-color: #f4ebeb;
    /* border: 1px solid red; */
  }
  select {
    padding: 0.5rem;
    border-radius: 15px;
    border: 3px solid ${({ theme }) => theme.colors.medBrown};
    background-color: #f7b064;
    box-shadow: ${({ theme }) => theme.boxShadow};
    text-transform: uppercase;
    font-weight: 550;
  }
  #certContainer {
    min-width: 450px;
    margin-block: 1rem;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 1s ease forwards;
    position: relative;
  }
  #certContainer img {
    min-width: 450px;
    max-height: 450px;
    max-width: 450px;
    min-height: 250px;
    border-radius: 15px;
    height: 350px;
    box-shadow: 2px 4px 2px 3px rgba(0, 0, 0, 0.1);
  }
  @keyframes glow {
    0%,
    100% {
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2), 0 0 15px var(--lightPink);
    }
    50% {
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2), 0 0 25px var(--darkPink);
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px); /* Start below */
    }
    100% {
      opacity: 1;
      transform: translateY(0); /* End at normal position */
    }
  }
  #certContainer img:hover {
    transform: scale(1.05);
    /* filter: grayscale(100%); */
    transition: all 0.5s;
    animation: glow 2s infinite;
  }
  #certContainer:hover .important-badge {
    transform: scale(1.10);
    transition: transform 0.4s;
  }
  .important-badge {
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-top: 78px solid var(--yellow); /* triangle size */
    border-left: 78px solid transparent;
    z-index: 2;
    border-top-right-radius: 14px;
    pointer-events: none;
    transition: transform 0.4s;
  }
  .important-badge span {
    position: absolute;
    top: -67px;
    right: 5px;
    color: var(--medPink);
    font-size: 2rem;
    font-weight: bold;
    pointer-events: none;
    line-height: 1;
  }
  @media screen and (max-width: 1500px) {
    #certContainer {
      min-width: 350px;
      max-width: 350px;
    }
    #certContainer img {
      min-width: 350px;
      max-height: 250px;
      max-width: 350px;
      min-height: 250px;
    }
  }
  @media screen and (max-width: 1024px) {
    #certContainer {
      min-width: 250px;
      max-width: 250px;
    }
    #certContainer img {
      min-width: 250px;
      max-height: 150px;
      max-width: 250px;
      min-height: 150px;
    }
  }
  @media screen and (max-width: 500px) {
    #certContainer {
      min-width: 150px;
      max-width: 150px;
    }
    #certContainer img {
      min-width: 150px;
      max-height: 100px;
      max-width: 150px;
      min-height: 100px;
    }
  }
`;
