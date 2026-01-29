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
  border-radius: var(--borderRadius);
  padding:var(--spacing-m) ;
  margin-top: var(--spacing-m) ;
  h2 {
    margin-block: var(--spacing-m) ;
    padding-left: var(--spacing-m) ;
    color: var(--pink-5);
    /* font-size: 2rem; */
  }
  @media (max-width: 900px) {
    border-radius: var(--borderRadius);
    padding: var(--spacing-s); 
    h2 {
      padding-left: var(--spacing-xs) ;
    }
  }
  @media (max-width: 600px) {
    padding:  var(--spacing-xxs); 
    margin-top:  var(--spacing-xs); 
    h2 {
      padding-left: var(--spacing-xxxs) ;
    }
  }
`;
