import styled from "styled-components";

export const ModalContent = styled.div`
  width: 100%;
  max-width: 900px;
  min-width: 320px;
  background-color: var(--lightCream);
  border-radius: 25px;
  box-shadow: 0 8px 48px rgba(241, 116, 150, 0.13);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const ModalImageWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  min-width: 220px;
  height: 220px;
  overflow: hidden;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  margin-bottom: 1.5rem;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.12);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const ModalTitle = styled.h3`
  color: var(--darkPink);
  margin: 0;
  font-size: 1.35rem;
  font-family: var(--headerFont);
  font-weight: 600;
  letter-spacing: 0.01em;
`;

export const ModalLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  a {
    color: var(--medBrown);
    font-weight: bold;
    font-size: 1rem;
    text-decoration: underline;
    transition: color 0.2s;
    &:hover {
      color: var(--medPink);
    }
  }
`;

export const ModalDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 0 0.5rem 0;
  gap: 0.3rem;
  width: 100%;
`;

export const ModalStatusType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 0.2rem;
  width: 100%;
`;

export const ModalStatus = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: var(--grey);
  display: flex;
  align-items: center;
  gap: 0.3rem;

  .complete {
    color: #5cb85c;
    font-weight: 600;
  }
  .in-progress {
    color: #e6b607;
    font-weight: 600;
  }
`;

export const ModalType = styled.span`
  font-size: 0.98rem;
  color: var(--medPink);
  font-weight: 500;
  background: rgba(241, 116, 150, 0.08);
  border-radius: 999px;
  padding: 0.2em 0.8em;
  letter-spacing: 0.01em;
`;

export const ModalSectionTitle = styled.p`
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--darkPink);
`;

export const ModalList = styled.ul`
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 1.2rem;
  li {
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }
`;
