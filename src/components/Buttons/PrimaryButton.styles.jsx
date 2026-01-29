import styled from "styled-components";

export const PrimaryButtonContainer = styled.button`
  position: relative;
  overflow: hidden;
  height: 3rem;
  padding: 0 2rem;
  /* border-radius: 1.5rem; */
  border-radius: var(--borderRadius);
  background: var(--pink-5);
  background-size: 400%;
  color: var(--white);
  border: none;
  cursor: pointer;
  border: 2px solid red;

  a {
    color: var(--white);
  }
  &:hover::before {
    transform: scaleX(1);
  }
  .button-content {
    position: relative;
    z-index: 1;
    font-family: var(--headerFont);
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    font-size: 1rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    width: 100%;
    height: inherit;
    /* border-radius: inherit; */
    border-radius: var(--borderRadius);
    background: linear-gradient(82.3deg, var(--yellow), var(--orange-5) 94.3%);
    transition: all 0.475s;
  }
`;
