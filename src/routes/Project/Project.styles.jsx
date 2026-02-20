import styled from "styled-components";

export const ProjectDetailContainer = styled.div`
  max-width: 1100px;
  margin: var(--spacing-xl) auto;
  background: #fff;
  /* border-radius: 28px; */
  border-radius: var(--borderRadius);
  box-shadow: 0 4px 32px rgba(241, 116, 150, 0.1);
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  overflow-x: scroll;
  @media screen and (max-width: 600px) {
    margin: 0;
    width: 100%;
    height: 100%;
    padding: var(--spacing-xl) var(--spacing-l);
    gap: var(--spacing-l);
    border-radius: 0;
  }
`;

export const ProjectDetailHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xxl);
  position: relative;
  .featured-badge {
    display: inline-block;
    background: var(--orangeBackground);
    color: var(--orange-5);
    font-size: 1.08rem;
    font-weight: 700;
    font-family: var(--headerFont);
    border-radius: var(--borderRadius);
    padding: var(--spacing-xxxs) var(--spacing-m);
    box-shadow: 0 2px 8px rgba(255, 140, 64, 0.08);
    letter-spacing: 0.01em;
    min-width: 110px;
    text-align: center;
    line-height: 1.2;
    align-items: center;
    gap: var(--spacing-xs);
    position: relative;
    top: 0;
    margin-right: var(--spacing-s);
  }
  .project-detail-links {
    display: flex;
    gap: var(--spacing-xl);
    a {
      color: var(--orange-7);
      font-weight: 600;
      text-decoration: underline;
      font-size: 1.08rem;
      transition: color 0.2s;
      &:hover {
        color: var(--yellow);
      }
    }
  }
  @media screen and (max-width: 600px) {
    h1 {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--spacing-m);
    }
    .featured-badge {
      margin-left: 0;
    }
  }
`;

export const ProjectDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  gap: var(--spacing-xl);
  @media (max-width: 900px) {
    flex-direction: column;
    gap: var(--spacing-l);
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: var(--spacing-m);
  }
`;

export const ProjectDetailMain = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-xxl);
  @media (max-width: 900px) {
    flex-direction: column;
    gap: var(--spacing-l);
  }
`;

export const ProjectDetailImageWrapper = styled.div`
  min-width: 320px;
  max-width: 420px;
  width: 100%;
  height: 260px;
  overflow: hidden;
  background: var(--grey-1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px rgba(241, 116, 150, 0.1);
  @media (max-width: 900px) {
    min-width: 0;
    max-width: 100%;
    height: 200px;
  }
`;

export const ProjectDetailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--borderRadius);
`;

export const ProjectDetailInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
  @media (max-width: 900px) {
    gap: var(--spacing-s);
  }
`;

export const ProjectDetailStatusType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--spacing-m);
  margin-bottom: var(--spacing-xxs);
`;

export const ProjectDetailStatus = styled.span`
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  flex-wrap: wrap;
  .status-badge {
    display: inline-block;
    padding: var(--spacing-xxxs) var(--spacing-m);
    border-radius: 999px;
    font-size: 1.08rem;
    font-weight: 700;
    font-family: var(--headerFont);
    letter-spacing: 0.01em;
    min-width: 110px;
    text-align: center;
    line-height: 1.2;
    margin-right: var(--spacing-s);
    box-shadow: 0 2px 8px rgba(241, 116, 150, 0.07);
    background: var(--lightPinkBackground);
    align-items: center;
    &.complete {
      color: var(--green);
      background: #eafbe7;
    }
    &.in-progress {
      color: var(--yellow);
      background: var(--lightYellowBackground);
    }
    /* Unified badge style */
  }
  @media (max-width: 600px) {
    /* border: 2px solid red; */
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    gap: var(--spacing-xs);
    .status-badge {
      margin-right: 0;
      margin-bottom: var(--spacing-xs);
      width: auto;
      max-width: 90vw;
      display: block;
    }
  }
`;

export const ProjectDetailType = styled.span`
  display: inline-block;
  font-size: 1.08rem;
  color: var(--pink-4);
  font-weight: 700;
  font-family: var(--headerFont);
  background: rgba(241, 116, 150, 0.08);
  border-radius: 999px;
  padding: var(--spacing-xxxs) var(--spacing-m);
  letter-spacing: 0.01em;
  min-width: 110px;
  text-align: center;
  line-height: 1.2;
  margin-right: var(--spacing-s);
  box-shadow: 0 2px 8px rgba(241, 116, 150, 0.07);
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: var(--spacing-xs);
    width: auto;
    max-width: 90vw;
    display: block;
    align-self: center;
  }
  /* Unified badge style */
`;

export const ProjectDetailImportant = styled.span`
  display: inline-block;
  font-size: 1.08rem;
  color: var(--pink-5);
  font-weight: 700;
  font-family: var(--headerFont);
  background: rgba(241, 116, 150, 0.1);
  border-radius: 999px;
  padding: var(--spacing-xxxs) var(--spacing-m);
  margin-bottom: var(--spacing-xs);
  letter-spacing: 0.01em;
  min-width: 110px;
  text-align: center;
  line-height: 1.2;
`;

export const ProjectDetailDescription = styled.p`
  margin-bottom: var(--spacing-xs);
  line-height: 1.6;
`;

export const ProjectDetailRole = styled.p`
  font-size: 1.01rem;
`;

export const ProjectDetailSection = styled.div`
  /* margin: 1.2rem 0 0.5rem 0; */
  background: var(--grey-1);
  padding: var(--spacing-xl) var(--spacing-xxl);
  /* border-radius: 18px; */
  border-radius: var(--borderRadius);
  box-shadow: 0 2px 12px rgba(241, 116, 150, 0.07);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
  /* border: 1px solid red; */
`;

export const ProjectDetailSectionTitle = styled.h4`
  /* margin-bottom: var(--spacing-xxs); */
  font-weight: 600;
  /* color: var(--pink-4); */
`;

export const ProjectDetailList = styled.ul`
  margin-top: 0;
  margin-bottom: var(--spacing-m);
  padding-left: 0;
  list-style: none;
  li {
    position: relative;
    font-size: 1rem;
    margin-bottom: var(--spacing-s);
    font-weight: 350;
    padding-left: var(--spacing-l);
  }
  li::before {
    content: "";
    position: absolute;
    left: var(--spacing-xxxs);
    top: var(--spacing-s);
    width: var(--spacing-s);
    height: var(--spacing-s);
    border-radius: 50%;
    background: var(--orange-5);
    display: inline-block;
  }
`;
export const ProjectTestimonial = styled.div`
  line-height: 1.6;
`;
