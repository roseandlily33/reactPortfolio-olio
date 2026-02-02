import styled from "styled-components";

export const EntityContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing-xl);
  padding: var(--spacing-xl) var(--spacin-m) var(--spacing-xxl) var(--spacing-m);
  background-color: var(--pinkBackground);
`;

export const ProjectCard = styled.div`
  max-width: 26%;
  min-width: 260px;
  max-height: 300px;
  /* border-radius: 22px; */
  border-radius: var(--borderRadius);
  box-shadow:
    0 4px 24px rgba(241, 116, 150, 0.13),
    0 1.5px 6px rgba(60, 60, 60, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.lightCream};
  position: relative;
  transition:
    box-shadow 0.25s,
    transform 0.18s;
  overflow: hidden;
  margin-bottom: var(--spacing-xl);
  &:hover {
    box-shadow:
      0 8px 32px rgba(241, 116, 150, 0.19),
      0 2px 8px rgba(60, 60, 60, 0.07);
    transform: translateY(-4px) scale(1.025);
  }

  .important-badge {
    position: absolute;
    top: 12px;
    right: 12px;
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

  .project-image-wrapper {
    width: 100%;
    height: 210px;
    overflow: hidden;
    border-top-right-radius: 22px;
    border-top-left-radius: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-bottom: 1px solid #f7e6ed;
    transition:
      border-radius 0.2s,
      height 0.2s;
  }

  #projPic {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    border-top-right-radius: 22px;
    border-top-left-radius: 22px;
    transition: filter 0.5s;
  }
  #projPic:hover {
    filter: grayscale(100%);
  }

  .project-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: var(--spacing-m) var(--spacing-l) var(--spacing-xs)
      var(--spacing-m);
    gap: var(--spacing-xs);
    flex: 1;
  }

  h6 {
    /* font-size: 1.22rem; */
    font-family: var(--headerFont);
    color: var(--pink-4);
    font-weight: 600;
    margin: 0 0 var(--spacing-xs) 0;
    text-align: left;
    letter-spacing: 0.01em;
    width: 100%;
  }

  .project-status-type {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spacing-l);
    margin-bottom: var(--spacing-xxxs);
    width: 100%;
  }

  .project-status {
    font-size: var(--spacing-m);
    font-weight: 500;
    color: var(--grey-5);
    display: flex;
    align-items: center;
    gap: var(--spacing-xxxs);
  }

  .project-type {
    font-size: var(--spacing-m);
    color: var(--pink-4);
    font-weight: 500;
    background: rgba(241, 116, 150, 0.08);
    border-radius: 999px;
    padding: var(--spacing-s);
    letter-spacing: 0.01em;
  }

  .bold {
    font-weight: 550;
    padding-top: var(--spacing-xs);
    padding-left: var(--spacing-xs);
  }
  span {
    font-weight: normal;
  }
  p {
    margin-top: var(--spacing-xs);
    padding-left: var(--spacing-xs);
    margin-bottom: var(--spacing-xs);
  }
  a {
    float: right;
    padding-block: var(--spacing-xs);
  }
  a:hover {
    transform: scale(1.3);
  }

  @media screen and (max-width: 1750px) {
    max-width: 35%;
  }
  @media screen and (max-width: 1200px) {
    min-width: 45%;
    max-width: 48%;
    /* border-radius: 18px; */
    border-radius: var(--borderRadius);
    .project-image-wrapper {
      border-top-right-radius: 18px;
      border-top-left-radius: 18px;
      height: 170px;
    }
    #projPic {
      border-top-right-radius: 18px;
      border-top-left-radius: 18px;
    }
  }
  @media screen and (max-width: 900px) {
    max-width: 98%;
    min-width: 0;
    /* border-radius: 14px; */
    border-radius: var(--borderRadius);
    .project-image-wrapper {
      border-top-right-radius: 14px;
      border-top-left-radius: 14px;
      height: 160px;
    }
    #projPic {
      border-top-right-radius: 14px;
      border-top-left-radius: 14px;
      object-position: top;
    }
    .project-details {
      padding: var(--spacing-m) var(--spacing-s) var(--spacing-xxs)
        var(--spacing-s);
    }
  }
  @media screen and (max-width: 600px) {
    max-width: 100%;
    min-width: 0;
    /* border-radius: 8px; */
    border-radius: var(--borderRadius);
    .project-image-wrapper {
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      height: 120px;
    }
    #projPic {
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      object-position: top;
    }
    .project-details {
      padding: var(--spacing-m) var(--spacing-xs) var(--spacing-xxs)
        var(--spacing-xs);
    }
  }
`;
