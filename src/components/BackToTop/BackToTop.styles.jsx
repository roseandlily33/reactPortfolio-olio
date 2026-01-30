import styled from "styled-components";

export const BackToTop = styled.button`
    position: fixed;
    bottom: var(--spacing-xl);
    right: var(--spacing-xl);
    background: var(--pink-5);
    color: #fff;
    border: none;
    border-radius: 999px;
    padding: var(--spacing-s) var(--spacing-l);
    font-size: 1.1rem;
    font-family: var(--headerFont);
    font-weight: 700;
    box-shadow: 0 2px 12px rgba(241, 116, 150, 0.13);
    cursor: pointer;
    z-index: 100;
    transition:
      background 0.2s,
      color 0.2s,
      box-shadow 0.2s;
    opacity: 0.92;
  &:hover {
    background: var(--pink-2);
    color: var(--pink-5);
    opacity: 1;
  }
  @media screen and (max-width: 600px) {
      bottom: var(--spacing-m);
      right: var(--spacing-m);
      font-size: 0.98rem;
      padding: var(--spacing-xs) var(--spacing-m);
  }
`;
