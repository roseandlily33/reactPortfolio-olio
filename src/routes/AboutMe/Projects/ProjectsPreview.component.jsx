import React from "react";
import {
  CertificatesPreviewSection,
  CertificatesGrid,
  CertificateCard,
  CertificateImage,
  CertificateTitle,
  SeeCertificatesButton,
} from "./ProjectsPreview.styles";
import { useNavigate } from "react-router-dom";
import { projectListMERN } from "../../Projects/ProjectLists/projectsMERN";
import { projectListClient } from "../../Projects/ProjectLists/projectsClient";

const ProjectsPreview = () => {
  const navigate = useNavigate();
  const allCerts = [
    ...projectListClient,
    ...projectListMERN,
  ];

  const importantCerts = allCerts.filter((cert) => cert.showMainPage === true);

  return (
    <CertificatesPreviewSection>
      <h4>Top Projects</h4>
      <CertificatesGrid>
        {importantCerts?.map((cert) => (
          <CertificateCard key={cert.id} onClick={() => navigate(`/Project/${cert.id}`)}>
            <CertificateImage src={cert.img} alt={cert.title} />
            <CertificateTitle>{cert.title}</CertificateTitle>
          </CertificateCard>
        ))}
      </CertificatesGrid>
      <SeeCertificatesButton onClick={() => navigate("/Projects")}>
        See All Projects &rarr;
      </SeeCertificatesButton>
    </CertificatesPreviewSection>
  );
};

export default ProjectsPreview;
