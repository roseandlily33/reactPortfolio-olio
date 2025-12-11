import styled from "styled-components";

export const ProjectCard = styled.div`
  max-width: 26%;
  max-height: 350px;
  border-radius: 25px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.lightCream};

  .project-image-wrapper {
    min-width: 100%;
    height: 220px;
    overflow: hidden;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
  }

  #projPic {
    min-width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    transition: filter 0.5s;
  }
  #projPic:hover {
    filter: grayscale(100%);
  }

  .project-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 1.2rem 0.5rem 1.2rem;
    gap: 0.3rem;
    flex: 1;
  }

  h5 {
    font-size: 1.18rem;
    font-family: var(--headerFont);
    color: var(--darkPink);
    font-weight: 600;
    margin: 0 0 0.2rem 0;
    text-align: left;
    letter-spacing: 0.01em;
    width: 100%;
  }

  .project-status-type {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 0.2rem;
    width: 100%;
  }

  .project-status {
    font-size: 1rem;
    font-weight: 500;
    color: var(--grey);
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .project-type {
    font-size: 0.98rem;
    color: var(--medPink);
    font-weight: 500;
    background: rgba(241, 116, 150, 0.08);
    border-radius: 999px;
    padding: 0.2em 0.8em;
    letter-spacing: 0.01em;
  }

  .bold {
    font-weight: 550;
    padding-top: 0.5rem;
    padding-left: 0.5rem;
  }
  span {
    font-weight: normal;
  }
  p {
    margin-top: 0.5rem;
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }
  a {
    float: right;
    padding-block: 0.5em;
  }
  a:hover {
    transform: scale(1.3);
  }
  @media screen and (max-width: 1750px) {
    width: 35%;
    height: 600px;
  }
  @media screen and (max-width: 1200px) {
    width: 45%;
    height: 600px;
  }
  @media screen and (max-width: 1000px) {
    width: 80%;
    height: 600px;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 600px;
  }
`;
