import styled from "styled-components";

export const NotSureSection = styled.section`
  background: #ffffff;
  padding: 2.2rem 1.5rem;
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
  margin-bottom: 1.1rem;
`;

export const NotSureTitle = styled.h4`
  color: var(--darkPink);
  font-family: var(--headerFont);
  /* font-size: 1.25rem; */
  font-weight: 800;
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
  margin-bottom: 1.15rem;
  font-size: 1.08rem;
  line-height: 1.6;
  /* color: var(--darkGrey); */
  font-weight: 500;
  .pkg-label {
    color: var(--darkPink);
    font-weight: 700;
    font-size: 1.08rem;
    margin-right: 0.18em;
  }
  .pkg-desc {
    color: var(--medGrey);
    font-weight: 400;
    font-size: 1.04rem;
  }
`;

export const NotSureDot = styled.span`
  display: inline-block;
  width: 0.85em;
  height: 0.85em;
  border-radius: 50%;
  margin-right: 0.7em;
  margin-top: 0.45em;
  background: ${({ color }) => color || "var(--darkPink)"};
  flex-shrink: 0;
`;
