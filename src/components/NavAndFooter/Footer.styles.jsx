import styled from "styled-components";

export const FooterComponent = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding-left: var(--spacing-m);
  margin-inline: var(--spacing-m);
  margin-top: var(--spacing-xl);
  /* padding-top: 1rem; */
  background-color: var(--grey-2);
  background-image: radial-gradient(
    circle,
    rgba(240, 128, 160, 0.2) 1px,
    transparent 1px
  );
  background-size: 20px 20px;
  padding: var(--spacing-m);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  /* border-top-left-radius: 25px; */
  /* border-top-right-radius: 25px; */
  /* box-shadow: inset 1px 4px 5px rgba(0, 0, 0, 0.1); */
  @media screen and (max-width: 768px) {
    margin-inline: var(--spacing-xs);
  }
`;
