import styled from "styled-components";

export const BreadcrumbsContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  font-family: var(--headerFont);
  font-size: 1.08rem;
`;

export const CrumbLink = styled.a`
  text-decoration: none;
  color: var(--orange-6) !important;
  font-weight: 700;
  transition: color 0.18s;
  background:   none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  &:hover {
    color: var(--yellow);
  }
`;

export const CrumbText = styled.span`
  font-size: 1.08rem;
  font-weight: 700;
  color: inherit;
`;

export const CurrentCrumb = styled.span`
  font-weight: 800;
  color: var(--orange-7);
  font-size: 1.08rem;
`;
