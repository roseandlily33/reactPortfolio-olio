import styled from 'styled-components';

export const ProjectComponentContainer = styled.main`
  margin: 1rem;
  h2{
    //text-align: center;
    color: ${({theme}) => theme.colors.medBrown};
    letter-spacing: 0.2rem;
    text-align: center;
    display: none;
  }

`;

export const ProjectContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.darkCream};
    border-radius: 25px;
    padding: 1rem;
    margin-top: 1rem;
    //border: 5px solid ${({theme}) => theme.colors.medBrown};
    h3{
      margin-block: 1rem;
      color: ${({theme}) => theme.colors.darkPink};
      border-bottom: 5px solid ${({theme}) => theme.colors.darkBrown};
    }
`;