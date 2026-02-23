import styled from "styled-components";

export const EachCaseStudyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xl);
  /* margin: 2rem auto; */
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  /* border: 2px solid orange; */
  gap: var(--spacing-xl);
  height: 100%;
  padding: var(--spacing-l);
  background-color: var(--pinkBackground);

  /* background: linear-gradient(135deg, var(--lightCream) 50%, var(--lightGrey) 50%); */

  div {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
  }

  h3 {
    /* color: var(--pink-5); */
    margin-bottom: var(--spacing-l);
    animation: fadeIn 1s ease-in-out;
  }

  p {
    line-height: 1.8;
    text-align: justify;
    margin-bottom: var(--spacing-m);
    animation: slideIn 0.8s ease-in-out;
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
    background-color: var(--pink-4);
    border-radius: var(--borderRadius);
    text-decoration: none;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
    transition:
      background-color 0.3s ease,
      transform 0.3s ease;

    &:hover {
      background-color: var(--pink-5);
      transform: translateY(-3px);
      box-shadow: 4px 6px 10px rgba(0, 0, 0, 0.2);
    }
  }

  /* Image styling */
  img {
    max-width: 100%;
    height: auto;
    border-radius: var(--borderRadius);
    box-shadow: var(--boxShadow);
    margin-bottom: var(--spacing-l);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
  }
`;

