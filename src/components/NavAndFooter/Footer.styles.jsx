import styled from 'styled-components';

export const FooterComponent = styled.footer`
   display: flex;
   flex-direction: column;
   justify-content: end;
   align-items: center;
   padding-left: 1rem;
   margin-inline: 1rem;
   margin-top: 2rem;
   padding-top: 1rem;
   background-color: ${({theme}) => theme.colors.darkCream};
   border-top-left-radius: 25px;
   border-top-right-radius: 25px;
   box-shadow: inset 1px 4px 5px rgba(0, 0, 0, 0.1);

`;
