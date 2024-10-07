import styled from 'styled-components';

export const NavbarOuter = styled.header`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding-left: 1rem;
   border-bottom: 2px solid ${({theme}) => theme.colors.medBrown};
`;

export const NavBarComponent = styled.nav`
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    padding-block: 0.5em;
`;

