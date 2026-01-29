import styled from "styled-components";

export const FooterComponent = styled.footer`
  a {
    padding: var(--spacing-xxs) var(--spacing-s);
  }
  a:hover {
    transform: scale(1.2);
  }
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding-left: var(--spacing-m);
  margin-inline: var(--spacing-m);
  background-color: var(--grey-2);
  background-image: radial-gradient(
    circle,
    rgba(240, 128, 160, 0.2) 1px,
    transparent 1px
  );
  background-size: 20px 20px;
  padding: var(--spacing-m);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  @media screen and (max-width: 768px) {
    margin-inline: var(--spacing-xs);
  }
`;
