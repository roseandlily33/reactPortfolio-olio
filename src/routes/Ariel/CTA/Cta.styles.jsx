import styled from "styled-components";

export const CTAButton = styled.button`
  background: var(--darkPink);
  color: #fff;
  border: none;
  /* border-radius: 999px; */
  border-radius: var(--borderRadius);
  padding: 0.7em 2em;
  font-size: 1.15rem;
  font-family: var(--headerFont);
  font-weight: 600;
  box-shadow: 0 2px 12px rgba(241, 116, 150, 0.12);
  cursor: pointer;
  margin-top: 1.5rem;
  transition: background 0.2s, color 0.2s, transform 0.18s;

  &:hover {
    background: var(--medPink);
    color: var(--darkBrown);
    transform: scale(1.05);
  }
`;
