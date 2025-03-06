import styled from 'styled-components';

// Very outer container
export const AboutMeComponent = styled.main`
    margin-inline: 1rem;
    margin-top: 1rem;
    height: 100%;
`;
// Top container with the picture
export const AboutMePicture = styled.section`
    border-radius: 25px;
    box-shadow: inset 1px 4px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    svg{
        border-radius: 25px;
    }
    h2 {
        position: relative;
        z-index: 1;
        top: 0;
        left: 0;
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
  background-size: 100% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 8rem;
  margin-bottom: 2rem;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

`;
//This is the part that has my pic and info about me
export const AboutMeSection  = styled.section`
    border-radius: 25px;
    background-color: ${({theme}) => theme.colors.lightGrey};
    padding: 1rem;
    display: flex;
    gap: 2rem;
    box-shadow: inset 1px 4px 5px rgba(0, 0, 0, 0.1);

    h2{
        color: ${({theme}) => theme.colors.darkPink};
        border-bottom: 5px solid ${({theme}) => theme.colors.darkPink};
        margin-bottom: 1rem;
    }
    a{
        color: ${({theme}) => theme.colors.darkPink};
        font-weight: bold;
    }
    a:hover{
        color: ${({theme}) => theme.colors.yellow};
    }
    .left{
        width: 50%;
        display: flex;
        justify-content: center;
    }
    img{
        height: 100%;
        width: 80%;
        border-radius: 25px;
        border: 10px solid ${({theme}) => theme.colors.lightGrey};
    }
    .right{
        width: 50%;
        display: flex;
        flex-direction: column;
    }
    section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        /* border: 1px solid green; */
    }
    #downloadBtn {
        width: 100%;
    }
    #downloadBtn a {
        color: ${({theme}) => theme.colors.lightGrey};
    }
    @media screen and (max-width: 768px){
    flex-direction: column-reverse;
    .right {
        width: 100%;
    }
    .left {
        display: none;
    }
    #downloadBtn {
        margin-top: 2rem;
    }
    }

`;

//List of skills
export const AboutMeSkills = styled.section`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 3rem;
    
`;

// Contact me section
export const ContactMeSection = styled.section`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    border-radius: 25px;
    gap: 2rem;
    padding-top: 1rem;
    padding-bottom: 2rem;
    background-color: ${({theme}) => theme.colors.lightGrey};
    box-shadow: inset 1px 4px 5px rgba(0, 0, 0, 0.1);

    h3 {
        margin-inline: 2rem;
        color: ${({theme}) => theme.colors.darkPink};
        letter-spacing: 0.2rem;
    }
    h3::after {
        display: none;
    }
   // border: 10px solid ${({theme}) => theme.colors.lightestBrown};
    form{
        background-color: white;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem;
        border-radius: 25px;
        width: 95%;
        margin-inline: 2rem;

        /* border: 10px solid ${({theme}) => theme.colors.lightBrown}; */
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
    @media screen and (max-width: 768px){
    gap: 0.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    form{
        gap: 0.5rem;
        padding: 1rem;
        margin-inline: 1rem;
    }
    input, textarea {
        padding: 0.5rem;
        width: 100%;
    }
    }

`;


