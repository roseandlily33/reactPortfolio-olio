import styled from "styled-components";

export const ProjectComponentContainer = styled.main`
  margin: 1rem;
`;

export const ProjectContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.darkCream};
  border-radius: 25px;
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
  }
`;
