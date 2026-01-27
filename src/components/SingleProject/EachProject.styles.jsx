import styled from "styled-components";

export const EntityContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  padding: 3rem 1rem 4rem 1rem;
  background-color: var(--pinkBackground);
`;

export const ProjectCard = styled.div`
  max-width: 26%;
  min-width: 260px;
  /* border-radius: 22px; */
  border-radius: var(--borderRadius);
  box-shadow: 0 4px 24px rgba(241, 116, 150, 0.13), 0 1.5px 6px rgba(60, 60, 60, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.lightCream};
  position: relative;
  transition: box-shadow 0.25s, transform 0.18s;
  overflow: hidden;
  margin-bottom: 2rem;
  &:hover {
    box-shadow: 0 8px 32px rgba(241, 116, 150, 0.19), 0 2px 8px rgba(60, 60, 60, 0.07);
    transform: translateY(-4px) scale(1.025);
  }

  .important-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background: var(--yellow);
    border-radius: 50%;
    width: 34px;
    height: 34px;
    min-width: 34px;
    min-height: 34px;
    max-width: 34px;
    max-height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(241, 116, 150, 0.13);
    z-index: 2;
    border: 2px solid #fff;
    overflow: hidden;
  }
  .important-badge svg {
    width: 22px;
    height: 22px;
    min-width: 22px;
    min-height: 22px;
    max-width: 22px;
    max-height: 22px;
    display: block;
    color: #fff;
    filter: drop-shadow(0 1px 2px rgba(60,60,60,0.08));
    margin: auto;
  }

  .project-image-wrapper {
    width: 100%;
    height: 210px;
    overflow: hidden;
    border-top-right-radius: 22px;
    border-top-left-radius: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-bottom: 1px solid #f7e6ed;
    transition: border-radius 0.2s, height 0.2s;
  }

  #projPic {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    border-top-right-radius: 22px;
    border-top-left-radius: 22px;
    transition: filter 0.5s;
  }
  #projPic:hover {
    filter: grayscale(100%);
  }

  .project-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 1.2rem 0.7rem 1.2rem;
    gap: 0.5rem;
    flex: 1;
  }

  h5 {
    /* font-size: 1.22rem; */
    font-family: var(--headerFont);
    color: var(--darkPink);
    font-weight: 700;
    margin: 0 0 0.5rem 0;
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
    max-width: 35%;
  }
  @media screen and (max-width: 1200px) {
    min-width: 45%;
    max-width: 48%;
    /* border-radius: 18px; */
    border-radius: var(--borderRadius);
    .project-image-wrapper {
      border-top-right-radius: 18px;
      border-top-left-radius: 18px;
      height: 170px;
    }
    #projPic {
      border-top-right-radius: 18px;
      border-top-left-radius: 18px;
    }
  }
  @media screen and (max-width: 900px) {
    max-width: 98%;
    min-width: 0;
    /* border-radius: 14px; */
    border-radius: var(--borderRadius);
    .project-image-wrapper {
      border-top-right-radius: 14px;
      border-top-left-radius: 14px;
      height: 160px;
    }
    #projPic {
      border-top-right-radius: 14px;
      border-top-left-radius: 14px;
      object-position: top;
    }
    .project-details {
      padding: 1rem 0.7rem 0.4rem 0.7rem;
    }
    
  }
  @media screen and (max-width: 600px) {
    max-width: 100%;
    min-width: 0;
    /* border-radius: 8px; */
    border-radius: var(--borderRadius);
    .project-image-wrapper {
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      height: 120px;
    }
    #projPic {
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      object-position: top;
    }
    .project-details {
      padding: 1rem 0.4rem 0.3rem 0.4rem;
    }
   
  }
`;
