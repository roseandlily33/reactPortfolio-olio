import styled from 'styled-components';

// Very outer container
export const AboutMeComponent = styled.main`
   // border: 1px solid red;
    margin-inline: 1rem;
    margin-top: 1rem;
`;
// Top container with the picture
export const AboutMePicture = styled.section`
    border-radius: 25px;
    svg{
        border-radius: 25px;
    }
    .animate-charcter {
    text-transform: uppercase;
    background-image: linear-gradient(
    -225deg,
    ${({theme}) => theme.colors.lightPink} 0%,
    ${({theme}) => theme.colors.darkPink} 29%,
    ${({theme}) => theme.colors.medBrown} 67%,
    ${({theme}) => theme.colors.yellow} 100%
    );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 12rem;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

`;
//This is the part that has my pic and info about me
export const AboutMeSection  = styled.section`
    border: 1px solid yellow;
    border-radius: 25px;
    background-color: ${({theme}) => theme.colors.lightGrey};
    padding: 1rem;

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
    border-radius: 25px;
`;

export const ResumeSection = styled.section`
    display: flex;
    border-radius: 25px;
    gap: 5rem;
    margin-block: 1rem;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.lightestPink};
    padding-block: 4rem;
    border: 6px solid  ${({theme}) => theme.colors.darkPink};
`;

// Contact me section
export const ContactMeSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 25px;
    gap: 2rem;
    padding-top: 1rem;
    padding-bottom: 2rem;
    background-color: ${({theme}) => theme.colors.lightBrown};
    border: 5px solid ${({theme}) => theme.colors.lightestBrown};
    form{
        background-color: white;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem;
        border-radius: 25px;
        width: 50%;
        border: 2px solid ${({theme}) => theme.colors.lightestBrown};
    }
    label{
        color: ${({theme}) => theme.colors.medBrown};
        font-weight: 400;
    }
    input, textarea{
        border: 3px solid  ${({theme}) => theme.colors.darkPink};
        border-radius: 25px;
        padding: 1rem;
    }

`;


