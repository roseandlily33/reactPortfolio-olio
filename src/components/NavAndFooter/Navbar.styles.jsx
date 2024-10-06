import styled from 'styled-components';

export const NavbarOuter = styled.header`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   border-bottom: 2px solid ${({theme}) => theme.colors.lightGrey};
   img{
        height: 100px;
        width: 300px;
        padding-top: 1rem;
        padding-left: 1rem;
    }
`;

export const NavBarComponent = styled.nav`
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    padding-block: 0.5em;
`;

