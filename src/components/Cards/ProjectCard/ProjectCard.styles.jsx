import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  /* background: #fdf4f0; */
  background: var(--lightCream);
  /* background: rgba(255, 255, 255, 0.85); */
  backdrop-filter: blur(4px);
  border-radius: var(--borderRadius);
  box-shadow: 0 6px 32px 0 rgba(61, 43, 46, 0.1), 0 1.5px 8px 0 rgba(97, 53, 67, 0.06);
  padding: var(--spacing-m) var(--spacing-s);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  transition: box-shadow 0.18s;
  min-width: 350px;
  max-width: 350px;
  min-height: 300px;
  max-height: 320px;
  gap: var(--spacing-s);
  position: relative;
  overflow: hidden;
  /* border: 2px solid blue; */

  /* Shine sweep effect */
  &::after {
    content: "";
    position: absolute;
    top: -60%;
    left: -60%;
    width: 120%;
    height: 120%;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 60%,
      rgba(255, 255, 255, 0.45) 70%,
      rgba(255, 255, 255, 0) 80%
    );
    transform: translateX(-100%) rotate(25deg);
    pointer-events: none;
    z-index: 3;
    transition: transform 0.7s cubic-bezier(0.4, 2, 0.6, 1);
  }

  &:hover {
    box-shadow: 0 4px 24px rgba(243, 140, 169, 0.13);
    transform: translateY(-2px) scale(1.02);
    border: 2px solid var(--pink-4);
  }
  &:hover::after {
    transform: translateX(80%) rotate(25deg);
    transition: transform 0.7s cubic-bezier(0.4, 2, 0.6, 1);
  }

  .important-badge {
    position: absolute;
    top: 18px;
    right: 18px;
    background: var(--yellow);
    border-radius: 50%;
    width: 34px;
    height: 34px;
    min-width: 34px;
    min-height: 34px;
    max-width: 34px;
    max-height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(241, 116, 150, 0.13);
    z-index: 2;
    border: 2px solid #fff;
    overflow: hidden;
  }
  .important-badge svg {
    width: 22px;
    height: 22px;
    min-width: 22px;
    min-height: 22px;
    max-width: 22px;
    max-height: 22px;
    display: block;
    color: #fff;
    filter: drop-shadow(0 1px 2px rgba(60, 60, 60, 0.08));
    margin: auto;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  object-position: top;
  border-radius: 10px;
  margin-bottom: var(--spacing-s);
`;

export const ProjectTitle = styled.div`
  font-weight: 700;
  font-size: 1.18rem;
  color: var(--grey7);
  margin-bottom: 0.2rem;
  text-align: left;
`;

export const ProjectTagRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.1rem;
  margin-top: 0.2rem;
`;

export const Tag = styled.span`
  font-weight: 600;
  font-family: var(--headerFont);
  color: ${({ status, type }) =>
    status === "complete"
      ? "var(--green)"
      : status === "in-progress"
        ? "var(--yellow)"
        : type
          ? "var(--grey-5)"
          : "var(--grey-7)"};
  letter-spacing: 0.01em;
  text-align: center;
`;
