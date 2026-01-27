import styled from "styled-components";

export const ContactRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 2.5rem;
  width: 100%;
  margin: 2rem 0 0 0;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: stretch;
  }
`;

export const ContactFormCol = styled.div`
  flex: 2;
  min-width: 270px;
  max-width: 420px;
  padding-right: 2rem;
  border-right: 4px solid var(--darkPink);
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
  gap: 1.2rem;
  align-items: flex-start;
  margin-top: 0.2rem;
  @media screen and (max-width: 900px) {
    max-width: 100%;
    min-width: 0;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  font-family: var(--headerFont);
  font-size: 1.13rem;
  color: var(--darkBerry);
  background: var(--lightPinkBackground);
  /* border-radius: 18px; */
  border-radius: var(--borderRadius);
  padding: 1.5rem 1.2rem 1.2rem 1.2rem;
  box-shadow: 0 2px 12px rgba(241, 116, 150, 0.07);
  width: 100%;
  .contact-row-item {
    color: var(--darkBerry);
    font-weight: 500;
    svg {
      color: var(--darkBerry);
      font-size: 1.18rem;
      margin-right: 0.4em;
      vertical-align: middle;
      transition: color 0.2s;
    }
  }
  a {
    color: var(--darkBerry);
    font-weight: 700;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.13rem;
    line-height: 1.5;
    transition: color 0.2s;
  }
  a:hover {
    color: var(--darkPink);
    svg {
      color: var(--darkPink);
    }
  }
  .contact-label {
    font-weight: 600;
    color: var(--darkBerry);
    margin-right: 0.13rem;
    font-size: 1.03rem;
  }
  .icon-link-row {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin: 0.2rem 0 0.1rem 0;
    padding-top: 0.2rem;
    border-top: 1px solid var(--lightGrey);
    width: 100%;
    justify-content: flex-start;
  }
  .icon-link {
    color: var(--darkBerry);
    font-size: 1.13rem;
    transition:
      color 0.2s,
      transform 0.2s,
      background 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.1rem;
    height: 2.1rem;
    border-radius: 50%;
    background: none;
    padding: 0.13rem;
  }
  .icon-link:hover {
    color: var(--darkPink);
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
  gap: 2.5rem;
  padding: 2.8rem 2rem 2.8rem 2rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(14px) saturate(120%);
  overflow: hidden;

  /* Remove float animation backgrounds above 768px */
  &::before,
  &::after {
    display: none;
  }
  /* @media screen and (max-width: 768px) { */
  &::before,
  &::after {
    content: "";
    display: block;
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
  /* } */

  h3 {
    color: ${({ theme }) => theme.colors.darkPink};
    font-weight: 800;
    letter-spacing: 0.08em;
    text-align: center;
    padding-bottom: 0.2rem;
    transition: color 0.3s ease;
    font-size: 2.1rem;
    text-transform: capitalize;
    @media screen and (max-width: 768px) {
      font-size: 1.55rem;
      text-transform: capitalize;
      padding-bottom: 0.1rem;
    }
  }

  .contact-intro {
    margin-bottom: 0.2rem;
    font-weight: 400;
    font-size: 1.08rem;
    text-align: center;
    color: var(--darkBerry);
    max-width: 600px;
    @media screen and (max-width: 768px) {
      font-size: 1.01rem;
      margin-bottom: 0.1rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 600px;
    align-items: center;
  }
`;
