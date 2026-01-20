import React from "react";
import { CertList } from "../../Certificates/Certs";
import {
  CertificatesPreviewSection,
  CertificatesGrid,
  CertificateCard,
  CertificateImage,
  CertificateTitle,
  CertificateProvider,
  SeeCertificatesButton,
} from "./CertificatesPreview.styles";
import { useNavigate } from "react-router-dom";

const importantCerts = CertList.filter((cert) => cert.important);

const CertificatesPreview = () => {
  const navigate = useNavigate();

  return (
    <CertificatesPreviewSection>
      <h2 style={{ color: "var(--darkPink)" }}>Highlighted Certificates</h2>
      <CertificatesGrid>
        {importantCerts?.map((cert) => (
          <CertificateCard key={cert.id}>
            <CertificateImage src={cert.photo} alt={cert.title} />
            <CertificateTitle>{cert.title}</CertificateTitle>
            <CertificateProvider>{cert.provider}</CertificateProvider>
          </CertificateCard>
        ))}
      </CertificatesGrid>
      <SeeCertificatesButton onClick={() => navigate("/Certificates")}>
        See All Certificates &rarr;
      </SeeCertificatesButton>
    </CertificatesPreviewSection>
  );
};

export default CertificatesPreview;
