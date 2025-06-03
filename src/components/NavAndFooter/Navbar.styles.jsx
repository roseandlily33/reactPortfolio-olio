import styled from 'styled-components';

export const NavbarOuter = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  margin-inline: 1rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: var(--lightCream);
  transform: translateY(0) rotateX(0deg);
  transform-origin: top;
  transition: transform 0.5s ease;
  background-color: var(--lightCream);
  background-image: radial-gradient(circle, rgba(240, 128, 160, 0.2) 1px, transparent 1px);
  background-size: 20px 20px;
  padding: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &.scrolled-up {
    transform: translateY(-100%) rotateX(-90deg); /* Flip up */
  }

  &.scrolled-down {
    transform: translateY(0) rotateX(0deg); /* Flip down */
  }

  @media screen and (max-width: 768px){
    flex-direction: column;
    margin-inline: 0.5rem;
   }

  @keyframes bubbleUp {
    0% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateY(-100px) scale(1.5);
      opacity: 0;
    }
  }

  h1 {
    font-family: var(--titleFont);
    font-size: 2rem;
    background: linear-gradient(45deg, var(--lightPink), var(--darkPink), var(--medBrown));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    transition: transform 0.3s ease; /* Optional hover effect */
  }

  h1:hover {
    transform: scale(1.1); /* Slight zoom on hover */
  }
`;

export const NavBarComponent = styled.nav`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  padding-block: 0.5em;
  a {
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-decoration: none;
    color: var(--darkGrey);
    transition: transform 0.2s ease;

    &:hover {
      animation: bounce 0.5s ease;
    }
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
`;

