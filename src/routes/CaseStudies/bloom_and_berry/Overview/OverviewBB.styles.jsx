import styled from "styled-components";

export const OverviewSection = styled.section`
  width: 100%;
  margin-bottom: 2.5rem;
  padding: 2.2rem 1.5rem;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 2px 24px rgba(241, 116, 150, 0.08);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-size: 2rem;
    font-family: var(--headerFont);
    font-weight: 400;
    text-transform: uppercase;
    color: var(--darkPink);
    margin-bottom: 0.5rem;
    letter-spacing: 0.04em;
  }

  h3 {
    font-size: 1.18rem;
    color: var(--medPink);
    margin-bottom: 0.7rem;
    font-family: var(--headerFont);
  }

  h4 {
    font-size: 1.08rem;
    color: var(--darkPink);
    margin-top: 1.2rem;
    margin-bottom: 0.4rem;
    font-family: var(--headerFont);
  }

  p {
    font-size: 1.01rem;
    color: var(--darkGrey);
    margin-bottom: 0.7rem;
    line-height: 1.6;
  }

  .completed-link {
    background: var(--darkPink);
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    border-radius: 999px;
    padding: 0.5em 1.3em;
    font-size: 1rem;
    font-family: var(--headerFont);
    box-shadow: 0 2px 12px rgba(241, 116, 150, 0.12);
    margin-bottom: 1.2rem;
    margin-top: 0.5rem;
    display: inline-block;
    transition: background 0.2s, color 0.2s, transform 0.18s;
    border: 2px solid var(--medPink);

    &:hover {
      background: var(--medPink);
      color: var(--darkBrown);
      transform: scale(1.05);
      text-decoration: underline;
      border-color: var(--darkPink);
    }
  }

  .italic {
    font-style: italic;
    color: var(--medPink);
  }
`;
