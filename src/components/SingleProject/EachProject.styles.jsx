import styled from 'styled-components';

export const EachProjectContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-inline: 1rem;
    gap: 2rem;
    align-items: center;
    justify-content: space-around;
    align-items: center;
`;
export const ProjectCard = styled.div`
    width: 32%;
    height: 500px;
    padding: 2rem;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px;
    background-color: ${({theme}) => theme.colors.lightGrey};
    padding-top: 1rem;
    box-shadow: ${({theme}) => theme.colors.boxShadow};
    border-right: 14px solid ${({theme}) => theme.colors.darkPink};
    border-left: 14px solid ${({theme}) => theme.colors.lightBrown};
    border-top: 10px solid ${({theme}) => theme.colors.darkBrown};
    border-bottom: 10px solid ${({theme}) => theme.colors.lightPink};
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 100%;
        border-radius: 15px;
    }
    .bold{
        font-weight: 550;
    }
    span{
        font-weight: normal;
    }
    p{
        margin-top: 0.5rem;
    }
    a{
        float: right;
         padding-block: 0.5em;
    }
    a:hover{
        transform: scale(1.3);
    }
    #projPic:hover{
    filter: grayscale(100%);
    transition: all .5s;
    transform: rotate(5deg) scale(1);
    }
    @media screen and (max-width: 1750px){
        width: 35%;
        height: 600px;
    }
    @media screen and (max-width: 1200px){
        width: 45%;
        height: 600px;
    }
    @media screen and (max-width: 1000px){
        width: 80%;
        height: 600px;
    }
    @media screen and (max-width: 800px){
        width: 100%;
        height: 600px;
    }
`;




 

 