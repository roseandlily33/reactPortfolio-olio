import styled from "styled-components";

export const TabButtonContainer = styled.button`
  padding: var(--spacing-xs) var(--spacing-l);
  margin: 0 var(--spacing-xs);
  font-size: 1rem;
  font-family: var(--headerFont);
  font-weight: 600;
  text-transform: uppercase;
  color: var(--grey-7);
  background-color: transparent;
  border-radius: 0;
  border: none;
  border-bottom: 3px solid var(--pink-2);
  cursor: pointer;
  transition: all 0.3s ease;
  /* Hover Effect */
  &:hover {
    color: var(--pink-6);
    border-bottom: 3px solid var(--pink-3);
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  }

  /* Active State */
  &.active {
    color: var(--pink-5);
    border-bottom: 3px solid var(--pink-4);
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
    background: var(--pink-4);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }
`;
