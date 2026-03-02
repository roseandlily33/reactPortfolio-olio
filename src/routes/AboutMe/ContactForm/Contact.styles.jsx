import styled from "styled-components";

export const ContactRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--spacing-xxl);
  width: 100%;
  margin: var(--spacing-xl) 0 0 0;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: var(--spacing-l);
    align-items: stretch;
  }
`;

export const ContactFormCol = styled.div`
  flex: 2;
  min-width: 270px;
  max-width: 420px;
  padding-right: var(--spacing-xxl);
  border-right: 4px solid var(--pink-5);
  @media screen and (max-width: 900px) {
    max-width: 100%;
    min-width: 0;
    border-right: none;
  }
`;
export const ContactInfoCol = styled.div`
  flex: 1.2;
  min-width: 260px;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
  align-items: flex-start;
  margin-top: var(--spacing-xxs);
  @media screen and (max-width: 900px) {
    /* margin: 0; */
    width: 100%;
    /* border: 2px solid red; */
    max-width: 100%;
    min-width: 0;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-s);
  font-family: var(--headerFont);
  font-size: 1.13rem;
  color: var(--pink-7);
  background: var(--lightPinkBackground);
  /* border-radius: 18px; */
  border-radius: var(--borderRadius);
  padding: var(--spacing-l);
  box-shadow: 0 2px 12px rgba(241, 116, 150, 0.07);
  width: 100%;
  .contact-row-item {
    color: var(--pink-6);
    font-weight: 500;
    svg {
      color: var(--pink-7);
      font-size: 1.18rem;
      margin-right: var(--spacing-xs);
      vertical-align: middle;
      transition: color 0.2s;
    }
  }
  a {
    color: var(--pink-7);
    font-weight: 700;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    font-size: 1.13rem;
    line-height: 1.5;
    transition: color 0.2s;
  }
  a:hover {
    color: var(--pink-4);
    svg {
      color: var(--pink-5);
    }
  }
  .contact-label {
    font-weight: 600;
    color: var(--pink-6);
    margin-right: var(--spacing-xxxs);
    font-size: 1.03rem;
  }
  .icon-link-row {
    display: flex;
    align-items: center;
    gap: var(--spacing-s);
    margin: var(--spacing-xxs) 0 var(--spacing-xxxs) 0;
    padding-top: var(--spacing-xxs);
    border-top: 1px solid var(--grey-3);
    width: 100%;
    justify-content: flex-start;
  }
  @media screen and (max-width: 600px) {
    .contact-row-item {
      width: 100%;
      display: flex;
      align-items: center;
      gap: var(--spacing-xs);
      font-size: 1.05rem;
      margin-bottom: var(--spacing-xs);
      svg {
        font-size: 1.18rem;
        min-width: 1.18rem;
      }
    }
    .icon-link-row {
      flex-direction: row;
      align-items: center;
      gap: var(--spacing-xs);
      width: 100%;
      margin: var(--spacing-s) 0 0 0;
      padding-top: var(--spacing-xs);
      border-top: 1px solid var(--grey-3);
    }
    .icon-link {
      width: var(--spacing-xl);
      height: var(--spacing-xl);
      font-size: 1.3rem;
      margin-top: var(--spacing-xxs);
    }
  }
  .icon-link {
    color: var(--pink-7);
    font-size: 1.13rem;
    transition:
      color 0.2s,
      transform 0.2s,
      background 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--spacing-xl);
    height: var(--spacing-xl);
    border-radius: 50%;
    background: none;
    padding: var(--spacing-xxxs);
  }
  .icon-link:hover {
    color: var(--pink-5);
    background: rgba(241, 116, 150, 0.08);
    transform: scale(1.11);
  }
`;
// Contact me section
export const ContactMeSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-l);
  padding: var(--spacing-xxl) var(--spacing-xl) var(--spacing-xxl)
    var(--spacing-l);
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(14px) saturate(120%);
  overflow: hidden;

  /* Floating bubbles only on desktop */
  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 120px;
    height: 120px;
    background-color: var(--pink-2);
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
    &::before,
    &::after {
      display: none !important;
    }
  }

  h3 {
    color: var(--pink-5);
    text-align: center;
    padding-bottom: var(--spacing-xxs);
    transition: color 0.3s ease;
    text-transform: capitalize;
    font-weight: 700;
    @media screen and (max-width: 768px) {
      padding-bottom: var(--spacing-xxxs);
    }
  }

  .contact-intro {
    margin-bottom: var(--spacing-xxxs);
    font-weight: 400;
    font-size: 1.08rem;
    text-align: center;
    color: var(--pink-7);
    max-width: 600px;
    @media screen and (max-width: 768px) {
      font-size: 1.01rem;
      margin-bottom: var(--spacing-xxxs);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-m);
    width: 100%;
    max-width: 600px;
    align-items: center;
  }
`;
