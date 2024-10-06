import styled from 'styled-components';

export const EachSkill = styled.div`
    width: 30%;
    padding-left: 2rem;
    border-top-right-radius: 25px;
    padding-top: 1rem;
    border-right: 5px solid ${({theme}) => theme.colors.medBrown};
    border-top: 2px solid ${({theme}) => theme.colors.darkBrown};
    h4{
        padding-bottom: 0.5rem;
    }
    li{
        padding-bottom: 0.5rem;
        list-style-type: square;
    }
`;