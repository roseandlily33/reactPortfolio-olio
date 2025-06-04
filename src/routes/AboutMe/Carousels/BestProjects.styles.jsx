import styled from "styled-components";

export const BestProjectsContainer = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: var(--lightCream);
  background-image: radial-gradient(circle, rgba(240, 128, 160, 0.2) 1px, transparent 1px);
  background-size: 20px 20px;
  padding: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-block: 1rem;
  h2 {
    color: var(--darkPink);
    margin-bottom: 1.5rem;
    font-size: 2rem;
    text-align: left;
  }

  .carousel img {
    max-width: 500px;
    max-height: 300px; /* Sets the height of the images */
    object-fit: cover; /* Ensures the images are cropped proportionally */
    border-radius: var(--borderRadius); /* Adds rounded corners */
  }
`;

export const ProjectCard = styled.div`
  background-color: var(--lightCream);
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);
  padding: 1rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 5px solid black;
  width: 50%;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 250px;
    border-radius: var(--borderRadius);
    margin-bottom: 1rem;
  }

  .project-info {
    h3 {
      color: var(--darkPink);
      margin-bottom: 0.5rem;
    }

    p {
      color: var(--darkGrey);
      font-size: 1rem;
    }
  }
`;