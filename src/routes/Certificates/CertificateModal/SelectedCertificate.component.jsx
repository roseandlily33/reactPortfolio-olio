import React from "react";
import Modal from "react-modal";
import { ModalContent, ModalImage } from "./SelectedCert.styles";
import PrimaryButton from "../../../components/Buttons/PrimaryButton/PrimaryButton.component";

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
          <ModalContent>
            <ModalImage src={selectedCert?.photo} alt={selectedCert?.title} />
            <h5>{selectedCert?.title}</h5>
            {/* <div> */}
            <span className="provider">{selectedCert?.provider}</span>
            <span className="date"
              style={{
            
              }}
            >
              {selectedCert?.date}
            </span>
            {/* </div> */}
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default SelectedCertificate;
