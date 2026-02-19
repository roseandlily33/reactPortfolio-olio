import styled from "styled-components";

export const TimelineList = styled.ul`
  list-style: none;
  padding: 0;
  margin: var(--spacing-xl) 0 0 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl); 
  width: 100%;
`;

export const TimelineItem = styled.li`
  position: relative;
  background: rgba(255, 255, 255, 0.97);
  /* border-radius: 18px; */
  border-radius: var(--borderRadius);
  box-shadow: 0 2px 12px rgba(241, 116, 150, 0.1);
  padding: var(--spacing-l) var(--spacing-l) var(--spacing-l) var(--spacing-xxl);    
  font-size: 1.08rem;
  /* color: var(--darkGrey); */
  line-height: 1.7;
  transition: box-shadow 0.18s;
  border: 2px solid var(--grey-6);

  strong {
    color: var(--pink-5);
    font-size: 1.13rem;
    font-family: var(--headerFont);
    display: block;
    margin-bottom: var(--spacing-xs); 
    letter-spacing: 0.01em;
  }
`;
