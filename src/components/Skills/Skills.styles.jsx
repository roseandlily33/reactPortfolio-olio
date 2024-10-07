import styled from 'styled-components';

export const EachSkill = styled.div`
    width: 30%;
    padding-left: 2rem;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px;
    background-color: ${({theme}) => theme.colors.darkCream};
    padding-top: 1rem;
    box-shadow: ${({theme}) => theme.colors.boxShadow};
    border-right: 10px solid ${({theme}) => theme.colors.darkBrown};
    border-left: 10px solid ${({theme}) => theme.colors.lightBrown};
    border-top: 6px solid ${({theme}) => theme.colors.darkPink};
    border-bottom: 6px solid ${({theme}) => theme.colors.lightPink};
    h4{
        padding-bottom: 0.5rem;
    }
    li{
        padding-bottom: 0.5rem;
        list-style-type: square;
    }
`;