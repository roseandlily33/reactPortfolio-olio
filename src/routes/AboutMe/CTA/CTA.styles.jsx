import styled from "styled-components";
export const CTASection = styled.section`
  background: linear-gradient(
    120deg,
    var(--orangeBackground) 60%,
    var(--pinkBackground) 100%
  );
  /* box-shadow: 0 6px 32px 0 rgba(241, 116, 150, 0.10); */
  padding: var(--spacing-xxxxl) var(--spacing-xxl);
  /* margin: 3rem auto 2.5rem auto; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .cta-content {
    display: flex;
    align-items: center;
    gap: var(--spacing-xl);
    width: 100%;
    /* border:  */
    @media (max-width: 600px) {
      padding: var(--spacing-xxl) var(--spacing-xl);
      flex-direction: column;
      gap: var(--spacing-m);
    }
  }
  .cta-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-m);
    text-align: center;
    h3 {
      font-family: var(--headerFont);
      /* font-size: 2.1rem; */
      color: var(--pink-5);
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

export const CTATrusted = styled.div`
  margin-top: var(--spacing-l);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);

  span {
    color: var(--grey-8);
    font-size: 1.05rem;
    font-family: var(--headerFont);
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
    margin-right: 0;
    text-align: center;
    width: 100%;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-s);
    list-style: none;
    margin: 0;
    padding: 0;
    justify-content: center;
    width: 100%;
    li {
      font-family: var(--headerFont);
      font-weight: 700;
      padding: 0.4em 1.1em;
      color: var(--pink-6);
      margin-bottom: var(--spacing-xs);
      font-size: 1.01rem;
      a {
        text-decoration: none;
        letter-spacing: 0.02rem;
        transition: color 0.2s;
        color: var(--pink-6);
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
      justify-content: flex-start;
      li {
        font-size: 0.97rem;
        width: 100%;
        margin-bottom: var(--spacing-xs);
        text-align: left;
      }
    }
  }
`;
