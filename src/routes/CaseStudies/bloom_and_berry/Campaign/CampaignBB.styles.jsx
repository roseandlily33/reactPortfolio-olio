import styled from "styled-components";

export const SectionHeader = styled.h3`
  color: var(--darkPink);
  font-family: var(--headerFont);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  gap: 0.7em;
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  text-overflow: ellipsis;
  padding: 0.1em 0.1em 0.1em 0;
  box-sizing: border-box;
  svg {
    color: var(--darkPink);
    font-size: 1.2em;
    vertical-align: middle;
    flex-shrink: 0;
  }
  @media (max-width: 600px) {
    font-size: 1.18rem;
    white-space: normal;
    overflow-x: visible;
    text-overflow: unset;
  }
`;

export const SubHeader = styled.h4`
  color: var(--medBrown);
  font-size: 1.13rem;
  font-weight: 600;
  margin: 0.7em 0 0.2em 0;
  display: flex;
  align-items: center;
  gap: 0.5em;
  svg {
    color: var(--medBrown);
    font-size: 1.1em;
  }
`;

export const SectionText = styled.p`
  color: var(--darkGrey);
  font-size: 1.05rem;
  font-weight: 400;
  margin-bottom: 0.5em;
  line-height: 1.6;
  @media (max-width: 600px) {
    font-size: 0.98rem;
  }
`;

export const SectionList = styled.ul`
	list-style: none;
	padding-left: 0;
	margin: 0.2em 0 0.7em 0;
	li {
		position: relative;
		font-size: 1.01rem;
		color: var(--darkGrey);
		font-weight: 400;
		padding-left: 1.6em;
		margin-bottom: 0.3em;
	}
	li::before {
		content: "\2022";
		color: var(--darkPink);
		position: absolute;
		left: 0.2em;
		font-size: 1.2em;
		top: 0.1em;
	}
`;
