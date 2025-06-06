import styled from 'styled-components';

export const BloomStudyCase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  padding: 2rem;
  background-color: #F4EBEB;
  div {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
  }
  h3 {
    color: var(--darkPink);
    margin-bottom: 1rem;
    font-weight: 600;
    animation: fadeIn 1s ease-in-out;
  }
  h4 {
    color: var(--medPink);
    margin-bottom: 0.5rem;
    font-weight: 500;
    animation: fadeIn 1s ease-in-out;
  }
  h5 {
    color: var(--medBrown);
    font-weight: 300;
    margin-bottom: 0.5rem;
    font-style: italic;
    animation: fadeIn 1s ease-in-out;
  }

  p {
    line-height: 1.8;
    text-align: justify;
    margin-bottom: 1.5rem;
    animation: slideIn 0.8s ease-in-out;
  }
  .juice {
    /* border: 2px solid red; */
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
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
    padding: 0.8rem 1.5rem;
    margin: 1rem 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    color: var(--white);
    background-color: var(--darkPink);
    border-radius: var(--borderRadius);
    text-decoration: none;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: var(--medPink);
      transform: translateY(-3px);
      box-shadow: 4px 6px 10px rgba(0, 0, 0, 0.2);
    }
  }

`;