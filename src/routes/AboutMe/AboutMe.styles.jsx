import styled from 'styled-components';

// Very outer container
export const AboutMeComponent = styled.main`
    border: 1px solid red;
`;
// Top container with the picture
export const AboutMePicture = styled.section`
    border: 1px solid orange;


`;
//This is the part that has my pic and info about me
export const AboutMeSection  = styled.section`
    border: 1px solid yellow;

`;

//List of skills
export const AboutMeSkills = styled.section`
    aside{
        text-align: center;
    }
    
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
`;

export const ResumeSection = styled.section`
    display: flex;
    gap: 5rem;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.lightPink};
    padding-block: 4rem;
    border-top: 5px solid  ${({theme}) => theme.colors.darkPink};
    border-bottom:  5px solid  ${({theme}) => theme.colors.darkPink};
`;

// Contact me section
export const ContactMeSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-top: 1rem;
    padding-bottom: 2rem;
    background-color: ${({theme}) => theme.colors.lightestBrown};
    form{
        background-color: ${({theme}) => theme.colors.white};
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem;
        border-radius: 25px;
        width: 50%;
        border: 2px solid ${({theme}) => theme.colors.medBrown};
    }
    label{
        color: ${({theme}) => theme.colors.medBrown};
    }
    input, textarea{
        border: 3px solid  ${({theme}) => theme.colors.darkPink};
        border-radius: 25px;
        padding: 1rem;
    }

`;


