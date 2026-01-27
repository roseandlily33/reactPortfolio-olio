import styled from "styled-components";

export const TimelineList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  width: 100%;
`;

export const TimelineItem = styled.li`
  position: relative;
  background: rgba(255, 255, 255, 0.97);
  /* border-radius: 18px; */
  border-radius: var(--borderRadius);
  box-shadow: 0 2px 12px rgba(241, 116, 150, 0.1);
  padding: 1.5rem 1.5rem 1.5rem 3.5rem;
  font-size: 1.08rem;
  /* color: var(--darkGrey); */
  line-height: 1.7;
  transition: box-shadow 0.18s;
  border: 2px solid var(--darkPink);

  /* &:before {
    content: "";
    position: absolute;
    left: 1.2rem;
    top: 1.7rem;
    width: 1.1rem;
    height: 1.1rem;
    background: var(--darkPink);
    border-radius: 50%;
    border: 3px solid #fff;
    box-shadow: 0 0 0 2px var(--medPink);
  } */

  strong {
    color: var(--darkPink);
    font-size: 1.13rem;
    font-family: var(--headerFont);
    display: block;
    margin-bottom: 0.5rem;
    letter-spacing: 0.01em;
  }
`;
