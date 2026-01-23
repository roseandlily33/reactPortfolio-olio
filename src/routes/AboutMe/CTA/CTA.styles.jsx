import styled from "styled-components";
export const CTASection = styled.section`
  background: linear-gradient(120deg, var(--orangeBackground) 60%, var(--pinkBackground) 100%);
  /* box-shadow: 0 6px 32px 0 rgba(241, 116, 150, 0.10); */
  padding: 4.5rem 2rem 2.2rem 2rem;
  /* margin: 3rem auto 2.5rem auto; */
  display: flex;
  flex-direction: column;
  align-items: center;
  .cta-content {
    display: flex;
    align-items: center;
    gap: 2.2rem;
    width: 100%;
    @media (max-width: 600px) {
      flex-direction: column;
      gap: 1.2rem;
    }
  }
  .cta-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.1rem;
    h2 {
      font-family: var(--headerFont);
      font-size: 2.1rem;
      color: var(--darkBrown);
      font-weight: 800;
      margin-bottom: 0.2rem;
    }
    .cta-subtext {
      color: var(--medGrey);
      font-size: 1.1rem;
      font-family: var(--mainFont);
      margin-bottom: 0.2rem;
    }
  }
`;

export const CTABannerIcon = styled.div`
  background: linear-gradient(135deg, var(--medPink) 60%, var(--medBrown) 100%);
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
`;

export const CTAButton = styled.button`
  background: linear-gradient(90deg, var(--medBrown) 0%, var(--medPink) 100%);
  color: #fff;
  border: none;
  border-radius: 999px;
  padding: 1.1rem 2.8rem;
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
  gap: 0.7rem;
  .cta-arrow {
    font-size: 1.5em;
    font-weight: 900;
    margin-left: 0.5em;
    color: var(--yellow);
    transition: color 0.3s;
  }
  &:hover {
    background: linear-gradient(90deg, var(--medPink) 0%, var(--medBrown) 100%);
    color: var(--yellow);
    transform: scale(1.06);
    .cta-arrow {
      color: var(--darkPink);
    }
  }
`;

export const CTALink = styled.a`
  margin-top: 0.7rem;
  color: var(--medPink);
  font-size: 1.05rem;
  font-family: var(--headerFont);
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: var(--darkPink);
  }
`;

export const CTATrusted = styled.div`
  margin-top: 2.2rem;
  width: 100%;
  span {
    color: var(--medGrey);
    font-size: 1.05rem;
    font-family: var(--headerFont);
    font-weight: 600;
    margin-right: 0.7rem;
  }
  ul {
    display: inline-flex;
    gap: 1.2rem;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      font-family: var(--headerFont);
      font-size: 1.1rem;
      color: var(--medBrown);
      font-weight: 700;
      a {
        color: var(--medBrown);
        text-decoration: none;
        transition: color 0.2s;
      }
      a:hover {
        color: var(--darkPink);
      }
    }
  }
`;
