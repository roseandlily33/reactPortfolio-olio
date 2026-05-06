import styled from "styled-components";

export const ContactMeSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: var(--spacing-xxl) var(--spacing-xl);
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(14px) saturate(120%);
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 120px;
    height: 120px;
    background-color: var(--pink-2);
    border-radius: 50%;
    opacity: 0.25;
    animation: float 7s infinite ease-in-out;
    z-index: 0;
  }
  &::before {
    top: -40px;
    left: 10%;
    animation-delay: 0s;
  }
  &::after {
    bottom: -60px;
    right: 10%;
    animation-delay: 3.5s;
  }
  @keyframes float {
    0% {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(-50px) scale(1.2);
    }
    100% {
      transform: translateY(0) scale(1);
    }
  }
  @media screen and (max-width: 768px) {
    &::before,
    &::after {
      display: none !important;
    }
    padding: var(--spacing-xl) var(--spacing-m);
  }

  h3 {
    color: var(--pink-5);
    text-align: center;
    padding-bottom: var(--spacing-m);
    font-size: 2.1rem;
    font-weight: 800;
    letter-spacing: 0.01em;
    z-index: 1;
    @media screen and (max-width: 768px) {
      font-size: 1.4rem;
      padding-bottom: var(--spacing-s);
    }
  }
`;

export const InfoBox = styled.div`
  padding: var(--spacing-xl) var(--spacing-l);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-m);
  max-width: 540px;
  width: 100%;
  z-index: 1;
  .contact-text {
    color: var(--pink-7);
    font-size: 1.13rem;
    text-align: center;
    font-weight: 400;
    margin-bottom: var(--spacing-xs);
    p {
      margin: 0 0 var(--spacing-xs) 0;
    }
    strong {
      color: var(--pink-5);
      font-weight: 700;
    }
    em {
      color: var(--pink-4);
      font-style: italic;
    }
  }
  .note {
    color: var(--pink-4);
    font-size: 0.98rem;
    margin-top: var(--spacing-xs);
    text-align: center;
    opacity: 0.85;
  }
  @media screen and (max-width: 768px) {
    padding: var(--spacing-m) var(--spacing-xs);
    font-size: 1.01rem;
    max-width: 100%;
  }
`;

export const BookingButton = styled.button`
  background: linear-gradient(90deg, var(--pink-5) 0%, var(--pink-3) 100%);
  color: #fff;
  font-weight: 700;
  font-size: 1.08rem;
  padding: 0.85em 2.2em;
  border: none;
  border-radius: 30px;
  box-shadow: 0 2px 12px rgba(255, 0, 128, 0.08);
  cursor: pointer;
  margin-top: var(--spacing-xs);
  margin-bottom: var(--spacing-xs);
  transition: background 0.2s, transform 0.2s;
  text-decoration: none;
  display: inline-block;
  &:hover, &:focus {
    background: linear-gradient(90deg, var(--pink-4) 0%, var(--pink-2) 100%);
    transform: translateY(-2px) scale(1.03);
    color: #fff;
    outline: none;
  }
`;

export const VRBLogoImg = styled.img`
  width: 180px;
  height: auto;
  margin-bottom: var(--spacing-s);
  margin-top: var(--spacing-xs);
  @media screen and (max-width: 768px) {
    width: 120px;
  }
`;
