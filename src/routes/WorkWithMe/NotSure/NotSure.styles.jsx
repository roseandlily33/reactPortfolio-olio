import styled from "styled-components";

export const NotSureSection = styled.section`
  background: #ffffff;
  padding: var(--spacing-xl) var(--spacing-l);
  /* margin: 2.5rem 0; */
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 4px 24px rgba(50, 50, 50, 0.07);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const NotSureTitleRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-m);
`;

export const NotSureTitle = styled.h4`
  color: var(--pink-5);
  font-family: var(--headerFont);
  /* font-size: 1.25rem; */
  font-weight: 700;
  margin: 0;
`;

export const NotSureList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const NotSureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--spacing-m);
  font-size: 1.08rem;
  line-height: 1.6;
  /* color: var(--darkGrey); */
  font-weight: 500;
  .pkg-label {
    color: var(--pink-5);
    font-weight: 700;
    font-size: 1.08rem;
    margin-right: var(--spacing-xxxs);
  }
  .pkg-desc {
    color: var(--grey-7);
    font-weight: 400;
    font-size: 1.04rem;
  }
  @media screen and (max-width: 1600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-xs);
    padding-bottom: var(--spacing-m);
    border-bottom: 1px solid var(--grey-7);
    /* border: 2px solid red; */
  }
`;

export const NotSureDot = styled.span`
  display: inline-block;
  width: var(--spacing-s);
  height: var(--spacing-s);
  border-radius: 50%;
  margin-right: var(--spacing-s);
  margin-top: var(--spacing-xs);
  background: ${({ color }) => color || "var(--pink-5)"};
  flex-shrink: 0;
`;
