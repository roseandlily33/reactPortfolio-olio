import styled from "styled-components";

export const CTAButton = styled.button`
  background: var(--pink-5);
  color: #fff;
  border: none;
  /* border-radius: 999px; */
  border-radius: var(--borderRadius);
  padding:var(--spacing-m) var(--spacing-l);
  font-size: 1.15rem;
  font-family: var(--headerFont);
  font-weight: 600;
  box-shadow: 0 2px 12px rgba(241, 116, 150, 0.12);
  cursor: pointer;
  margin-top: var(--spacing-l);
  transition: background 0.2s, color 0.2s, transform 0.18s;

  &:hover {
    background: var(--pink-1);
    color: var(--orange-6);
    transform: scale(1.05);
  }
`;
