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

export const TopContainer = styled.div`
  background-color: var(--grey-2);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23F38CA9' fill-opacity='0.1' d='M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,240C672,256,768,256,864,240C960,224,1056,192,1152,160C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
  background-size: cover;
  background-position: center;
  padding: var(--spacing-xxxl) var(--spacing-xl) var(--spacing-xl)
    var(--spacing-xl);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  h2 {
    color: var(--pink-6);
    text-align: center;
    font-weight: 700;
    letter-spacing: 0.04rem;
    margin-bottom: var(--spacing-l);
  }
  p {
    text-align: center;
    font-style: italic;
    font-size: 1.1rem;
  }

  .tabs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--spacing-m);
    margin-top: var(--spacing-xl);
    width: 100%;
  }

  .tabs > * {
    min-width: 120px;
    padding: var(--spacing-s) var(--spacing-l);
    font-size: 1.1rem;
    text-align: center;
    background: var(--white);
    border-radius: var(--spacing-xl);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    color: var(--pink-5);
    cursor: pointer;
    transition:
      background 0.2s,
      color 0.2s;
    margin-bottom: var(--spacing-xs);
    word-break: break-word;
  }

  .tabs > *.active {
    background: var(--pink-3);
    color: var(--white);
  }

  @media (max-width: 700px) {
    padding: var(--spacing-xl) var(--spacing-xs) var(--spacing-m)
      var(--spacing-xs);
    .tabs > * {
      min-width: 90px;
      font-size: var(--spacing-m);
      padding: var(--spacing-xs) var(--spacing-m);
    }
  }

  @media (max-width: 500px) {
    padding: var(--spacing-xl) var(--spacing-xxs) var(--spacing-xs)
      var(--spacing-xxs);
    .tabs {
      gap: var(--spacing-xs);
    }
    .tabs > * {
      min-width: 70px;
      font-size: 0.95rem;
      padding: var(--spacing-xs) var(--spacing-s);
    }
  }
`;
