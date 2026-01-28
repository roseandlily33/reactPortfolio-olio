import styled from "styled-components";

export const SideMenuContainer = styled.nav`
  position: sticky;
  top: 100px;
  left: 0;
  height: fit-content;
  /* min-width: 220px; */
  width: 15%;
  background: #fff;
  /* border-radius: 24px; */
  border-radius: var(--borderRadius);
  box-shadow: 0 2px 16px rgba(241, 116, 150, 0.1);
  padding: var(--spacing-xl) var(--spacing-m);
  /* margin-right: 2rem; */
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
  z-index: 100;
  @media screen and (max-width: 950px){
    display: none;
  }
`;

export const SideMenuLink = styled.button`
  background: none;
  border: none;
  color: ${({ active }) => (active ? "var(--white)" : "var(--pink-5)")};
  background: ${({ active }) => (active ? "var(--pink-5)" : "none")};
  font-size: var(--spacing-m);
  font-family: var(--headerFont);
  font-weight: ${({ active }) => (active ? 700 : 500)};
  /* border-radius: 999px; */
  border-radius: var(--borderRadius);
  padding: var(--spacing-xs) var(--spacing-m);
  cursor: pointer;
  transition: background 0.2s, color 0.2s, font-weight 0.2s;
  box-shadow: ${({ active }) =>
    active ? "0 2px 12px rgba(241,116,150,0.12)" : "none"};

  &:hover {
    background: var(--pink-4);
    color: var(--white);
  }
`;
