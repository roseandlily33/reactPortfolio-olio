import styled from 'styled-components';

export const NavbarOuter = styled.header`
   display: flex;
   flex-direction: column;
   padding: 1em;
   border-bottom: 1px solid ${({theme}) => theme.colors.pink};
   img{
        height: 100px;
        width: 300px;
    }
`;

export const NavBarComponent = styled.nav`
     display: flex;
    justify-content: space-between;
    padding-block: 0.5em;
    font-size: 0.7em;
`;

