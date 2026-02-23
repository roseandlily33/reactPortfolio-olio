import styled from "styled-components";
export const TechStackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xxxxl) var(--spacing-xs);
  width: 100%;
  /* background-color: var(--pinkBackground); */
  background: white;
  margin: 0 auto;
  /* border: 2px solid green; */
  /* height: 300px; */

  h4 {
    color: var(--grey-8);
    font-weight: 700;
    /* letter-spacing: 0.03em; */
    margin-bottom: var(--spacing-m);
    font-size: 4rem;
    text-align: left;
    width: 100%;
    /* margin-top: var(--spacing-l); */
  }
  @media screen and (max-width: 600px) {
  }
`;

export const TechLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
  /* border: 2px solid red; */
  width: 32%;
  p {
    border-right: 2px solid var(--berry);
    padding-right: var(--spacing-xxl);
  }
`;

export const TechRight = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: var(--spacing-xxl);
    /* align-items: center; */
  gap: var(--spacing-l);
  /* border: 2px solid blue; */
  width: 30%;
  min-height: 250px;
  justify-content: end;
  div {
    display: flex;
    /* gap: 1rem; */
    gap: var(--spacing-xs);
  }
  .techStack {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  span {
    color: var(--pink-5);
    font-size: 1.2rem;
  }
`;
