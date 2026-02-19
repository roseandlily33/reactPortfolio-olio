import styled from "styled-components";

export const SectionHeader = styled.h4`
  /* color: var(--orange-7); */
  color: var(--grey-8);
  font-family: var(--headerFont);
  font-weight: 700;
  margin-bottom: var(--spacing-s);
  display: flex;
  align-items: center;
  gap:var(--spacing-s); 
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  text-overflow: ellipsis;
  padding: var(--spacing-xxxs) ;
  box-sizing: border-box;
  svg {
    color: var(--grey-8);
    font-size: 1.2em;
    vertical-align: middle;
    flex-shrink: 0;
  }
  @media (max-width: 600px) {
    white-space: normal;
    overflow-x: visible;
    text-overflow: unset;
    margin-bottom: var(--spacing-m);
  }
`;

export const SubHeader = styled.h5`
  color: var(--grey-7);
  font-weight: 600;
  margin-bottom: var(--spacing-s);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs); 
  svg {
    color: var(--orange-6);
    font-size: 1.1em;
  }
`;

export const SectionText = styled.p`
  /* color: var(--darkGrey); */
  font-size: 1.05rem;
  font-weight: 400;
  margin-bottom: var(--spacing-s);
  line-height: 1.6;
  @media (max-width: 600px) {
    font-size: 0.98rem;
  }
`;

export const SectionList = styled.ul`
	list-style: none;
	padding-left: 0;
	margin: var(--spacing-s) 0 var(--spacing-xl) 0;
	li {
		position: relative;
		font-size: var(--spacing-m);
		/* color: var(--darkGrey); */
		font-weight: 400;
		padding-left: var(--spacing-l); 
		margin-bottom: var(--spacing-xxs);
	}
	li::before {
		content: "\2022";
		color: var(--pink-5);
		position: absolute;
		left: var(--spacing-xxs); 
		font-size: var(--spacing-m);
		top: var(--spacing-xxxs); 
	}
`;
