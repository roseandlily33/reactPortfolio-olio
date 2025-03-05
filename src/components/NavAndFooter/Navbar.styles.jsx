import styled from 'styled-components';

export const NavbarOuter = styled.header`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding-left: 1rem;
   margin-inline: 1rem;
   padding-bottom: 1rem;
   padding-top: 1rem;
   background-color: ${({theme}) => theme.colors.darkCream};
   border-bottom-left-radius: 25px;
   border-bottom-right-radius: 25px;
   box-shadow: inset 1px 4px 5px rgba(0, 0, 0, 0.1);
`;

export const NavBarComponent = styled.nav`
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    padding-block: 0.5em;
    a {
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 0.15rem;;
    }
    
`;

