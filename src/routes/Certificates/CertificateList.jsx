import React from "react";

const CertificateList = ({ openModal, CertList, selectedTag }) => {
  return (
    <section>
      {CertList?.filter(
        (cert) => selectedTag === "" || cert?.tags?.includes(selectedTag)
      )?.map((cert) => {
        return (
          <div
            id="certContainer"
            key={cert?.id}
            onClick={() => openModal(cert)}
            style={{ position: "relative" }}
          >
            {cert?.important && (
              <div className="important-badge">
                <span role="img" aria-label="star">
                  ★
                </span>
              </div>
            )}
            <img src={cert?.photo} alt={cert?.title} />
            <h5>{cert?.title}</h5>
            <p>{cert?.provider}</p>
            <p style={{ fontStyle: "italic" }}>{cert?.date}</p>
          </div>
        );
      })}
    </section>
  );
};

export default CertificateList;
