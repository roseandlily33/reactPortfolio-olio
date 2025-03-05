import { CertificateContainer } from "./Certificates.styles";
import { CertList } from "./Certs";
import { useState } from "react";
import Modal from "react-modal";

const Certificates = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedCert, setSelectedCert] = useState(null);
    const [selectedTag, setSelectedTag] = useState("");

    const openModal = (cert) => {
        setSelectedCert(cert);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedCert(null);
    };

    const tagChange = (e) => {
        setSelectedTag(e.target.value);
    }
    const filteredTags = [...new Set(CertList.map(cert => cert.tags).flat())];

    return ( 
        <>
        <CertificateContainer>
        <div id="top">
        <h2>Certificates</h2>
        <select onChange={tagChange} value={selectedTag}>
            <option value="">All Tags</option>
            {filteredTags.map((tag, index) => {
                return (
                    <option key={index} value={tag}>{tag}</option>
                )
            }
            )}
        </select>
        </div>
        <section>
        {CertList.filter(cert => selectedTag === '' || cert.tags.includes(selectedTag)).map((cert) => {
            return (
                <div id="certContainer" key={cert.id} onClick={() => openModal(cert)}>
                    <img src={cert.photo} alt={cert.title} />
                    <h5>{cert.title}</h5>
                    <p>{cert.provider}</p>
                    <p style={{fontStyle: 'italic'}}>{cert.date}</p>
                </div>
            )
        }
        )}
        </section>
        </CertificateContainer>
        {selectedCert && (
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Certificate Modal"
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        padding: '2rem',
                        width: '90%',
                        height: '90%',
                        borderRadius: '25px',
                        backgroundColor: 'var(--lightCream)',
                        border: 'none'
                    },
                }}
            >
                <button style={{marginBottom: '1rem'}} onClick={closeModal}>Close</button>
                <br />
                <img src={selectedCert.photo} alt={selectedCert.title} style={{ width: '100%' }} />
            </Modal>
        )}
        </>
     );
}
 
export default Certificates;