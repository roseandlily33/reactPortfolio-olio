import styled from "styled-components";
import { useState } from "react";

export const NavbarOuter = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  overflow: visible;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-left: var(--spacing-m);
  padding-bottom: var(--spacing-m);
  padding-top: var(--spacing-m);
  background-color: var(--grey-2);
  position: sticky;
  background-image: radial-gradient(
    circle,
    rgba(240, 128, 160, 0.1) 1px,
    transparent 1px
  );
  background-size: 20px 20px;
  padding: var(--spacing-m);

  @media screen and (max-width: 900px) {
    /* margin-inline: var(--spacing-xs); */
    flex-direction: row;
  }
  h2 {
    font-family: var(--titleFont);
    background: linear-gradient(90deg, var(--pink-5) 0%, var(--orange-5) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    transition: transform 0.3s ease;
    padding: var(--spacing-m);
    font-weight: 750;
  }

  h2:hover {
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
  /* background: rgba(255, 255, 255, 0.85); */
  background: transparent;
  border: none;
  /* border-radius: 50%; */
  /* box-shadow: 0 2px 12px rgba(241, 116, 150, 0.13); */
  cursor: pointer;
  z-index: 1200;
  transition:
    background 0.2s,
    box-shadow 0.2s;
  position: relative;
  &:hover,
  &:focus {
    background: var(--lightPinkBackground);
    box-shadow: 0 4px 20px rgba(241, 116, 150, 0.18);
  }
  span {
    width: 26px;
    height: 4px;
    background: var(--pink-4);
    margin: var(--spacing-xxxs) 0;
    border-radius: 2px;
    transition: 0.35s cubic-bezier(0.68, -0.55, 0.27, 1.55);
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
    right: var(--spacing-m);
    left: var(--spacing-m);
    background: var(--grey-2);
    border-radius: 0 0 18px 18px;
    box-shadow: 0 8px 32px rgba(241, 116, 150, 0.1);
    padding: var(--spacing-m);
    z-index: 1100;

    a {
      margin: var(--spacing-s) 0;
      /* font-size: 1.1rem; */
      text-align: left;
    }
  }
`;

export const NavBarComponent = styled.nav`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  padding-block: var(--spacing-xs);

  @media (max-width: 900px) {
    display: none;
  }

  a {
    letter-spacing: 0.04rem;
    text-decoration: none;
    transition: transform 0.2s ease;
    &:hover {
      border-bottom: 2px solid var(--orange-5);
    }
    /* No animation on hover */
  }
  
`;

const Navbar = ({ navLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarOuter>
      <Hamburger onClick={() => setMenuOpen((open) => !open)}>
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
