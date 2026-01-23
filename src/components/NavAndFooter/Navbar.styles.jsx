import styled from 'styled-components';
import { useState } from 'react';

export const NavbarOuter = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  overflow: visible;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative; 
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

export const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: rgba(255,255,255,0.85);
  border: none;
  border-radius: 50%;
  box-shadow: 0 2px 12px rgba(241,116,150,0.13);
  cursor: pointer;
  z-index: 1200;
  transition: background 0.2s, box-shadow 0.2s;
  position: relative;
  &:hover, &:focus {
    background: var(--lightPinkBackground);
    box-shadow: 0 4px 20px rgba(241,116,150,0.18);
  }
  span {
    width: 26px;
    height: 4px;
    background: var(--darkPink);
    margin: 3.5px 0;
    border-radius: 2px;
    transition: 0.35s cubic-bezier(0.68,-0.55,0.27,1.55);
    display: block;
    position: relative;
  }
  &.open span:nth-child(1) {
    transform: translateY(7.5px) rotate(45deg);
  }
  &.open span:nth-child(2) {
    opacity: 0;
    transform: scaleX(0.5);
  }
  &.open span:nth-child(3) {
    transform: translateY(-7.5px) rotate(-45deg);
  }
  @media (max-width: 900px) {
    display: flex;
  }
`;

export const MobileMenu = styled.nav`
  display: none;

  @media (max-width: 900px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 1rem;
    left: 1rem;
    background: var(--lightCream);
    border-radius: 0 0 18px 18px;
    box-shadow: 0 8px 32px rgba(241,116,150,0.10);
    padding: 1.5rem 1rem 1rem 1rem;
    z-index: 1100;

    a {
      margin: 0.7rem 0;
      font-size: 1.1rem;
      color: var(--darkGrey);
      text-align: left;
    }
  }
`;

export const NavBarComponent = styled.nav`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  padding-block: 0.5em;

  @media (max-width: 900px) {
    display: none;
  }

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

const Navbar = ({ navLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarOuter>
      <Hamburger onClick={() => setMenuOpen(open => !open)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <NavBarComponent className="desktop">{navLinks}</NavBarComponent>
      <MobileMenu open={menuOpen}>{navLinks}</MobileMenu>
    </NavbarOuter>
  );
};

export default Navbar;

