import styled from "styled-components";

export const BeforeAfterSection = styled.section`
  width: 100%;
  margin-bottom: 2.5rem;
  padding: 2.5rem 2rem;
  background: #fff;
  border-radius: 28px;
  box-shadow: 0 2px 24px rgba(241, 116, 150, 0.08);
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
  }

  p {
    font-size: 1.08rem;
    color: var(--darkGrey);
    margin-bottom: 1.2rem;
    line-height: 1.6;
  }
`;

export const BeforeAfterCaption = styled.div`
  font-size: 1rem;
  color: var(--medGrey);
  margin-bottom: 1.2rem;
`;

export const BeforeAfterImages = styled.div`
  display: flex;
  gap: 2.5rem;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
`;

export const BeforeAfterImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  max-width: 100%;

  img {
    width: 100%;
    max-width: 320px;
    max-height: 220px;
    object-fit: cover;
    border-radius: 14px;
    box-shadow: 0 2px 12px rgba(241, 116, 150, 0.1);
    cursor: pointer;
    border: 2px solid var(--lightPink);
    transition: box-shadow 0.18s, border 0.18s;
    &:hover {
      box-shadow: 0 8px 32px rgba(241, 116, 150, 0.18);
      border: 2px solid var(--darkPink);
    }
  }
`;

export const BeforeAfterLabel = styled.div`
  font-size: 1.08rem;
  color: var(--darkPink);
  font-weight: 600;
  margin-bottom: 0.7rem;
  letter-spacing: 0.03em;
`;

export const FullscreenModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  width: 100vw;
  height: 100vh;
  background: rgba(30, 30, 30, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    max-width: 92vw;
    max-height: 92vh;
    border-radius: 18px;
    box-shadow: 0 8px 32px rgba(241, 116, 150, 0.18);
    border: 3px solid var(--medPink);
    background: #fff;
  }
`;
