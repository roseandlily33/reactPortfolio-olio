import styled from "styled-components";

export const CTAButtonContainer = styled.button`
  background: linear-gradient(90deg, var(--orange-4) 0%, var(--pink-5) 100%);
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 10px 22px;
  font-size: 18px;
  font-family: var(--headerFont);
  font-weight: 600;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 18px 0 rgba(241, 116, 150, 0.13);
  cursor: pointer;
  transition:
    background 0.3s,
    transform 0.2s,
    color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-s);
  line-height: 1.2;
  .cta-arrow {
    font-size: 1.5em;
    font-weight: 900;
    margin-left: var(--spacing-xs);
    color: var(--yellow);
    transition: color 0.3s;
  }
  &:hover {
    background: linear-gradient(90deg, var(--pink-5) 0%, var(--orange-4) 100%);
    color: var(--yellow);
    transform: scale(1.06);
    .cta-arrow {
      color: var(--pink-4);
    }
  }

  @media (max-width: 768px) {
    padding: var(--spacing-m) var(--spacing-xxl);
    font-size: 1rem;
    .cta-arrow {
      font-size: 1.1em;
      margin-left: var(--spacing-xs);
    }
  }
`;
