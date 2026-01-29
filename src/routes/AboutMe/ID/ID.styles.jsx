import styled from "styled-components";

export const IDCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: var(--lightPinkBackground);
  padding: var(--spacing-xxl) var(--spacing-xxxl);
  gap: var(--spacing-xxl);
  min-width: 100%;
  /* border: 2px solid red; */
  @media screen and (max-width: 1200px) {
    padding: var(--spacing-xl) var(--spacing-m);
    flex-direction: column;
    gap: var(--spacing-m);
  }
`;

export const IDPhoto = styled.div`
  width: 170px;
  height: 220px;
  background: #fff;
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
    border-radius: var(--borderRadius);
  }
`;

export const IDInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-s);
  flex: 1;
`;

export const IDRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-m);
  svg {
    color: var(--orange-3);
    min-width: 24px;
    min-height: 24px;
  }
`;

export const IDName = styled.h3`
  /* color: var(--darkBerry); */
  color: var(--pink-6);
  /* font-size: 2.2rem; */
  text-transform: capitalize;
  margin: 0 0 var(--spacing-xxs) 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-m);
  svg {
    color: var(--orange-3);
  }
`;

export const IDOccupation = styled.p`
  /* font-family: var(--headerFont); */
  /* font-size: 1.25rem; */
  margin: 0 0 var(--spacing-xxs) 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-m);
  svg {
    color: var(--orange-3);
  }
`;

export const IDSocials = styled.div`
  display: flex;
  gap: var(--spacing-m);
  margin-top: var(--spacing-s);
  a {
    color: var(--pink-3);
    background: var(--white, #fff);
    border-radius: 50%;
    padding: var(--spacing-xs);
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
      background 0.2s,
      color 0.2s;
    &:hover {
      background: var(--pink-7);
      color: var(--white, #fff);
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
  font-family: var(--mainFont);
  margin-top: var(--spacing-xxxs);
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xxs);
  span {
    background: rgba(255, 255, 255, 0.48);
    border-radius: 12px;
    padding: var(--spacing-xxxs) var(--spacing-s);
    /* color: var(--darkBerry); */
    font-family: var(--headerFont);
    letter-spacing: 0.03em;
  }
`;
export const IDLeftSide = styled.div`
  /* border: 2px solid orange; */
  display: flex;
  gap: 2rem;
  width: 60%;
  align-items: center;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  @media screen and (max-width: 600px){
    /* border: 2px solid red; */
    flex-direction: column;
  }
`;
export const IDRightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
  border-left: 6px solid var(--pink-4);
  padding-left: var(--spacing-xl);
  /* min-width: 320px; */
  /* border: 2px solid green; */
  /* max-width: 420px; */
  width: 40%;
  h5 {
    color: var(--pink-4);
    font-weight: 700;
    margin-bottom: var(--spacing-s);
    /* font-size: 1.3rem; */
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    color: var(--pink-7);
    font-weight: 500;
  }
  li {
    margin-bottom: var(--spacing-xs);
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
  }
  span {
    color: var(--pink-4);
    font-size: 1.1rem;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    border-top: 2px solid var(--pink-4);
    padding-top: var(--spacing-m);
    border-left: none;
    padding-left: 0;
    min-width: 100%;
  }
`;
