import styled from "styled-components";

export const CertificatesPreviewSection = styled.section`
  background: linear-gradient(
    120deg,
    var(--lightPink) 0%,
    var(--lightCream) 100%
  );
  border-radius: 32px;
  box-shadow: 0 4px 32px rgba(241, 116, 150, 0.1);
  padding: 2.5rem 1.5rem;
  margin: 2rem auto;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CertificatesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin: 2rem 0 1.5rem 0;
`;

export const CertificateCard = styled.div`
  background: rgba(255, 255, 255, 0.85);
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(241, 116, 150, 0.1);
  padding: 1.2rem 1.5rem;
  min-width: 160px;
  max-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.18s;
  border: 2px solid var(--medPink);

  &:hover {
    transform: scale(1.06);
    box-shadow: 0 8px 32px rgba(241, 116, 150, 0.18);
    border-color: var(--darkPink);
  }
`;

export const CertificateImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 10px;
  margin-bottom: 0.7rem;
  box-shadow: 0 2px 8px rgba(241, 116, 150, 0.1);
`;

export const CertificateTitle = styled.div`
  font-size: 1.05rem;
  color: var(--darkGrey);
  text-align: center;
  font-family: var(--headerFont);
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

export const CertificateProvider = styled.div`
  font-size: 0.95rem;
  color: var(--medBrown);
  text-align: center;
  font-family: var(--bodyFont);
  margin-bottom: 0.2rem;
`;

export const SeeCertificatesButton = styled.button`
  background: var(--darkPink);
  color: #fff;
  border: none;
  border-radius: 999px;
  padding: 0.7em 2em;
  font-size: 1.15rem;
  font-family: var(--headerFont);
  font-weight: 600;
  box-shadow: 0 2px 12px rgba(241, 116, 150, 0.12);
  cursor: pointer;
  margin-top: 1.5rem;
  transition: background 0.2s, color 0.2s, transform 0.18s;

  &:hover {
    background: var(--medPink);
    color: var(--darkBrown);
    transform: scale(1.05);
  }
`;
