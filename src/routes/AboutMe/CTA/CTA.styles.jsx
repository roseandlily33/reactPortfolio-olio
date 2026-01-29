import styled from "styled-components";
export const CTASection = styled.section`
  background: linear-gradient(
    120deg,
    var(--orangeBackground) 60%,
    var(--pinkBackground) 100%
  );
  /* box-shadow: 0 6px 32px 0 rgba(241, 116, 150, 0.10); */
  padding: var(--spacing-xxxl) var(--spacing-xl) var(--spacing-xl)
    var(--spacing-xl);
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
    padding: var(--spacing-xl) var(--spacing-s) var(--spacing-l)
      var(--spacing-s);
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

export const CTATrusted = styled.div`
  margin-top: var(--spacing-l);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-xs);

  span {
    color: var(--grey-8);
    font-size: 1.05rem;
    font-family: var(--headerFont);
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
    margin-right: 0;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-s);
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    li {
      font-family: var(--headerFont);
      color: var(--lightOrangeBackground);
      font-weight: 700;
      background: var(--orange-4);
      border-radius: var(--borderRadius);
      padding: 0.4em 1.1em;
      margin-bottom: var(--spacing-xs);
      box-shadow: 0 1px 6px rgba(241, 116, 150, 0.07);
      font-size: 1.01rem;
      a {
        color: var(--white);
        text-decoration: none;
        letter-spacing: 0.02rem;
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
      margin-bottom: var(--spacing-xs);
    }
    ul {
      gap: var(--spacing-xs);
      li {
        font-size: 0.97rem;
        width: 100%;
        margin-bottom: var(--spacing-xs);
        text-align: left;
      }
    }
  }
`;
