import styled from "styled-components";

export const FooterComponent = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding-left: 1rem;
  margin-inline: 1rem;
  margin-top: 2rem;
  /* padding-top: 1rem; */
  background-color: var(--lightCream);
  background-image: radial-gradient(
    circle,
    rgba(240, 128, 160, 0.2) 1px,
    transparent 1px
  );
  background-size: 20px 20px;
  padding: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  /* border-top-left-radius: 25px; */
  /* border-top-right-radius: 25px; */
  /* box-shadow: inset 1px 4px 5px rgba(0, 0, 0, 0.1); */
  @media screen and (max-width: 768px) {
    margin-inline: 0.5rem;
  }
`;
