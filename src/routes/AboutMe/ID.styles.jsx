import styled from "styled-components";

export const IDCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: var(--lightPinkBackground);
  /* border-radius: 32px; */
  padding: 3rem 4rem;
  /* margin: 2.5rem auto; */
  gap: 3rem;
  /* max-width: 1050px; */
  width: 100%;
`;

export const IDPhoto = styled.div`
  width: 170px;
  height: 220px;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 18px;
  }
`;

export const IDInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  flex: 1;
`;

export const IDRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-weight: 500;
  svg {
    color: var(--medBrown);
    min-width: 24px;
    min-height: 24px;
  }
`;

export const IDName = styled.h2`
  /* color: var(--darkBerry); */
  color: var(--darkPink);
  font-size: 2.2rem;
  text-transform: capitalize;
  margin: 0 0 0.2rem 0;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  svg {
    color: var(--medBrown);
  }
`;

export const IDOccupation = styled.h4`
  font-family: var(--headerFont);
  font-size: 1.25rem;
  margin: 0 0 0.2rem 0;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  svg {
    color: var(--medBrown);
  }
`;

export const IDSocials = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 0.7rem;
  a {
    color: var(--medPink);
    background: var(--white);
    border-radius: 50%;
    padding: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
      background 0.2s,
      color 0.2s;
    &:hover {
      background: var(--darkPink);
      color: var(--white);
    }
    svg {
      width: 32px;
      height: 32px;
    }
  }
`;

export const IDCatchPhrase = styled.div`
  color: var(--darkBerry);
  font-family: var(--headerFont);
  font-size: 1.1rem;
  font-style: italic;
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  svg {
    color: var(--medBrown);
  }
`;

export const IDKeyAspects = styled.div`
  /* color: var(--); */
  font-family: var(--mainFont);
  font-size: 1rem;
  margin-top: 0.2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  span {
    background: rgba(255, 255, 255, 0.48);
    border-radius: 12px;
    padding: 0.2rem 0.8rem;
    font-size: 0.98rem;
    /* color: var(--darkBerry); */
    font-family: var(--headerFont);
    letter-spacing: 0.03em;
  }
`;

// Responsive
export const IDCardResponsive = styled(IDCardContainer)`
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 1.2rem;
    max-width: 98vw;
  }
  ${IDPhoto} {
    margin-bottom: 0.5rem;
  }
  ${IDInfo} {
    width: 100%;
  }
`;
