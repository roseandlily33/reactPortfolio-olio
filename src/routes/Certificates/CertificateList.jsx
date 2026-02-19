import React from "react";
import { CardsBackground } from "../../components/Cards/CardsBackground.styles";
import CertificateCard from "../../components/Cards/CertificateCard/CertificateCard.component";

const CertificateList = ({ openModal, CertList, selectedTag }) => {
  return (
    <CardsBackground>
      {CertList?.filter(
        (cert) => selectedTag === "" || cert?.tags?.includes(selectedTag),
      )?.map((cert) => {
        return (
          <CertificateCard key={cert.id} cert={cert} openModal={openModal} />
        );
      })}
    </CardsBackground>
  );
};

export default CertificateList;
