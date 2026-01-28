import styled from "styled-components";

export const BeforeAfterCaption = styled.div`
  font-size:var(--spacing-m);
  color: var(--grey-6);
  margin-bottom: var(--spacing-m);
`;

export const BeforeAfterImages = styled.div`
  display: flex;
  gap: var(--spacing-xxl);
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: var(--spacing-xl);

  @media (max-width: 900px) {
    flex-direction: column;
    gap: var(--spacing-xl);
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
    /* border-radius: 14px; */
    border-radius: var(--borderRadius);
    box-shadow: 0 2px 12px rgba(241, 116, 150, 0.1);
    cursor: pointer;
    border: 2px solid var(--pink-2);
    transition: box-shadow 0.18s, border 0.18s;
    &:hover {
      box-shadow: 0 8px 32px rgba(241, 116, 150, 0.18);
      border: 2px solid var(--pink-5);
    }
  }
`;

export const BeforeAfterLabel = styled.div`
  font-size: 1.08rem;
  color: var(--pink-5);
  font-weight: 600;
  margin-bottom: var(--spacing-s);
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
    /* border-radius: 18px; */
    border-radius: var(--borderRadius);
    box-shadow: 0 8px 32px rgba(241, 116, 150, 0.18);
    border: 3px solid var(--pink-2);
    background: #fff;
  }
`;
