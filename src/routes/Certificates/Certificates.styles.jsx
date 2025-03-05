import styled from "styled-components";

export const CertificateContainer = styled.main`
  margin: 0 auto;
  width: 98%;
  height: 100%;
  section {
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 2rem;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    /* background-color: ${({ theme }) => theme.colors.lightCream}; */
    box-shadow: inset 1px 4px 5px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    height: 100%;
    padding: 1rem;
  }
  #top {
    display: flex;
    justify-content: space-between;
    margin-block: 1rem;
  }
  select {
    /* padding: 0.5rem; */
    border-radius: 15px;
    border: 3px solid ${({ theme }) => theme.colors.medBrown};
    background-color: ${({ theme }) => theme.colors.medCream};
    box-shadow: ${({ theme }) => theme.boxShadow};
    text-transform: uppercase;
    font-weight: 550;
  }
  #certContainer {
    width: 30%;
    margin-block: 1rem;
  }
  #certContainer img {
    min-width: 450px;
    max-height: 450px;
    max-width: 450px;
    min-height: 250px;
    border-radius: 15px;
    height: 350px;
  }
  #certContainer img:hover{
    transform: scale(1.05);
    filter: grayscale(100%);
    transition: all .5s;
    
  }
`;
