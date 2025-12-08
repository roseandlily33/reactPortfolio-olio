import styled from "styled-components";

export const GoalSection = styled.section`
  width: 100%;
  margin-bottom: 2.5rem;
  padding: 2.5rem 2rem;
  border-radius: 28px;
  background: white;
  box-shadow: 0 2px 24px rgba(241, 116, 150, 0.1);
  transition: box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-size: 2.488rem;
    font-family: var(--headerFont);
    font-weight: 400;
    text-transform: uppercase;
    color: var(--darkPink);
    margin-bottom: 0.5rem;
    letter-spacing: 0.04em;
    a {
      color: var(--darkPink);
      text-decoration: none;
      font-size: inherit;
      font-family: inherit;
      font-weight: inherit;
      text-transform: inherit;
      letter-spacing: inherit;
      transition: color 0.2s;
      &:hover {
        color: var(--medPink);
        text-decoration: underline;
      }
    }
  }

  .goal-date {
    font-size: 1.1rem;
    color: var(--medBrown);
    margin-bottom: 1.2rem;
    font-style: italic;
  }

  h3 {
    font-size: 1.35rem;
    color: var(--medPink);
    margin-bottom: 0.7rem;
    font-family: var(--headerFont);
  }

  h4 {
    font-size: 1.15rem;
    color: var(--darkPink);
    margin-top: 1.5rem;
    margin-bottom: 0.4rem;
    font-family: var(--headerFont);
  }

  p {
    font-size: 1.08rem;
    color: var(--darkGrey);
    margin-bottom: 0.8rem;
    line-height: 1.6;
  }
`;
