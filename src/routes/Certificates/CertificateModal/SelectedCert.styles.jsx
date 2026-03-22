import styled from "styled-components";

export const ModalContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 0.4s ease;
  padding-bottom: var(--spacing-m);

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h5 {
    color: var(--grey-5);
    font-size: 1.5rem;
    font-family: var(--headerFont);
    font-weight: 700;
    text-align: center;
    letter-spacing: 0.01em;
    width: 100%;
    margin-bottom: var(--spacing-xs);
    margin-top: 0;
  }
  .provider {
    font-size: 1.1rem;
    color: var(--grey-7);
    font-weight: 700;
    padding: var(--spacing-xxs) var(--spacing-m);
    letter-spacing: 0.01em;
    min-width: 110px;
    text-align: center;
    line-height: 1.2;
    margin-bottom: var(--spacing-xxs);
    display: inline-block;
  }
  .date {
    font-size: 1.02rem;
    font-family: var(--headerFont);
    font-weight: 500;
    margin-top: var(--spacing-xxs);
    margin-bottom: var(--spacing-xxs);
    display: inline-block;
    color: var(--grey-6);
  }

  @media (max-width: 700px) {
    h5 {
      font-size: 1.15rem;
    }
    .provider,
    .date {
      font-size: 0.98rem;
      padding: var(--spacing-xxs) var(--spacing-s);
    }
  }
`;

export const ModalImage = styled.img`
  width: 100%;
  max-width: 700px;
  min-width: 180px;
  max-height: 60vh;
  height: auto;
  border-radius: var(--borderRadius);
  box-shadow:
    0 4px 24px rgba(241, 116, 150, 0.13),
    0 1.5px 6px rgba(60, 60, 60, 0.08);
  margin-block: var(--spacing-l);
  object-fit: contain;
  background: #fff;
  padding: var(--spacing-xs);
  z-index: 5;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow:
      0 8px 32px rgba(241, 116, 150, 0.18),
      0 2px 8px rgba(60, 60, 60, 0.12);
  }

  @media (max-width: 700px) {
    max-width: 98vw;
    min-width: 0;
    max-height: 40vh;
  }
`;
