import styled from "styled-components";

export const SecondaryButtonContainer = styled.button`
  position: relative;
  height: 3rem;
  padding: 0 2rem;
  border-radius: var(--borderRadius);
  background: var(--lightestPink);
  color: var(--darkBerry);
  border: none;
  cursor: pointer;
  font-family: var(--headerFont);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 1.1rem;
  box-shadow: 0 4px 18px 0 rgba(178, 58, 72, 0.13);
  transition:
    box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.18s cubic-bezier(0.4, 0, 0.2, 1),
    background 0.2s;

  &:hover,
  &:focus {
    background: var(--darkBerry);
    color: var(--white);
    box-shadow: 0 8px 32px 0 rgba(178, 58, 72, 0.22);
    transform: scale(1.06);
    outline: none;
  }

  &:active {
    background: var(--berry);
    box-shadow: 0 2px 8px 0 rgba(178, 58, 72, 0.18);
    transform: scale(0.98);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
