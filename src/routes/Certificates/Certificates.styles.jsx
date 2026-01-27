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
    background-color: var(--pinkBackground);
    /* border: 1px solid red; */
  }
  select {
    padding: 0.5rem;
    /* border-radius: 15px; */
    border-radius: var(--borderRadius);
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
    /* border: 2px solid red; */
  }
  #certContainer img {
    min-width: 450px;
    max-height: 450px;
    max-width: 450px;
    min-height: 250px;
    /* border-radius: 15px; */
    border-radius: var(--borderRadius);
    height: 350px;
    box-shadow: 2px 4px 2px 3px rgba(0, 0, 0, 0.1);
  }
  @keyframes glow {
    0%,
    100% {
      box-shadow:
        0 8px 20px rgba(0, 0, 0, 0.2),
        0 0 15px var(--lightPink);
    }
    50% {
      box-shadow:
        0 8px 20px rgba(0, 0, 0, 0.2),
        0 0 25px var(--darkPink);
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
    transform: scale(1.1);
    transition: transform 0.4s;
  }
  .important-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background: var(--yellow);
    border-radius: 50%;
    width: 34px;
    height: 34px;
    min-width: 34px;
    min-height: 34px;
    max-width: 34px;
    max-height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(241, 116, 150, 0.13);
    z-index: 2;
    border: 2px solid #fff;
    overflow: hidden;
    pointer-events: none;
    transition: transform 0.4s;
  }
  .important-badge svg {
    width: 22px;
    height: 22px;
    min-width: 22px;
    min-height: 22px;
    max-width: 22px;
    max-height: 22px;
    display: block;
    color: #fff;
    filter: drop-shadow(0 1px 2px rgba(60,60,60,0.08));
    margin: auto;
    position: static;
    top: unset;
    right: unset;
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
        background-color: ${({ theme }) => theme.colors.lightCream};
        /* border-radius: 22px; */
        border-radius: var(--borderRadius);
        box-shadow: 0 4px 24px rgba(241, 116, 150, 0.13), 0 1.5px 6px rgba(60, 60, 60, 0.04);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        position: relative;
        min-width: 450px;
        max-width: 450px;
        margin-block: 1rem;
        opacity: 0;
        transform: translateY(20px);
        animation: fadeIn 1s ease forwards;
        padding: 0 0 1.1rem 0;
        transition: box-shadow 0.25s, transform 0.18s;
        overflow: hidden;
        &:hover {
          box-shadow: 0 8px 32px rgba(241, 116, 150, 0.19), 0 2px 8px rgba(60, 60, 60, 0.07);
          transform: translateY(-4px) scale(1.025);
        }
        .important-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: var(--yellow);
          border-radius: 50%;
          width: 22px;
          height: 22px;
          min-width: 22px;
          min-height: 22px;
          max-width: 22px;
          max-height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(241, 116, 150, 0.13);
          z-index: 2;
          border: 2px solid #fff;
          overflow: hidden;
          pointer-events: none;
          transition: transform 0.4s;
        }
        .important-badge svg {
          width: 13px;
          height: 13px;
          min-width: 13px;
          min-height: 13px;
          max-width: 13px;
          max-height: 13px;
          display: block;
          color: #fff;
          filter: drop-shadow(0 1px 2px rgba(60,60,60,0.08));
          margin: auto;
          position: static;
          top: unset;
          right: unset;
        }
        .certificate-image-wrapper {
          width: 100%;
          height: 210px;
          overflow: hidden;
          border-top-right-radius: 22px;
          border-top-left-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-bottom: 1px solid #f7e6ed;
          transition: border-radius 0.2s, height 0.2s;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          border-top-right-radius: 22px;
          border-top-left-radius: 22px;
          transition: filter 0.5s;
        }
        img:hover {
          filter: grayscale(100%);
        }
        .certificate-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 1rem 1.2rem 0.7rem 1.2rem;
          gap: 0.3rem;
          flex: 1;
          width: 100%;
        }
        h5 {
          font-size: 1.22rem;
          font-family: var(--headerFont);
          color: var(--darkPink);
          font-weight: 700;
          margin: 0 0 0.2rem 0;
          text-align: left;
          letter-spacing: 0.01em;
          width: 100%;
        }
        .certificate-provider {
          font-size: 1.08rem;
          color: var(--medPink);
          font-weight: 700;
          font-family: var(--headerFont);
          background: rgba(241, 116, 150, 0.08);
          /* border-radius: 999px; */
          border-radius: var(--borderRadius);
          padding: 0.18em 1.1em;
          letter-spacing: 0.01em;
          min-width: 110px;
          text-align: center;
          line-height: 1.2;
          margin-bottom: 0.2em;
          display: inline-block;
        }
        .certificate-date {
          font-size: 1.01rem;
          color: var(--medBrown);
          font-family: var(--headerFont);
          font-weight: 500;
          margin-top: 0.1em;
          margin-bottom: 0.2em;
          display: inline-block;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    section {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      gap: 1rem;
      height: 100%;
      padding-top: 1rem;
      /* border: 1px solid red; */
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
