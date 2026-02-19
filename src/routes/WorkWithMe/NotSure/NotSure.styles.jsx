
import styled from "styled-components";

export const NotSureSection = styled.section`
  background: #ffffff;
  padding: var(--spacing-xxxxl) var(--spacing-xxxl);
  /* margin: 2.5rem 0; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NotSureTitleRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-m);
  justify-content: center;
  width: 100%;
`;

export const NotSureTitle = styled.h4`
  color: var(--pink-5);
  font-family: var(--headerFont);
  /* font-size: 1.25rem; */
  font-weight: 600;
  margin: 0;
  text-align: center;
  width: 100%;
`;

export const NotSureList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  gap: var(--spacing-xxxxl);
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-m);
  }
`;

export const NotSureItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  min-width: 220px;
  max-width: 260px;
  margin-bottom: 0;
  font-size: 1.08rem;
  line-height: 1.6;
  font-weight: 500;
  text-align: center;
  z-index: 1;
  .blob-bg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 150%;
    height: 230px;
    z-index: 0;
    pointer-events: none;
  }
  .blob-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 2.2em 0 1.2em 0;
  }
  .pkg-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.2em;
    margin-bottom: 0.5em;
    transition: transform 0.25s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    will-change: transform;
  }
  &:hover .pkg-icon {
    animation: bounce 0.5s;
  }
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    30% {
      transform: translateY(-18px);
    }
    50% {
      transform: translateY(0);
    }
    70% {
      transform: translateY(-8px);
    }
    100% {
      transform: translateY(0);
    }
  }
  .pkg-label {
    color: var(--pink-5);
    font-weight: 700;
    font-size: 1.08rem;
    margin-right: var(--spacing-xxxs);
  }
  .pkg-desc {
    color: var(--grey-7);
    font-weight: 400;
    font-size: 1.04rem;
    margin-bottom: 1.2em;
  }
`;

export const NotSureDot = styled.span`
  display: inline-block;
  width: var(--spacing-s);
  height: var(--spacing-s);
  border-radius: 50%;
  margin-right: var(--spacing-s);
  margin-top: var(--spacing-xs);
  background: ${({ color }) => color || "var(--pink-5)"};
  flex-shrink: 0;
`;

export const SectionDivider = styled.hr`
  border: none;
  border-top: 1px solid var(--grey-1);
  margin: 0 0 var(--spacing-xxs) 0;
  width: 100%;
  opacity: 0.25;
`;