import styled from "styled-components";

export const DevProcessContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-xxxxl) var(--spacing-xs);
  width: 100%;
  /* background-color: var(--pinkBackground); */
  background: white;
  margin: 0 auto;
  /* border: 2px solid green; */

  h4 {
    color: var(--grey-8);
    font-weight: 700;
    /* letter-spacing: 0.03em; */
    margin-bottom: var(--spacing-xxxl);
    font-size: 2.4rem;
    text-align: left;
    width: 100%;
    text-align: center;
  }
`;

export const DevProcessCircleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-xxxxl);
  justify-content: center;
  align-items: center;
  width: 100%;
  /* border: 2px solid red; */
  @media (max-width: 900px) {
    flex-direction: column;
    gap: var(--spacing-l);
  }
`;
export const DevProcessCircle = styled.div`
  background: #fff;
  border-radius: 50%;
  width: 220px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-m);
  /* text-align: center; */
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  /* border: 2px solid red; */
  
  svg {
    color: var(--pink-5);
    font-size: 2.5rem;
    margin-bottom: var(--spacing-s);
  }
  
  h5 {
    font-weight: bold;
    margin-bottom: var(--spacing-xs);
    color: var(--grey-8);
    font-size: 1.13rem;
  }
  
  p {
    color: var(--grey-7);
    font-size: 1.08rem;
    line-height: 1.4;
    margin: 0;
    /* border: 2px solid red; */
  }
  
  @media (max-width: 900px) {
    width: 100%;
    max-width: 300px;
  }
`;
