import React from "react";
import Modal from "react-modal";
import PrimaryButton from "../../components/Buttons/PrimaryButton.component";

const SelectedCertificate = ({
  modalIsOpen,
  selectedCert,
  setSelectedCert,
  setModalIsOpen,
}) => {
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCert(null);
  };
  return (
    <>
      {selectedCert && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Certificate Modal"
          style={{
            content: {
              top: "55%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              padding: "2rem",
              width: "100%",
              maxWidth: "900px", // Increased for desktop
              minWidth: "320px",
              height: "auto",
              maxHeight: "90vh",
              borderRadius: "25px",
              backgroundColor: "var(--lightCream)",
              border: "none",
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
          }}
        >
          <PrimaryButton onClick={closeModal} span="Close" />
          <br />
          <img
            src={selectedCert?.photo}
            alt={selectedCert?.title}
            style={{
              width: "100%",
              maxWidth: "800px", // Increased for desktop
              minWidth: "220px",
              height: "auto",
              borderRadius: "15px",
              boxShadow: "2px 4px 12px rgba(0,0,0,0.12)",
              marginBottom: "1.5rem",
              objectFit: "contain",
            }}
          />
          <h5>{selectedCert?.title}</h5>
          <p>
            <strong>Provider:</strong> {selectedCert?.provider}{" "}
          </p>
          <p>
            <strong>Date:</strong> {selectedCert?.date}
          </p>
        </Modal>
      )}
    </>
  );
};

export default SelectedCertificate;
