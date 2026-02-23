import styled from "styled-components";

export const IDCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-s) var(--spacing-xxl);
  min-width: 100%;
  gap: var(--spacing-s);
  margin-bottom: var(--spacing-xl);
  h4 {
    font-weight: 600;
  }
  /* border: 2px solid red; */
  @media screen and (max-width: 1200px) {
    padding: var(--spacing-xl) var(--spacing-m);
    gap: var(--spacing-x);
  }
`;

// export const IDPhoto = styled.div`
//   width: 170px;
//   height: 220px;
//   background: #fff;
//   border-radius: var(--borderRadius);
//   box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   overflow: hidden;
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: var(--borderRadius);
//   }
// `;

export const IDInfo = styled.div`
  display: flex;
  gap: var(--spacing-m);
  margin-block: var(--spacing-m);
  /* border: 2px solid red; */
`;

export const IDRow = styled.div`
  display: flex;
  align-items: center;
  /* border: 2px solid red; */
  gap: var(--spacing-m);
  svg {
    color: var(--orange-3);
    min-width: 24px;
    min-height: 24px;
  }
`;

export const IDName = styled.h2`
  /* color: var(--darkBerry); */
  color: var(--pink-6);
  /* font-size: 2.2rem; */
  text-transform: capitalize;
  margin: 0 0 var(--spacing-xxs) 0;
  display: flex;
  align-items: center;
  font-weight: 650;
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
