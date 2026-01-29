import React from "react";
import Modal from "react-modal";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton.component";

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
              padding: "var(--spacing-xl) ",
              width: "100%",
              maxWidth: "900px",
              minWidth: "320px",
              height: "auto",
              maxHeight: "90vh",
              borderRadius: "var(--borderRadius)",
              backgroundColor: "var(--grey-2)",
              border: "1.5px solid var(--orange-4)",
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
                borderRadius: "var(--borderRadius)",
                boxShadow:
                  "0 4px 24px rgba(241,116,150,0.13), 0 1.5px 6px rgba(60,60,60,0.08)",
                marginBottom: "var(--spacing-l) ",
                objectFit: "contain",
                background: "#fff",
                padding: "var(--spacing-xs) ",
                zIndex: 5,
              }}
            />
            <h5
              style={{
                fontSize: "1.35rem",
                fontFamily: "var(--headerFont)",
                color: "var(--pink-5)",
                fontWeight: 700,
                margin: "0 0 var(--spacing-s)  0",
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
                  color: "var(--pink-4)",
                  fontWeight: 700,
                  fontFamily: "var(--headerFont)",
                  background: "rgba(241, 116, 150, 0.08)",
                  borderRadius: "999px",
                  padding: "var(--spacing-xxxs)  var(--spacing-m) ",
                  letterSpacing: "0.01em",
                  minWidth: 110,
                  textAlign: "center",
                  lineHeight: 1.2,
                  marginBottom: "var(--spacing-xxs) ",
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
                  marginTop: "var(--spacing-xxs) ",
                  marginBottom: "var(--spacing-xxs) ",
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
