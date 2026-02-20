import styled from "styled-components";

export const SummarySection = styled.section`
  display: flex;
  flex-direction: row;
  padding: var(--spacing-xxxxl) var(--spacing-xxxl);
  gap: var(--spacing-xl);
  align-items: flex-start;
   h3 {
    font-family: var(--headerFont);
    margin-bottom: 6px;
    letter-spacing: 0.01em;
    font-weight: 700;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 24px;
    padding: 24px 8px;
    border-radius: 0;
    box-shadow: none;
  }
`;

export const AboutMeColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-s);
  border-right: 2.5px solid var(--berry);
  padding-right: var(--spacing-m);
  height: 230px;
  h3 {
    font-family: var(--headerFont);
  }
`;

export const HowIWorkColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* gap: var(--spacing-xxs); */
  ul {
    margin-top: var(--spacing-s);
    margin-bottom: var(--spacing-xs);
    padding-left: var(--spacing-m);
    list-style: none;
    li {
      margin-bottom: var(--spacing-s);
      line-height: 1.6;
      position: relative;
      padding-left: var(--spacing-m);
      font-weight: 550;
    }
    li::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.6em;
      width: 0.7em;
      height: 0.7em;
      background: var(--pink-3);
      border-radius: 50%;
      display: inline-block;
    }
  }
  p[style] {
    font-size: 1.08rem;
    font-style: italic;
    color: var(--orange-7);
    margin-top: 8px;
    margin-bottom: 0;
    line-height: 1.4;
  }
`;
