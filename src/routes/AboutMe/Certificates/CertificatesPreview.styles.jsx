import styled from "styled-components";

export const CertificatesPreviewSection = styled.section`
  /* background: #fff; */
  /* border-radius: var(--borderRadius); */
  /* box-shadow: 0 4px 32px rgba(241, 116, 150, 0.10); */
  padding: 2rem 2rem 2.5rem 2rem;
  margin: 2rem auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

export const CertificatesGrid = styled.div`
  display: flex;
  gap: 1.2rem;
  overflow-x: auto;
  flex-wrap: nowrap;
  max-width: 100%;
  flex-direction: row;
  margin-top: 1.5rem;
  padding: 1rem 0.5rem;
`;

export const CertificateCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(241, 116, 150, 0.10);
  padding: 1.2rem 1.5rem;
  min-width: 270px;
  max-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: transform 0.18s, box-shadow 0.18s;

  &:hover {
    transform: scale(1.06);
    box-shadow: 0 8px 32px rgba(241, 116, 150, 0.18);
    border: 2px solid var(--medPink);
  }
`;

export const CertificateImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 10px;
  margin-bottom: 0.7rem;
  box-shadow: 0 2px 8px rgba(241, 116, 150, 0.10);
`;

export const CertificateTitle = styled.div`
  font-size: 1.13rem;
  color: var(--darkPink);
  text-align: center;
  font-family: var(--headerFont);
  font-weight: 700;
  margin-bottom: 0.15rem;
  letter-spacing: 0.01em;
  line-height: 1.3;
`;

export const CertificateProvider = styled.div`
  font-size: 1rem;
  color: var(--medBrown);
  text-align: center;
  font-family: var(--mainFont);
  font-weight: 500;
  margin-bottom: 0.1rem;
  letter-spacing: 0.01em;
  opacity: 0.92;
`;

export const SeeCertificatesButton = styled.button`
  background: var(--darkPink);
  color: #fff;
  border: none;
  border-radius: 999px;
  padding: 0.7em 2em;
  font-size: 1.08rem;
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