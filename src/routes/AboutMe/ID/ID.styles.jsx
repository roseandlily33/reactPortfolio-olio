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
  @media screen and (max-width: 768px) {
    /* border:  2px solid red; */
    padding: 2rem 1rem;
    flex-direction: column;
  }
`;

export const IDPhoto = styled.div`
  width: 170px;
  height: 220px;
  background: #fff;
  /* border-radius: 18px; */
  border-radius: var(--borderRadius);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* border-radius: 18px; */
    border-radius: var(--borderRadius);
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
  @media screen and (max-width: 768px) {
    justify-content: end;
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

export const IDRightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  border-left: 6px solid var(--medPink);
  padding-left: 2rem;
  min-width: 320px;
  max-width: 420px;
  div {
  }
  h4 {
    color: var(--darkPink);
    font-weight: 700;
    margin-bottom: 0.7rem;
    font-size: 1.3rem;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    color: var(--darkBerry);
    font-weight: 600;
  }
  li {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
  span {
    color: var(--medPink);
    font-size: 1.1rem;
  }
  @media screen and (max-width: 768px) {
    border-left: none;
    padding-left: 0;
    min-width: 100%;
    border-top: 2px solid var(--lightPink);
    padding-top: 2.5rem;
  }
`;
