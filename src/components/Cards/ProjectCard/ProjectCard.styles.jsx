import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  background: linear-gradient(180deg, var(--grey-4) 0%, var(--pink-1) 100%);

  border: 1px solid var(--grey-3);
  border-radius: 18px;
  backdrop-filter: blur(4px);
  border-radius: var(--borderRadius);
  box-shadow:
    0 6px 32px 0 rgba(61, 43, 46, 0.1),
    0 1.5px 8px 0 rgba(97, 53, 67, 0.06);
  padding: var(--spacing-m) var(--spacing-s);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  transition:
    box-shadow 0.18s,
    transform 0.18s,
    border 0.18s;
  min-width: 350px;
  max-width: 350px;
  min-height: 300px;
  max-height: 320px;
  /* border: 2px solid red; */
  gap: var(--spacing-s);
  position: relative;
  overflow: hidden;
  animation: fadeInCard 0.5s cubic-bezier(0.4, 0.2, 0.6, 1);

  @keyframes fadeInCard {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

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
    box-shadow:
      0 8px 32px rgba(243, 140, 169, 0.18),
      0 2px 8px rgba(61, 43, 46, 0.1);
    transform: translateY(-4px) scale(1.035);
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

  /* Card footer for actions */
  .card-footer {
    margin-top: auto;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: var(--spacing-xs);
    padding-top: var(--spacing-xs);
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: var(--spacing-xs) 0;
  padding: 0.22rem 0.55rem;

  border-radius: 7px;

  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1;

  border: 1px solid transparent;

  ${({ status, type }) =>
    status === "complete"
      ? `
        color: var(--green);
        background: rgba(75, 191, 107, 0.08);
        border-color: rgba(75, 191, 107, 0.16);
      `
      : status === "in-progress"
        ? `
          color: var(--orange-6);
          background: rgba(255, 180, 0, 0.08);
          border-color: rgba(255, 180, 0, 0.16);
        `
        : type
          ? `
            color: var(--pink-6);
            background: rgba(230, 94, 122, 0.07);
            border-color: rgba(230, 94, 122, 0.12);
          `
          : `
            color: var(--grey-7);
            background: var(--grey-1);
            border-color: var(--grey-3);
          `}
`;
