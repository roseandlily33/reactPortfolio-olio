import styled from 'styled-components';

export const EachSkill = styled.div`
    width: 30%;
    padding-left: 2rem;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px;
    background-color: ${({theme}) => theme.colors.medCream};
    padding-top: 1rem;
    box-shadow: ${({theme}) => theme.colors.boxShadow};
    box-shadow: inset 1px 4px 5px rgba(0, 0, 0, 0.1);
    border: 5px solid ${({theme}) => theme.colors.yellow};
    border-radius: 25px;
    h4 {
        padding-bottom: 0.5rem;
        letter-spacing: 0.1rem;
    }
    li{
        padding-bottom: 0.5rem;
        list-style-type: square;
    }
    @media screen and (max-width: 1023px){
        flex-direction: column;
        width: 100%;
        height: auto;
    }

`;