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

    /* border-right: 14px solid ${({theme}) => theme.colors.darkPink}; */
    border: 5px solid ${({theme}) => theme.colors.yellow};
    /* border-top: 10px solid ${({theme}) => theme.colors.darkBrown}; */
    /* border-bottom: 10px solid ${({theme}) => theme.colors.lightPink}; */
    border-radius: 25px;
    h4 {
        padding-bottom: 0.5rem;
    }
    li{
        padding-bottom: 0.5rem;
        list-style-type: square;
    }
    @media screen and (max-width: 1000px){
        flex-direction: column;
        width: 100%;
        height: auto;
    }
`;