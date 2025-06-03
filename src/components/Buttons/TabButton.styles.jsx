import styled from "styled-components";

export const TabButtonContainer = styled.button`
  padding: 0.5rem 1.5rem;
  margin: 0 0.5rem;
  font-size: 1rem;
  font-family: var(--headerFont);
  font-weight: 600;
  text-transform: uppercase;
  color: var(--darkGrey);
  background-color: transparent;
  border-radius: 0;
  border: none;
  border-bottom: 3px solid var(--lightPink);
  cursor: pointer;
  transition: all 0.3s ease;
  /* Hover Effect */
  &:hover {
    color: var(--darkPink);
    border-bottom: 3px solid var(--darkPink);
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  }

  /* Active State */
  &.active {
    color: var(--darkPink);
    border-bottom: 3px solid var(--darkPink);
    font-weight: bold;
  }

  /* Animation for hover underline */
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 3px;
    background: var(--darkPink);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }
`;