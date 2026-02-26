import { CertificateContainer } from "./Certificates.styles";
import { CertList } from "./Certs.info";
import { useState } from "react";
import BackToTopButton from "../../components/BackToTop/BackToTop.button";
import SelectedCertificate from "./SelectedCertificate.component";
import CertificateList from "./CertificateList.component";
import CertificateSelect from "./CertificateSelect.component";

const Certificates = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedTag, setSelectedTag] = useState("");

  const openModal = (cert) => {
    setSelectedCert(cert);
    setModalIsOpen(true);
  };

  const tagChange = (e) => {
    setSelectedTag(e.target.value);
  };
  const filteredTags = [...new Set(CertList.map((cert) => cert.tags).flat())];

  return (
    <>
      <CertificateContainer>
        <div
          style={{
            background: "white",
            textAlign: "center",
            paddingTop: "var(--spacing-xxxl)",
            backgroundColor: "#fff",
            marginBottom: "var(--spacing-xxl)",
            marginInline: "var(--spacing-xl)",
          }}
        >
          <h1
            style={{
              color: "var(--pink-6)",
              marginBottom: "var(--spacing-xl)",
            }}
          >
            Certificates
          </h1>
          <CertificateSelect
            tagChange={tagChange}
            selectedTag={selectedTag}
            filteredTags={filteredTags}
          />
        </div>

        <CertificateList
          openModal={openModal}
          CertList={CertList}
          selectedTag={selectedTag}
        />
      </CertificateContainer>
      <SelectedCertificate
        modalIsOpen={modalIsOpen}
        selectedCert={selectedCert}
        setSelectedCert={setSelectedCert}
        setModalIsOpen={setModalIsOpen}
      />
      <BackToTopButton />
    </>
  );
};

export default Certificates;
