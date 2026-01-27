import styled from "styled-components";

export const ProjectDetailContainer = styled.div`
  max-width: 1100px;
  margin: 2.5rem auto;
  background: #fff;
  /* border-radius: 28px; */
  border-radius: var(--borderRadius);
  box-shadow: 0 4px 32px rgba(241, 116, 150, 0.1);
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  @media screen and (max-width: 600px) {
    margin: 1.5rem;
    padding: 1.8rem 1.2rem;
    gap: 1.8rem;
  }
`;
export const ProjectBreadcrumbs = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1rem;
  margin-bottom: 1.2rem;
  /* padding: 0.5em 0.2em; */
  width: fit-content;
  /* border: 1px solid red; */
  a {
    color: var(--medBrown);
    text-decoration: none;
    font-weight: 600;
    font-family: var(--headerFont);
    font-size: 1rem;
    /* padding: 0.32em 1.1em; */
    margin: 0 0.1em;
    transition:
      background 0.2s,
      color 0.2s;
  }
  span {
    color: var(--medBrown);
    font-weight: 700;
    font-size: 1rem;
    padding: 0.18em 0.7em;
    margin: 0 0.1em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.9rem;
    padding: 0;
    margin-bottom: 0.5rem;
    a,
    span {
      padding: 0.2rem;
    }
  }
`;

export const ProjectDetailHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.2rem;
  position: relative;
  h1 {
    font-size: 2.2rem;
    font-family: var(--headerFont);
    color: var(--darkPink);
    margin-bottom: 0.2rem;
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
  .featured-badge {
    display: inline-block;
    background: var(--orangeBackground);
    color: var(--medBrown);
    font-size: 1.08rem;
    font-weight: 700;
    font-family: var(--headerFont);
    /* border-radius: 999px; */
    border-radius: var(--borderRadius);
    padding: 0.18em 1.1em;
    box-shadow: 0 2px 8px rgba(255, 140, 64, 0.08);
    letter-spacing: 0.01em;
    min-width: 110px;
    text-align: center;
    line-height: 1.2;
    align-items: center;
    gap: 0.5em;
    position: relative;
    top: 0;
    margin-right: 0.7em;
    /* Unified badge style */
  }
  .project-detail-links {
    display: flex;
    gap: 2rem;
    a {
      color: var(--darkBrown);
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
      font-size: 1.8rem;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
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
  /* border: 2px solid red; */
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const ProjectDetailMain = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const ProjectDetailImageWrapper = styled.div`
  min-width: 320px;
  max-width: 420px;
  width: 100%;
  height: 260px;
  overflow: hidden;
  /* border-radius: 18px; */

  background: #f8f8f8;
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
  /* border-radius: 18px; */
  border-radius: var(--borderRadius);
`;

export const ProjectDetailInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const ProjectDetailStatusType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 0.2rem;
`;

export const ProjectDetailStatus = styled.span`
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  .status-badge {
    display: inline-block;
    padding: 0.18em 1.1em;
    border-radius: 999px;
    font-size: 1.08rem;
    font-weight: 700;
    font-family: var(--headerFont);
    letter-spacing: 0.01em;
    min-width: 110px;
    text-align: center;
    line-height: 1.2;
    margin-right: 0.7em;
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
`;

export const ProjectDetailType = styled.span`
  display: inline-block;
  font-size: 1.08rem;
  color: var(--medPink);
  font-weight: 700;
  font-family: var(--headerFont);
  background: rgba(241, 116, 150, 0.08);
  border-radius: 999px;
  padding: 0.18em 1.1em;
  letter-spacing: 0.01em;
  min-width: 110px;
  text-align: center;
  line-height: 1.2;
  margin-right: 0.7em;
  box-shadow: 0 2px 8px rgba(241, 116, 150, 0.07);
  align-items: center;
  /* Unified badge style */
`;

export const ProjectDetailImportant = styled.span`
  display: inline-block;
  font-size: 1.08rem;
  color: var(--darkPink);
  font-weight: 700;
  font-family: var(--headerFont);
  background: rgba(241, 116, 150, 0.1);
  border-radius: 999px;
  padding: 0.18em 1.1em;
  margin-bottom: 0.5rem;
  letter-spacing: 0.01em;
  min-width: 110px;
  text-align: center;
  line-height: 1.2;
`;

export const ProjectDetailDescription = styled.p`
  margin-bottom: 0.5rem;
  line-height: 1.6;
`;

export const ProjectDetailRole = styled.p`
  font-size: 1.01rem;
  /* color: var(--darkPink); */
`;

export const ProjectDetailSection = styled.div`
  /* margin: 1.2rem 0 0.5rem 0; */
  background: var(--lightestGrey);
  padding: 1.5rem 1.8rem;
  /* border-radius: 18px; */
  border-radius: var(--borderRadius);
  box-shadow: 0 2px 12px rgba(241, 116, 150, 0.07);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
`;

export const ProjectDetailSectionTitle = styled.h4`
  margin-bottom: 0.3rem;
  font-weight: 600;
  color: var(--darkPink);
`;

export const ProjectDetailList = styled.ul`
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 0;
  list-style: none;
  li {
    position: relative;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 350;
    padding-left: 1.7em;
  }
  li::before {
    content: "";
    position: absolute;
    left: 0.3em;
    top: 0.6em;
    width: 0.7em;
    height: 0.7em;
    border-radius: 50%;
    background: var(--medBrown);
    display: inline-block;
  }
`;
export const ProjectTestimonial = styled.div`
  /* border-left: 5px solid var(--medPink); */
  /* color: var(--berry); */
  /* font-style: italic; */
  line-height: 1.6;
  /* font-size: 1.08rem; */
  /* margin: 1.2rem 0 0.5rem 0; */
  /* padding: 1.1em 1.3em 1.1em 1.5em; */
  /* border-radius: 18px; */
  /* box-shadow: 0 2px 12px rgba(241, 116, 150, 0.07); */
  /* position: relative; */
`;
