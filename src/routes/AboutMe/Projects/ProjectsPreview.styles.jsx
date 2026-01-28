import styled from "styled-components";

export const CertificatesPreviewSection = styled.section`
  padding: var(--spacing-xl);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: var(--pinkBackground);
  h4 {
    color: var(--pink-5);
  }
`;

export const CertificatesGrid = styled.div`
  display: flex;
  overflow-x: scroll;
  max-width: 100%;
  gap: var(--spacing-l);
  margin-top: var(--spacing-m);
  padding: var(--spacing-m);
`;

export const CertificateCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--borderRadius);
  box-shadow: 0 2px 12px rgba(241, 116, 150, 0.1);
  padding: var(--spacing-m) var(--spacing-l);
  min-width: 270px;
  max-width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition:
    transform 0.18s,
    box-shadow 0.18s;
  border: 2px solid var(--pink-4);

  &:hover {
    transform: scale(1.06);
    box-shadow: 0 8px 32px rgba(241, 116, 150, 0.18);
  }
`;

export const CertificateImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  /* border-radius: 10px; */
  border-radius: var(--borderRadius);
  margin-bottom: var(--spacing-s);
  box-shadow: 0 2px 8px rgba(241, 116, 150, 0.1);
`;

export const CertificateTitle = styled.p`
  /* color: var(--darkPink); */
  text-align: center;
  font-weight: 600;
`;

export const SeeCertificatesButton = styled.button`
  background: var(--pink-5);
  color: #fff;
  border: none;
  /* border-radius: 999px; */
  border-radius: var(--borderRadius);
  padding: var(--spacing-xs) var(--spacing-l);
  font-size: 1.08rem;
  font-family: var(--headerFont);
  font-weight: 600;
  box-shadow: 0 2px 12px rgba(241, 116, 150, 0.12);
  cursor: pointer;
  margin-top: var(--spacing-l);
  transition:
    background 0.2s,
    color 0.2s,
    transform 0.18s;

  &:hover {
    background: var(--pink-3);
    color: var(--orange-5);
    transform: scale(1.05);
  }
`;
