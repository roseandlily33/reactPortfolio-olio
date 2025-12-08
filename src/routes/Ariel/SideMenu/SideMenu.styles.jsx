import styled from "styled-components";

export const SideMenuContainer = styled.nav`
  position: sticky;
  top: 100px;
  left: 0;
  height: fit-content;
  min-width: 220px;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 2px 16px rgba(241, 116, 150, 0.1);
  padding: 2rem 1.2rem;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  z-index: 100;
`;

export const SideMenuLink = styled.button`
  background: none;
  border: none;
  color: ${({ active }) => (active ? "var(--white)" : "var(--darkPink)")};
  background: ${({ active }) => (active ? "var(--darkPink)" : "none")};
  font-size: 1.08rem;
  font-family: var(--headerFont);
  font-weight: ${({ active }) => (active ? 700 : 500)};
  border-radius: 999px;
  padding: 0.6em 1.2em;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, font-weight 0.2s;
  box-shadow: ${({ active }) =>
    active ? "0 2px 12px rgba(241,116,150,0.12)" : "none"};

  &:hover {
    background: var(--medPink);
    color: var(--white);
  }
`;
