import styled from "styled-components";

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  padding: var(--spacing-xxl);
  position: relative;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23F38CA9' fill-opacity='0.1' d='M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,240C672,256,768,256,864,240C960,224,1056,192,1152,160C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  padding-left: var(--spacing-xxxl);

`;

export const TimelineItem = styled.div`
  position: relative;
  padding-left: var(--spacing-xl);
  border-left: 3px solid var(--pink-5);
  h4 {
    color: var(--pink-5);
    margin-bottom: var(--spacing-xs);
  }
`;
