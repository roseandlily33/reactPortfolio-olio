import styled from "styled-components";

export const ProjectComponentContainer = styled.main`
  margin: 1rem;
  @media (max-width: 900px) {
    margin: 0.5rem;
  }
  @media (max-width: 600px) {
    margin: 0.2rem;
  }
`;

export const ProjectContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.darkCream};
  /* border-radius: 25px; */
  border-radius: var(--borderRadius);
  padding: 1rem;
  margin-top: 1rem;
  /* border: 2px solid red; */
  //border: 5px solid ${({ theme }) => theme.colors.medBrown};
  h2 {
    margin-block: 1rem;
    font-weight: 600;
    padding-left: 1rem;
    letter-spacing: 0.3rem;
    color: ${({ theme }) => theme.colors.darkPink};
    font-size: 2rem;
  }
  @media (max-width: 900px) {
    /* border-radius: 18px; */
    border-radius: var(--borderRadius);
    padding: 0.7rem;
    h2 {
      font-size: 1.5rem;
      padding-left: 0.5rem;
    }
  }
  @media (max-width: 600px) {
    /* border-radius: 12px; */
    padding: 0.3rem;
    margin-top: 0.5rem;
    h2 {
      font-size: 1.1rem;
      padding-left: 0.2rem;
    }
  }
`;
