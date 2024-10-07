import styled from 'styled-components';

export const NavbarOuter = styled.header`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding-left: 1rem;
   margin-inline: 1rem;
   padding-bottom: 1rem;
   //border-bottom: 2px solid ${({theme}) => theme.colors.medBrown};
   background-color: ${({theme}) => theme.colors.darkCream};
   border-bottom-left-radius: 25px;
   border-bottom-right-radius: 25px;
`;

export const NavBarComponent = styled.nav`
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    padding-block: 0.5em;
`;

