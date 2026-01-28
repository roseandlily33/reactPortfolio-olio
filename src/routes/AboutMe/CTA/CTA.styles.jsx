import styled from "styled-components";
export const CTASection = styled.section`
  background: linear-gradient(120deg, var(--orangeBackground) 60%, var(--pinkBackground) 100%);
  /* box-shadow: 0 6px 32px 0 rgba(241, 116, 150, 0.10); */
  padding: var(--spacing-xxxl ) var(--spacing-xl) var(--spacing-xl) var(--spacing-xl);
  /* margin: 3rem auto 2.5rem auto; */
  display: flex;
  flex-direction: column;
  align-items: center;
  .cta-content {
    display: flex;
    align-items: center;
    gap: var(--spacing-xl);
    width: 100%;
    @media (max-width: 600px) {
      flex-direction: column;
      gap: var(--spacing-m);
    }
  }
  .cta-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-m);
    h3 {
      font-family: var(--headerFont);
      /* font-size: 2.1rem; */
      color: var(--orange-5);
      font-weight: 800;
      margin-bottom: var(--spacing-xxxs);
    }
    .cta-subtext {
      color: var(--grey-8);
      margin-bottom: var(--spacing-xxxs);
    }
  }

  @media (max-width: 768px) {
    padding: var(--spacing-xl) var(--spacing-s) var(--spacing-l) var(--spacing-s);
    .cta-content {
      flex-direction: column;
      gap: var(--spacing-m);
      align-items: flex-start;
    }
    .cta-text {
      gap: var(--spacing-s);
      h3 {
        margin-bottom: var(--spacing-xxs);
      }
      .cta-subtext {
        font-size: 0.97rem;
        margin-bottom: var(--spacing-xxxs);
      }
    }
  }
`;

export const CTABannerIcon = styled.div`
  background: linear-gradient(135deg, var(--pink-5) 60%, var(--orange-4) 100%);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px 0 rgba(241, 116, 150, 0.13);
  svg {
    color: #fff;
    font-size: 2.3rem;
  }

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    svg {
      font-size: 1.3rem;
    }
  }
`;

export const CTAButton = styled.button`
  background: linear-gradient(90deg, var(--orange-4) 0%, var(--pink-5) 100%);
  color: #fff;
  border: none;
  /* border-radius: 999px; */
  border-radius: var(--borderRadius);
  padding: var(--spacing-m) var(--spacing-xxl);
  font-size: 1.35rem;
  font-family: var(--headerFont);
  font-weight: 700;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 18px 0 rgba(241, 116, 150, 0.13);
  cursor: pointer;
  transition:
    background 0.3s,
    transform 0.2s,
    color 0.3s;
  display: flex;
  align-items: center;
  gap: var(--spacing-s);
  .cta-arrow {
    font-size: 1.5em;
    font-weight: 900;
    margin-left: var(--spacing-xs);
    color: var(--yellow);
    transition: color 0.3s;
  }
  &:hover {
    background: linear-gradient(90deg, var(--pink-5) 0%, var(--orange-4) 100%);
    color: var(--yellow);
    transform: scale(1.06);
    .cta-arrow {
      color: var(--pink-4);
    }
  }

  @media (max-width: 768px) {
    padding: var(--spacing-m) var(--spacing-xxl);
    font-size: 1rem;
    .cta-arrow {
      font-size: 1.1em;
      margin-left: var(--spacing-xs);
    }
  }
`;

export const CTATrusted = styled.div`
  margin-top: var(--spacing-l);
  width: 100%;
  span {
    color: var(--grey-8);
    margin-bottom: var(--spacing-s);
    font-size: 1.05rem;
    font-family: var(--headerFont);
    font-weight: 600;
    margin-right: var(--spacing-xs);
  }
  ul {
    display: inline-flex;
    gap: var(--spacing-l);
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      font-family: var(--headerFont);
      /* font-size: 1.1rem; */
      color: var(--orange-4);
      font-weight: 700;
      a {
        color: var(--orange-4);
        text-decoration: none;
        transition: color 0.2s;
      }
      a:hover {
        color: var(--pink-4);
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: var(--spacing-m);
    span {
      font-size: 0.93rem;
      margin-right: var(--spacing-xs)
    }
    ul {
      gap: var(--spacing-xs)
      li {
        font-size: 0.97rem;
      }
    }
  }
`;
