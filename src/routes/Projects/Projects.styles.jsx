import styled from "styled-components";

export const ProjectComponentContainer = styled.main`
  margin: var(--spacing-m) ;
  @media (max-width: 900px) {
    margin:var(--spacing-xs) ;
  }
  @media (max-width: 600px) {
    margin: var(--spacing-xxxs) ;
  }
`;

export const ProjectContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--grey-2);
  /* border-radius: 25px; */
  border-radius: var(--borderRadius);
  padding:var(--spacing-m) ;
  margin-top: var(--spacing-m) ;
  /* border: 2px solid red; */
  //border: 5px solid ${({ theme }) => theme.colors.medBrown};
  h2 {
    margin-block: var(--spacing-m) ;
    padding-left: var(--spacing-m) ;
    color: var(--pink-5);
    /* font-size: 2rem; */
  }
  @media (max-width: 900px) {
    /* border-radius: 18px; */
    border-radius: var(--borderRadius);
    padding: var(--spacing-s); 
    h2 {
      /* font-size: 1.5rem; */
      padding-left: var(--spacing-xs) ;
    }
  }
  @media (max-width: 600px) {
    /* border-radius: 12px; */
    padding:  var(--spacing-xxs); 
    margin-top:  var(--spacing-xs); 
    h2 {
      /* font-size: 1.1rem; */
      padding-left: var(--spacing-xxxs) ;
    }
  }
`;
