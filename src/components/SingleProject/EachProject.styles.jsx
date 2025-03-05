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
    width: 28%;
    height: 450px;
    /* padding: 2rem; */
    /* border-top-right-radius: 25px;/ */
    border-radius: 25px;
    /* border-bottom-left-radius: 25px; */
    /* padding-top: 1rem; */
    box-shadow: ${({theme}) => theme.colors.boxShadow};
    /* border-right: 7px solid ${({theme}) => theme.colors.darkPink}; */
    /* border-left: 7px solid ${({theme}) => theme.colors.lightBrown}; */
    /* border-top: 5px solid ${({theme}) => theme.colors.darkBrown}; */
    /* border-bottom: 5px solid ${({theme}) => theme.colors.lightPink}; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color:  ${({theme}) => theme.colors.lightCream};
    #projPic {
        min-width: 100%;
        max-width: 100%;
        /* min-height: 50%; */
        max-height: 70%;
        border-top-right-radius: 25px;
        border-top-left-radius: 25px;
        /* border-radius: 15px; */
    }
    #projPic:hover{
        filter: grayscale(100%);
        transition: all .5s;
    }
    .bold{
        font-weight: 550;
        padding-top: 0.5rem;
        padding-left: 0.5rem;
    }
    span{
        font-weight: normal;
    }
    p{
        margin-top: 0.5rem;
        padding-left: 0.5rem;
        margin-bottom: 0.5rem;

    }
    a{
        float: right;
         padding-block: 0.5em;
    }
    a:hover{
        transform: scale(1.3);
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




 

 