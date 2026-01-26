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
              padding: "2.5rem 2rem 2rem 2rem",
              width: "100%",
              maxWidth: "900px",
              minWidth: "320px",
              height: "auto",
              maxHeight: "90vh",
              borderRadius: "25px",
              backgroundColor: "var(--lightCream)",
              border: "1.5px solid var(--medBrown)",
              boxShadow:
                "0 8px 40px 0 rgba(60,60,60,0.18), 0 1.5px 6px rgba(241,116,150,0.10)",
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 1002,
            },
            overlay: {
              zIndex: 1001,
              backgroundColor: "rgba(60,60,60,0.32)",
            },
          }}
        >
          <PrimaryButton onClick={closeModal} span="Close" />
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={selectedCert?.photo}
              alt={selectedCert?.title}
              style={{
                width: "100%",
                maxWidth: "700px",
                minWidth: "180px",
                height: "auto",
                borderRadius: "15px",
                boxShadow:
                  "0 4px 24px rgba(241,116,150,0.13), 0 1.5px 6px rgba(60,60,60,0.08)",
                marginBottom: "1.5rem",
                objectFit: "contain",
                background: "#fff",
                padding: "0.5rem 0.5rem 0.5rem 0.5rem",
                zIndex: 5,
              }}
            />
            <h5
              style={{
                fontSize: "1.35rem",
                fontFamily: "var(--headerFont)",
                color: "var(--darkPink)",
                fontWeight: 700,
                margin: "0 0 0.7rem 0",
                textAlign: "center",
                letterSpacing: "0.01em",
                width: "100%",
              }}
            >
              {selectedCert?.title}
            </h5>
            <div>
              <span
                style={{
                  fontSize: "1.08rem",
                  color: "var(--medPink)",
                  fontWeight: 700,
                  fontFamily: "var(--headerFont)",
                  background: "rgba(241, 116, 150, 0.08)",
                  borderRadius: "999px",
                  padding: "0.18em 1.1em",
                  letterSpacing: "0.01em",
                  minWidth: 110,
                  textAlign: "center",
                  lineHeight: 1.2,
                  marginBottom: "0.2em",
                  display: "inline-block",
                }}
              >
                {selectedCert?.provider}
              </span>
              <span
                style={{
                  fontSize: "1.01rem",
                  fontFamily: "var(--headerFont)",
                  fontWeight: 500,
                  marginTop: "0.1em",
                  marginBottom: "0.2em",
                  display: "inline-block",
                }}
              >
                {selectedCert?.date}
              </span>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SelectedCertificate;
