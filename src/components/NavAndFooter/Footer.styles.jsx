import styled from "styled-components";

export const FooterComponent = styled.footer`
  a {
    padding: var(--spacing-xxs) var(--spacing-s);
    transition: transform 0.2s;
    display: inline-flex;
    align-items: center;
  }
  a:hover {
    transform: scale(1.2);
  }
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding-left: var(--spacing-m);
  padding: var(--spacing-xxxl) var(--spacing-xxl);
  background-color: var(--grey-2);
  gap: var(--spacing-xs);
  background-image: radial-gradient(
    circle,
    rgba(240, 128, 160, 0.2) 1px,
    transparent 1px
  );
  background-size: 20px 20px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  @media screen and (max-width: 900px) {
    padding: var(--spacing-xxl) var(--spacing-l);
    gap: var(--spacing-xs);
    h3 {
      font-size: 1.5rem;
    }
    a {
      padding: var(--spacing-xxs) var(--spacing-xs);
    }
    .footer-contact {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 600px) {
    padding: var(--spacing-xl) var(--spacing-s);
    gap: var(--spacing-xxs);
    h3 {
      font-size: 1.18rem;
      margin-bottom: var(--spacing-xxs);
    }
    a {
      padding: var(--spacing-xxxs) var(--spacing-xxs);
    }
    .footer-contact {
      font-size: 0.95rem;
      flex-direction: column;
      gap: var(--spacing-xs);
      align-items: center;
      margin-bottom: var(--spacing-xs);
    }
    svg {
      font-size: 1.6rem !important;
      width: 1.6rem !important;
      height: 1.6rem !important;
    }
  }
`;
