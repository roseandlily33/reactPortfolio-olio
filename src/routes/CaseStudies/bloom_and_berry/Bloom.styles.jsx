import styled from "styled-components";

export const BloomStudyCase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xl); 
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  height: 100%;
  padding: var(--spacing-xl);
  background-color: var(--pinkBackground);
  div {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: start;
    min-width: 100%;
  }
  /* section { */
    /* border: 2px solid red; */
  /* } */
  h3 {
    color: var(--darkPink);
    margin-bottom: var(--spacing-m);
    /* font-weight: 600; */
    animation: fadeIn 1s ease-in-out;
  }
  h4 {
    color: var(--medPink);
    margin-bottom: var(--spacing-xs); 
    /* font-weight: 500; */
    animation: fadeIn 1s ease-in-out;
  }
  h5 {
    color: var(--medBrown);
    /* font-weight: 300; */
    margin-bottom: var(--spacing-xs); 
    font-style: italic;
    animation: fadeIn 1s ease-in-out;
  }

  p {
    line-height: 1.8;
    text-align: justify;
    margin-bottom: var(--spacing-l); 
    animation: slideIn 0.8s ease-in-out;
  }
  .juice {
    /* border: 2px solid red; */
    padding-top: var(--spacing-m);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xxxs);
    border-bottom: 1px solid var(--medPink);
  }
  .juice p {
    line-height: 1;
  }
  img {
    height: 1000px;
  }

  /* Add some playful animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Buttons for links */
  a {
    display: inline-block;
    padding: var(--spacing-s) var(--spacing-l);
    margin: var(--spacing-m) var(--spacing-xs);
    font-size: var(--spacing-m);
    font-weight: bold;
    color: var(--white);
    background-color: var(--darkPink);
    border-radius: var(--borderRadius);
    text-decoration: none;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
    transition:
      background-color 0.3s ease,
      transform 0.3s ease;

    &:hover {
      background-color: var(--medPink);
      transform: translateY(-3px);
      box-shadow: 4px 6px 10px rgba(0, 0, 0, 0.2);
    }
  }
`;
